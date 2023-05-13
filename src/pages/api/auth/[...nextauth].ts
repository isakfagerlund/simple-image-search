import NextAuth from "next-auth";
import { authOptions } from "@root/server/auth";

export default NextAuth(authOptions);
