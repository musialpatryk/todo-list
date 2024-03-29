import React from "react";
import { screen } from "@testing-library/react";
import { render } from "test-utils";
import TodoList from "./TodoList";

describe("Todo list", () => {
  it("should render without todos", async () => {
    render(<TodoList />);
  });

  it("should render given message", async () => {
    const customMessage = "custom message";
    render(<TodoList message={customMessage} />);
    await screen.findByText(customMessage);
  });

  it("should render all given todos", async () => {
    const todos = [
      { id: 0, value: "done todo", done: true },
      { id: 1, value: "undone todo", done: true },
    ];
    render(<TodoList todos={todos} />);
    const todosList = await screen.getByTestId("todo-list");
    expect(todosList.children.length).toBe(2);
  });
});
