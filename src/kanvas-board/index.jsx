import { DragDropContext } from 'react-beautiful-dnd'
import Column from "./Column.jsx";
import useDnd from "./useDnd.jsx";

export default function Board () {
  const {data, onDragEnd} = useDnd()

  return (
    <div className="app">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map(taskId => data.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    </div>
  )
}