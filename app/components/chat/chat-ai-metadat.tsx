import { Globe } from "lucide-react";
import ChatReaction from "./chat-reaction";

export default function AIChatMetadata() {
  return (
    <div className="pl-5">
      <p className="mt-1 text-xs font-bold text-gray-500">Sources:</p>
      <div className="flex w-fit items-center gap-2 rounded-md border p-1 pr-6">
        <Globe className="h-6 w-6 text-blue-400" aria-hidden="true" />
        <span className="text-xs text-gray-500">
          [1] Introduction - Wikipedia Docs
        </span>
      </div>
      <ChatReaction />
    </div>
  );
}
