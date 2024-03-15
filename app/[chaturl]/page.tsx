import { notFound } from "next/navigation";
import { Suspense } from "react";
import Chat from "../components/chat/chat";
import SearchInput from "../components/chat/chat-input";
import { ChartOptionsSkeleton } from "../components/skeleton";
import { db } from "../utils/db";

export default async function Page({
  params,
}: {
  params: {
    chaturl: string;
  };
}) {
  const { chaturl } = params;

  const data = await db.chat.findUnique({
    where: {
      id: chaturl,
    },
    include: {
      chatMessages: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Suspense fallback={<ChartOptionsSkeleton />}>
        <Chat chatdata={data?.chatMessages} />
      </Suspense>
      <SearchInput chatId={chaturl} />
    </div>
  );
}
