import { Button, buttonClasses, type ButtonProps } from "@mui/material";
import { styled } from "@mui/system";
import { forwardRef } from "react";

const ButtonRoot = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <Button
      {...props}
      variant="contained"
      disableRipple
      disableElevation
      ref={ref}
    >
      {children}
    </Button>
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
