import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

afterEach(cleanup);

describe("/", () => {
  it("should render welcome message", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(getByText("Try Firefighting planner")).toBeInTheDocument();
  });
});
