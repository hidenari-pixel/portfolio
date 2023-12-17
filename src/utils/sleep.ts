export const sleep = async (sec: number) =>
  new Promise((r) => setTimeout(r, sec * 1000));
