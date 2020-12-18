import React from 'react'
import MUIDataTable from 'mui-datatables';


const CustomTable = ({ title, data, columns, options }) => {

    return (
        <MUIDataTable
            title={title}
            data={data}
            columns={columns}
            options={options ? options : {
                dense: true,
                selectableRows: false,
                viewColumns: false,
                filter: false,
                //tableBodyHeight: '600px'
            }}
        />
    )
}
export default CustomTable