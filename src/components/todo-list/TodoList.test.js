import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "helpers/renderWithProviders";
import TodoList from "./TodoList";

describe("Todo list", () => {
  it("should render without todos", async () => {
    renderWithProviders(<TodoList />);
  });

  it("should render given message", async () => {
    const customMessage = "custom message";
    renderWithProviders(<TodoList message={customMessage} />);
    await screen.findByText(customMessage);
  });

  it("should render all given todos", async () => {
    const todos = [
      { id: 0, value: "done todo", done: true },
      { id: 1, value: "undone todo", done: true },
    ];
    renderWithProviders(<TodoList todos={todos} />);
    const todosList = await screen.getByTestId("todo-list");
    expect(todosList.children.length).toBe(2);
  });
});
