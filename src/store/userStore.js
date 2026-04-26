import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mockUsers } from "../mockdata/users";

export const useUserStore = create(
  persist(
    (set, get) => ({
      users: mockUsers,
      currentUser: null,

      registerUser: (newUser) => {
        const updatedUsers = [...get().users, newUser];

        set({
          users: updatedUsers,
          currentUser: newUser,
        });
      },

      loginUser: (email) => {
        const foundUser = get().users.find(
          (user) => user.email === email
        );

        if (foundUser) {
          set({ currentUser: foundUser });
        }

        return foundUser;
      },

      logoutUser: () => set({ currentUser: null }),
    }),
    {
      name: "user-storage",
    }
  )
);