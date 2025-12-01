import { useAuthStore } from "@/lib/stores/auth-store";
import { useEffect } from "react";

export function useAuth() {
  const store = useAuthStore();
  const { isLoading, syncSession } = store;

  useEffect(() => {
    if (isLoading) {
      syncSession();
    }
  }, [isLoading, syncSession]);

  return store;
}

