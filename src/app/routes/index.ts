import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.routes';
import { ComputerRoutes } from '../modules/product/product.routes';
import { SoldItmeRoutes } from '../modules/soldProduct/soldproduct-route';
import { PartServiceRoute } from '../modules/partsService/partService.routes';
import { OrderRoutes } from '../modules/order/order.routes';

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
    route: PartServiceRoute,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
