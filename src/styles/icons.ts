import styled, { css } from "styled-components";
import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  IconProps,
} from "phosphor-react";

const defaultIconStyle = css`
  font-size: 1rem;
  color: ${({ theme }) => theme.dynamic.background};
`;

const defaultFilledIcon: IconProps = {
  weight: "fill",
};

export const ShoppingCartIcon = styled(ShoppingCart).attrs(
  () => defaultFilledIcon
)`
  ${defaultIconStyle}
`;

export const TimerIcon = styled(Timer).attrs(() => defaultFilledIcon)`
  ${defaultIconStyle}
`;

export const PackageIcon = styled(Package).attrs(() => defaultFilledIcon)`
  ${defaultIconStyle}
`;

export const CoffeeIcon = styled(Coffee).attrs(() => defaultFilledIcon)`
  ${defaultIconStyle}
`;
