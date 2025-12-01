import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

interface NotFoundProps {
  title?: string;
  message?: string;
  backHref?: string;
  backLabel?: string;
}

export default function NotFound({
  title = "Не найдено",
  message = "Запрашиваемый ресурс не найден",
  backHref = "/",
  backLabel = "На главную",
}: NotFoundProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
      <FileQuestion className="size-16 text-gray-400" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-600">{message}</p>
      <Link href={backHref}>
        <Button variant="outline">{backLabel}</Button>
      </Link>
    </div>
  );
}

