import { createTheme } from "@mui/material/styles";

export const tokens = {
  onPrimary: "#440088",
  primaryContainer: "#5F12B5",
  onPrimaryContainer: "#EDDCFF",
  primaryFixed: "#EDDCFF",
  onPrimaryFixed: "#280056",
  primaryFixedDim: "#D7BAFF",
  onPrimaryFixedVariant: "#5F12B5",
  onSecondary: "#352D40",
  secondaryContainer: "#4C4357",
  onSecondaryContainer: "#EBDDF7",
  secondaryFixed: "#EBDDF7",
  onSecondaryFixed: "#20182A",
  secondaryFixedDim: "#CEC2DA",
  onSecondaryFixedVariant: "#4C4357",
  onTertiary: "#680012",
  tertiaryContainer: "#92001E",
  onTertiaryContainer: "#FFDAD8",
  tertiaryFixed: "#FFDAD8",
  onTertiaryFixed: "#410008",
  tertiaryFixedDim: "#FFB3B1",
  onTertiaryFixedVariant: "#92001E",
  error: "#FFB4AB",
  onError: "#690005",
  errorContainer: "#93000A",
  onErrorContainer: "#FFDAD6",
  outline: "#958E99",
  background: "#1D1B1E",
  onBackground: "#E7E1E6",
  surface: "#141316",
  onSurface: "#CAC5CA",
  surfaceVariant: "#4A454E",
  onSurfaceVariant: "#CBC4CF",
  inverseSurface: "#E7E1E6",
  inverseOnSurface: "#1D1B1E",
  inversePrimary: "#7837CF",
  shadow: "#000000",
  surfaceTint: "#D7BAFF",
  outlineVariant: "#4A454E",
  scrim: "#000000",
  surfaceContainerHighest: "#363438",
  surfaceContainerHigh: "#2B292D",
  surfaceContainer: "#211F22",
  surfaceContainerLow: "#1D1B1E",
  surfaceContainerLowest: "#0F0D11",
  surfaceBright: "#3B383C",
  surfaceDim: "#141316",
  grey: {
    10: "#e6e6e6",
    20: "#cccccc",
    30: "#b3b3b3",
    40: "#999999",
    50: "#808080",
    60: "#666666",
    70: "#4d4d4d",
    80: "#333333",
    90: "#1a1a1a",
  },
  primary: {
    0: "#000000",
    5: "#1A003C",
    10: "#280056",
    20: "#440088",
    25: "#5200A2",
    30: "#5F12B5",
    35: "#6C27C2",
    40: "#7837CF",
    50: "#9254EA",
    60: "#AC72FF",
    70: "#C197FF",
    80: "#D7BAFF",
    90: "#EDDCFF",
    95: "#F8EDFF",
    98: "#FEF7FF",
    99: "#FFFBFF",
    100: "#FFFFFF",
  },
  secondary: {
    0: "#000000",
    5: "#150D1F",
    10: "#20182A",
    20: "#352D40",
    25: "#40384B",
    30: "#4C4357",
    35: "#584F63",
    40: "#645A70",
    50: "#7D7389",
    60: "#978CA3",
    70: "#B2A7BF",
    80: "#CEC2DA",
    90: "#EBDDF7",
    95: "#F8EDFF",
    98: "#FEF7FF",
    99: "#FFFBFF",
    100: "#FFFFFF",
  },
  tertiary: {
    0: "#000000",
    5: "#2C0004",
    10: "#410008",
    20: "#680012",
    25: "#7D0018",
    30: "#92001E",
    35: "#A70925",
    40: "#B81C30",
    50: "#DB3845",
    60: "#FF535C",
    70: "#FF8889",
    80: "#FFB3B1",
    90: "#FFDAD8",
    95: "#FFEDEB",
    98: "#FFF8F7",
    99: "#FFFBFF",
    100: "#FFFFFF",
  },
  neutral: {
    0: "#000000",
    5: "#121014",
    10: "#1D1B1E",
    20: "#322F33",
    25: "#3D3A3E",
    30: "#49464A",
    35: "#545155",
    40: "#615D61",
    50: "linear-gradient(to right, #AB0F28, #3504A5)",
    60: "#948F94",
    70: "#AFAAAE",
    80: "#CAC5CA",
    90: "#E7E1E6",
    95: "#F5EFF4",
    98: "#FEF7FC",
    99: "#FFFBFF",
    100: "#FFFFFF",
  },
  neutralVariant: {
    0: "#000000",
    5: "#131017",
    10: "#1E1A22",
    20: "#332F37",
    25: "#3E3A42",
    30: "#4A454E",
    35: "#55515A",
    40: "#625C66",
    50: "#7B757F",
    60: "#958E99",
    70: "#B0A9B3",
    80: "#CBC4CF",
    90: "#E8E0EB",
    95: "#F6EEF9",
    98: "#FEF7FF",
    99: "#FFFBFF",
    100: "#FFFFFF",
  },
};
// mui theme settings
export const theme = createTheme({
  // add breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#7837CF",
    },
    secondary: {
      main: "#645A70",
    },
    tertiary: {
      main: "#B81C30",
    },
    neutral: {
      main: "linear-gradient(to right, #AB0F28, #3504A5)",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 50,
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 36,
      fontWeight: 600,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 500,
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  },
});
