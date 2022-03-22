export default class Team {
  constructor() {
    this.members = new Set();
    this.arrayMembers = [];
  }

  add(type) {
    return this.members.add(type);
  }

  addAll(...rest) {
    [...rest].forEach((type) => this.add(type));
  }

  toArray() {
    this.arrayMembers = [...this.members];
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
    return 0;
  }
}
