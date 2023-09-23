import { fuseDark, skyBlue } from "@fuse/colors";
import { blueGrey } from "@mui/material/colors";

export const lightPaletteText = {
  primary: "rgb(17, 24, 39)",
  secondary: "rgb(107, 114, 128)",
  disabled: "rgb(149, 156, 169)",
};

export const darkPaletteText = {
  primary: "rgb(255,255,255)",
  secondary: "rgb(148, 163, 184)",
  disabled: "rgb(156, 163, 175)",
};

const themesConfig = {
  default1: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: "#64748b",
        main: "#1e293b",
        dark: "#0f172a",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#818cf8",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#f1f5f9",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  default2: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: "#64748b",
        main: "#1e293b",
        dark: "#0f172a",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#818cf8",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#f1f5f9",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  default3: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: "#64748b",
        main: "#1e293b",
        dark: "#0f172a",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#818cf8",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#f1f5f9",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  defaultDark1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: "#64748b",
        main: "#334155",
        dark: "#0f172a",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#818cf8",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#1e293b",
        default: "#111827",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
      status: {
        danger: "orange",
      },
    },
  },
  defaultDark2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: "#64748b",
        main: "#334155",
        dark: "#0f172a",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#818cf8",
        main: "#04ccfc ",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#1e293b",
        default: "#111827",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
      status: {
        danger: "orange",
      },
    },
  },
  defaultDark3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: "#64748b",
        main: "#334155",
        dark: "#0f172a",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#818cf8",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#1e293b",
        default: "#111827",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
      status: {
        danger: "orange",
      },
    },
  },
  dark1_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C2C2C3",
        main: "#323338",
        dark: "#131417",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B8E1D9",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#262526",
        default: "#1E1D1E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark1_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C2C2C3",
        main: "#323338",
        dark: "#131417",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B8E1D9",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#262526",
        default: "#1E1D1E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark1_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C2C2C3",
        main: "#323338",
        dark: "#131417",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B8E1D9",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#262526",
        default: "#1E1D1E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark3_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C2C8D2",
        main: "#354968",
        dark: "#16213A",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#F4CFCA",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#23354E",
        default: "#1B2A3F",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark3_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C2C8D2",
        main: "#354968",
        dark: "#16213A",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#F4CFCA",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#23354E",
        default: "#1B2A3F",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark3_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C2C8D2",
        main: "#354968",
        dark: "#16213A",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#F4CFCA",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#23354E",
        default: "#1B2A3F",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark4_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CECADF",
        main: "#5A4E93",
        dark: "#2E2564",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B3EBD6",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#22184B",
        default: "#180F3D",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark4_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CECADF",
        main: "#5A4E93",
        dark: "#2E2564",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B3EBD6",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#22184B",
        default: "#180F3D",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark5_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CCD7E2",
        main: "#56789D",
        dark: "#2B486F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D7D3ED",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#465261",
        default: "#232931",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark5_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CCD7E2",
        main: "#56789D",
        dark: "#2B486F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D7D3ED",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#465261",
        default: "#232931",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark5_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CCD7E2",
        main: "#56789D",
        dark: "#2B486F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D7D3ED",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#465261",
        default: "#232931",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark6_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#FFC7CE",
        main: "#FF445D",
        dark: "#FF1F30",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B4E3FB",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#2F3438",
        default: "#25292E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark6_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#FFC7CE",
        main: "#FF445D",
        dark: "#FF1F30",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B4E3FB",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#2F3438",
        default: "#25292E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark6_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#FFC7CE",
        main: "#FF445D",
        dark: "#FF1F30",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B4E3FB",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#2F3438",
        default: "#25292E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark7_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "FFECC5",
        main: "#FEBE3E",
        dark: "#FD991B",
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        light: "#FFC8C7",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#2A2E32",
        default: "#212529",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark7_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "FFECC5",
        main: "#FEBE3E",
        dark: "#FD991B",
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        light: "#FFC8C7",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#2A2E32",
        default: "#212529",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark7_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "FFECC5",
        main: "#FEBE3E",
        dark: "#FD991B",
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        light: "#FFC8C7",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#2A2E32",
        default: "#212529",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark8_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BEBFC8",
        main: "#252949",
        dark: "#0D0F21",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#CBD7FE",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#2D3159",
        default: "#202441",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark8_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BEBFC8",
        main: "#252949",
        dark: "#0D0F21",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#CBD7FE",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#2D3159",
        default: "#202441",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark8_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BEBFC8",
        main: "#252949",
        dark: "#0D0F21",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#CBD7FE",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#2D3159",
        default: "#202441",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark9_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BCC8CD",
        main: "#204657",
        dark: "#0B202C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B3EBC5",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#1C1E27",
        default: "#15171E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark9_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BCC8CD",
        main: "#204657",
        dark: "#0B202C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B3EBC5",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#1C1E27",
        default: "#15171E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark9_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BCC8CD",
        main: "#204657",
        dark: "#0B202C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B3EBC5",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#1C1E27",
        default: "#15171E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark10_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C3C2D2",
        main: "#36336A",
        dark: "#16143C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D6CEFC",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#2D2A5D",
        default: "#26244E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark10_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C3C2D2",
        main: "#36336A",
        dark: "#16143C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D6CEFC",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#2D2A5D",
        default: "#26244E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark10_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C3C2D2",
        main: "#36336A",
        dark: "#16143C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D6CEFC",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#2D2A5D",
        default: "#26244E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark11_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BFB7BF",
        main: "#2A0F29",
        dark: "#0F040F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D9B9C3",
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#200D1F",
        default: "#2D132C",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark11_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BFB7BF",
        main: "#2A0F29",
        dark: "#0F040F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D9B9C3",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#200D1F",
        default: "#2D132C",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark11_3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BFB7BF",
        main: "#2A0F29",
        dark: "#0F040F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D9B9C3",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#200D1F",
        default: "#2D132C",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark12_1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CCC3C8",
        main: "#543847",
        dark: "#291720",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#DFB8BD",
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#4D4351",
        default: "#27141F",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark12_2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CCC3C8",
        main: "#543847",
        dark: "#291720",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#DFB8BD",
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#4D4351",
        default: "#27141F",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  greyDark1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: fuseDark[200],
        main: fuseDark[700],
        dark: fuseDark[800],
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: skyBlue[100],
        main: "#fc6404",
        dark: "#c46021",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: blueGrey[700],
        default: blueGrey[900],
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  greyDark2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: fuseDark[200],
        main: fuseDark[700],
        dark: fuseDark[800],
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: skyBlue[100],
        main: "#04ccfc",
        dark: "#2f9bb5",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: blueGrey[700],
        default: blueGrey[900],
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  greyDark3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: fuseDark[200],
        main: fuseDark[700],
        dark: fuseDark[800],
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: skyBlue[100],
        main: "#34cc65 ",
        dark: "#48b56b",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: blueGrey[700],
        default: blueGrey[900],
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
};

export default themesConfig;
