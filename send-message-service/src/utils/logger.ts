export class Logger {
  static info = (message: string) => {
    console.info(message);
  };

  static warn = (message: string) => {
    console.warn(message);
  };

  static error = (message: string) => {
    console.error(message);
  };

  static debug = (message: string) => {
    console.debug(message);
  };
}

