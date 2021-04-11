import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "test-utils";
import AddTodo from "./AddTodo";
import Todos from "components/todos/Todos";

describe("Add todo component", () => {
  it("should render initial placeholder", async () => {
    render(<AddTodo />);
    await screen.findByPlaceholderText("What u have to do?");
  });

  it("should render secondary placeholder after submiting empty todo", async () => {
    render(<AddTodo />);
    fireEvent.click(await screen.getByText("Add todo"));
    await screen.findByPlaceholderText("First, type what you have to do!");
  });

  it("should add new todo to list", async () => {
    render(
      <>
        <Todos />
        <AddTodo />
      </>
    );
    expect(await screen.queryByText("test todo")).toBeNull();
    const input = await screen.getByPlaceholderText("What u have to do?");
    fireEvent.change(input, {
      target: { value: "test todo" },
    });
    fireEvent.click(await screen.getByText("Add todo"));
    expect(await screen.queryByText("test todo")).not.toBeNull();
  });
});
