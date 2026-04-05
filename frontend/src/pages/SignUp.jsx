import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/borderAnimatedContainer";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  LoaderIcon,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";
import { Link } from "react-router";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl md:h-[750px] h-[700px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row h-full">
            {/* Left side - Branding */}
            <div className="hidden md:flex md:w-1/2 p-8 items-center justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 md:border-r border-slate-600/30">
              <div className="text-center max-w-sm">
                <div className="mb-6">
                  <div className="flex justify-center gap-3 mb-4">
                    <div
                      className="w-3 h-3 rounded-full bg-pink-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-3 h-3 rounded-full bg-pink-500 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-3 h-3 rounded-full bg-pink-600 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-200 mb-4">
                    Join ChatApp
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Create your account and start connecting with people around
                    the world. It's free and takes less than a minute.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400">✓</span>
                    </div>
                    <div className="text-left">
                      <p className="text-slate-200 font-medium">Free forever</p>
                      <p className="text-sm text-slate-400">
                        No credit card required
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400">✓</span>
                    </div>
                    <div className="text-left">
                      <p className="text-slate-200 font-medium">
                        Privacy focused
                      </p>
                      <p className="text-sm text-slate-400">
                        Your data stays yours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400">✓</span>
                    </div>
                    <div className="text-left">
                      <p className="text-slate-200 font-medium">
                        Instant setup
                      </p>
                      <p className="text-sm text-slate-400">
                        Start chatting in seconds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="md:w-1/2 p-8 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto bg-pink-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <MessageCircleIcon className="w-8 h-8 text-pink-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-200 mb-2">
                    Create Account
                  </h2>
                  <p className="text-slate-400">Sign up to get started</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="auth-input-label">Full Name</label>
                    <div className="relative">
                      <UserIcon className="auth-input-icon" />
                      <input
                        type="text"
                        value={formData.fullname}
                        onChange={(e) =>
                          setFormData({ ...formData, fullname: e.target.value })
                        }
                        className="input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

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
                        placeholder="Create a password (min 6 characters)"
                        required
                        minLength={6}
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
                    className="auth-btn bg-pink-500 hover:bg-pink-600 focus:ring-pink-500"
                    type="submit"
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <LoaderIcon className="w-5 h-5 animate-spin text-slate-200 mx-auto" />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    to="/login"
                    className="text-sm text-pink-400 hover:underline"
                  >
                    Already have an account? Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
};
