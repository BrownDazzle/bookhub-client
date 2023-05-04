import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import styles from "../../style";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdOutlineTrackChanges } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, signUp } from "../../actions/AuthActions";
import { HiOutlineUserAdd } from 'react-icons/hi';
import Orders from "./Orders";

const ProfileContent = ({ active }) => {
  const user = useSelector((state) => state.authReducer.authData);
  const initialState = {
    profilePic: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  };
  const [loading, setLoading] = useState(false)
  //const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);
  const [avatar, setAvatar] = useState(null);

  // const dispatch = useDispatch()
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function (e) {
      // save this data1111 and send to server
      const dataVideo = reader.result; // reader.result // ----------------- data1111
      setData({ ...data, profilePic: dataVideo });
    };
    reader.readAsBinaryString(file);
    setAvatar(file);
  };

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
      console.log(data)
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center items-center md:w-full">
            <form className="flex items-center justify-center flex-col gap-2 rounded-xl p-1" onSubmit={handleSubmit}>
              <div className="flex items-center">
                <span className="inline-block h-36 w-36 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <img
                      src={user?.avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Change profile photo</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept="images/*"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
              <div className="flex w-full items-center justify-center md:flex-col gap-2">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  className="border-none outline-none rounded-xl p-[20px] flex-1 bg-[#ffe7e7]"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                />
                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  className="border-none outline-none rounded-xl p-[20px] flex-1 bg-[#ffe7e7]"
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  required
                  type="text"
                  placeholder="Email"
                  className="border-none outline-none rounded-xl p-[20px] flex-1 bg-[#ffe7e7]"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center md:flex-col gap-2">
                <input
                  required
                  type="password"
                  className="border-none outline-none rounded-xl p-[20px] flex-1 bg-[#ffe7e7]"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  className="flex items-center justify-center text-white border-none rounded-[0.5rem] bg-[#f02d34] transition-all duration-700 ease-in-out w-15 h-2 p-3 mt-2 flex-end"
                  type="Submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {/* order */}
      {active === 2 && (
        <div>
          <Orders />
        </div>
      )}

      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* Track order */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}

      {/* Track order */}
      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}

      {/*  user Address */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
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
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
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
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

const TrackOrder = () => {
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
      minWidth: 130,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges size={20} />
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
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-min 800px:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt=""
          />
          <h5 className="pl-5 font-[600] text-[12px] 800px:text-[unset]">
            Shahriar Sajeeb
          </h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6 className="text-[12px] 800px:text-[unset]">1234 **** *** ****</h6>
          <h5 className="pl-6 text-[12px] 800px:text-[unset]">08/2022</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Address = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          My Addresses
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-min 800px:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <h5 className="pl-5 font-[600]">Default</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6 className="text-[12px] 800px:text-[unset]">
            494 Erdman Pasaage, New Zoietown, Paraguay
          </h6>
        </div>
        <div className="pl-8 flex items-center">
          <h6 className="text-[12px] 800px:text-[unset]">(213) 840-9416</h6>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default ProfileContent;
