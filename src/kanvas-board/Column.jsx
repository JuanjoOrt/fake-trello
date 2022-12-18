import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Task from "./Task.jsx";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
  background: ${({isDraggingOver}) => isDraggingOver ? '#1f1f26' : '#272730'};
  flex-grow: 1;
`

export default function Column({ column, tasks }) {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id} >
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
            {provided.placeholder}
          </TaskList>
        )
        }
      </Droppable>
    </Container>
    )
}