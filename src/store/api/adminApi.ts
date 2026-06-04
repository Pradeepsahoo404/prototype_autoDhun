"use client";

import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError
} from "@reduxjs/toolkit/query/react";

import type {
  AdminLoginPayload,
  AdminLoginResponse,
  ApiError,
  ApiSuccess,
  TeamMemberAdminDto,
  TeamMemberUpsertPayload
} from "@/types/api";

import { autodhunApi } from "./autodhunApi";

const adminTokenKey = "autodhun_admin_token";

export function getAdminToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(adminTokenKey);
}

export function setAdminToken(token: string) {
  localStorage.setItem(adminTokenKey, token);
}

export function clearAdminToken() {
  localStorage.removeItem(adminTokenKey);
}

const rawAdminBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1",
  prepareHeaders(headers) {
    headers.set("Accept", "application/json");
    const token = getAdminToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
});

const adminBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError | ApiError
> = async (args, api, extraOptions) => {
  const result = await rawAdminBaseQuery(args, api, extraOptions);

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

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: adminBaseQuery,
  tagTypes: ["AdminTeamMembers"],
  endpoints: (builder) => ({
    login: builder.mutation<AdminLoginResponse, AdminLoginPayload>({
      query: (body) => ({ url: "/auth/login", method: "POST", body }),
      transformResponse: (response: AdminLoginResponse) => {
        setAdminToken(response.token);
        return response;
      }
    }),
    getMe: builder.query<{ id: string; email: string; name: string }, void>({
      query: () => "/auth/me"
    }),
    logout: builder.mutation<void, void>({
      queryFn: async () => {
        clearAdminToken();
        return { data: undefined };
      }
    }),

    /** Faces Behind the Music — admin CRUD */
    listTeamMembersAdmin: builder.query<{ members: TeamMemberAdminDto[] }, void>({
      query: () => "/admin/team-members",
      providesTags: (result) =>
        result
          ? [
              ...result.members.map((m) => ({ type: "AdminTeamMembers" as const, id: m.slug })),
              { type: "AdminTeamMembers", id: "LIST" }
            ]
          : [{ type: "AdminTeamMembers", id: "LIST" }]
    }),
    getTeamMemberAdmin: builder.query<{ member: TeamMemberAdminDto }, string>({
      query: (slug) => `/admin/team-members/${slug}`,
      providesTags: (_result, _err, slug) => [{ type: "AdminTeamMembers", id: slug }]
    }),
    createTeamMember: builder.mutation<{ member: TeamMemberAdminDto }, TeamMemberUpsertPayload>({
      query: (body) => ({
        url: "/admin/team-members",
        method: "POST",
        body
      }),
      invalidatesTags: [{ type: "AdminTeamMembers", id: "LIST" }],
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(autodhunApi.util.invalidateTags(["TeamMembers"]));
        } catch {
          /* mutation failed */
        }
      }
    }),
    updateTeamMember: builder.mutation<
      { member: TeamMemberAdminDto },
      { slug: string; body: Partial<TeamMemberUpsertPayload> }
    >({
      query: ({ slug, body }) => ({
        url: `/admin/team-members/${slug}`,
        method: "PUT",
        body
      }),
      invalidatesTags: (_result, _err, { slug }) => [
        { type: "AdminTeamMembers", id: slug },
        { type: "AdminTeamMembers", id: "LIST" }
      ],
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(autodhunApi.util.invalidateTags(["TeamMembers"]));
        } catch {
          /* mutation failed */
        }
      }
    }),
    deleteTeamMember: builder.mutation<{ deleted: boolean; slug: string }, string>({
      query: (slug) => ({
        url: `/admin/team-members/${slug}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result, _err, slug) => [
        { type: "AdminTeamMembers", id: slug },
        { type: "AdminTeamMembers", id: "LIST" }
      ],
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(autodhunApi.util.invalidateTags(["TeamMembers"]));
        } catch {
          /* mutation failed */
        }
      }
    })
  })
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useLogoutMutation,
  useListTeamMembersAdminQuery,
  useGetTeamMemberAdminQuery,
  useCreateTeamMemberMutation,
  useUpdateTeamMemberMutation,
  useDeleteTeamMemberMutation
} = adminApi;
