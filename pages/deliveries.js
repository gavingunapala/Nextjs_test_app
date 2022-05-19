import NAVBAR from "../components/navbar";
import FOOTER from "../components/footer";
import TABLE from "../components/table";
// import React,{useState} from 'react'


import axios from "axios";

function deliveries({ data }){

    // useState [adata ,setadata] = ([]);

    function deleteItems(){
        confirm('Format the hard disk?')
    }
    console.log(data.data);

    return(
        <div>
            <>
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                </head>
            
            </>
            <NAVBAR />
            <h1 className='mydelivary'>All Delivery list</h1>
            <br/>
            <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>UserName</th>
                    <th>Address</th>
                    <th>OrderedItems</th>
                    <th>OrderedDate</th>
                    <th>DeliveryDate</th>
                    <th>DeliveryPartner</th>
                    <th>TotlePrice</th>
                    <th>Action</th>
                </tr>
            </thead>
            {data.data.map((onedata) => (
        <tr key={onedata._id}>
            <TABLE
            id = {onedata._id}
            UserName = {onedata.UserName}
            Address = {onedata.Address}
            OrderedItems = {onedata.OrderedItems}
            OrderedDate = {onedata.OrderedDate}
            UserNDeliveryDateame = {onedata.DeliveryDate}
            DeliveryPartner = {onedata.DeliveryPartner}
            TotlePrice = {onedata.TotlePrice}
            />
            {/* <TABLE  TotlePrice = {onedata.TotlePrice}/> */}
            
        </tr>
      ))}
           
        </table>
            
            <FOOTER/>
        </div>
    );

}


export async function getStaticProps(){
    const res = await axios.get("http://localhost:3000/api/deleveryApi" );
    const data = res.data;
        console.log(res.data);
        // setadata(res.data)
  return {
    props: {
        data,
    },
  }
}


export default deliveries;
