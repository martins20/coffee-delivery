import {
  HomePageContainer,
  FirstHomeSection,
  SecondHomeSection,
  RoundedIconSection,
} from "./styles";
import {
  ShoppingCartIcon,
  PackageIcon,
  TimerIcon,
  CoffeeIcon,
} from "../../styles/icons";
import { useTheme } from "../../hooks/theme";

import homePageCoffeImage from "../../public/assets/cofe-image-home-page.png";
import backgroundLayer from "../../public/assets/home-background-layers.png";

export const HomePage = () => {
  const { colors } = useTheme();

  return (
    <HomePageContainer>
      <FirstHomeSection>
        <section>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <small>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </small>
          </header>
          <footer>
            <section>
              <RoundedIconSection color={colors.fixed.yellow_dark}>
                <ShoppingCartIcon />
              </RoundedIconSection>
              <p>Compra simples e segura</p>
            </section>
            <section>
              <RoundedIconSection color={colors.dynamic.text}>
                <PackageIcon />
              </RoundedIconSection>
              <p>Embalagem mantém o café intacto</p>
            </section>
            <section>
              <RoundedIconSection color={colors.fixed.yellow}>
                <TimerIcon />
              </RoundedIconSection>
              <p>Entrega rápida e rastreada</p>
            </section>
            <section>
              <RoundedIconSection color={colors.fixed.purple}>
                <CoffeeIcon />
              </RoundedIconSection>
              <p>O café chega fresquinho até você</p>
            </section>
          </footer>
        </section>
        <img
          src={homePageCoffeImage}
          alt="Um compo branco de café com etiqueta preta ao lado de varios grãos de cafe, com um fundo amarelo"
          draggable={false}
        />
        <img src={backgroundLayer} id="background-layer" draggable={false} />
      </FirstHomeSection>

      <SecondHomeSection>
        <h1>Nossos cafés</h1>
      </SecondHomeSection>
    </HomePageContainer>
  );
};
