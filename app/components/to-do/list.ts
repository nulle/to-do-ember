import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { run } from '@ember/runloop';

import ToDo from '../../models-custom/to-do';

interface Args {}

export default class ToDoListComponent extends Component<Args> {

  @tracked toDos: ToDo[];
  @tracked input = '';
  @tracked isErrorShown = false;

  constructor(owner: unknown, args: Args) {
    super(owner, args);
    this.toDos = [
      new ToDo("clean the house"),
      new ToDo("buy milk")
    ];
  }

  showError(): void {
    this.isErrorShown = true;
    run.later(() => {
      this.isErrorShown = false;
    }, 3000);
  }

  @action
  deleteItem(item: ToDo) {
    this.toDos = this.toDos.filter((toDo) => {
      return item !== toDo;
    });
  }

  @action
  handleKeyPress(e: KeyboardEvent) {
    if (e.key === "Enter") {
      this.createNewToDoItem();
    }
  }

  @action
  createNewToDoItem() {
    if (!this.input) {
      this.showError();
      return;
    }
    this.toDos = this.toDos.concat(new ToDo(this.input));
    this.input = "";
  }

}
