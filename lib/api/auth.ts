import { signIn, signOut } from "next-auth/react";
import type { LoginInput, RegisterInput } from "@/lib/validations/auth";
import { apiPost } from "./client";

export async function register(data: RegisterInput): Promise<void> {
  await apiPost("auth/register", data);
}

export async function login(data: LoginInput): Promise<void> {
  const result = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  if (result?.error) {
    throw new Error(result.error);
  }
}

export async function logout(): Promise<void> {
  await signOut({ redirect: true, callbackUrl: "/" });
}

export async function getSession() {
  const { getServerSession } = await import("next-auth");
  const { authOptions } = await import("@/app/api/auth/[...nextauth]/route");
  return getServerSession(authOptions);
}

