import React, { StrictMode } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../context/TodoContext';

const IncompleteArea = styled.div`
    border: 2px solid #aacfd0;
    width: 40%;
    height: 3%;
    padding: 2%;
    margin: 2% auto;
    border-radius: 8px;
`;

export const IncompleteTodo = () => {
    const {
        filteredIncompleteTodos,
        onClickComplete,
        onClickDelete,
        onClickEdit,
        onClickSave,
        onChangeEditText,
        editIndex,
        editText,
        isEditingCompleteList
    } = useContext(TodoContext);

    return (
        <IncompleteArea>
            <div>
                <p className="title">未完了リスト</p>
                <ul>
                    {filteredIncompleteTodos.map(({ index, text }) => (
                        <li key={index}>
                            {editIndex === index && isEditingCompleteList === false ? (
                                <>
                                    <input style={{ border: '1px solid #ccc', borderRadius: '8px' }} value={editText} onChange={onChangeEditText} />
                                    <button onClick={onClickSave}>保存</button>
                                </>
                            ) : (
                                <>
                                    <div className="list-row">
                                        <p className="todo-item">{text}</p>
                                        <button onClick={() => onClickComplete(index)}>完了</button>
                                        <button onClick={() => onClickDelete(index)}>削除</button>
                                        <button onClick={() => onClickEdit(index, false)}>編集</button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </IncompleteArea>
    );
}