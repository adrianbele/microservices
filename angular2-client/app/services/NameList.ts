export class NamesList {
  names: Array<string>;
  constructor() {
    this.names = ['Dishes', 'Groceries', 'Laundry', 'Train'];
  }
  get() {
    return this.names;
  }
  add(value) {
    this.names.push(value);
  }
}
