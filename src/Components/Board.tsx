import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { Droppable } from "react-beautiful-dnd";

interface IProps {
  boardId: string;
  toDos: string[];
}

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}
const DragBoard = ({ boardId, toDos }: IProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided, info) => (
        <Area
          isDraggingOver={info.isDraggingOver}
          isDraggingFromThis={Boolean(info.draggingFromThisWith)}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {toDos.map((todo, index) => (
            <DraggableCard key={todo} todo={todo} index={index} />
          ))}
          {provided.placeholder}
        </Area>
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
  padding-top: 30px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;
