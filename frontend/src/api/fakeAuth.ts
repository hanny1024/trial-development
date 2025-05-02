import { mockUsers } from "../mocks/user";
import { User } from "../types/User";

export const login = (email: string, password: string): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const foundUser = mockUsers.find(
        (user) => user.email === email && user.password === password
      );
      resolve(foundUser || null);
    }, 500);
  });
};