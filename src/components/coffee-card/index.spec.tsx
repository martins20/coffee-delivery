import { CoffeeCardComponent as Sut } from ".";
import { CoffeeDTO } from "../../dtos/coffee";
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from "../../test/lib/testing-library-react";

let sut: RenderResult;

const coffeeData: CoffeeDTO = {
  id: "some-coffee-id",
  name: "Doe's Coffee",
  description: "A simple coffee",
  price: 10.4,
  types: ["With Milk", "Special"],
};

const mockHandleAddCartIntoCart = vi.fn();
describe("CoffeeCard", () => {
  beforeEach(() => {
    sut = render(
      <Sut
        data={coffeeData}
        handleAddCoffeeIntoCart={mockHandleAddCartIntoCart}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Should have all data passed from props displayed into screen", () => {
    const { queryByText } = sut;

    const coffeeTitleElement = queryByText(coffeeData.name);
    const coffeeDescription = queryByText(coffeeData.description);
    const coffeePriceElement = queryByText("R$ 10,40");

    coffeeData.types.map((type) => {
      const coffeeTypeElement = queryByText(type);

      expect(coffeeTypeElement).toBeTruthy();
    });

    expect(coffeeTitleElement).toBeTruthy();
    expect(coffeeDescription).toBeTruthy();
    expect(coffeePriceElement).toBeTruthy();
  });

  it("Should call addToCart callback when user clicks into cart button", () => {
    const { getByTestId } = sut;

    const addToCartElement = getByTestId(`add-to-cart_${coffeeData.id}`);

    fireEvent.click(addToCartElement);

    expect(mockHandleAddCartIntoCart).toHaveBeenCalledWith({
      data: coffeeData,
      quantity: 1,
    });
  });
});
