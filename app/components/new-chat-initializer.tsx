import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MessageSquarePlus } from "lucide-react";
export default function NewChat() {
  const pathname = usePathname();
  return (
    <Link
      href="/"
      className={clsx(
        pathname == "/"
          ? "bg-gray-50 text-indigo-600"
          : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
        "group -mx-4 mt-2  flex gap-x-1 rounded-md p-2 text-sm font-semibold leading-6",
      )}
    >
      <div className="flex flex-1 gap-x-3">
        <MessageSquarePlus
          className={clsx(
            "h-6 w-6 shrink-0 text-gray-400",
            pathname == "/" && "text-indigo-600 group-hover:text-indigo-600",
          )}
          aria-hidden="true"
        />
        New Chat
      </div>
    </Link>
  );
}
