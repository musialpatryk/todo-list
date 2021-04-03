import React from "react";
import Todos from "./Todos";
import { renderWithProviders } from "helpers/renderWithProviders";
import { screen } from "@testing-library/react";

describe("Todos lists", () => {
  it("should render message when no todos provided", async () => {
    const noTodos = [];
    renderWithProviders(<Todos todos={noTodos} />);
    await screen.findByText("Type your first todo.");
  });

  it("shouldn't render any lists when no todos provided", async () => {
    const noTodos = [];
    renderWithProviders(<Todos todos={noTodos} />);

    expect(await screen.queryByText("Things to do:")).toBe(null);
    expect(await screen.queryByText("Done things:")).toBe(null);
  });

  it("shouldn't render message when todos provided", async () => {
    const todos = [{ id: 0, value: "undone todo", done: false }];
    renderWithProviders(<Todos todos={todos} />);

    expect(await screen.queryByText("Type your first todo.")).toBe(null);
  });

  it("should render only list of undone things", async () => {
    const undoneTodos = [{ id: 0, value: "undone todo", done: false }];
    renderWithProviders(<Todos todos={undoneTodos} />);

    await screen.findByText("Things to do:");
    expect(await screen.queryByText("Done things:")).toBe(null);
  });

  it("should render only list of done things", async () => {
    const doneTodos = [{ id: 0, value: "done todo", done: true }];
    renderWithProviders(<Todos todos={doneTodos} />);

    await screen.findByText("Done things:");
    expect(await screen.queryByText("Things to do:")).toBe(null);
  });

  it("should render list of multiple elements on both lists", async () => {
    const todos = [
      { id: 0, value: "done todo", done: true },
      { id: 1, value: "done todo", done: true },
      { id: 2, value: "done todo", done: true },
      { id: 3, value: "undone todo", done: true },
      { id: 4, value: "undone todo", done: true },
    ];
    renderWithProviders(<Todos todos={todos} />);
    const doneTodosElements = await screen.queryAllByText("done todo");
    const undoneTodosElements = await screen.queryAllByText("undone todo");

    expect(doneTodosElements.length).toBe(3);
    expect(undoneTodosElements.length).toBe(2);
  });
});
