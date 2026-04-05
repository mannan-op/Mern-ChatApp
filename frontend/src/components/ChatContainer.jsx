import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { MessageSkeleton } from "./Skeletons";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col bg-slate-900/50">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-900/50">
      <ChatHeader />

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-slate-700/50 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">👋</span>
              </div>
              <p className="text-slate-400">No messages yet</p>
              <p className="text-slate-500 text-sm mt-1">
                Say hello to start the conversation!
              </p>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message._id}
              className={`flex ${message.senderId === authUser._id ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex gap-3 max-w-[75%] ${
                  message.senderId === authUser._id
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={
                      message.senderId === authUser._id
                        ? authUser.profilePic ||
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.fullName)}&background=0d9488&color=fff`
                        : selectedUser.profilePic ||
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUser.fullName)}&background=0d9488&color=fff`
                    }
                    alt="Avatar"
                    className="w-9 h-9 rounded-full object-cover border-2 border-slate-600"
                  />
                </div>

                {/* Message bubble */}
                <div
                  className={`flex flex-col ${message.senderId === authUser._id ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`px-4 py-2.5 rounded-2xl ${
                      message.senderId === authUser._id
                        ? "bg-cyan-600 text-white rounded-br-md"
                        : "bg-slate-700 text-slate-200 rounded-bl-md"
                    }`}
                  >
                    {message.image && (
                      <img
                        src={message.image}
                        alt="Attachment"
                        className="max-w-[250px] rounded-lg mb-2"
                      />
                    )}
                    {message.text && (
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 mt-1 px-1">
                    {formatMessageTime(message.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messageEndRef} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
