import type { Column } from "../components/datagrid";
import DataGrid from "../components/datagrid";


interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

function ProductPage() {

    const products: Product[] = [
        {
            id: 1,
            name: "Laptop",
            price: 70000,
            category: "Electronics",
        },
        {
            id: 2,
            name: "Phone",
            price: 30000,
            category: "Electronics",
        },
        {
            id: 3,
            name: "Shoes",
            price: 2500,
            category: "Fashion",
        },
    ];

    const columns: Column<Product>[] = [
        {
            header: "ID",
            accessor: "id",
        },
        {
            header: "Product Name",
            accessor: "name",
        },
        {
            header: "Price",
            accessor: "price",
        },
        {
            header: "Category",
            accessor: "category",
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
            <h2>Product List</h2>

            <DataGrid
                columns={columns}
                data={products}
            />
        </div>
    );
}

export default ProductPage;