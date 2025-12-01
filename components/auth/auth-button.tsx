"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/api/auth";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { data: session, status } = useSession();
  const { user, setUser, logout: logoutStore } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      setUser({
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        role: session.user.role,
      });
    } else if (status === "unauthenticated") {
      logoutStore();
    }
  }, [session, status, setUser, logoutStore]);

  const handleLogout = async () => {
    await logout();
    logoutStore();
    router.push("/");
  };

  if (status === "loading") {
    return <div className="text-sm text-gray-500">Загрузка...</div>;
  }

  if (user || session?.user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          {user?.name || session?.user?.name || user?.email || session?.user?.email}
        </span>
        <Button variant="outline" onClick={handleLogout} size="sm">
          Выйти
        </Button>
      </div>
    );
  }

  return (
    <Button variant="outline" onClick={() => router.push("/login")} size="sm">
      Войти
    </Button>
  );
}

