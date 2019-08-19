import React from "react";
import { render } from "react-testing-library";
import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";

describe("<Control/>", () => {
  it("checks if close gate button is enabled", () => {
    const { getByText } = render(<Controls closed={false} />);
    getByText(/close gate/i);
  });
  it("checks if lock gate is button disabled as gate is OPEN", () => {
    const { getByText } = render(<Controls locked={true} />);
    getByText(/lock gate/i);
  });
});
