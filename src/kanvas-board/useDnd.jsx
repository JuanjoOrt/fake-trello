import {useState} from "react";
import {initialData} from "../back/data.js";

export default function useDnd(){
  const [data, setData] = useState(initialData)



  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result
    if ( !destination || destination.droppableId === source.droppableId && destination.index === source.index )
      return null

    const startColumn = data.columns[source.droppableId]
    const finishColumn = data.columns[destination.droppableId]

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds)
      newTaskIds.splice(source.index, 1) // desde el index de origen borramos uno
      newTaskIds.splice(destination.index, 0, draggableId) // desde el index de destino, no borramos y agregamos ese id

      const newColumn = { ...startColumn, taskIds: newTaskIds}

      setData({
        ...data,
        columns: {
          ...data.columns,
          [source.droppableId]: newColumn
        }
      })
    } else {
      const newTaskIdsStart = Array.from(startColumn.taskIds)
      newTaskIdsStart.splice(source.index, 1)

      const newTaskIdsFinish = Array.from(finishColumn.taskIds)
      newTaskIdsFinish.splice(destination.index, 0, draggableId)

      const newColumnStart = { ...startColumn, taskIds: newTaskIdsStart}
      const newColumnFinish = { ...finishColumn, taskIds: newTaskIdsFinish}

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumnStart.id]: newColumnStart,
          [newColumnFinish.id]: newColumnFinish
        }
      })
    }

  }

  return {data, onDragEnd}
}