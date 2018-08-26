/**
 * Example Mobx store intended to show a basic usage.
 */

import { observable } from 'mobx';

import Person from './Person';

class PersonStore {
  @observable person = new Person();
}

export default PersonStore;
