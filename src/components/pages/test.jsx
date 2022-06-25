/*
This is the Confirmed payments page. 
It containes confirmed payment list.
*/


import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PhotoCamera } from "@mui/icons-material";
// import ComparePage from "../compare/ComparePage";
import styled from "styled-components";
export default function ConfirmedPayments() {
  const [data, setData] = useState([]);
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const hh = (id) => {
  //   {
  //     //   <ComparePage key={id} id={id} />;
  //   }
  // };
  // const [openModal, setOpenModal]= useState(false)
  // const handlDelete = ()=>{
  //   setData(data.filter((item) => item.confirmation !== true));
  // };

  useEffect(() => {
    fetch("http://localhost:3000/payment_sys?is_confirmed=true")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const column = [
    // { field: "id", headerName: "ID", width: 90 },
    { field: "paymentId", headerName: "Payment ID", width: 170 },
    { field: "referenceId", headerName: "Reference ID", width: 170 },
    // { field: 'mechanicid', headerName: 'Mechanic ID', width: 200,renderCell:(params)=>{
    //   return(
    //     <div className="userListUser">
    //       <img className="userListImg" src={params.row.avatar} alt="" />
    //       {params.row.username}
    //     </div>
    //   )
    // } },
    { field: "mechanicId", headerName: "Mechanic ID", width: 170 },
    {
      field: "amount",
      headerName: "Amount",
      width: 180,
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      type: "date",
    },
    // {
    //   field: "transaction",
    //   headerName: "Transaction",
    //   width: 160,
    // },
    // {
    //   field: "actionphoto",
    //   headerName: "Photo",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <PhotoCamera
    //           className="userListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />

    //         {/* <Link to={"/user/"+params.row.id}>
    //     <button className="userListEdit">Confirm transaction</button>
    //     </Link> */}
    //       </>
    //     );
    //   },
    // },
    // {
    //   field: "actionbtn",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         {/* <PhotoCamera className="userListDelete" onClick={()=> handleDelete(params.row.id)}/> */}
    //         <Link to={"/confirmedPayment/" + params.row.id}>
    //           <button
    //             className="userListEdit"
    //             onClick={() => {
    //               hh(params.row.id);
    //             }}
    //           >
    //             View Details
    //           </button>
    //         </Link>
    //       </>
    //     );
    //   },
    // },
    {
      field: "confirmation",
      headerName: "Confirmation",
      width: 150,
      filter: true,
      hide: true,
      // renderCell:(params)=>{
      //   return(
      //     <>
      //     {/* <PhotoCamera className="userListDelete" onClick={()=> handleDelete(params.row.id)}/> */}
      //     <Link to={"/comparePage/"+params.row.id}>
      //     <button className="userListEdit" onClick={()=>hh(params.row.id)}>Confirm transaction</button>
      //     </Link>
      //     </>
      //   )
      // }
    },
  ];

  return (
    
    <Div >
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={column}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        loading={!data.length}
      />
    </Div>
  );
}

const Div = styled.div`
  
    display: flex;
    align-items: center;
    height:75vh;



    // css
.userListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .userListEdit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
  }

  .userListDelete {
    color: red;
    cursor: pointer;
  }
`;