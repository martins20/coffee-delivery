import { ThemeContract, ThemeChoice } from "../contract/theme";
import { themeChoices } from "../../../themes";
import { ColorsDTO } from "../contract/colors";

export class ThemeImplementation implements ThemeContract {
  async getThemeColors(choice: ThemeChoice): Promise<ColorsDTO> {
    const isChoiceOneOfThemeChoices = Object.keys(themeChoices).some(
      (themeChoice) => choice === themeChoice
    );

    if (!isChoiceOneOfThemeChoices)
      throw new Error("Cannot load theme colors from a non existent theme");

    return themeChoices[choice];
  }
}
