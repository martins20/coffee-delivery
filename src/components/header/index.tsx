import { Link } from "react-router-dom";

import { HeaderContainer } from "./styles";

import logo from "../../public/assets/Logo.svg";

export const HeaderComponent = () => {
  return (
    <HeaderContainer data-testid="header-container">
      <Link to="/">
        <img
          data-testid="logo"
          src={logo}
          alt="Copo de café roxo do lado de letras escrito 'Coffee Delivery' em roxo"
        />
      </Link>
    </HeaderContainer>
  );
};
