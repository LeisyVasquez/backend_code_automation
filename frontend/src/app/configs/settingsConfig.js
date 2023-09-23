import themesConfig from "app/configs/themesConfig";
import i18n from "../../i18n";

const settingsConfig = {
  layout: {
    style: "layout1",
    config: {
      mode: "container",
      containerWidth: 1570,
      navbar: {
        display: true,
        style: "style-2",
        folded: true,
        position: "left",
      },
      toolbar: {
        display: true,
        style: "fixed",
        position: "below",
      },
      footer: {
        display: false,
        style: "fixed",
      },
      leftSidePanel: {
        display: true,
      },
      rightSidePanel: {
        display: true,
      },
    },
  },
  customScrollbars: true,
  direction: i18n.dir(i18n.options.lng) || "ltr", // rtl, ltr
  theme: {
    main: themesConfig.default1,
    navbar: themesConfig.default1,
    toolbar: themesConfig.default1,
    footer: themesConfig.default1,
  },
  /*
   To make whole app auth protected by default set defaultAuth:['admin','staff','user']
   To make whole app accessible without authorization by default set defaultAuth: null
   *** The individual route configs which has auth option won't be overridden.
   */
  defaultAuth: ["admin"],
  /*
    Default redirect url for the logged-in user,
   */
  loginRedirectUrl: "/",
};

export default settingsConfig;
