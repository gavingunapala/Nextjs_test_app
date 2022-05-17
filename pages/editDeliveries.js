import NAVBAR from "../components/navbar";
import FOOTER from "../components/footer";
import React, { useState } from 'react';
import axios from "axios";

export default function editDeliveries(){

    const [userId, setuserID] = useState('');
    const [username, setuserName] = useState('');
    const [Address, setAddress] = useState('');
    const [Items, setItems] = useState('');
    const [OD, setOD] = useState('');
    const [DD, setDD] = useState('');
    const [DP, seetDP] = useState('');
    const [Price, setPrice] = useState('');

    const userIDSetter=(e)=>{
        setuserID(e.target.value);
    }
    const usernameSetter=(e)=>{
        setuserName(e.target.value);
    }
    const addressSetter=(e)=>{
        setAddress(e.target.value);
    }

    const itemSetter=(e)=>{
        setItems(e.target.value);
    }
    const odateSetter=(e)=>{
        setOD(e.target.value);
    }

    const dDateSetter=(e)=>{
        setDD(e.target.value);
    }

    const dPartnerSetter=(e)=>{
        seetDP(e.target.value);
    }
    const priceSetter=(e)=>{
        setPrice(e.target.value);
    }

const submitData = (e) => {
    e.preventDefault();
    let data = {
        userId:userId,
        UserName:username,
        Address:Address,
        OrderedItems:Items,
        OrderedDate:OD,
        DeliveryDate:DD,
        DeliveryPartner:DP,
        TotlePrice:Price
    };
    axios
      .post("/api/deleveryApi", data)
      .then(() => {
        alert("added successfully!!!");
        // router.push("/");
      })

      .catch((err) => {
        alert(err);
      });
    console.log(data);
  };

    return(
    <>
        <div>
            <NAVBAR/><br/>
            <h1 className="mydelivary">Add Delivery Details</h1>
            <form className="mycontainer row g-3">
                <div className="col-md-6">
                    <label for="userId" className="form-label">User ID</label>
                    <input type="text" className="form-control" id="userId" onChange={userIDSetter}/>
                </div>
                <div className="col-md-6">
                    <label for="UserName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="UserName" onChange={usernameSetter}/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress"onChange={addressSetter}/>
                </div>
                <div className="col-12">
                    <label for="OrderedItems" className="form-label">Ordered Items</label>
                    <input type="text" className="form-control" id="OrderedItems"  onChange={itemSetter}/>
                </div>
                <div className="col-md-6">
                    <label for="OrderedDate">Ordered Date</label>
                    <input type="date" id="OrderedDate" name="OrderedDate"className="form-control"  onChange={odateSetter}/>  
                </div>
                <div className="col-md-6">
                    <label for="DeliveryDate">Delivery Date</label>
                    <input type="date" id="DeliveryDate" name="DeliveryDate"className="form-control" onChange={dDateSetter} />  
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">ddd</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputPartner" className="form-label">Delivery Partner</label>
                    <select id="inputPartner" className="form-select"  onChange={dPartnerSetter}>
                    <option selected>Choose...</option>
                    <option>DHL</option>
                    <option>LankaTravel</option>
                    <option>LkPartner</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="Price" className="form-label">Totle Price</label>
                    <input type="text" className="form-control" id="Price"  onChange={priceSetter}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={submitData}>add Delivery</button>
                </div>
        </form>
        <FOOTER/>
       </div>
       </>
);
}
