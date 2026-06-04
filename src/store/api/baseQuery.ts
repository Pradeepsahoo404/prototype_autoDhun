import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError
} from "@reduxjs/toolkit/query/react";

import type { ApiError, ApiSuccess } from "@/types/api";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1",
  prepareHeaders(headers) {
    headers.set("Accept", "application/json");
    return headers;
  }
});

/** Unwrap `{ success, data }` responses from the Autodhun API. */
export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError | ApiError
> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    return result;
  }

  const body = result.data as ApiSuccess<unknown> | ApiError;

  if (body && typeof body === "object" && "success" in body && body.success === false) {
    return { error: { status: "CUSTOM_ERROR", data: body } as FetchBaseQueryError };
  }

  if (body && typeof body === "object" && "success" in body && body.success === true) {
    return { data: body.data };
  }

  return { data: result.data };
};
