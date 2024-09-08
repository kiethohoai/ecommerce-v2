import { useRoutes } from 'react-router-dom';

function Router({ allRoutes }) {
  const routes = useRoutes([...allRoutes]);
  console.log('🚀🚀🚀  routes=', routes);
  return routes;
}

export default Router;
