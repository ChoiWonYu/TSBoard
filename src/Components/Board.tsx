import React from "react";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { Droppable } from "react-beautiful-dnd";

interface IProps {
  boardId: string;
  toDos: string[];
}
const DragBoard = ({ boardId, toDos }: IProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          {toDos.map((todo, index) => (
            <DraggableCard key={todo} todo={todo} index={index} />
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
};

export default DragBoard;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  border-radius: 5px;
  padding: 20px 10px;
  padding-top: 30px;
  min-height: 200px;
`;
