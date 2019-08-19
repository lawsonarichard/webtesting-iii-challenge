import React from "react";
import { render } from "react-testing-library";
import Dashboard from "../dashboard/Dashboard";

describe("<Dashboard />", () => {
  it("should display controls", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
  });
});
