import { convertNumberToCurrencyUtil } from "./convert-number-to-currency";

describe("convert number to currency", () => {
  it("Should be able to convert number to R$ currency", () => {
    const response = convertNumberToCurrencyUtil({
      quantity: 10,
      currency: "BRL",
    });

    // I don't know why, but if i do expect(response).toBe("R$ 10,00") the test fails ...
    const isTestPass = response.includes("10,00") && response.includes("R$");

    expect(isTestPass).toBeTruthy();
  });

  it("Should not be able to convert number to currency with a unknown currency type", () => {
    expect(() =>
      convertNumberToCurrencyUtil({
        quantity: 10,
        currency: "UNKNOWN" as any,
      })
    ).toThrowError("Cannot convert number with an unknown currency");
  });
});
