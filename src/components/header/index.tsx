import { Link } from "react-router-dom";

import { HeaderContainer } from "./styles";

import logo from "../../public/assets/Logo.svg";
import { ShoppingCartIcon } from "../../styles/icons";
import { useTheme } from "../../hooks/theme";

export const HeaderComponent = () => {
  const { colors } = useTheme();

  return (
    <HeaderContainer data-testid="header-container">
      <Link to="/">
        <img
          data-testid="logo"
          src={logo}
          alt="Copo de café roxo do lado de letras escrito 'Coffee Delivery' em roxo"
        />
      </Link>

      <section>
        <button type="button">
          <ShoppingCartIcon
            color={colors.fixed.yellow_dark}
            data-testid="cart"
          />
        </button>
      </section>
    </HeaderContainer>
  );
};
