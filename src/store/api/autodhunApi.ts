import { createApi } from "@reduxjs/toolkit/query/react";

import type {
  ComplianceDocumentDetailDto,
  ComplianceDocumentListItemDto,
  ContactPayload,
  ContactResponse,
  FeaturedPressDto,
  AutodhunRedPlansDto,
  NewsletterSubscribePayload,
  NewsletterSubscribeResponse,
  SiteDetailsDto,
  TeamMemberDto,
  TestimonialDto
} from "@/types/api";

import { baseQuery } from "./baseQuery";

export const autodhunApi = createApi({
  reducerPath: "autodhunApi",
  baseQuery,
  tagTypes: [
    "TeamMembers",
    "Testimonials",
    "FeaturedPress",
    "SiteDetails",
    "AutodhunRedPlans",
    "Compliance"
  ],
  endpoints: (builder) => ({
    getTeamMembers: builder.query<{ members: TeamMemberDto[] }, void>({
      query: () => "/team-members",
      providesTags: ["TeamMembers"]
    }),
    getTeamMember: builder.query<{ member: TeamMemberDto }, string>({
      query: (slug) => `/team-members/${slug}`,
      providesTags: (_result, _err, slug) => [{ type: "TeamMembers", id: slug }]
    }),
    getTestimonials: builder.query<{ testimonials: TestimonialDto[] }, void>({
      query: () => "/testimonials",
      providesTags: ["Testimonials"]
    }),
    getFeaturedPress: builder.query<FeaturedPressDto, void>({
      query: () => "/featured-press",
      providesTags: ["FeaturedPress"]
    }),
    getAutodhunRedPlans: builder.query<AutodhunRedPlansDto, void>({
      query: () => "/autodhun-red-plans",
      providesTags: ["AutodhunRedPlans"]
    }),
    getSiteDetails: builder.query<SiteDetailsDto, void>({
      query: () => "/site-details",
      providesTags: ["SiteDetails"],
      refetchOnMountOrArgChange: true
    }),
    subscribeNewsletter: builder.mutation<
      NewsletterSubscribeResponse,
      NewsletterSubscribePayload
    >({
      query: (body) => ({
        url: "/newsletter/subscribe",
        method: "POST",
        body
      })
    }),
    submitContact: builder.mutation<ContactResponse, ContactPayload>({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body
      })
    }),
    getComplianceDocuments: builder.query<{ documents: ComplianceDocumentListItemDto[] }, void>({
      query: () => "/compliance",
      providesTags: ["Compliance"]
    }),
    getComplianceDocument: builder.query<{ document: ComplianceDocumentDetailDto }, string>({
      query: (slug) => `/compliance/${slug}`,
      providesTags: (_r, _e, slug) => [{ type: "Compliance", id: slug }]
    })
  })
});

export const {
  useGetTeamMembersQuery,
  useGetTeamMemberQuery,
  useGetTestimonialsQuery,
  useGetFeaturedPressQuery,
  useGetAutodhunRedPlansQuery,
  useGetSiteDetailsQuery,
  useSubscribeNewsletterMutation,
  useSubmitContactMutation,
  useGetComplianceDocumentsQuery,
  useGetComplianceDocumentQuery
} = autodhunApi;
