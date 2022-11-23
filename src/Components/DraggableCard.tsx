import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface IProps {
  todo: string;
  index: number;
}

const DraggableCard = ({ todo, index }: IProps) => {
  return (
    <Draggable draggableId={todo} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);

const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
`;
