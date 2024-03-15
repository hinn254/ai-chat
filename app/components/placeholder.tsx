import { CircleArrowDown } from "lucide-react";
export default function EmptyPlaceholder() {
  return (
    <div className="mt-12 flex w-full flex-col items-center  justify-start">
      <p className="text-center text-gray-500">
        Type a message to start a conversation
      </p>
      <svg
        className="mt-5 h-8 w-8 animate-bounce text-gray-500"
        viewBox="0 0 24 24"
      >
        <CircleArrowDown className="h-8 w-8 text-gray-500" />
      </svg>
    </div>
  );
}
