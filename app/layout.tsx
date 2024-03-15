import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "./components/sidebar/sidebar";
import { ChatProvider } from "./context/chatContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benny Chat",
  description:
    "Benny Chat is a free-to-use AI system. Use it for engaging conversations, gain insights, and witness the future of AI, all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`${inter.className} h-full overflow-hidden`}>
        <ChatProvider>
          <div>
            <SideBar />
            <main className="pb-10 md:pl-72">
              <div className="px-4 sm:px-6 md:px-8">{children}</div>
            </main>
          </div>
        </ChatProvider>
      </body>
    </html>
  );
}
