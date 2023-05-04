import * as React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

export default function Orders() {

    const orders = [
        {
            _id: "7463hvbfbhfbrtr28820221",
            orderItems: [
                {
                    name: "Iphone 14 pro max",
                },
            ],
            totalPrice: 120,
            orderStatus: "Processing",
        },
    ];

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },

        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/order/${params.id}`}>
                            <Button>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const row = [];

    orders &&
        orders.forEach((item) => {
            row.push({
                id: item._id,
                itemsQty: item.orderItems.length,
                total: "US$ " + item.totalPrice,
                status: item.orderStatus,
            });
        });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={row}
                columns={columns}
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </div>
    );
}