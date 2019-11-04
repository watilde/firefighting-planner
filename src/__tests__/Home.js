import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { StoreProvider } from "../store/configureStore";
import App from "../App";

afterEach(cleanup);

describe("/", () => {
  it("should render welcome message", () => {
    const { getByText } = render(
      <StoreProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Route component={props => <App {...props} />} path="/" />
        </MemoryRouter>
      </StoreProvider>
    );
    expect(getByText("Try Firefighting planner")).toBeInTheDocument();
  });
});
