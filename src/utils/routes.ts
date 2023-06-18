const routes = {
  checkEmail: { url: "/check-email" },
  forgetPassword: { url: "/forget-password" },
  resetPasswordConfirmation: { url: "/reset-password-confirmation" },
  register: { url: "/register" },
  verifyEmail: { url: "/verify-email" },
  resetPassword: { url: `/reset-password` },
  signin: { url: "/login" },
  home: { url: "/" },
  aboutUs: { url: "/about-us" },
  education: { url: "/education" },
  FAQs: { url: "/FAQs" },
  privacyPolicy: { url: "/privacy-policy" },
  blog: { url: "https://blog.albantsho.com/" },
  oneBlog: { url: (slug: string) => `/blog/${slug}` },
  iDraft: { url: "/iDraft" },
  iDraftTermsAndConditions: { url: "/iDraft/terms-and-conditions" },
  termsAndCondition: { url: "/terms-and-conditions" },
  marketplace: { url: "/marketplace" },
  marketplaceTabs: { url: (query: string, page?: string) => `/marketplace${query}${page}` },
  marketplaceOneScript: { url: (id: string) => `/marketplace/${id}`,pathname:`/marketplace/` },
  marketPlaceSubscription: { url: "/marketplace/subscription" },
  marketPlaceSubscriptionSuccessful: { url: (transaction_id: string) => `/marketplace/subscription/${transaction_id}`, },
  abstract: { url: (id: string) => `/abstract/${id}`,pathname:`/abstract/` },
  scriptPreview: { url: (id: string) => `/abstract/preview/${id}` },
  profile: { url: "/profile" },
  welcome: { url: "/welcome" },
  scriptWriting: { url: "/script-writing" },
  dashboard: { url: "/dashboard" },
  writerDashboard: { url: "/dashboard/writer" },
  listingsDashboard: { url: "/dashboard/writer/listings" },
  listingsDashboardTabs: { url: (query: string) => `/dashboard/writer/listings${query}` },
  listingsOneScript: { url: (id: string) => `/dashboard/writer/listings/${id}` },
  listingsBidScript: { url: (id: string, bidId: string) => `/dashboard/writer/listings/${id}/bids/${bidId}` },
  projectsDashboard: { url: `/dashboard/writer/projects` },
  projectsDashboardTabs: { url: (query: string) => `/dashboard/writer/projects${query}` },
  reviewsDashboard: { url: "/dashboard/writer/reviews" },
  oneReviewInformation: { url: (id: string) => `/dashboard/writer/reviews/${id}` },
  reviewsFilterScripts: { url: (query: string) => `/dashboard/writer/reviews${query}` },
  reviewsPaymentSuccessful: { url: (transaction_id: string) => `/dashboard/writer/reviews/payment-successful/${transaction_id}` },
  reviewsPlans: { url: (id: string) => `/dashboard/writer/reviews/plans/${id}`, },
  reviewsSummary: { url: (id: string, query: string) => `/dashboard/writer/reviews/summary/${id}${query}` },
  reviewerDashboard: { url: "/dashboard/reviewer" },
  reviewerDashboardPreviewTypeA: { url: (id: string) => `/dashboard/reviewer/${id}/preview/typeA` },
  reviewerDashboardPreviewTypeB: { url: (id: string) => `/dashboard/reviewer/${id}/preview/typeB` },
  reviewerDashboardQuestionnaireTypeA: { url: (id: string) => `/dashboard/reviewer/${id}/questionnaire/typeA` },
  reviewerDashboardQuestionnaireTypeB: { url: (id: string) => `/dashboard/reviewer/${id}/questionnaire/typeB` },
  producerDashboard: { url: "/dashboard/producer" },
  scriptsDashboardTabs: { url: (query: string) => `/dashboard/producer${query}` },
  adminDashboard: { url: "/dashboard/admin" },
  blogsAdminDashboard: { url: `/dashboard/admin/blogs` },
  blogsAdminDashboardTabs: { url: (query: string, page?: string) => `/dashboard/admin/blogs${query}${page}` },
  editBlogAdminDashboard: { url: (slug: string) => `/dashboard/admin/blogs/edit-blog/${slug}` },
  createBlogAdminDashboard: { url: "/dashboard/admin/blogs/add-blog" },
  usersAdminDashboard: { url: `/dashboard/admin/users` },
  userAdminDashboard: { url: (id: string) => `/dashboard/admin/users/${id}` },
  nftAdminDashboard: { url: `/dashboard/admin/nft` },
  contactsAdminDashboard: { url: `/dashboard/admin/contacts` },
  contactsAdminDashboardTabs: { url: (query: string, page?: string) => `/dashboard/admin/contacts${query}${page}` },
  withdrawsAdminDashboard: { url: `/dashboard/admin/withdraws` },
  withdrawsAdminDashboardTabs: { url: (query: string) => `/dashboard/admin/withdraws${query}` },
  reviewersAdminDashboard: { url: `/dashboard/admin/reviewers` },
  reviewerAdminDashboard: { url: (id: string) => `/dashboard/admin/reviewers/${id}` },
  reviewersAdminDashboardTabs: { url: (query: string) => `/dashboard/admin/reviewers${query}` },
  wallet: { url: "/wallet" },
  withdrawWallet: { url: "/wallet/withdraw" },
  helpWallet: { url: "/wallet/help" },
  paymentHistoryWallet: { url: "/wallet/payment-history" },
  withdrawHistoryWallet: { url: "/wallet/withdraw-history" },
  withdrawVerifyWallet: { url: (withdrawId: string) => `/wallet/withdraw/verify-otp/${withdrawId}` },
  withdrawSuccessfulWallet: { url: (transactionId: string) => `/wallet/withdraw/${transactionId}` },
  depositWallet: { url: "/wallet/deposit" },
  titleScript: { url: (id: string) => `/script/title/${id}` },
  script: { url: (id: string) => `/script/${id}`,pathname:`/script/` },
  scriptWritingTabs: { url: (id: string, query: string) => `/script/${id}${query}` },
  invites: { url: "/invites" },
  notfound: { url: "/404" },
  aiEditor: { url: "/ai" },
  aiAssistant: { url: "/ai/assistant" },
};

export default routes;