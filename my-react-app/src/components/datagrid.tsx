import React from "react";

export interface Column<T> {
    header: string;
    accessor: keyof T;
    render?: (row: T) => React.ReactNode;
}

interface DataGridProps<T> {
    columns: Column<T>[];
    data: T[];
}

function DataGrid<T extends object>({
    columns,
    data,
}: DataGridProps<T>) {
    return (
        <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                    {columns.map((col, index) => (
                        <th key={`${String(col.accessor)}-${index}`}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((col, index) => (
                            <td key={`${String(col.accessor)}-${index}`}>
                                {col.render
                                    ? col.render(row)
                                    : String(row[col.accessor])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataGrid;