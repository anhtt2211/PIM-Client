import './App.less';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import { adminRoutes, adminMenuItems } from 'routes/AdminRoutes';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import GuestLayout from './GuestLayout';
import { guestRoutes } from 'routes/GuestRoutes';
import MainLayout from './MainLayout';

function App() {
  const renderRoutes = () => {
    return <MainLayout routes={adminRoutes} menuItems={adminMenuItems} />;
  };

  return (
    <ConfigProvider locale={enUS}>
      <Router>
        <Switch>
          <Route path="/login">
            <GuestLayout routes={guestRoutes} />
          </Route>
          <Route path="/" render={renderRoutes} />
        </Switch>
        {/* <Admin routes={adminRoutes} menuItems={adminMenuItems} /> */}
      </Router>
    </ConfigProvider>
  );
}

export default App;
