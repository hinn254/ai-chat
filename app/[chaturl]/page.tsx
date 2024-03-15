import { notFound } from "next/navigation";
import { db } from "../utils/db";
import { Wrapper } from "./components/wrapper";

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
      <Wrapper chaturl={chaturl} data={data} />
    </div>
  );
}
