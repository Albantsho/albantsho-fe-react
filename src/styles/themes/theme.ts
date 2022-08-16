import {
  createTheme,
  responsiveFontSizes,
  type TypographyVariant,
} from "@mui/material";
import type { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    "2xl": true;
  }

  interface TypographyVariants {
    display: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
  }

  interface Palette {
    neutral: ColorPartial;
    tinted: ColorPartial;
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
    tinted: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
  }
}

let theme = createTheme({
  palette: {
    neutral: {
      50: "#E8E7E9",
      100: "#D1CFD3",
      200: "#BAB7BE",
      300: "#A39FA8",
      400: "#8B8792",
      500: "#746F7C",
      600: "#5D5767",
      700: "#464051",
      800: "#2F283B",
      900: "#181025",
    },
    tinted: {
      50: "#EEEBF1",
      100: "#DCD8E4",
      200: "#CBC4D6",
      300: "#BAB1C8",
      400: "#A89DBA",
      500: "#978AAD",
      600: "#5D5767",
      700: "#523B76",
      800: "#634F84",
      900: "#523B76",
    },
    primary: {
      50: "#DDD4EC",
      300: "#BCA9DA",
      500: "#9A7EC7",
      700: "#7953B5",
      900: "#573195",
      main: "#7953B5",
      dark: "#573195",
    },
    secondary: {
      50: "#FFF3CD",
      300: "#FEE79B",
      500: "#FDDC6A",
      700: "#FDD038",
      900: "#DBB01E",
      main: "#FDD038",
      dark: "#DBB01E",
    },
    success: {
      50: "#E5FCF2",
      300: "#21ECAC",
      500: "#03B76F",
      700: "#007142",
      900: "#00422A",
    },
    warning: {
      50: "#FFFBEB",
      300: "#FCD34D",
      500: "#F59E0B",
      700: "#B45309",
      900: "#78350F",
    },
    error: {
      50: "#FFEDED",
      300: "#FF8A8A",
      500: "#F05656",
      700: "#D32D2D",
      900: "#830F0F",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Helvetica", "Arial", "sans-serif"].join(","),
    display: {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 4.5,
    },
    h1: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 4,
    },
    h2: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 3.5,
    },
    h3: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 3,
    },
    h4: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 2.5,
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 2,
    },
    h6: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1,
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
});

theme = responsiveFontSizes(theme, {
  variants: [
    "display",
    "body1",
    "body2",
    "button",
    "caption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "overline",
    "subtitle1",
    "subtitle2",
  ] as TypographyVariant[],
});

export default theme;
