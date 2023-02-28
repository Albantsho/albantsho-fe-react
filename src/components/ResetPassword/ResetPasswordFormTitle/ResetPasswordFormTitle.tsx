import { Typography } from "@mui/material";

const ResetPasswordFormTitle = () => {
  return (
    <div className="lg:mx-auto">
      <Typography
        variant="h3"
        color="primary.main"
        className="futura font-medium leading-none lg:max-w-[418px] mb-3 text-center"
      >
        Create New Password
      </Typography>
      <Typography
        variant="body1"
        className="text-[#484848] lg:max-w-[418px] text-center"
      >
        Your new password must be different from all other previously used
        passwords.
      </Typography>
    </div>
  );
};

export default ResetPasswordFormTitle;
