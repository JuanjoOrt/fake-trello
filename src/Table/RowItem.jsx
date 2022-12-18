import data from "./tabledata.json";
import styled from "styled-components";

const TableRowItem = styled.div`
  width: ${({width}) => `${width}%`};
  padding: 5px 5px;
  border-top: 1px solid black;
`

export default function RowItem ({ width, row, position }) {
  const value = row[data.columns[position]]
  return <TableRowItem width={width}> {value ? value : ''} </TableRowItem>
}