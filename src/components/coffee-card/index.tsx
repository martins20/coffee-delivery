import { FC, useState } from "react";
import { CoffeeDTO } from "../../dtos/coffee";
import { ShoppingCartIcon } from "../../styles/icons";
import { convertNumberToCurrencyUtil } from "../../utils/convert-number-to-currency";

import { CoffeeCardContainer } from "./styles";

export interface HandleAddCartToCartParams {
  data: CoffeeDTO;
  quantity: number;
}

export interface CoffeeCardProps {
  data: CoffeeDTO;
  handleAddCoffeeIntoCart: (data: HandleAddCartToCartParams) => void;
}

export const CoffeeCardComponent: FC<CoffeeCardProps> = ({
  data,
  handleAddCoffeeIntoCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddIntoCart = () => {
    handleAddCoffeeIntoCart({
      data,
      quantity,
    });
  };

  return (
    <CoffeeCardContainer>
      <section>
        {data.types.map((type) => (
          <small key={type}>{type}</small>
        ))}
      </section>

      <h1>{data.name}</h1>

      <p>{data.description}</p>

      <footer>
        <b>
          {convertNumberToCurrencyUtil({
            quantity: data.price,
            currency: "BRL",
          })}
        </b>

        <section>
          <button
            type="button"
            data-testid={`add-to-cart_${data.id}`}
            onClick={handleAddIntoCart}
          >
            <ShoppingCartIcon />
          </button>
        </section>
      </footer>
    </CoffeeCardContainer>
  );
};
