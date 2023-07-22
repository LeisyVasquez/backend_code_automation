import i18next from 'i18next';
import es from './navigation-i18n/es';


i18next.addResourceBundle('es', 'navigation', es);

const navigationConfig = [
  {
    id: 'example-component',
    // title: 'Example',
    // translate: 'EXAMPLE',
    title: 'Principal',
    translate: 'Principal',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'example',
  },
  {
    id: 'apps',
    title: 'Aplicaciones',
    subtitle: 'no se que poner aqui',
    type: 'group',
    icon: 'heroicons-outline:cube',
    translate: 'APPLICATIONS',
    children: [
    
      {
        id: 'apps.ecommerce',
        title: 'Proyectos',
        type: 'collapse',
        icon: 'heroicons-outline:clipboard-check',
        translate: 'Proyectos',
        children: [
          {
            id: 'e-commerce-products',
            title: 'Visualizacion de proyectos',
            type: 'item',
            url: 'apps/e-commerce/products',
            end: true,
          },
          {
            id: 'e-commerce-product-detail',
            title: 'Product Detail',
            type: 'item',
            url: 'apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
          },
          {
            id: 'e-commerce-new-product',
            title: 'Nuevo proyecto',
            type: 'item',
            url: 'apps/e-commerce/products/new',
          },
       
        ],
      },
     
    ],
  },
];

export default navigationConfig;
