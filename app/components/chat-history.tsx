import { ClipboardIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ChatContext } from "../context/chatContext";
import { deleteChatWithId } from "../utils/actions";
import { truncateWords } from "../utils/utils";
import DeleteChatDialogue from "./delete-chat-dialogue";
import { ChatSkeleton } from "./skeleton";

export default function ChatHistory() {
  const { allChats, loading } = useContext(ChatContext);

  return (
    <li>
      <ul role="list" className="-mx-2 space-y-1">
        {loading ? <RenderChatSkeleton /> : null}

        {!loading && allChats.length > 0
          ? allChats.map((history) => (
              <History key={history.id} history={history} />
            ))
          : !loading && <NoChatHistory />}
      </ul>
    </li>
  );
}

export function History({ history }: { history: HistoryType }) {
  const { dateHistory, date } = history;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [chatDetails, setChatDetails] = useState<SingleHistoryData>();

  const { fetchAllChats } = useContext(ChatContext);

  const deleteChat = async (chatId: string) => {
    await deleteChatWithId(chatId);
    fetchAllChats();
  };

  return (
    <li>
      <div className="text-xs font-semibold leading-6 text-gray-400">
        {date}
      </div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {dateHistory.map((singlehistory) => (
          <li
            key={singlehistory.name}
            className={clsx(
              pathname == `/${singlehistory.href}`
                ? "flex bg-gray-50 text-[#497FE1]"
                : "text-gray-700 hover:bg-gray-50 hover:text-[#497FE1]",
              "group flex gap-x-1 rounded-md p-2 text-sm font-semibold leading-6",
            )}
          >
            <Link href={`/${singlehistory.href}`} className="flex flex-1">
              <div className="flex flex-1 gap-x-3 ">
                <MessageCircle
                  className={clsx(
                    pathname == `/${singlehistory.href}`
                      ? " text-[#497FE1]"
                      : " text-gray-400  group-hover:text-[#497FE1]",
                    "flex h-6 w-6 shrink-0 items-center",
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">
                  {truncateWords(singlehistory.name, 20)}
                </span>
              </div>
            </Link>
            <div className="flex gap-x-2">
              <CopyToClipboard text={singlehistory.href}>
                <button>
                  <ClipboardIcon
                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-700"
                    aria-hidden="true"
                  />
                </button>
              </CopyToClipboard>

              <button
                onClick={() => {
                  setChatDetails(singlehistory);
                  setOpen(true);
                }}
              >
                <TrashIcon
                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-700"
                  aria-hidden="true"
                />
              </button>
            </div>
            <DeleteChatDialogue
              open={open}
              setOpen={setOpen}
              title={chatDetails?.name ?? ""}
              onConfirm={() => deleteChat(chatDetails?.href ?? "")}
            />
          </li>
        ))}
      </ul>
    </li>
  );
}

function NoChatHistory() {
  return (
    <>
      <p className="text-xs font-semibold leading-6 text-gray-400">
        No Chat History
      </p>
    </>
  );
}

function RenderChatSkeleton() {
  return (
    <>
      <p className="text-xs font-semibold leading-6 text-gray-400">
        Loading Chat History
      </p>
      {[1, 2, 3].map((_, i) => (
        <ChatSkeleton key={i} />
      ))}
    </>
  );
}
