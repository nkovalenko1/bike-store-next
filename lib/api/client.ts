type ApiResponse<T> = {
  success: true;
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
};

type ApiErrorResponse = {
  success: false;
  error: string;
  details?: unknown;
};

type ApiResult<T> = ApiResponse<T> | ApiErrorResponse;

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | undefined>;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public details?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  const { params, ...fetchOptions } = options;

  let url = `/api${endpoint}`;

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
    credentials: "include",
  });

  const data: ApiResult<T> = await response.json();

  if (!response.ok || !data.success) {
    const error = data as ApiErrorResponse;
    throw new ApiError(
      error.error || "Произошла ошибка",
      response.status,
      error.details
    );
  }

  return data as ApiResponse<T>;
}

export async function apiGet<T>(
  endpoint: string,
  params?: RequestOptions["params"]
): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: "GET",
    params,
  });
}

export async function apiPost<T>(
  endpoint: string,
  body?: unknown,
  params?: RequestOptions["params"]
): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
    params,
  });
}

export async function apiPut<T>(
  endpoint: string,
  body?: unknown,
  params?: RequestOptions["params"]
): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: "PUT",
    body: JSON.stringify(body),
    params,
  });
}

export async function apiDelete<T>(
  endpoint: string,
  params?: RequestOptions["params"]
): Promise<ApiResponse<T>> {
  return apiRequest<T>(endpoint, {
    method: "DELETE",
    params,
  });
}

