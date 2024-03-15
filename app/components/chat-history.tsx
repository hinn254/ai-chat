import { ClipboardIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { deleteChatWithId } from "../utils/actions";
import { truncateWords } from "../utils/utils";
import DeleteChatDialogue from "./delete-chat-dialogue";
import { ChatSkeleton } from "./skeleton";

export default function ChatHistory() {
  const [data, setData] = useState<HistoryType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/chat");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <li>
      <ul role="list" className="-mx-2 space-y-1">
        {data.length > 0 ? (
          data.map((history) => <History key={history.id} history={history} />)
        ) : (
          <NoChatHistory />
        )}
      </ul>
    </li>
  );
}

export function History({ history }: { history: HistoryType }) {
  const { dateHistory, date } = history;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [chatDetails, setChatDetails] = useState<SingleHistoryData>();

  const deleteChat = async (chatId: string) => {
    await deleteChatWithId(chatId);
    window.location.href = "/";
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
                ? "flex bg-gray-50 text-indigo-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
              "group flex gap-x-1 rounded-md p-2 text-sm font-semibold leading-6",
            )}
          >
            <Link href={`/${singlehistory.href}`} className="flex flex-1">
              <div className="flex flex-1 gap-x-3 ">
                <span
                  className={clsx(
                    pathname == `/${singlehistory.href}`
                      ? "border-indigo-600 text-indigo-600"
                      : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border bg-white text-[0.625rem] font-medium",
                  )}
                >
                  {singlehistory.initial}
                </span>
                <span className="truncate">
                  {truncateWords(singlehistory.name, 20)}
                </span>
              </div>
            </Link>
            <div className="flex gap-x-2">
              <CopyToClipboard text={singlehistory.href}>
                {/* //todo: add site basePath */}
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
                {}
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
      {[1, 2, 3].map((_, i) => (
        <ChatSkeleton key={i} />
      ))}
    </>
  );
}
