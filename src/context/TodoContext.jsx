import React, { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todoText, setTodoText] = useState('');
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isReset, setIsReset] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');
    const [isEditingCompleteList, setIsEditingCompleteList] = useState(false);


    // 操作用関数
    const onChangeTodoText = event => setTodoText(event.target.value);
    const onChangeSearchText = event => setSearchText(event.target.value);
    const onClickAdd = () => {
        if (!todoText) return;
        setIncompleteTodos(prev => [...prev, todoText]);
        setTodoText('');
    };
    const onClickDelete = index =>
        setIncompleteTodos(prev => prev.filter((_, i) => i !== index));
    const onClickComplete = index => {
        setCompleteTodos(prev => [...prev, incompleteTodos[index]]);
        setIncompleteTodos(prev => prev.filter((_, i) => i !== index));
    };
    const onClickBack = index => {
        setIncompleteTodos(prev => [...prev, completeTodos[index]]);
        setCompleteTodos(prev => prev.filter((_, i) => i !== index));
    };
    const onClickSearch = () => {
        if (!searchText) return;
        setSearchKeyword(searchText);
    };
    const onClickReset = () => {
        setSearchText('');
        setSearchKeyword('');
        setIsReset(true);
    };
    const onClickEdit = (index, isComplete = false) => {
        setEditIndex(index);
        setIsEditingCompleteList(isComplete);
        const targetText = isComplete ? completeTodos[index] : incompleteTodos[index];
        setEditText(targetText);
    };

    const onChangeEditText = (event) => {
        setEditText(event.target.value);
    };
    const onClickSave = () => {
        if (isEditingCompleteList) {
            setCompleteTodos(prev =>
                prev.map((t, i) => (i === editIndex ? editText : t))
            );
        } else {
            setIncompleteTodos(prev =>
                prev.map((t, i) => (i === editIndex ? editText : t))
            );
        }
        setEditIndex(null);
        setEditText('');
    };

    useEffect(() => {
        if (isReset) {
            console.log('リセット処理が実行されました');
            setIsReset(false);
        }
    }, [isReset]);

    const filteredIncompleteTodos = incompleteTodos
        .map((todo, index) => ({ index, text: todo }))
        .filter(({ text }) => text.toLowerCase().includes(searchKeyword.toLowerCase()));

    const filteredCompleteTodos = completeTodos
        .map((todo, index) => ({ index, text: todo }))
        .filter(({ text }) => text.toLowerCase().includes(searchKeyword.toLowerCase()));

    const limitTotalTodos = incompleteTodos.length + completeTodos.length >= 50;

    return (
        <TodoContext.Provider
            value={{
                todoText,
                searchText,
                editIndex,
                editText,
                isEditingCompleteList,
                filteredIncompleteTodos,
                filteredCompleteTodos,
                limitTotalTodos,

                onChangeTodoText,
                onChangeSearchText,
                onClickAdd,
                onClickDelete,
                onClickComplete,
                onClickBack,
                onClickSearch,
                onClickReset,
                onClickEdit,
                onChangeEditText,
                onClickSave
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
