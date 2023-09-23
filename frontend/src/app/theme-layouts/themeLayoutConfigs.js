import i18next from "i18next";
import layout1 from "./layout1/Layout1Config";
import layout2 from "./layout2/Layout2Config";
import layout3 from "./layout3/Layout3Config";
import es from "./i18n/es";

i18next.addResourceBundle("es", "themeLayout", es);

const themeLayoutConfigs = {
  layout1,
  layout2,
  layout3,
};

export default themeLayoutConfigs;
