import Component from '@glimmer/component';
import { action } from '@ember/object';

import ToDo from '../../models-custom/to-do';

interface Args {
  item: ToDo;
  deleteItem: (item: ToDo) => Promise<void>;
}

export default class ToDoItemComponent extends Component<Args> {

  isDeleting = false;

  @action
  async deleteItem() {

    if (this.isDeleting) {
      return;
    }

    this.isDeleting = true;
    await this.args.deleteItem(this.args.item);
    this.isDeleting = false;
  }

}
