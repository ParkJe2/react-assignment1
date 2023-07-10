import React, { useState } from "react";
import { nanoid } from "nanoid";
import { styled } from "styled-components";
import SelectBox from "./components/SelectBox";
import DarkMode from "./components/DarkMode";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      value: "리액트 공부하기",
      like: 0,
    },
    {
      id: nanoid(),
      value: "일찍 일어나기",
      like: 0,
    },
  ]);

  const AddBtnHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: nanoid(),
        value,
        like: 0,
      },
    ]);
    setValue("");
  };

  const deleteBtnHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // const likesBtnHandler = (id) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           like: !todo.like,
  //         };
  //       }
  //       return todo;
  //     })
  //   );
  // };

  const likesBtnHandler = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, like: todo.like + 1 } : todo)));
  };

  return (
    <>
      <BodyBox>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <AddInpoout type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <AddBtn type="submit" onClick={AddBtnHandler}>
            추가
          </AddBtn>
        </form>
        {todos.map((todo) => {
          return (
            <BodyContent key={todo.id}>
              <span key={todo.id}>{todo.value}</span>
              <LikesBtn onClick={() => likesBtnHandler(todo.id)}>
                좋아요<span> {todo.like} </span>
              </LikesBtn>
              <DelBtn onClick={() => deleteBtnHandler(todo.id)}>삭제</DelBtn>
            </BodyContent>
          );
        })}
        <SelectBox />
        <DarkMode />
      </BodyBox>
    </>
  );
}

const BodyBox = styled.div`
  padding: 10px;
`;

const AddInpoout = styled.input`
  margin-bottom: 10px;
`;

const AddBtn = styled.button`
  margin-left: 10px;
`;

const BodyContent = styled.div`
  margin-bottom: 10px;
`;

const LikesBtn = styled.button`
  margin-left: 5px;
`;

const DelBtn = styled.button`
  margin-left: 5px;
`;
