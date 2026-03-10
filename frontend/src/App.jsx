import { Route, Routes } from "react-router";
import { ChatPage } from "./pages/ChatPage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { useAuthStore } from "./store/useAuthStore";

/**
 * Top-level application component that provides the layout, decorative background, and route mappings.
 *
 * Renders the application's layout with three decorative background elements and a Routes container mapping
 * "/login" to the Login page, "/signup" to the SignUp page, and "/" to the ChatPage.
 * @returns {JSX.Element} The React element tree for the application layout and routes.
 */
function App() {
  const { authUser, isLoggedIn, login } = useAuthStore();
  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px]" />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
