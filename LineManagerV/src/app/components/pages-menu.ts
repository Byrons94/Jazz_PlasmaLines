import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Administrador de líneas',
    icon: 'home-outline',
    link: '/components/dashboard',
    home: true,
  },
  {
    title: 'Usuarios',
    icon: 'people-outline',
    link: '/components/dashboard'
  },
  {
    title: 'Salir',
    icon: 'corner-down-left-outline',
    link: '/auth/login'
  },
];
