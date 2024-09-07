import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ion:layers-outline',
      keepAlive: true,
      order: 1000,
      title: $t('page.examples.title'),
    },
    name: 'Examples',
    path: '/examples',
    children: [
      {
        name: 'ModalExample',
        path: '/examples/modal',
        component: () => import('#/views/examples/modal/index.vue'),
        meta: {
          title: $t('page.examples.modal.title'),
        },
      },
      {
        name: 'DrawerExample',
        path: '/examples/drawer',
        component: () => import('#/views/examples/drawer/index.vue'),
        meta: {
          title: $t('page.examples.drawer.title'),
        },
      },
      {
        name: 'EllipsisExample',
        path: '/examples/ellipsis',
        component: () => import('#/views/examples/ellipsis/index.vue'),
        meta: {
          title: $t('page.examples.ellipsis.title'),
        },
      },
      {
        name: 'FormExample',
        path: '/examples/form',
        component: () => import('#/views/examples/form/index.vue'),
        meta: {
          title: $t('page.examples.form.title'),
        },
      },
      {
        name: 'CaptchaExample',
        path: '/examples/captcha',
        component: () => import('#/views/examples/captcha/index.vue'),
        meta: {
          title: $t('page.examples.captcha.title'),
        },
      },
    ],
  },
];

export default routes;
