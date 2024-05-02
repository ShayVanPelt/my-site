
import "./home.css";
import Navbar from '../components/Navbar';
import homeimg from './home.jpg';

function home(){
  return (
        <>
            <div className="homestyle">
            <Navbar/>
               <img height="700" className="img" src={homeimg} />

            </div>
    
        </>
     );
}

export default home;