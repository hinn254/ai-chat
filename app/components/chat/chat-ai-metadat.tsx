import { Globe } from "lucide-react";
import ChatReaction from "./chat-reaction";

export default function AIChatMetadata() {
  return (
    <div className="pl-5">
      <p className="mt-1 text-xs font-bold text-gray-500">Sources:</p>
      <div className="flex w-fit items-center gap-2 rounded-md border p-1 pr-6">
        <Globe className="h-6 w-6 text-blue-400" aria-hidden="true" />
        <span className="text-xs text-gray-500">
          [1] {randomSites[Math.floor(Math.random() * randomSites.length)].name}
        </span>
      </div>
      <ChatReaction />
    </div>
  );
}
// mimic different sources
let randomSites = [
  { id: 1, name: "Introduction - Wikipedia Docs" },
  { id: 2, name: "MSN - Main Stream Media" },
  { id: 3, name: "CNN - Cable News Network" },
  { id: 4, name: "BBC - British Broadcasting Corporation" },
  { id: 5, name: "Fox News" },
  { id: 6, name: "Al Jazeera" },
  { id: 7, name: "The Guardian" },
];
