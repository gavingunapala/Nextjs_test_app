
export default function(props){
    return(
        <>
        {/* <head>
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
  </head> */}
  {/* <table className="table"> */}
            {/* <thead className="table-dark">
                <tr>
                    <th>UserId</th>
                    <th>Items</th>
                    <th>Price</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr> */}
            {/* </thead> */}
                {/* <tr> */}
                <td>{props.UserName}</td>
                <td>{props.Address}</td>
                <td>{props.OrderedItems}</td>
                <td>{props.OrderedDate}</td>
                <td>{props.DeliveryDate}</td>
                <td>{props.DeliveryPartner}</td>
                <td>{props.TotlePrice}</td>
                <td>
                    <a href='/editDeliveries'><i className="fa fa-pencil"aria-hidden="true" style={{color:"green"}}/></a> &nbsp;&nbsp;
                    <a onClick={deleteItems}><i className="fa fa-trash" aria-hidden="true"style={{color:"red"}} /> </a>
                </td>
                {/* </tr> */}
                {/* </table> */}
        </>
    );
    function deleteItems(){
        confirm('Format the hard disk?')
    }
}