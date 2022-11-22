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
  marketplace: "/marketplace",
  marketplaceTabs: (query: string) => `/marketplace${query}`,
  marketplaceOneScript: (id: string) => `/marketplace/${id}`,
  marketPlaceSubscriptionSuccessful: "/marketplace/subscription-successful",
  marketPlaceSubscription: "/marketplace/subscription",
  listingsDashboard: "/dashboard/listings",
  listingsDashboardTabs: (query: string) => `/dashboard/listings/${query}`,
  listingsOneScript: (id: string) => `/dashboard/listings/${id}`,
  projectsDashboard: `/dashboard/projects`,
  projectsDashboardTabs: (query: string) => `/dashboard/projects${query}`,
  reviewer: "/reviewer",
  preview: "/reviewer/preview",
  reviewsDashboard: "/dashboard/reviews",
  reviewsPaymentSuccessful: "/dashboard/reviews/payment-successful",
  reviewsPlans: "/dashboard/reviews/plans",
  reviewsSummary: "/dashboard/reviews/summary",
  scriptsDashboard: "/dashboard/scripts",
  scriptsDashboardTabs: (query: string) => `/dashboard/scripts${query}`,
  withdrawWallet: "/wallet/withdraw",
  cryptoWithdrawWallet: "/wallet/crypto-withdraw",
  helpWallet: "/wallet/help",
  transactionHistoryWallet: "/wallet/transaction-history",
  withdrawSuccessfulWallet: "/wallet/withdraw-successful",
  depositWallet: "/wallet/deposit",
  titleScript: "title",
  blogsAdminDashboard: `/admin/blogs`,
  blogsAdminDashboardTabs: (query: string) => `/admin/blogs${query}`,
  editBlogAdminDashboard: (id: string) => `/admin/blogs/edit-blog/${id}`,
  createBlogAdminDashboard: "/admin/blogs/add-blog",
  usersAdminDashboard: `/admin/users`,
  userAdminDashboard: (id: string) => `/admin/users/${id}`,
  reviewersAdminDashboard: `/admin/reviewers`,
  reviewerAdminDashboard: (id: string) => `/admin/reviewers/${id}`,
  reviewersAdminDashboardTabs: (query: string) => `/admin/reviewers${query}`,
};

export default routes;
