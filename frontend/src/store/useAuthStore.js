import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "mannan", _id: "1234", age: 22 },
  isLoggedIn: false,
  

  login: () => {
    console.log("login");
    set({ isLoggedIn: true });
  },
}));
