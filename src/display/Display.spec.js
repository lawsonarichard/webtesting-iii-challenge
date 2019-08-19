import React from "react";
import { render } from "react-testing-library";
import Display from "./Display";

describe("<Display />", () => {
  it("green light means go", () => {
    const { getByText } = render(<Display />);
  });
});
