export type ApiSuccess<T> = {
  success: true;
  data: T;
};

export type ApiError = {
  success: false;
  message: string;
  errors?: unknown;
};

export type TeamMemberDto = {
  id: string;
  imageUrl: string;
  alt: string;
  column: number;
  height: "md" | "xl";
};

/** Admin panel — full team member record. */
export type TeamMemberAdminDto = {
  slug: string;
  imageUrl: string;
  alt: string;
  column: number;
  height: "md" | "xl";
  sortOrder: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type TeamMemberUpsertPayload = {
  slug: string;
  imageUrl: string;
  alt?: string;
  column: number;
  height: "md" | "xl";
  sortOrder?: number;
  isActive?: boolean;
};

export type TestimonialDto = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
};

export type PressLogoDto = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
};

export type FeaturedPressDto = {
  content: {
    titleLine1: string;
    titleLine2: string;
  };
  logos: PressLogoDto[];
};

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactResponse = {
  id: string;
  message: string;
  emailSent: boolean;
};

export type NewsletterSubscribePayload = {
  email: string;
  source?: string;
};

export type NewsletterSubscribeResponse = {
  id: string;
  message: string;
  alreadySubscribed?: boolean;
};

export type AutodhunRedPlanDto = {
  id: string;
  badge: string;
  namePrimary: string;
  nameAccent: string;
  price: string;
  period: string;
  tagline: string;
  cta: { label: string; href: string };
  benefitsIntro: string;
  benefits: string[];
};

export type AutodhunRedPlansDto = {
  sectionKicker: string;
  sectionTitle: string;
  plans: AutodhunRedPlanDto[];
};

export type SiteDetailsDto = {
  brandName: string;
  logoUrl: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
};

export type ComplianceDocumentListItemDto = {
  slug: string;
  label: string;
  hasPdf: boolean;
};

export type ComplianceDocumentDetailDto = {
  slug: string;
  label: string;
  pdfUrl: string;
  previewUrl: string;
  fileName: string;
  downloadUrl: string;
};

export type ServiceDto = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type FaqSectionMeta = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
};

export type FaqItemDto = {
  id: string;
  question: string;
  answer: string;
};

export type HomeFaqDto = {
  section: FaqSectionMeta;
  items: FaqItemDto[];
};

export type AboutDto = {
  pillHeading: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
};

export type AdminLoginPayload = {
  email: string;
  password: string;
};

export type AdminLoginResponse = {
  token: string;
  admin: { id: string; email: string; name: string };
};
