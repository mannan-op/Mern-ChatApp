import { MessageCircleIcon } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-slate-900/50">
      <div className="text-center max-w-md px-4">
        <div className="mb-6">
          <div className="flex justify-center gap-3 mb-6">
            <div
              className="w-4 h-4 rounded-full bg-cyan-400 animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-4 h-4 rounded-full bg-cyan-500 animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-4 h-4 rounded-full bg-cyan-600 animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
          <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
            <MessageCircleIcon className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-200 mb-3">
            Welcome to ChatApp!
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Select a conversation from the sidebar to start chatting. Connect
            with friends, share moments, and stay in touch.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-2xl mb-2">💬</div>
            <p className="text-sm text-slate-300 font-medium">Real-time Chat</p>
            <p className="text-xs text-slate-500 mt-1">
              Instant message delivery
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-2xl mb-2">🖼️</div>
            <p className="text-sm text-slate-300 font-medium">Share Images</p>
            <p className="text-xs text-slate-500 mt-1">Send photos easily</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-2xl mb-2">🟢</div>
            <p className="text-sm text-slate-300 font-medium">Online Status</p>
            <p className="text-xs text-slate-500 mt-1">See who's online</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-2xl mb-2">🔒</div>
            <p className="text-sm text-slate-300 font-medium">Secure</p>
            <p className="text-xs text-slate-500 mt-1">Your privacy matters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
