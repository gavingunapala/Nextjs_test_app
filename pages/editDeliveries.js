import NAVBAR from "../components/navbar";
import FOOTER from "../components/footer";
export default function editDeliveries(){
    return(
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
        <div>
            <NAVBAR/><br/>
            <h1 className="mydelivary">Add Delivery Details</h1>
            <form className="mycontainer row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">User ID</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">User Name</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Ordered Items</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-6">
                    <label for="OrderedDate">Ordered Date</label>
                    <input type="date" id="OrderedDate" name="OrderedDate"className="form-control" />  
                </div>
                <div className="col-md-6">
                    <label for="DeliveryDate">Delivery Date</label>
                    <input type="date" id="DeliveryDate" name="DeliveryDate"className="form-control" />  
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">ddd</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">Delivery Partner</label>
                    <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>DHL</option>
                    <option>LankaTravel</option>
                    <option>LkPartner</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Totle Price</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
        </form>
        <FOOTER/>
       </div>
       </>
);
}