"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

type ChatContextType = {
  allChats: HistoryType[];
  fetchAllChats: () => void;
  loading: boolean;
};

const ChatContext = createContext<ChatContextType>({
  allChats: [],
  fetchAllChats: () => {},
  loading: false,
});

const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [allChats, setAllChats] = useState<HistoryType[]>([]);
  const [loading, setLoading] = useState(true);

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
  };

  return (
    <ChatContext.Provider value={chatData}>{children}</ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
