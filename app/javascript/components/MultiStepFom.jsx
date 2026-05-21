import React, { useState } from "react"
export default function MultiStepForm(){
    const[currentStep, setCurrentStep] = useState(0)
    const renderStep = () => {
        switch (currentStep) {
          case 1:
            return <Step1 setCurrentStep={setCurrentStep}/>

          case 2:
            return <Step2 setCurrentStep={setCurrentStep}/>

          case 3:
            return <Step3 setCurrentStep={setCurrentStep}/>

          default:
            return <Step1 setCurrentStep={setCurrentStep}/>
        }
    };

    return(
        <div style={{display: "block",border:"1px solid black",borderRadius:"10px",padding:"20px",paddingTop:'0px',boxShadow:"0px 0px 10px rgba(0,0,0,0.1)",width:'80%',margin:"auto"}}>
            {renderStep()}</div>
    )

}

function Step1({setCurrentStep}){
    return(
        <>
            <h1>🧩 Step 1 — Personal Information</h1>
            <div style={{marginLeft:"66px",display: "flex",justifyContent: "space-evenly",flexWrap: "wrap",gap:"20px"}}>
                <div>
                    <span style={{color:'red'}}>*</span>
                    <label htmlFor="full_name">Full Name:</label>
                    <input type="text" id="full_name" name="full_name" placeholder="Enter your full name"  style={{width:"400px",padding:'10px',marginLeft:'15px',borderRadius:'5px'}}/>
                </div>
                <div>
                    <span style={{color:'red'}}>*</span>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" style={{width:"400px",padding:'10px',marginLeft:'15px',borderRadius:'5px'}} /> 
                </div>
                <div>
                    <span style={{color:'red'}}>*</span>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" style={{width:"400px",padding:'10px',marginLeft:'15px',borderRadius:'5px'}}/>  
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button style={{padding:"8px",margin:"10px",width:"90px",borderRadius:'5px',color:'white',backgroundColor:'blue',fontSize:"bold"}} onClick ={()=>setCurrentStep(2)}>Next</button>
            </div>
            </>
    )
}

function Step2({setCurrentStep}){ 
return(
    <>
        <h1>🧩 Step 2 — Address Information</h1>
        <span style={{color:'red'}}>*</span>
        <label htmlFor="country">Country</label>
        <select id='country' name='country'>
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
        </select>
        <span style={{color:'red'}}>*</span>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" placeholder="Enter your city" /> 
        <span style={{color:'red'}}>*</span>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" placeholder="Enter your address" />  
        <button onClick ={()=>setCurrentStep(1)}>Back</button>
        <button onClick ={()=>setCurrentStep(3)}>Next</button>
    </> 
)
}

function Step3({setCurrentStep}){
    return(
    <>
        <h1>🧩 Step 3 — Account Information</h1>
        <div styles={{marginLeft: "20px"}}>
            <span style={{color:'red'}}>*</span>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" />
            <span style={{color:'red'}}>*</span>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" /> 
            <span style={{color:'red'}}>*</span>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm your password" />  
            <button onClick ={()=>setCurrentStep(2)}>Back</button>
            <button>submit</button>
        </div>
        </>
)
}