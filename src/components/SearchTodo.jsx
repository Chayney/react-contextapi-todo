import React, { StrictMode } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../context/TodoContext';

const InputArea = styled.div`
    background-color: #FFFFCC;
    width: 40%;
    height: 3%;
    padding: 2%;
    margin: 2% auto;
    border-radius: 8px;
`;

export const SearchTodo = () => {
    const {
        searchText,
        onChangeSearchText,
        onClickSearch,
        onClickReset,
    } = useContext(TodoContext);

    return (
        <InputArea>
            <div>
                <input
                    placeholder="検索"
                    value={searchText}
                    onChange={onChangeSearchText}
                />
                <button onClick={onClickSearch}>検索</button>
                <button onClick={onClickReset}>リセット</button>
            </div>
        </InputArea>
    );
}