import NAVBAR from "../../components/navbar";
import FOOTER from "../../components/footer";
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function editpage(props){

    const [userId, setuserID] = useState('');
    const [username, setuserName] = useState('');
    const [Address, setAddress] = useState('');
    const [Items, setItems] = useState('');
    const [OD, setOD] = useState('');
    const [DD, setDD] = useState('');
    const [DP, seetDP] = useState('');
    const [Price, setPrice] = useState('');
    console.log(props.data.data._id)
    useEffect(() => {
        
        function setdata(){
            setuserID(props.data.data._id)
            setuserName(props.data.data.UserName)
            setAddress(props.data.data.Address)
            setItems(props.data.data.OrderedItems)
            setOD(props.data.data.OrderedDate)
            setDD (props.data.data.DeliveryDate)
            seetDP(props.data.data.DeliveryPartner)
            setPrice(props.data.data.TotlePrice)
               }
        setdata()
     },[]);

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
    
    // const handleSelect=(e)=>{ 
    //     seetDP(e)
    //   }
    const priceSetter=(e)=>{
        setPrice(e.target.value);
    }
console.log(userId)
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
//     axios
//       .post("/api/deleveryApi", data)
//       .then(() => {
//         alert("added successfully!!!");
//         // router.push("/");
//       })

//       .catch((err) => {
//         alert(err);
//       });
//     console.log(data);
  };

    return(
    <>
        <div>
            <NAVBAR/><br/>
            <h1 className="mydelivary">Add Delivery Details</h1>
            <form className="mycontainer row g-3">
                <div className="col-md-6">
                    <label for="userId" className="form-label">User ID</label>
                    <input type="text" className="form-control" id="userId" value={userId} onChange={userIDSetter} />
                </div>
                <div className="col-md-6">
                    <label for="UserName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="UserName" value={username} onChange={usernameSetter}/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" value={Address} onChange={addressSetter}/>
                </div>
                <div className="col-12">
                    <label for="OrderedItems" className="form-label">Ordered Items</label>
                    <input type="text" className="form-control" id="OrderedItems" value={Items} onChange={itemSetter}/>
                </div>
                <div className="col-md-6">
                    <label for="OrderedDate">Ordered Date</label>
                    <input type="date" id="OrderedDate" name="OrderedDate"className="form-control" value={OD} onChange={odateSetter}/>  
                </div>
                <div className="col-md-6">
                    <label for="DeliveryDate">Delivery Date</label>
                    <input type="date" id="DeliveryDate" name="DeliveryDate"className="form-control" value={DD} onChange={dDateSetter} />  
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">ddd</label>
                    <input type="text" className="form-control" id="inputCity"  />
                </div>
                <div className="col-md-4">
                    <label for="inputPartner" className="form-label">Delivery Partner</label>
                    <select id="inputPartner" className="form-select" 
                    value={DP} onChange={dPartnerSetter}
                    // onSelect={handleSelect}
                    >
                    <option >Choose...</option>
                    <option>DHL</option>
                    <option>LankaTravel</option>
                    <option>LkPartner</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="Price" className="form-label">Totle Price</label>
                    <input type="text" className="form-control" id="Price"value={Price}  onChange={priceSetter}/>
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

export async function getStaticPaths(){
    const res = await axios.get("http://localhost:3000/api/deleveryApi" );
    const data = res.data;
   

    const paths = data.data.map(post=>{
        console.log(post._id.toString())
        return{
            params:{
                id:`${post._id}`
            }
        }
    })

    return{
        paths,
        fallback:false,
    }
}
export async function getStaticProps(context){
    const params = {context}
    console.log(params.context.params.id)

    const res = await axios.get(`http://localhost:3000/api/${params.context.params.id}` );
    const data = res.data;
        console.log(res.data);
        // setadata(res.data)
  return {
    props: {
        data,
    },
  }
}