import { Prisma } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import AIChatMetadata from "./chat-ai-metadat";

export default function Message({
  message,
}: {
  message: Prisma.ChatMessagesGetPayload<{}>;
}) {
  const isAI = message.userName === "AI";

  return (
    <div className={clsx(" mx-auto max-w-5xl flex-1 space-x-5 py-5")}>
      <div className="flex w-full ">
        <Image
          src={
            isAI
              ? "https://ui-avatars.com/api/background=4980E1&?name=AI"
              : "https://ui-avatars.com/api/?name=" + message.userName
          }
          width={32}
          height={32}
          alt={message.userName}
          className="h-8 w-8 rounded-full"
        />
        <div className="flex flex-1 flex-col items-start justify-center pl-2">
          <span className="text-sm font-semibold leading-6 text-[#363D4B]">
            {message.userName}
          </span>
        </div>
      </div>
      <p className="pl-5 text-sm text-[#3C414B]">{message.response}</p>
      {/* {isAI && waitingForAIResponse && <Spinner />} */}
      {isAI && <AIChatMetadata />}
    </div>
  );
}
