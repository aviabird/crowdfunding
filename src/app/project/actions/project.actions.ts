export class ProjectActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';
  static RESET = 'RESET';

  increment() {
    return { type: ProjectActions.INCREMENT };
  }

  decrement() {
    return { type: ProjectActions.DECREMENT };
  }

  reset() {
    return { type: ProjectActions.RESET };
  }

}
