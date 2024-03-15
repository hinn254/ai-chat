import { ClipboardIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { truncateWords } from "../utils/utils";

export default function ChatHistory() {
  const [data, setData] = useState<HistoryType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/chat');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <li>
      <ul role="list" className="-mx-2 space-y-1">
        {data.map((history) => (
          <History key={history.id} history={history} />
        ))}
      </ul>
    </li>
  );
}

export function History({ history }: { history: HistoryType }) {
  const { dateHistory, date } = history;
  const pathname = usePathname();

  return (
    <li>
      <div className="text-xs font-semibold leading-6 text-gray-400">
        {date}
      </div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {dateHistory.map((history) => (
          <li key={history.name}>
            <Link
              href={`/${history.href}`}
              className={clsx(
                pathname == `/${history.href}`
                  ? "bg-gray-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                "group flex gap-x-1 rounded-md p-2 text-sm font-semibold leading-6",
              )}
            >
              <div className="flex flex-1 gap-x-3 ">
                <span
                  className={clsx(
                    pathname == `/${history.href}`
                      ? "border-indigo-600 text-indigo-600"
                      : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border bg-white text-[0.625rem] font-medium",
                  )}
                >
                  {history.initial}
                </span>
                <span className="truncate">{truncateWords(history.name, 20)}</span>
              </div>
              <ClipboardIcon
                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-700"
                aria-hidden="true"
              />
              <TrashIcon
                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-700"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
