import Todo from "../Todo";
import { render, screen, cleanup } from '@testing-library/react';

test('Should render todo component', () => {
    const todo = { id: 1, title: "Write Java Code", completed: true };
    render(<Todo todo={todo} />)
    const TodoElement = screen.getByTestId("todo-1");
    expect(TodoElement).toBeInTheDocument();
    expect(TodoElement).toHaveTextContent("Write Java Code");
    expect(TodoElement).toBeInTheDocument("<strike>");

    // const TodoElement2 = screen.getByTestId("todo-2");
    // expect(TodoElement2).toHaveTextContent("This is some text");

    // const TodoElement3 = screen.getByTestId("todo-3");
    // expect(TodoElement3).toHaveTextContent("Here is more text");

    //expect(true).ToBe(true);
})

test('Should render completed todo', () => {
    const todo = { id: 2, title: "Test Java Code", completed: false };
    render(<Todo todo={todo} />)
    const TodoElement = screen.getByTestId("todo-2");
    expect(TodoElement).toBeInTheDocument();
    expect(TodoElement).toHaveTextContent("Test Java Code");
    expect(TodoElement).toBeInTheDocument("<strike>");
})