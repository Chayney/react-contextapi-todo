import React, { StrictMode } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../context/TodoContext';

const CompleteArea = styled.div`
    border: 2px solid #aacfd0;
    width: 40%;
    height: 3%;
    padding: 2%;
    margin: 2% auto;
    background-color: #c9dede;
    border-radius: 8px;
`;

export const CompleteTodo = (props) => {
    const {
        filteredCompleteTodos,
        onClickBack,
        onClickEdit,
        onClickSave,
        onChangeEditText,
        editIndex,
        editText,
        isEditingCompleteList
    } = useContext(TodoContext);

    return (
        <CompleteArea>
            <div>
                <p className="title">完了リスト</p>
                <ul>
                    {filteredCompleteTodos.map(({ index, text }) => (
                        <li key={index}>
                            {editIndex === index && isEditingCompleteList === true ? (
                                <>
                                    <input style={{ border: '1px solid #ccc', borderRadius: '8px' }} value={editText} onChange={onChangeEditText} />
                                    <button onClick={onClickSave}>保存</button>
                                </>
                            ) : (
                                <>
                                    <div className="list-row">
                                        <p className="todo-item">{text}</p>
                                        <button onClick={() => onClickBack(index)}>戻す</button>
                                        <button onClick={() => onClickEdit(index, true)}>編集</button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </CompleteArea>
    );
}