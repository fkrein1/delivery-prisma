import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { ClientClientController } from './modules/clients/useCases/createClient/CreateClientController';


const routes = Router();

const clientClientController = new ClientClientController();
const authenticateClientController = new AuthenticateClientController()

routes.post('/client', clientClientController.handle);
routes.post('/authenticate/client', authenticateClientController.handle)

export default routes;
