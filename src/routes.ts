import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticatedClients';
import { ensureAuthenticateDeliveryMan } from './middlewares/ensureAuthenticateDeliveryMan';
import { AuthenticateDeliveryManController } from './modules/account/useCases/atuthenticateDeliveryman/AuthenticateDeliveryManController';
import { AuthenticateClientController } from './modules/account/useCases/authenticateClient/AuthenticateClientController';
import { ClientClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateDeliveryManController } from './modules/deliveries/useCases/updateDeliveryMan/UpdateDeliveryManController';
import { CreateDeliveryManController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliveryManController';

const routes = Router();

const createDeliveryManController = new CreateDeliveryManController();
const clientClientController = new ClientClientController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliveryManController =
  new AuthenticateDeliveryManController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliveryManController = new UpdateDeliveryManController();

routes.post('/client', clientClientController.handle);
routes.post('/client/authenticate', authenticateClientController.handle);

routes.post('/deliveryman', createDeliveryManController.handle);
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliveryManController.handle,
);

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handle,
);
routes.get(
  '/delivery/available',
  ensureAuthenticateDeliveryMan,
  findAllAvailableController.handle,
);
routes.put(
  '/delivery/updateDeliveryMan/:id',
  ensureAuthenticateDeliveryMan,
  updateDeliveryManController.handle,
);

export default routes;
