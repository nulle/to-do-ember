import { tracked } from '@glimmer/tracking';

export default class ToDo {

  constructor(title: string) {
    this.title = title;
  }

  @tracked title: string;

}
