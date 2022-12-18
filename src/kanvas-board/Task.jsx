import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";


const Container = styled.div`
  border: 1px solid lightgray;
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: ${({isDragging}) => isDragging ? '#474758' : '#272730'};
  display: flex;
`

export default function Task ({ task, index }) {

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  )
}