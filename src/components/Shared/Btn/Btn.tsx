import { buttonClasses } from "@mui/material";
import { styled } from "@mui/system";
import { forwardRef } from "react";
import LoadingButton, { type LoadingButtonProps } from "@mui/lab/LoadingButton";

/**
 * My Awesome Component
 *
 * @example
 * <Btn />
 *
 * @prop {string} text - The text to display
 */

const ButtonRoot = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ children, ...props }, ref) => (
    <LoadingButton
      {...props}
      variant="contained"
      disableRipple
      disableElevation
      ref={ref}
    >
      {children}
    </LoadingButton>
  )
);
ButtonRoot.displayName = "ButtonRoot";

const Btn = styled(ButtonRoot)`
  color: #fff;
  background-color: ${({ theme }) => theme.palette.primary[700]};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary[500]};
    color: #fff;
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.primary[900]};
    color: #fff;
  }

  &.${buttonClasses.disabled} {
    background-color: ${({ theme }) => theme.palette.primary[50]};
    color: #fff;
  }
`;

export default Btn;
