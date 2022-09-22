import { ThemeImplementation as SUT } from "./theme";
import { themeChoices } from "../../../themes";

describe("Theme Service", () => {
  let sut: SUT;

  beforeEach(() => {
    sut = new SUT();
  });

  it("Should load colors from light theme", async () => {
    const lightThemeColors = await sut.getThemeColors("light");

    expect(lightThemeColors).toEqual(
      expect.objectContaining(themeChoices.light)
    );
  });

  it("Should not be able to  get theme colors from non existent theme choice", async () => {
    expect(sut.getThemeColors("unknown" as any)).rejects.toThrowError(
      "Cannot load theme colors from a non existent theme"
    );
  });
});
