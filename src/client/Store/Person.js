import { action, computed, observable } from 'mobx';

class Person {
  @observable firstName = '';

  @action setFirstName(firstName) {
    this.firstName = firstName;
  }

  @observable lastName = '';

  @action setLastName(lastName) {
    this.lastName = lastName;
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Person;
