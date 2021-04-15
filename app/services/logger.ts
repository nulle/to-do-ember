import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoggerService extends Service {

  @tracked loggedCount = 0;

  log(message: string): void {
    console.log(message);
    this.loggedCount++;
  }

}
