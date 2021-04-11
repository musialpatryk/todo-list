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
    const noTodos = [];
    render(<Todos todos={noTodos} />);

    expect(await screen.queryByText("Things to do:")).toBe(null);
    expect(await screen.queryByText("Done things:")).toBe(null);
  });
});
