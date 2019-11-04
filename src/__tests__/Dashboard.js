import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { StoreProvider } from "../store/configureStore";
import App from "../App";

afterEach(cleanup);

describe("/dashboard", () => {
  it("should renders Header", () => {
    const { getByText } = render(
      <StoreProvider>
        <MemoryRouter initialEntries={["/dashboard"]} initialIndex={0}>
          <Route component={props => <App {...props} />} path="/dashboard" />
        </MemoryRouter>
      </StoreProvider>
    );
    expect(getByText("Firefighting planner")).toBeInTheDocument();
  });
});
