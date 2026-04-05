import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import {
  UsersIcon,
  SearchIcon,
  LogOutIcon,
  SettingsIcon,
  MessageCircleIcon,
} from "lucide-react";
import { SidebarSkeleton } from "./Skeletons";

const Sidebar = () => {
  const { users, getUsers, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers, logout, authUser } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.fullName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesOnline = showOnlineOnly
      ? onlineUsers.includes(user._id)
      : true;
    return matchesSearch && matchesOnline;
  });

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-slate-700/50 flex flex-col bg-slate-800/30">
      {/* Header */}
      <div className="p-4 border-b border-slate-700/50">
        <div className="flex items-center gap-3 mb-4 lg:mb-0">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
            <MessageCircleIcon className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="hidden lg:block">
            <h1 className="font-bold text-slate-200">Messages</h1>
            <p className="text-xs text-slate-400">
              {onlineUsers.length - 1} online
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden lg:block mt-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>
        </div>

        {/* Online filter */}
        <div className="hidden lg:flex items-center gap-2 mt-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm checkbox-primary"
            />
            <span className="text-sm text-slate-400">Show online only</span>
          </label>
        </div>
      </div>

      {/* Users list */}
      <div className="flex-1 overflow-y-auto py-2">
        {filteredUsers.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 px-4">
            <UsersIcon className="w-8 h-8 mb-2 opacity-50" />
            <p className="text-sm text-center">No users found</p>
          </div>
        ) : (
          filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-full flex items-center gap-3 p-3 hover:bg-slate-700/30 transition-colors ${
                selectedUser?._id === user._id ? "bg-slate-700/50" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={
                    user.profilePic ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=0d9488&color=fff`
                  }
                  alt={user.fullName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-600"
                />
                {onlineUsers.includes(user._id) && (
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-slate-800" />
                )}
              </div>
              <div className="hidden lg:block text-left flex-1 min-w-0">
                <p className="font-medium text-slate-200 truncate">
                  {user.fullName}
                </p>
                <p className="text-xs text-slate-400">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </p>
              </div>
            </button>
          ))
        )}
      </div>

      {/* User profile section */}
      <div className="p-4 border-t border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={
                authUser?.profilePic ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser?.fullName || "User")}&background=0d9488&color=fff`
              }
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-slate-600"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800" />
          </div>
          <div className="hidden lg:block flex-1 min-w-0">
            <p className="font-medium text-slate-200 truncate text-sm">
              {authUser?.fullName}
            </p>
            <p className="text-xs text-slate-400 truncate">{authUser?.email}</p>
          </div>
          <div className="hidden lg:flex gap-2">
            <button
              onClick={logout}
              className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-red-400"
              title="Logout"
            >
              <LogOutIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Mobile logout button */}
        <button
          onClick={logout}
          className="lg:hidden mt-3 w-full p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-red-400 flex items-center justify-center"
          title="Logout"
        >
          <LogOutIcon className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
