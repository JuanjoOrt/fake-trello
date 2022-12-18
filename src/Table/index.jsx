import styled from "styled-components";
import dataBack from "./tabledata.json"
import RowItem from "./RowItem.jsx";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {useState} from "react";

const TableContainer = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
`

const TableHeader = styled.div`
  display: flex;
  width: 100%;
  font-size: 20px;
  box-sizing: border-box;
  background: #1d1d25;
  border-left: 1px solid black;
  border-top: 1px solid black;`

const HeaderItem = styled.div`
  padding: 10px;
  text-transform: capitalize;
  width: ${({width}) => `${width}%`};
  display: flex;
  justify-content: center;
  border-right: 1px solid black;
`

const TableRow = styled.div`
  display: flex;
`


export default function Table () {
  const [data, setData] = useState(dataBack)
  const width = 100 / data.columns.length

  const handleOnDragEnd = (result) => {
    const { source, destination } = result

    const newRows = Array.from(data.rows)
    const rowMoved = newRows.splice(source.index, 1)[0]
    newRows.splice(destination.index, 0, rowMoved)

    setData({
      ...data,
      rows: newRows
    })
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <TableContainer>
        <TableHeader>
          { data.columns.map( headerItem => <HeaderItem key={headerItem} width={width}>{headerItem}</HeaderItem> ) }
        </TableHeader>
        <Droppable droppableId={'table'}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              { data.rows.map( (row, index) => (
                <Draggable key={row.id} draggableId={`${row.id}`} index={index}>
                  { (provided, snapshot) => (
                  <TableRow {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                    <RowItem width={width} row={row} position={0} index={index} isDragging={snapshot.isDragging}/>
                    <RowItem width={width} row={row} position={1} index={index} isDragging={snapshot.isDragging}/>
                    <RowItem width={width} row={row} position={2} index={index} isDragging={snapshot.isDragging}/>
                    <RowItem width={width} row={row} position={3} index={index} isDragging={snapshot.isDragging}/>
                    <RowItem width={width} row={row} position={4} index={index} isDragging={snapshot.isDragging}/>
                  </TableRow>
                  )}
                </Draggable>
              ) ) }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </TableContainer>
    </DragDropContext>
  )
}