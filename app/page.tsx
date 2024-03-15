import Chat from "./components/chat/chat";
import SearchInput from "./components/chat/chat-input";

export default function Page() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Chat chatdata={[]} />
      <SearchInput />
    </div>
  );
}
