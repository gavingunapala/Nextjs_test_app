import axios from "axios";
import swal from 'sweetalert';
import { useRouter } from 'next/router'

export default function(props){
    const router = useRouter()
    return(
        <>
       <head> <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script></head>
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
                    <a href={`/editpage/${encodeURIComponent(props.id)}`}><i className="fa fa-pencil"aria-hidden="true" style={{color:"green"}}/></a> &nbsp;&nbsp;
                    <a onClick={deleteItems}><i className="fa fa-trash" aria-hidden="true"style={{color:"red"}} /> </a>
                </td>
                {/* </tr> */}
                {/* </table> */}
        </>
    );
    function deleteItems(){
    //     if(confirm('are you want to delete this item?')){
    //         let delId = `${encodeURIComponent(props.id)}`
    //         axios
    //         .delete(`/api/${delId}`)
    //         .then(() => {
    //             router.push("/deliveries");
    //             // alert("deleted successfully!!!");
              
    //         })
    //         .catch((err) => {
    //           alert(err);
    //         });
        
    //         console.log("deleted");
    //     }
    //     else{
    //         console.log("cansaled")
    //     }

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            let delId = `${encodeURIComponent(props.id)}`
            axios
            .delete(`/api/${delId}`)
            .then(() => {
                router.push("/deliveries");
                // alert("deleted successfully!!!");
              
            })
            .catch((err) => {
              alert(err);
            });
        
            console.log("deleted"),
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          },
          );
        } else {
          swal("Your imaginary file is safe!");
        }
      });
       
    }
}