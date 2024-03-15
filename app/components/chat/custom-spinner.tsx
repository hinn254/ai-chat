import { Loader2 } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex items-center justify-start pl-5">
      <Loader2
        className="h-4 w-4 animate-spin text-blue-400"
        aria-hidden="true"
      />
      <Loader2
        className="h-4 w-4 animate-spin text-blue-400"
        aria-hidden="true"
      />
      <Loader2
        className="h-4 w-4 animate-spin text-blue-400"
        aria-hidden="true"
      />
    </div>
  );
}
