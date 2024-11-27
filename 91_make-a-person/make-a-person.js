export class Person {
  constructor(fullName) {
    this.fullName = fullName;
  }

  getFirstName() {
    return this.fullName.split(' ')[0];
  }

  getLastName() {
    return this.fullName.split(' ')[1];
  }

  getFullName() {
    return this.fullName;
  }

  setFirstName(first) {
    const lastName = this.getLastName();
    this.fullName = `${first} ${lastName}`;
  }

  setLastName(last) {
    const firstName = this.getFirstName();
    this.fullName = `${firstName} ${last}`;
  }

  setFullName(newFullName) {
    this.fullName = newFullName;
  }
}
