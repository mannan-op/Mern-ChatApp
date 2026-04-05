const SidebarSkeleton = () => {
  const skeletonItems = Array(8).fill(null);

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-slate-700/50 flex flex-col bg-slate-800/30">
      {/* Header skeleton */}
      <div className="p-4 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-700/50 animate-pulse" />
          <div className="hidden lg:block">
            <div className="h-4 w-24 bg-slate-700/50 rounded animate-pulse" />
            <div className="h-3 w-16 bg-slate-700/50 rounded animate-pulse mt-2" />
          </div>
        </div>
        <div className="hidden lg:block mt-4">
          <div className="h-10 w-full bg-slate-700/50 rounded-lg animate-pulse" />
        </div>
      </div>

      {/* Users list skeleton */}
      <div className="flex-1 overflow-y-auto py-2">
        {skeletonItems.map((_, idx) => (
          <div key={idx} className="w-full flex items-center gap-3 p-3">
            <div className="w-12 h-12 rounded-full bg-slate-700/50 animate-pulse" />
            <div className="hidden lg:block flex-1">
              <div className="h-4 w-32 bg-slate-700/50 rounded animate-pulse" />
              <div className="h-3 w-20 bg-slate-700/50 rounded animate-pulse mt-2" />
            </div>
          </div>
        ))}
      </div>

      {/* Profile section skeleton */}
      <div className="p-4 border-t border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-700/50 animate-pulse" />
          <div className="hidden lg:block flex-1">
            <div className="h-4 w-24 bg-slate-700/50 rounded animate-pulse" />
            <div className="h-3 w-32 bg-slate-700/50 rounded animate-pulse mt-2" />
          </div>
        </div>
      </div>
    </aside>
  );
};

const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div
            className={`flex gap-3 max-w-[75%] ${
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-slate-700/50 animate-pulse flex-shrink-0" />
            <div className="flex flex-col gap-1">
              <div
                className={`h-16 rounded-2xl bg-slate-700/50 animate-pulse ${
                  idx % 2 === 0 ? "w-48" : "w-56"
                }`}
              />
              <div className="h-3 w-12 bg-slate-700/50 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { SidebarSkeleton, MessageSkeleton };
export default MessageSkeleton;
