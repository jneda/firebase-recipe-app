import { createContext } from "react";
import { User } from "../types/User";

export const AuthContext = createContext<User | null>(null);
