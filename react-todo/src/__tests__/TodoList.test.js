import { render, screen, fireEvent } from '@testing-library/react';
import {test, expect} from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('verify todo initial component', () => {
    render(<TodoList />);

    expect(screen.getByText(/learn javascript/i)).toBeIntheDocument();
});

test('verify adding a new todo', () => {
  render(<TodoList />);

  //find the input field for adding new todos
  const inputEle = screen.getByRole('textbox');
  //simulate user input to add a new todo
  fireEvent.change(inputEle, {target:{value: 'New Todo item for testing'}});
  //find submit button and simute a form submission
  const addbtn = screen.getByText('Save todo');
  fireEvent.click(addbtn);
  //check if the new todo item is in the document
  expect(screen.getByText('New Todo Item for testing')).toBeInTheDocument();
});

test('verify toggling a todo item', () => {
  render(<TodoList />);
    
  //Find a todo item in the list
  const todoItem = screen.getByText('learn css')

  //find complete button and simute a toggle
  const completedbtn = screen.getByText('completed');
  fireEvent.click(completedbtn);
  //check if the new todo item color changed when click
  expect(todoItem).toHaveStyle('color: red');
});

test('verify deleting a todo item', () => {
  render(<TodoList />);

  // Find the todo item that you want to delete
  const todoItem = screen.getByText('learn css');

  // Find the delete button associated with the todo item and click it to delete the item
  const deleteBtn = todoItem.parentElement.querySelector('button');
  fireEvent.click(deleteBtn);

  // Check if the todo item is no longer present in the document
  expect(todoItem).not.toBeInTheDocument();
});

