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
    url: (resetPasswordToken: string) =>
      `/reset-password/${resetPasswordToken}`,
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
    url: `/blog/[id]`,
    dynamicUrl: (blogId: string) => `/blog/${blogId}`,
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
  abstract: {
    url: "/abstract",
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
  marketplaceTabs: {
    url: (query: string) => `/marketplace${query}`,
    mustAuthenticated: "yes",
    permission: [],
  },
  marketplaceOneScript: {
    url: `/marketplace/[id]`,
    dynamicUrl: (id: string) => `/marketplace/${id}`,
    mustAuthenticated: "yes",
    permission: ["writer", "producer", "admin", "reviewer"],
  },
  marketPlaceSubscriptionSuccessful: {
    url: "/marketplace/subscription-successful",
    mustAuthenticated: "yes",
    permission: ["writer", "producer", "admin", "reviewer"],
  },
  marketPlaceSubscription: {
    url: "/marketplace/subscription",
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
  reviewsFilterScripts: {
    url: "/dashboard/writer/reviews",
    dynamicUrl: (query: string) => `/dashboard/writer/reviews${query}`,
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewsPaymentSuccessful: {
    url: "/dashboard/writer/reviews/payment-successful",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewsPlans: {
    url: "/dashboard/writer/reviews/plans",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewsSummary: {
    url: "/dashboard/writer/reviews/summary",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  reviewerDashboard: {
    url: "/dashboard/reviewer",
    mustAuthenticated: "yes",
    permission: ["reviewer"],
  },
  reviewerDashboardPreview: {
    url: "/dashboard/reviewer/[id]/preview",
    dynamicUrl: (id: string) => `/dashboard/reviewer/${id}/preview`,
    mustAuthenticated: "yes",
    permission: ["reviewer"],
  },
  reviewerDashboardQuestionnaire: {
    url: "/dashboard/reviewer/[id]/questionnaire",
    dynamicUrl: (id: string) => `/dashboard/reviewer/${id}/questionnaire`,
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
    url: (query: string) => `/dashboard/admin/blogs${query}`,
    mustAuthenticated: "yes",
    permission: ["admin"],
  },
  editBlogAdminDashboard: {
    url: `/dashboard/admin/blogs/edit-blog/[id]`,
    dynamicUrl: (id: string) => `/dashboard/admin/blogs/edit-blog/${id}`,
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
    permission: ["producer"],
  },
  withdrawWallet: {
    url: "/wallet/withdraw",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  cryptoWithdrawWallet: {
    url: "/wallet/crypto-withdraw",
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
    url: "/wallet/withdraw-successful",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  depositWallet: {
    url: "/wallet/deposit",
    mustAuthenticated: "yes",
    permission: ["producer"],
  },
  titleScript: {
    url: "/title",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
  script: {
    url: "/script",
    mustAuthenticated: "yes",
    permission: ["writer"],
  },
};

export default routes;
