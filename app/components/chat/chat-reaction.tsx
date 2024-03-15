"use client";
import { Copy, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

export default function ChatReaction() {
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);
  return (
    <div className="mt-2 flex gap-2">
      <button onClick={() => setThumbsUpClicked(!thumbsUpClicked)}>
        {thumbsUpClicked ? (
          <ThumbsUp className="h-4 w-4 text-green-400" />
        ) : (
          <ThumbsUp className="h-4 w-4 text-gray-400" />
        )}
      </button>
      <button onClick={() => setCopyClicked(!copyClicked)}>
        {copyClicked ? (
          <Copy className="h-4 w-4 text-blue-400" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400" />
        )}
      </button>
      <button onClick={() => setThumbsDownClicked(!thumbsDownClicked)}>
        {thumbsDownClicked ? (
          <ThumbsDown className="h-4 w-4 text-red-400" />
        ) : (
          <ThumbsDown className="h-4 w-4 text-gray-400" />
        )}
      </button>
    </div>
  );
}
