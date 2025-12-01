"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/auth-store";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({
  children,
  requireAdmin = false,
}: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session && !user) {
      router.push("/login");
      return;
    }

    if (requireAdmin && user?.role !== "ADMIN" && session?.user?.role !== "ADMIN") {
      router.push("/");
      return;
    }
  }, [session, user, status, requireAdmin, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Загрузка...</div>
      </div>
    );
  }

  if (!session && !user) {
    return null;
  }

  if (requireAdmin && user?.role !== "ADMIN" && session?.user?.role !== "ADMIN") {
    return null;
  }

  return <>{children}</>;
}

