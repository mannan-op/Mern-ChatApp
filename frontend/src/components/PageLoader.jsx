import { LoaderIcon, MessageCircleIcon } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <div className="relative">
        <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-4">
          <MessageCircleIcon className="w-8 h-8 text-cyan-400" />
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
          <LoaderIcon className="animate-spin w-6 h-6 text-cyan-400" />
        </div>
      </div>
      <p className="text-slate-400 mt-6 text-sm">Loading ChatApp...</p>
    </div>
  );
};

export default PageLoader;
