import { useAuthStore } from "@/lib/stores/auth-store";
import { useEffect } from "react";

export function useAuth() {
  const store = useAuthStore();

  useEffect(() => {
    if (store.isLoading) {
      store.syncSession();
    }
  }, []);

  return store;
}

