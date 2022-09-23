import { AppProvider } from "./providers/app";

export const App = () => {
  return (
    <AppProvider>
      <h1>Hello World</h1>

      <small>Lorem Ipsum dolor sit amet</small>
    </AppProvider>
  );
};
