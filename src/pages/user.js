import "./user.css";
import Navbar from '../components/Navbar';
import mad from './user.jpg';


function user(){
  return (
        <>
            <div className="userstyle">
            <Navbar/>
                 <img height="700" className="img" src={mad} />
            </div>
    
        </>
     );
}

export default user;