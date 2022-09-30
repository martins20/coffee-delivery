export interface ConvertNumberToCurrencyUtilParams {
  quantity: number;
  currency: "BRL";
}

export const convertNumberToCurrencyUtil = ({
  quantity,
  currency,
}: ConvertNumberToCurrencyUtilParams): string => {
  if (currency !== "BRL")
    throw new Error("Cannot convert number with an unknown currency");

  return quantity.toLocaleString("pt-BR", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    minimumIntegerDigits: 2,
  });
};
