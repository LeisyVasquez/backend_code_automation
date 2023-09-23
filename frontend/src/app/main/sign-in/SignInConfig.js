import i18next from "i18next";
import es from "./i18n/es";
import SignInPage from "./SignInPage";
import authRoles from "../../auth/authRoles";

i18next.addResourceBundle("es", "signIn", es);

const SignInConfig = {
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
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: "sign-in",
      element: <SignInPage />,
    },
  ],
};

export default SignInConfig;
