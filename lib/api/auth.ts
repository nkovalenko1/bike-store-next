import { signIn, signOut } from "next-auth/react";
import type { LoginInput, RegisterInput } from "@/lib/validations/auth";
import { apiPost } from "./client";

export async function register(data: RegisterInput): Promise<void> {
  await apiPost("auth/register", data);
}

export async function login(data: LoginInput): Promise<void> {
  const result = await signIn("credentials", {
    email: data.email.toLowerCase().trim(),
    password: data.password,
    redirect: false,
  });

  if (!result) {
    throw new Error("Ошибка входа. Попробуйте снова.");
  }

  if (result.error) {
    // Преобразуем стандартные ошибки NextAuth в понятные сообщения
    const errorMessages: Record<string, string> = {
      CredentialsSignin: "Неверный email или пароль",
      Default: "Ошибка входа. Попробуйте снова.",
    };

    const errorMessage = errorMessages[result.error] || result.error || errorMessages.Default;
    throw new Error(errorMessage);
  }

  if (!result.ok) {
    throw new Error("Ошибка входа. Попробуйте снова.");
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

