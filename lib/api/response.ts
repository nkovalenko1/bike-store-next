import { NextResponse } from "next/server";

interface SuccessResponse<T> {
  success: true;
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

interface ErrorResponse {
  success: false;
  error: string;
  details?: unknown;
}

export function successResponse<T>(
  data: T,
  meta?: SuccessResponse<T>["meta"],
  status = 200
) {
  const response: SuccessResponse<T> = { success: true, data };
  if (meta) response.meta = meta;
  return NextResponse.json(response, { status });
}

export function errorResponse(
  error: string,
  status = 400,
  details?: unknown
) {
  const response: ErrorResponse = { success: false, error };
  if (details) response.details = details;
  return NextResponse.json(response, { status });
}

export function unauthorizedResponse(message = "Требуется авторизация") {
  return errorResponse(message, 401);
}

export function forbiddenResponse(message = "Доступ запрещён") {
  return errorResponse(message, 403);
}

export function notFoundResponse(message = "Не найдено") {
  return errorResponse(message, 404);
}

export function validationErrorResponse(details: unknown) {
  return errorResponse("Ошибка валидации", 400, details);
}

export function serverErrorResponse(message = "Внутренняя ошибка сервера") {
  return errorResponse(message, 500);
}

