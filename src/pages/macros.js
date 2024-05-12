import "./macro.css";
import Navbar from '../components/Navbar';
import food from './fast-food.jpg';
import { useState } from "react";
//<img height="700" className="img" src={food} />


function Macros(){
 const [cal, setCal] = useState("0"); 
 const [pro, setPro] = useState("0"); 
 const [date, setDate] = useState("0"); 
 const [name, setName] = useState("0"); 
 const [meal, setMeal] = useState(false); 
 const [toggle, setToggle] = useState(true); 

const changeCal = event =>{
     setCal(event.target.value)

}
const changePro = event =>{
     setPro(event.target.value)

}
const changeDate = event =>{
     setDate(event.target.value)

}
const changeName = event =>{
     setName(event.target.value)

}
 const changeMeal = event =>{
     setToggle(true);
     setMeal(false);

}
const changeToggle = event =>{
     setToggle(false);
     setMeal(true);
}
 return (           
      <>
        <div className="macrostyle">
            <Navbar/>
            <div className="AddMeal">
               <h2>Add a Meal</h2>
               {
                    meal?
                    <form className="form">
                    <label>Add Calories</label>
                    <div className="calinput">
                         <input onChange={changeCal} type="number" required id="calinput" value1 = {cal}/>
                    </div>
                    <label>Add Protien</label>
                    <div className="proinput">
                         <input onChange={changePro} type="number" required id="proinput" value2 = {pro}/>
                    </div> 
                    <button className="forward">Add Meal</button>
                    <button className="back" onClick={changeMeal} >
                         <i class="fa-solid fa-circle-arrow-left"></i>
                    </button>
                    </form> :null
               }
               {
                    toggle?
                    <form className="form">
                    <label>Select Date</label>
                    <div className="calinput">
                         <input onChange={changeCal} type="text" required id="calinput" value1 = {date}/>
                    </div>
                    <label>Add Name</label>
                    <div className="proinput">
                         <input onChange={changePro} type="text" required id="proinput" value2 = {name}/>
                    </div> 
                    <button className="forward" onClick={changeToggle}>Continue</button>
                    </form> :null
               }
            </div>
        </div>
      </>
     );
}

export default Macros;