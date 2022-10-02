import React from 'react'
import './Bminfo.css';

export default function Bminfo(props) {
  
  const bmicalculate=()=>{
    const weight=parseInt(document.getElementById("myweight").value);
    const height=parseInt(document.getElementById("myheight").value);
    const bmi=(weight/(height*height));       
    console.log("BMI is ",bmi);   
    const num=bmi.toFixed(1);
    if (num<18.5){
      if(props.mode==='light'){
        document.getElementById("bmical").style.color="red";
        document.getElementById("bmi_is").style.color="red"
      }
      else{
        document.getElementById("bmical").style.color="white";
        document.getElementById("bmi_is").style.color="white";
      }

    document.getElementById("bmical").innerHTML = (" BMI is &nbsp &nbsp &nbsp &nbsp m/kg^2 and you are 	Underweight");
    document.getElementById("bmi_is").innerHTML = (num);
    }
    else if(num>=18.5&&num<25){
      if(props.mode==='light'){
        document.getElementById("bmical").style.color="red";
        document.getElementById("bmi_is").style.color="red"
      }
      else{
        document.getElementById("bmical").style.color="white";
        document.getElementById("bmi_is").style.color="white";
      }
      
      document.getElementById("bmical").innerHTML = ("BMI is &nbsp &nbsp &nbsp &nbsp m/kg^2 and you are Healthy Weight");
      document.getElementById("bmi_is").innerHTML = (num);
    }                            
    else if(num>=25&&num<30){
      if(props.mode==='light'){
        document.getElementById("bmical").style.color="red";
        document.getElementById("bmi_is").style.color="red"
      }
      else{
        document.getElementById("bmical").style.color="white";
        document.getElementById("bmi_is").style.color="white";
      }
      document.getElementById("bmical").innerHTML = (" BMI is &nbsp &nbsp &nbsp &nbsp m/kg^2 and you are OverWeight");
      document.getElementById("bmi_is").innerHTML = (num);
    }
    else{
      if(props.mode==='light'){
        document.getElementById("bmical").style.color="red";
        document.getElementById("bmi_is").style.color="red"
      }
      else{
        document.getElementById("bmical").style.color="white";
        document.getElementById("bmi_is").style.color="white";
      }
      document.getElementById("bmical").innerHTML = (" BMI is &nbsp &nbsp &nbsp &nbsp m/kg^2 and you are Obesity");  
      document.getElementById("bmi_is").innerHTML = (num);  
    }
  } 

  const bmiclear=()=>{
    document.getElementById("myweight").value="";
    document.getElementById("myheight").value=""; 
    document.getElementById("myage").value=""; 
  }
  
  return (
    <div className="container" style={{margin: '53px 44px'}}>
      <form>
        <div className="mb-3 w-25 " style={{color: props.mode==='dark'?'white':'black'}}>
          <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
          <input type="text" className="form-control" aria-describedby="emailHelp"  id="myage"/>
        </div>
        <div className="mb-3 w-25" style={{color: props.mode==='dark'?'white':'black'}}>
          <label htmlFor="exampleInputPassword1" className="form-label" >Height</label>
          <input type="text" className="form-control"  id="myheight" placeholder="m"/>
        </div>
        <div className="mb-3 w-25" style={{color: props.mode==='dark'?'white':'black'}}>
          <label htmlFor="exampleInputPassword1" className="form-label">Weight</label>
          <input type="text" className="form-control" id="myweight" placeholder='Kg'/>
        </div>
        <div className='mb-3 ' style={{height:15,color: props.mode==='dark'?'white':'black'}} >
          <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
        </div>
          <div className="gender" style={{color: props.mode==='dark'?'white':'black'}}>
          <div>
        <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
        <label htmlFor="html">Male</label>
      </div>
      <div> 
        <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
        <label htmlFor="html">Female</label>
      </div>
       </div>
      <div className="button" style={{margin:'0px -1px' }}>
      <button type="button"  onClick={bmicalculate} className="btn btn-success">Calculate</button>
      <button type="button" style={{margin:'20px 20px' }} onClick={bmiclear} className="btn btn-dark">Clear</button>
      </div>
      <p id="bmical" ></p>
      <p id="bmi_is"></p> 
      </form>
    </div>
  )
}
