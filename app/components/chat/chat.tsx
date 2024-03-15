import { Prisma } from "@prisma/client";
import EmptyPlaceholder from "../placeholder";
import Message from "./message";

type ChatData = Prisma.ChatMessagesGetPayload<{}>;

export default function Chat({ chatdata }: { chatdata?: ChatData[] }) {
  return (
    <div className="flex-[0.84] overflow-y-auto overflow-x-hidden md:flex-[0.98]">
      {chatdata?.length === 0 && <EmptyPlaceholder />}

      {chatdata?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
