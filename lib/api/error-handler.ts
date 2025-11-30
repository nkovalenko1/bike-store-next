import { Prisma } from "@prisma/client";
import { ZodError } from "zod";
import {
  errorResponse,
  notFoundResponse,
  serverErrorResponse,
  validationErrorResponse,
} from "./response";

export function handleApiError(error: unknown) {
  console.error("API Error:", error);

  if (error instanceof ZodError) {
    return validationErrorResponse(error.flatten());
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return errorResponse("Запись с такими данными уже существует", 409);
      case "P2025":
        return notFoundResponse("Запись не найдена");
      case "P2003":
        return errorResponse("Нарушение ссылочной целостности", 400);
      default:
        return serverErrorResponse(`Ошибка базы данных: ${error.code}`);
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return errorResponse("Ошибка валидации данных", 400);
  }

  if (error instanceof Error) {
    if (error.message === "Unauthorized") {
      return errorResponse("Требуется авторизация", 401);
    }
    return serverErrorResponse(error.message);
  }

  return serverErrorResponse();
}

