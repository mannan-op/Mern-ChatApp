import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-4 border-b border-slate-700/50 bg-slate-800/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={
                selectedUser.profilePic ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUser.fullName)}&background=0d9488&color=fff`
              }
              alt={selectedUser.fullName}
              className="w-11 h-11 rounded-full object-cover border-2 border-slate-600"
            />
            {isOnline && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-slate-200">
              {selectedUser.fullName}
            </h3>
            <p
              className={`text-xs ${isOnline ? "text-green-400" : "text-slate-400"}`}
            >
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setSelectedUser(null)}
          className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-slate-200"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
