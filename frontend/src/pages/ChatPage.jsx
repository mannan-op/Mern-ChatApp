import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

export const ChatPage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="w-full h-screen bg-slate-900">
      <div className="flex items-center justify-center h-full p-4">
        <div className="w-full max-w-7xl h-[calc(100vh-2rem)] bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
          <div className="flex h-full">
            <Sidebar />
            {selectedUser ? <ChatContainer /> : <NoChatSelected />}
          </div>
        </div>
      </div>
    </div>
  );
};
