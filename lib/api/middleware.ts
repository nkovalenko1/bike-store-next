import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getAuthSession() {
  return getServerSession(authOptions);
}

export async function requireAuthSession() {
  const session = await getAuthSession();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function requireAdminSession() {
  const session = await requireAuthSession();

  if (session.user.role !== "ADMIN") {
    throw new Error("Forbidden");
  }

  return session;
}

export async function getUserId() {
  const session = await requireAuthSession();
  return session.user.id;
}

