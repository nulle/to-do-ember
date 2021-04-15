import Component from '@glimmer/component';
import { action } from '@ember/object';

import ToDo from '../../models-custom/to-do';

interface Args {
  item: ToDo;
  deleteItem: (item: ToDo) => void;
}

export default class ToDoItemComponent extends Component<Args> {

  @action
  deleteItem() {
    this.args.deleteItem(this.args.item);
  }

}
