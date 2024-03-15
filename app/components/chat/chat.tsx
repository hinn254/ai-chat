"use client";
import { ChatContext } from "@/app/context/chatContext";
import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import EmptyPlaceholder from "../placeholder";
import Message from "./message";

export default function Chat() {
  const { specificChat, isSending } = useContext(ChatContext);
  return (
    <div className="flex-[0.84] overflow-y-auto overflow-x-hidden pb-20 md:flex-[0.98]">
      {!specificChat?.chatMessages?.length && <EmptyPlaceholder />}

      {specificChat?.chatMessages?.map((message) => (
        <div key={message.id} className="last:mb-10">
          <Message key={message.id} message={message} />
        </div>
      ))}
      {isSending && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#497FE1"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: "flex",
            alignItems: "center",
            marginLeft: "40px",
            paddingBottom: "50px",
          }}
          wrapperClass=""
        />
      )}
    </div>
  );
}
