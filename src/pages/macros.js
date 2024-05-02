import "./macro.css";
import Navbar from '../components/Navbar';
import food from './fast-food.jpg';


function macros(){
  return (
        <>
            <div className="macrostyle">
            <Navbar/>
                  <img height="700" className="img" src={food} />
            </div>
    
        </>
     );
}

export default macros;