export default class IdNotFound extends Error {
  constructor(message : string) {
    super(message);
    this.message = message;
    this.name = 'Car not Found';
    this.stack = '404';
  }
}