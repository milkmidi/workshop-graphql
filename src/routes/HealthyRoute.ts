import Route from './route';
import HelloworldController from '../controllers/HelloworldController';

export default class HealthyRoute extends Route {
  private authController = new HelloworldController();

  constructor() {
    super();
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.get('/login', this.authController.echo);
  }
}
