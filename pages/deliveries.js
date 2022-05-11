import NAVBAR from "../components/navbar";
import FOOTER from "../components/footer";
import TABLE from "../components/table";
function deliveries(){
    return(
        <div>
            <NAVBAR />
            <h1 className='mydelivary'>All Delivery list</h1>
            <br/>
            <TABLE/>
            <FOOTER/>
        </div>
    );

}
export default deliveries;