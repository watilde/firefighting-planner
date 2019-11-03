import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

afterEach(cleanup);

describe("/dashboard", () => {
  it("should renders Header", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <App />
      </MemoryRouter>
    );
    expect(getByText("Try Firefighting planner")).toBeInTheDocument();
  });
});
