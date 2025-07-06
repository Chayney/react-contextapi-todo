import React, { StrictMode } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import styled from 'styled-components';

const InputArea = styled.div`
    background-color: #c6e5d9;
    width: 40%;
    height: 3%;
    padding: 2%;
    margin: 2% auto;
    border-radius: 8px;
`;

export const InputTodo = () => {
    const {
        todoText,
        onChangeTodoText,
        onClickAdd,
        limitTotalTodos,
    } = useContext(TodoContext);

    return (
        <InputArea>
            <input
                disabled={limitTotalTodos}
                placeholder="Todoを入力"
                value={todoText}
                onChange={onChangeTodoText}
            />
            <button disabled={limitTotalTodos} onClick={onClickAdd}>追加</button>
        </InputArea>
    );
}