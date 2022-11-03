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
  resetPassword: "/reset-password",
  scriptWriting: "/script-writing",
  signin: "/login",
  register: "/register",
  termsAndCondition: "/terms-and-conditions",
  verifyEmail: "/verify-email",
  blog: "/blog",
  iDraft: "/iDraft",
  iDraftTermsAndConditions: "/iDraft/terms-and-conditions",
  marketplace: "/marketplace",
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
  titleScript: "script/title",
};

export default routes;
