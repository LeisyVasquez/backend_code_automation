import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'apps.ecommerce',
    title: 'ECommerce',
    type: 'collapse',
    icon: 'feather:codepen',
    translate: 'Proyectos',
    children: [
      {
        id: 'e-commerce-products',
        title: 'Proyectos',
        type: 'item',
        url: 'apps/e-commerce/products',
        end: true,
      },
      {
        id: 'e-commerce-new-product',
        title: 'Nuevo proyecto',
        type: 'item',
        url: 'apps/e-commerce/products/new',
      }
    ],
  },
];

export default navigationConfig;
