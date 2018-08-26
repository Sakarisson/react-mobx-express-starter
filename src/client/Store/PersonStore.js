/**
 * Example Mobx store intended to show a basic usage.
 */

import { computed, observable } from 'mobx';

class PersonStore {
  @observable firstName = '';

  @observable lastName = '';

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default PersonStore;
