import { Router } from 'express';
import { AuthenticateDeliveryManController } from './modules/account/useCases/atuthenticateDeliveryman/AuthenticateDeliveryManController';
import { AuthenticateClientController } from './modules/account/useCases/authenticateClient/AuthenticateClientController';
import { ClientClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliveryManController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliveryManController';

const routes = Router();

const createDeliveryManController = new CreateDeliveryManController();
const clientClientController = new ClientClientController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController()
routes.post('/client', clientClientController.handle);
routes.post('/authenticate/client', authenticateClientController.handle);
routes.post('/authenticate/deliveryman', authenticateDeliveryManController.handle);
routes.post('/deliveryman', createDeliveryManController.handle);

export default routes;
