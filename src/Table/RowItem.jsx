import data from "./tabledata.json";
import styled from "styled-components";

const TableRowItem = styled.div`
  width: ${({width}) => `${width}%`};
  padding: 5px 5px;
  border-top: 1px solid black;
  background: ${({isDragging}) => isDragging && `rgba(29, 29, 37, 0.43)`};
`

export default function RowItem ({ width, row, position, isDragging }) {
  const value = row[data.columns[position]]
  return <TableRowItem width={width} isDragging={isDragging}> {value ? value : ''} </TableRowItem>
}