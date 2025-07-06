import React, { StrictMode } from 'react';
import './styles.css';
import { InputTodo } from './components/InputTodo.jsx';
import { IncompleteTodo } from './components/IncompleteTodo.jsx';
import { CompleteTodo } from './components/CompleteTodo.jsx';
import { SearchTodo } from './components/SearchTodo.jsx';
import { TodoProvider } from './context/TodoContext.jsx';
import { useContext } from 'react';

export const Todo = () => (
    <TodoProvider>
        <InputTodo />
        <SearchTodo />
        <IncompleteTodo />
        <CompleteTodo />
    </TodoProvider>
)
