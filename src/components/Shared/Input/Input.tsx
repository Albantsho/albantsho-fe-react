import {
  inputAdornmentClasses,
  outlinedInputClasses,
  OutlinedTextFieldProps,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { styled } from "@mui/system";
import { forwardRef } from "react";

const RootInput = forwardRef<HTMLInputElement, OutlinedTextFieldProps>(
  ({ size, ...props }, ref) => {
    return <TextField {...props} size={size ? size : "small"} ref={ref} />;
  }
);

const Input = styled(RootInput)`
  .${outlinedInputClasses.root} {
    color: ${({ theme }) => theme.palette.neutral[700]};

    &:hover {
      .${outlinedInputClasses.notchedOutline} {
        border-color: ${({ theme }) => theme.palette.tinted[300]};
      }
    }

    &.${outlinedInputClasses.focused} {
      box-shadow: 1px 5px 14px 0px #7953b533;
      .${outlinedInputClasses.notchedOutline} {
        border-color: ${({ theme }) => theme.palette.primary[700]};
      }
    }

    .${outlinedInputClasses.input} {
      &::placeholder {
        color: ${({ theme }) => theme.palette.tinted[400]};
        opacity: 1;
      }

      &:-ms-input-placeholder {
        color: ${({ theme }) => theme.palette.tinted[400]};
      }

      &::-ms-input-placeholder {
        color: ${({ theme }) => theme.palette.tinted[400]};
      }
    }

    &.${outlinedInputClasses.sizeSmall} {
      .${outlinedInputClasses.notchedOutline} {
        border-width: 1px;
      }
    }

    .${outlinedInputClasses.notchedOutline} {
      border: 3px solid ${({ theme }) => theme.palette.tinted[100]};
      border-radius: 8px;
    }

    &.${outlinedInputClasses.error} {
      .${outlinedInputClasses.notchedOutline} {
        border-color: ${({ theme }) => theme.palette.error[500]};
      }
    }

    &.${outlinedInputClasses.disabled} {
      color: ${({ theme }) => theme.palette.neutral[100]};

      .${outlinedInputClasses.notchedOutline} {
        border-color: ${({ theme }) => theme.palette.tinted[100]};
      }

      .${inputAdornmentClasses.root} {
        color: ${({ theme }) => theme.palette.neutral[100]};
      }
    }

    .${inputAdornmentClasses.root} {
      color: ${({ theme }) => theme.palette.primary[700]};
    }
  }
`;

export default Input;
