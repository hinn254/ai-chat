"use client";
import { ChatContext } from "@/app/context/chatContext";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import { Loader2 } from "lucide-react";
import { FormEvent, useContext, useState } from "react";
import { sendChat } from "../../utils/actions";

export default function SearchInput({ chatId }: { chatId?: string }) {
  const [userPrompt, setUserPrompt] = useState("");

  const {
    fetchAllChats,
    setSpecificChat,
    specificChat,
    isSending,
    setIsSending,
  } = useContext(ChatContext);

  const sendPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userPrompt) return;

    const parsedData = userPrompt.trim();
    setUserPrompt("");

    try {
      if (chatId && specificChat) {
        let r: ChatResponse = {
          id: Math.floor(Math.random() * 1000) + 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          chatId: "626cf9ae-5ea4-4f85-aee2-6b88a41af000",
          response: parsedData,
          userName: "Benny Otieno",
        };

        setSpecificChat({
          ...specificChat,
          chatMessages: [...specificChat.chatMessages!, r],
        });

        setIsSending(true);

        await sendChat(
          {
            title: parsedData,
            userName: "Benny Otieno",
          },
          chatId,
        );
      } else {
        setSpecificChat({
          id: "626cf9ae-5ea4-4f85-aee2-6b88a41af000",
          title: parsedData,
          createdAt: new Date(),
          updatedAt: new Date(),
          chatMessages: [
            {
              id: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
              chatId: "626cf9ae-5ea4-4f85-aee2-6b88a41af000",
              response: parsedData,
              userName: "Benny Otieno",
            },
          ],
        });

        setIsSending(true);
        await sendChat({
          title: parsedData,
          userName: "Benny Otieno",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (!chatId) {
        fetchAllChats();
      }
      setIsSending(false);
    }
  };

  return (
    <div className="w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2   focus:ring-inset  focus:ring-gray-600">
      <form onSubmit={sendPrompt} className="flex p-1">
        <input
          type="text"
          name="search"
          id="search"
          className="flex-1 resize-y p-3 text-gray-700 placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed  disabled:text-gray-300 sm:text-sm sm:leading-6"
          placeholder="Ask me anything..."
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <button
          type="submit"
          disabled={!userPrompt}
          className="rounded  bg-[#e5e5e5] px-4 py-2 font-bold text-white hover:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isSending ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin text-[#497FE1]" />
            </>
          ) : (
            <ArrowUpCircleIcon
              className="h-6 w-6 text-gray-400"
              aria-hidden="true"
            />
          )}
        </button>
      </form>
    </div>
  );
}
