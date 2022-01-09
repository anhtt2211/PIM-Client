import LoginPage from 'pages/Login';

const guestRoutes = [
  {
    path: '/login',
    exact: true,
    page: () => <LoginPage />,
  },
];
export { guestRoutes };
