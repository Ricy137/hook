export const splitedId = (role: string) => {
  const splitedArray = role.split("-");
  return splitedArray[0];
};
