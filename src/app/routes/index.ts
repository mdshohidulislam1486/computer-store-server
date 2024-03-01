import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.routes';
import { ComputerRoutes } from '../modules/product/product.routes';
import { SoldItmeRoutes } from '../modules/soldProduct/soldproduct-route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/computer',
    route: ComputerRoutes,
  },
  {
    path: '/sell',
    route: SoldItmeRoutes,
  },
  {
    path: '/service',
    route: SoldItmeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
