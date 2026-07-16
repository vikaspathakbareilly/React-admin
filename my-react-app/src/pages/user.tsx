import type { Column } from "../components/datagrid";
import DataGrid from "../components/datagrid";
interface User {
    id: number,
    firstNAme: string,
    lastName: string,
    email: string,
    mobile: number
    gender: string
}
function UserPage() {

    const Users: User[] = [

        {
            id: 1,
            firstNAme: "abc",
            lastName: "bv",
            email: "c@gmail.com",
            mobile: 234,
            gender: "M"
        },
        {
            id: 2,
            firstNAme: "abc",
            lastName: "bv",
            email: "a@gmail.com",
            mobile: 23433,
            gender: "M"
        },
        {
            id: 3,
            firstNAme: "abcd",
            lastName: "bv",
            email: "b@gmail.com",
            mobile: 234,
            gender: "M"
        }
    ];
    const columns: Column<User>[] = [
        {
            header: "ID",
            accessor: "id",
        },
        {
            header: "Product Name",
            accessor: "firstNAme",
        },
        {
            header: "Last Name",
            accessor: "lastName",
        },
        {
            header: "Email",
            accessor: "email",
        },

        {
            header: "mobile",
            accessor: "mobile",
        },
        {
            header: "Gender",
            accessor: "gender",
        },
        {
            header: "Action",
            accessor: "id",
            render: (row) => (
                <>
                    <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => alert(row.id)}
                    >
                        Edit
                    </button>

                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => alert("Delete " + row.id)}
                    >
                        Delete
                    </button>
                </>
            ),
        },
    ];
    return (
        <div className="container mt-4">
            <h2>User List</h2>

            <DataGrid
                columns={columns}
                data={Users}
            />
        </div>
    );
}
export default UserPage