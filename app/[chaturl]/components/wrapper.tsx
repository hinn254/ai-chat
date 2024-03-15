"use client";
import Chat from "@/app/components/chat/chat";
import SearchInput from "@/app/components/chat/chat-input";
import { ChartOptionsSkeleton } from "@/app/components/skeleton";
import { ChatContext } from "@/app/context/chatContext";
import { Prisma } from "@prisma/client";
import { Suspense, useContext, useEffect } from "react";

export function Wrapper({
  chaturl,
  data,
}: {
  chaturl: string;
  data: Prisma.ChatGetPayload<{
    include: {
      chatMessages: true;
    };
  }>;
}) {
  const { setSpecificChat } = useContext(ChatContext);

  useEffect(() => {
    setSpecificChat(data ?? null);
  }, [data, setSpecificChat]);

  return (
    <>
      <Suspense fallback={<ChartOptionsSkeleton />}>
        <Chat />
      </Suspense>
      <SearchInput chatId={chaturl} />
    </>
  );
}
