import { HomeWrapper } from "./components/home-chat-wrapper";

export default function Page() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* no chat data since its new chat thus undefined */}
      <HomeWrapper data={undefined} />
    </div>
  );
}
