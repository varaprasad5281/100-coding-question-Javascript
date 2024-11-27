export const carrying = (...args) => {
  if (typeof args[0] === 'number') {
    if (args.length === 2 && typeof args[1] === 'number') {
      return args[0] + args[1];
    } else if (args.length === 1) {
      return (secondArg) => {
        if (typeof secondArg === 'number') {
          return args[0] + secondArg;
        }
      };
    }
  }
  return undefined;
};
