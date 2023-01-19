const routes = {
  checkEmail: {
    url: "/check-email",
    mustAuthenticated: "no",
    permission: [],
  },
  forgetPassword: {
    url: "/forget-password",
    mustAuthenticated: "no",
    permission: [],
  },
  resetPasswordConfirmation: {
    url: "/reset-password-confirmation",
    mustAuthenticated: "no",
    permission: [],
  },
  register: {
    url: "/register",
    mustAuthenticated: "no",
    permission: [],
  },
  verifyEmail: {
    url: "/verify-email",
    mustAuthenticated: "no",
    permission: [],
  },
  resetPassword: {
    url: `/reset-password`,
    mustAuthenticated: "no",
    permission: [],
  },
  signin: {
    url: "/login",
    mustAuthenticated: "no",
    permission: [],
  },
  home: { url: "/", mustAuthenticated: "noMatter", permission: [] },
  aboutUs: {
    url: "/about-us",
    mustAuthenticated: "noMatter",
    permission: [],
  },
  education: {
    url: "/education",
    mustAuthenticated: "noMatter",
    permission: [],
  },
  FAQs: { url: "/FAQs", mustAuthenticated: "noMatter", permission: [] },
  privacyPolicy: {
    url: "/privacy-policy",
    mustAuthenticated: "noMatter",
    permission: [],
  },
  blog: { url: "/blog", mustAuthenticated: "noMatter", permission: [] },
  oneBlog: {
    url: `/blog/[slug]`,
    dynamicUrl: (slug: string) => `/blog/${slug}`,
    mustAuthenticated: "noMatter",
    permission: [],
  },
  iDraft: {
    url: "/iDraft",
    mustAuthenticated: "noMatter",
    permission: [],
  },
  iDraftTermsAndConditions: {
    url: "/iDraft/terms-and-conditions",
    mustAuthenticated: "noMatter",
    permission: [],
  },
  termsAndCondition: {
    url: "/terms-and-conditions",
    mustAuthenticated: "noMatter",
    permission: [],
  },
  marketplace: {
    url: "/marketplace",
    mustAuthenticated: "noMatter",
    permission: [],
  },
  marketplaceTabs: {
    url: (query: string, page?: string) => `/marketplace${query}${page}`,
    mustAuthenticated: "noMatter",
    permission: [],
  },
  marketplaceOneScript: {
    url: `/marketplace/[id]`,
    dynamicUrl: (id: string) => `/marketplace/${id}`,
    mustAuthenticated: "yes",
    permission: ["writer", "producer", "admin", "reviewer"],
  },
  marketPlaceSubscription: {
    url: "/marketplace/subscription",
    mustAuthenticated: "yes",
    permission: ["writer", "producer", "admin", "reviewer"],
  },
  marketPlaceSubscriptionSuccessful: {
    url: "/marketplace/subscription/[id]",
    dynamicUrl: (transaction_id: string) =>
      `/marketplace/subscription/${transaction_id}`,
    mustAuthenticated: "yes",
    permission: ["writer", "producer", "admin", "reviewer"],
  },
  abstract: {
    url: "/abstract/[id]",
    dynamicUrl: (id: string) => `/abstract/${id}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  profile: {
    url: "/profile",
    mustAuthenticated: "yes",
    permission: ["writer", "producer", "admin", "reviewer"],
  },
  welcome: {
    url: "/welcome",
    mustAuthenticated: "yes",
    permission: ["writer", "producer", "admin", "reviewer"],
  },
  scriptWriting: {
    url: "/script-writing",
    mustAuthenticated: "yes",
    permission: ["writer", "producer", "admin", "reviewer"],
  },
  dashboard: {
    url: "/dashboard",
    mustAuthenticated: "yes",
    permission: ["writer", "producer", "admin", "reviewer"],
  },
  writerDashboard: {
    url: "/dashboard/writer",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  listingsDashboard: {
    url: "/dashboard/writer/listings",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  listingsDashboardTabs: {
    url: (query: string) => `/dashboard/writer/listings${query}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  listingsOneScript: {
    url: `/dashboard/writer/listings/[id]`,
    dynamicUrl: (id: string) => `/dashboard/writer/listings/${id}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  listingsBidScript: {
    url: `/dashboard/writer/listings/[id]/bids/[bidId]`,
    dynamicUrl: (id: string, bidId: string) =>
      `/dashboard/writer/listings/${id}/bids/${bidId}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  projectsDashboard: {
    url: `/dashboard/writer/projects`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  projectsDashboardTabs: {
    url: (query: string) => `/dashboard/writer/projects${query}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewsDashboard: {
    url: "/dashboard/writer/reviews",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  oneReviewInformation: {
    url: "/dashboard/writer/reviews/[id]",
    dynamicUrl: (id: string) => `/dashboard/writer/reviews/${id}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewsFilterScripts: {
    url: "/dashboard/writer/reviews",
    dynamicUrl: (query: string) => `/dashboard/writer/reviews${query}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewsPaymentSuccessful: {
    url: "/dashboard/writer/reviews/payment-successful/[transaction_id]",
    dynamicUrl: (transaction_id: string) =>
      `/dashboard/writer/reviews/payment-successful/${transaction_id}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewsPlans: {
    url: "/dashboard/writer/reviews/plans/[id]",
    dynamicUrl: (id: string) => `/dashboard/writer/reviews/plans/${id}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewsSummary: {
    url: "/dashboard/writer/reviews/summary/[id]",
    dynamicUrl: (id: string, query: string) =>
      `/dashboard/writer/reviews/summary/${id}${query}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewerDashboard: {
    url: "/dashboard/reviewer",
    mustAuthenticated: "yes",
    permission: ["reviewer"],
  },
  reviewerDashboardPreviewTypeA: {
    url: "/dashboard/reviewer/[id]/preview/typeA",
    dynamicUrl: (id: string) => `/dashboard/reviewer/${id}/preview/typeA`,
    mustAuthenticated: "yes",
    permission: ["reviewer"],
  },
  reviewerDashboardPreviewTypeB: {
    url: "/dashboard/reviewer/[id]/preview/typeB",
    dynamicUrl: (id: string) => `/dashboard/reviewer/${id}/preview/typeB`,
    mustAuthenticated: "yes",
    permission: ["reviewer"],
  },
  reviewerDashboardQuestionnaireTypeA: {
    url: "/dashboard/reviewer/[id]/questionnaire/typeA",
    dynamicUrl: (id: string) => `/dashboard/reviewer/${id}/questionnaire/typeA`,
    mustAuthenticated: "yes",
    permission: ["reviewer"],
  },
  reviewerDashboardQuestionnaireTypeB: {
    url: "/dashboard/reviewer/[id]/questionnaire/typeB",
    dynamicUrl: (id: string) => `/dashboard/reviewer/${id}/questionnaire/typeB`,
    mustAuthenticated: "yes",
    permission: ["reviewer"],
  },
  producerDashboard: {
    url: "/dashboard/producer",
    mustAuthenticated: "yes",
    permission: ["producer"],
  },
  scriptsDashboardTabs: {
    url: (query: string) => `/dashboard/producer${query}`,
    mustAuthenticated: "yes",
    permission: ["producer"],
  },
  adminDashboard: {
    url: "/dashboard/admin",
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  blogsAdminDashboard: {
    url: `/dashboard/admin/blogs`,
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  blogsAdminDashboardTabs: {
    url: (query: string, page?: string) =>
      `/dashboard/admin/blogs${query}${page}`,
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  editBlogAdminDashboard: {
    url: `/dashboard/admin/blogs/edit-blog/[slug]`,
    dynamicUrl: (slug: string) => `/dashboard/admin/blogs/edit-blog/${slug}`,
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  createBlogAdminDashboard: {
    url: "/dashboard/admin/blogs/add-blog",
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  usersAdminDashboard: {
    url: `/dashboard/admin/users`,
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  userAdminDashboard: {
    url: `/dashboard/admin/users/[id]`,
    dynamicUrl: (id: string) => `/dashboard/admin/users/${id}`,
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  reviewersAdminDashboard: {
    url: `/dashboard/admin/reviewers`,
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  reviewerAdminDashboard: {
    url: `/dashboard/admin/reviewers/[id]`,
    dynamicUrl: (id: string) => `/dashboard/admin/reviewers/${id}`,
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  reviewersAdminDashboardTabs: {
    url: (query: string) => `/dashboard/admin/reviewers${query}`,
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  wallet: {
    url: "/wallet",
    mustAuthenticated: "yes",
    permission: ["producer", "writer"],
  },
  withdrawWallet: {
    url: "/wallet/withdraw",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  helpWallet: {
    url: "/wallet/help",
    mustAuthenticated: "yes",
    permission: ["writer", "producer"],
  },
  transactionHistoryWallet: {
    url: "/wallet/transaction-history",
    mustAuthenticated: "yes",
    permission: ["writer", "producer"],
  },
  withdrawSuccessfulWallet: {
    url: "/wallet/withdraw/[transaction_id]",
    dynamicUrl: (transactionId: string) => `/wallet/withdraw/${transactionId}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  depositWallet: {
    url: "/wallet/deposit",
    mustAuthenticated: "yes",
    permission: ["producer"],
  },
  titleScript: {
    url: "/script/title/[id]",
    dynamicUrl: (id: string) => `/script/title/${id}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  script: {
    url: "/script/[id]",
    dynamicUrl: (id: string) => `/script/${id}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  scriptWritingTabs: {
    url: (id: string, query: string) => `/script/${id}${query}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  invites: {
    url: "/invites",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
};

export default routes;
