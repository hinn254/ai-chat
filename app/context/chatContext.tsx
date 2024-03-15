"use client";
import { Prisma } from "@prisma/client";
import { ReactNode, createContext, useEffect, useState } from "react";

type SpecifChatType = Prisma.ChatGetPayload<{
  include: {
    chatMessages: true;
  };
}>;

type ChatContextType = {
  allChats: HistoryType[];
  fetchAllChats: () => void;
  loading: boolean;
  specificChat: SpecifChatType | null;
  setSpecificChat: (chat: SpecifChatType) => void;
  isSending: boolean;
  setIsSending: (isSending: boolean) => void;
};

const ChatContext = createContext<ChatContextType>({
  allChats: [],
  fetchAllChats: () => {},
  loading: false,
  specificChat: null,
  setSpecificChat: () => {},
  isSending: false,
  setIsSending: () => {},
});

const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [allChats, setAllChats] = useState<HistoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [specificChat, setSpecificChat] = useState<SpecifChatType | null>(null);
  const [isSending, setIsSending] = useState(false);

  const fetchAllChats = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/chat");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setAllChats(jsonData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllChats();
  }, []);

  let chatData = {
    allChats,
    fetchAllChats,
    loading,
    specificChat,
    setSpecificChat,
    isSending,
    setIsSending,
  };

  return (
    <ChatContext.Provider value={chatData}>{children}</ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
