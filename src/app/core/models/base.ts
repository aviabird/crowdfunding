import { UUID } from 'angular2-uuid';

export class Base {

  get generate_uid() {
    return UUID.UUID();
  }
}
