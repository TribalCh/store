import React from 'react'

const ProductTable = () => {
  return <div>
    <TableContainer>
    <Table.thead>
        <Table.Row>
            <Table.ColumnHeader> Name </Table.ColumnHeader>
            <Table.ColumnHeader> Price </Table.ColumnHeader>
        </Table.Row>
    </Table.thead>

    <Table.tbody>
        <table.Row>
            <table.ColumnHeader> Sporting Goods</table.ColumnHeader>
        </table.Row>
        <Table.Row>
            <Table.Column> Tennis and Badminton </Table.Column>
            <Table.Column> $55.00 </Table.Column>
        </Table.Row>
    </Table.tbody>
    </TableContainer>
  </div>
}

export default ProductTable;
