import "./strength.css";
import Navbar from '../components/Navbar';
import arnold from './arnold.jpg';


function strength(){
  return (
        <>
            <div className="strengthstyle">
            <Navbar/>
               <img height="700" className="img" src={arnold} />
            </div>
    
        </>
     );
}

export default strength;