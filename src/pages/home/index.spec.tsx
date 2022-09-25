import { HomePage as Sut } from ".";
import {
  cleanup,
  render,
  RenderResult,
} from "../../test/lib/testing-library-react";

const headerText = "Encontre o café perfeito para qualquer hora do dia";

let sut: RenderResult;

describe("HomePage", () => {
  beforeEach(() => {
    sut = render(<Sut />);
  });

  afterEach(() => {
    cleanup();
  });

  it(`Should have an header with text '${headerText}'.`, () => {
    const { queryByText } = sut;

    const headingTextElement = queryByText(headerText);

    expect(headingTextElement).toBeTruthy();
  });

  it(`Should have list a list of coffes`, () => {
    const { queryByText } = sut;

    const coffeListTextElement = queryByText("Nossos cafés");

    expect(coffeListTextElement).toBeTruthy();
  });
});
