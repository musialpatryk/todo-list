import React from "react";
import Todos from "./Todos";
import { screen } from "@testing-library/react";
import { render } from "test-utils";

describe("Todos lists", () => {
  it("should render message when no todos provided", async () => {
    render(<Todos />);
    await screen.findByText("Type your first todo.");
  });

  it("shouldn't render any lists when no todos provided", async () => {
    render(<Todos />);
    expect(await screen.queryByText("Things to do:")).toBeNull();
    expect(await screen.queryByText("Done things:")).toBeNull();
  });
});
