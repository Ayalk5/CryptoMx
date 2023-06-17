import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Inicio } from './inicio';
import { Segunda } from './segunda';

const routes = [{ path: '/', Page: Home },{ path: '/inicio', Page: Inicio },{ path: '/segunda', Page: Segunda}];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
