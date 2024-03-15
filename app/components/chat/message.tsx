import { Prisma } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";

export default function Message({
  message,
}: {
  message: Prisma.ChatMessagesGetPayload<{}>;
}) {
  const isAI = message.userName === "AI";

  return (
    <div className={clsx("py-5", isAI && "bg-[#434654] text-white")}>
      <div className="mx-auto flex  max-w-2xl space-x-5">
        <Image
          src={
            isAI
              ? "https://ui-avatars.com/api/?name=AI"
              : "https://ui-avatars.com/api/?name=" + message.userName
          }
          width={32}
          height={32}
          alt={message.userName}
          className="h-8 w-8"
        />

        <p className="pt-1 text-sm">{message.response}</p>
      </div>
    </div>
  );
}
