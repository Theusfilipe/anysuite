export type Currency = "enDolar" | "brReal";

const currencies = {
    enDolar: "$",
    brReal: "R$",
  };

export const getCurrencyAdornment = (currencyCode: Currency) => {
    return currencies[currencyCode];
  }