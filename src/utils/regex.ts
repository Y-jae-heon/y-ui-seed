export const phoneRegex = new RegExp(
  /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/
);

export const numberRegex = new RegExp(/^[0-9]$/);

export const emailRegex = new RegExp(
  /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
);

export function getNumberComma(num: number) {
  const returnString = num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return returnString;
}
