import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/borderAnimatedContainer";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  LoaderIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";
import { Link } from "react-router";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl md:h-[700px] h-[600px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row h-full">
            {/* Left side - Form */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <MessageCircleIcon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-200 mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-slate-400">Sign in to continue chatting</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input pr-10"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOffIcon className="size-5" />
                        ) : (
                          <EyeIcon className="size-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <LoaderIcon className="w-5 h-5 animate-spin text-slate-200 mx-auto" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    to="/signup"
                    className="text-sm text-cyan-400 hover:underline"
                  >
                    Don't have an account? Sign up
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side - Branding */}
            <div className="hidden md:flex md:w-1/2 p-8 items-center justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/50">
              <div className="text-center max-w-sm">
                <div className="mb-6">
                  <div className="flex justify-center gap-3 mb-4">
                    <div
                      className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-3 h-3 rounded-full bg-cyan-600 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-200 mb-4">
                    ChatApp
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Connect with friends and family in real-time. Send messages,
                    share images, and stay connected no matter where you are.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="text-2xl font-bold text-cyan-400">🔒</div>
                    <p className="text-sm text-slate-400 mt-2">
                      End-to-end secure
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="text-2xl font-bold text-cyan-400">⚡</div>
                    <p className="text-sm text-slate-400 mt-2">
                      Real-time messaging
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="text-2xl font-bold text-cyan-400">🖼️</div>
                    <p className="text-sm text-slate-400 mt-2">Image sharing</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="text-2xl font-bold text-cyan-400">🌐</div>
                    <p className="text-sm text-slate-400 mt-2">
                      Online presence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
};
