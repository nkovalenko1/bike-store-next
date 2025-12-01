import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export default function ErrorMessage({
  message,
  className,
}: ErrorMessageProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-800",
        className
      )}
      role="alert"
    >
      <AlertCircle className="size-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

