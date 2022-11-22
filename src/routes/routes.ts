const routes = {
  home: "/",
  aboutUs: "/about-us",
  abstract: "/abstract",
  checkEmail: "/check-email",
  welcome: "/welcome",
  education: "/education",
  FAQs: "/FAQs",
  forgetPassword: "/forget-password",
  privacyPolicy: "/privacy-policy",
  profile: "/profile",
  resetPasswordConfirmation: "/reset-password-confirmation",
  resetPassword: (resetPasswordToken: string) =>
    `/reset-password/${resetPasswordToken}`,
  scriptWriting: "/script-writing",
  signin: "/login",
  register: "/register",
  termsAndCondition: "/terms-and-conditions",
  verifyEmail: "/verify-email",
  blog: "/blog",
  oneBlog: (blogId: string) => `/blog/${blogId}`,
  iDraft: "/iDraft",
  iDraftTermsAndConditions: "/iDraft/terms-and-conditions",
  marketplace: {
    url: "/marketplace",
    permission: "http://localhost:3000/login",
  },
  marketplaceTabs: (query: string) => `/marketplace${query}`,
  marketplaceOneScript: (id: string) => `/marketplace/${id}`,
  marketPlaceSubscriptionSuccessful: "/marketplace/subscription-successful",
  marketPlaceSubscription: "/marketplace/subscription",
  listingsDashboard: "/dashboard/writer/listings",
  listingsDashboardTabs: (query: string) =>
    `/dashboard/writer/listings/${query}`,
  listingsOneScript: (id: string) => `/dashboard/writer/listings/${id}`,
  projectsDashboard: `/dashboard/writer/projects`,
  projectsDashboardTabs: (query: string) =>
    `/dashboard/writer/projects${query}`,
  reviewerDashboard: "/dashboard/reviewer",
  reviewerDashboardPreview: "/dashboard/reviewer/preview",
  reviewsDashboard: "/dashboard/writer/reviews",
  reviewsPaymentSuccessful: "/dashboard/writer/reviews/payment-successful",
  reviewsPlans: "/dashboard/writer/reviews/plans",
  reviewsSummary: "/dashboard/writer/reviews/summary",
  scriptsDashboard: "/dashboard/producer",
  scriptsDashboardTabs: (query: string) => `/dashboard/producer${query}`,
  withdrawWallet: "/wallet/withdraw",
  cryptoWithdrawWallet: "/wallet/crypto-withdraw",
  helpWallet: "/wallet/help",
  transactionHistoryWallet: "/wallet/transaction-history",
  withdrawSuccessfulWallet: "/wallet/withdraw-successful",
  depositWallet: "/wallet/deposit",
  titleScript: "title",
  blogsAdminDashboard: `/dashboard/admin/blogs`,
  blogsAdminDashboardTabs: (query: string) => `/dashboard/admin/blogs${query}`,
  editBlogAdminDashboard: (id: string) =>
    `/dashboard/admin/blogs/edit-blog/${id}`,
  createBlogAdminDashboard: "/dashboard/admin/blogs/add-blog",
  usersAdminDashboard: `/dashboard/admin/users`,
  userAdminDashboard: (id: string) => `/dashboard/admin/users/${id}`,
  reviewersAdminDashboard: `/dashboard/admin/reviewers`,
  reviewerAdminDashboard: (id: string) => `/dashboard/admin/reviewers/${id}`,
  reviewersAdminDashboardTabs: (query: string) =>
    `/dashboard/admin/reviewers${query}`,
};

export default routes;
