import i18next from "i18next";
import es from "./i18n/es";
import SignOutPage from "./SignOutPage";

i18next.addResourceBundle("es", "signIn", es);

const SignOutConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: null,
  routes: [
    {
      path: "sign-out",
      element: <SignOutPage />,
    },
  ],
};

export default SignOutConfig;
