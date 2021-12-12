import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: 'dashboard',
    title: 'Κεντρικό μενού',
    translate: 'MENU.DASHBOARD',
    type: 'item',
    icon: 'home',
    url: 'dashboard/admin-dashboard',
  },
  // App
  {
    id: 'app',
    type: 'section',
    title: 'Περιεχόμενα',
    translate: 'MENU.APP',
    children: [
      {
        id: 'beneficiary',
        title: 'Ωφελούμενοι',
        translate: 'MENU.APP.BENEFICIARY.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'user',
        children: [
          {
            id: 'beneficiary-list',
            title: 'Λίστα',
            translate: 'MENU.APP.BENEFICIARY.REGISTER.LIST',
            type: 'item',
            role: ['Admin'],
            icon: 'circle',
            url: 'app/beneficiary/list'
          },
          {
            id: 'beneficiary-add',
            title: 'Προσθήκη',
            translate: 'MENU.APP.BENEFICIARY.REGISTER.ADD',
            type: 'item',
            role: ['Admin'],
            icon: 'circle',
            url: 'app/beneficiary/add'
          },
          {
            id: 'beneficiary-preview',
            title: 'Προσθήκη',
            translate: 'MENU.APP.BENEFICIARY.REGISTER.PREVIEW',
            type: 'item',
            role: ['User'],
            icon: 'circle',
            url: 'app/beneficiary/preview'
          }
        ]
      },
      {
        id: 'benefactor',
        title: 'Δωρητές',
        translate: 'MENU.APP.BENEFACTOR.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'gift',
        children: [
          {
            id: 'benefactor-list',
            title: 'Λίστα',
            translate: 'MENU.APP.BENEFACTOR.REGISTER.LIST',
            type: 'item',
            role: ['Admin'],
            icon: 'circle',
            url: 'app/benefactor/list'
          },
          {
            id: 'benefactor-add',
            title: 'Προσθήκη',
            translate: 'MENU.APP.BENEFACTOR.REGISTER.ADD',
            type: 'item',
            icon: 'circle',
            role: ['Admin'],
            url: 'app/benefactor/add'
          },
          {
            id: 'benefactor-preview',
            title: 'Προβολή',
            translate: 'MENU.APP.BENEFACTOR.REGISTER.PREVIEW',
            type: 'item',
            icon: 'circle',
            role: ['Provider'],
            url: 'app/benefactor/preview'
          }
        ]
      },
      {
        id: 'contributor',
        title: 'Χορηγοί',
        translate: 'MENU.APP.CONTRIBUTOR.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'dollar-sign',
        children: [
          {
            id: 'contributor-list',
            title: 'Λίστα',
            translate: 'MENU.APP.CONTRIBUTOR.REGISTER.LIST',
            type: 'item',
            icon: 'circle',
            role: ['Admin'],
            url: 'app/contributor/list'
          },
          {
            id: 'contributor-add',
            title: 'Προσθήκη',
            translate: 'MENU.APP.CONTRIBUTOR.REGISTER.ADD',
            type: 'item',
            icon: 'circle',
            role: ['Admin'],
            url: 'app/contributor/add'
          },
          {
            id: 'contributor-preview',
            title: 'Προβολή',
            translate: 'MENU.APP.CONTRIBUTOR.REGISTER.PREVIEW',
            type: 'item',
            icon: 'circle',
            role: ['Provider'],
            url: 'app/contributor/preview'
          }
        ]
      },
      {
        id: 'supplier',
        title: 'Προμηθευτές',
        translate: 'MENU.APP.SUPPLIER.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'shopping-bag',
        children: [
          {
            id: 'supplier-list',
            title: 'Λίστα',
            translate: 'MENU.APP.SUPPLIER.REGISTER.LIST',
            type: 'item',
            icon: 'circle',
            role: ['Admin'],
            url: 'app/supplier/list'
          },
          {
            id: 'supplier-add',
            title: 'Προσθήκη',
            translate: 'MENU.APP.SUPPLIER.REGISTER.ADD',
            type: 'item',
            icon: 'circle',
            role: ['Admin'],
            url: 'app/supplier/add'
          },
          {
            id: 'supplier-preview',
            title: 'Προβολή',
            translate: 'MENU.APP.SUPPLIER.REGISTER.PREVIEW',
            type: 'item',
            icon: 'circle',
            role: ['Provider'],
            url: 'app/supplier/preview'
          }
        ]
      }
    ]
  }
];
