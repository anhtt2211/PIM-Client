import { AppstoreOutlined, ShopOutlined } from '@ant-design/icons';
import Dashboard from 'pages/Dashboard';
import LoginPage from 'pages/Login';
import ProductPage from 'pages/Product';
import AddProductPage from 'pages/Product/AddProduct';
import EditProductPage from 'pages/Product/EditProduct';
import React from 'react';

const adminRoutes = [
  {
    path: '/',
    exact: true,
    page: () => <Dashboard />,
  },
  {
    path: '/login',
    exact: true,
    page: () => <LoginPage />,
  },
  {
    path: '/products',
    exact: true,
    page: () => <ProductPage />,
  },
  {
    path: '/products/add',
    exact: true,
    page: () => <AddProductPage />,
  },
  {
    path: '/products/edit/:id',
    exact: true,
    page: () => <EditProductPage />,
  },
];

const adminMenuItems = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      icon: <AppstoreOutlined />,
      component: <Dashboard />,
    },
    {
      name: 'Product',
      icon: <ShopOutlined />,
      routes: [
        {
          path: '/products/',
          name: 'Products list',
          component: <ProductPage />,
        },
        {
          path: '/products/add',
          name: 'Add product',
          component: <AddProductPage />,
        },
      ],
    },
  ],
};
export { adminRoutes, adminMenuItems };
