import './Form.css';

import { useState } from "react";

export default function Form(){
    let[formData, setFormData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
        phoneNumber:"",
        dateOfBirth:"",


    });

      const [errors, setErrors] = useState({});

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return{...currData,[event.target.name]:event.target.value};
        });
        
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Fullname is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

        if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits";

    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";

    return newErrors;
  };

    let handleSubmit=(event)=>{
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
        console.log("Submitted Data:",formData);
        setErrors({});
        setFormData({
            fullName:"",
            email:"",
            password:"",
            confirmPassword: "",
            phoneNumber: "",
            dateOfBirth: "",
        });
        }
    };
    


    return(
        <div className="form-container">
        <form onSubmit={handleSubmit}className="styled-form">
            <h2>REGISTRATION FORM</h2>
            <label htmlFor="fullName">Fullname:</label>
            <input
                placeholder="Enter full name"
                type="text"
                value={formData.fullName}
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
            
            <br></br>
            <br></br>
             <label htmlFor="email">Email:</label>
            <input
                placeholder="Enter email"
                type="text"
                value={formData.email}
                id="email"
                name="email"
                onChange={handleInputChange}
            />
             {errors.email && <p className="error">{errors.email}</p>}
            <br></br>
            <br></br>
             <label htmlFor="password">Password:</label>
            <input
                placeholder="Enter password"
                type="password"
                value={formData.password}
                id="password"
                name="password"
                onChange={handleInputChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <br></br>
            <br></br>
             <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
                placeholder="Confirm password"
                type="password"
                value={formData.confirmPassword}
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleInputChange}
            />
            {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
            <br></br>
            <br></br>
             <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                placeholder="Enter phone number"
                type="text"
                value={formData.phoneNumber}
                id="phoneNumber"
                name="phoneNumber"
                onChange={handleInputChange}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
            <br></br>
            <br></br>
             <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
                placeholder="enter date of birth"
                type="date"
                value={formData.dateOfBirth}
                id="dateOfBirth"
                name="dateOfBirth"
                onChange={handleInputChange}
            />
            {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}

            <button>Submit</button>           
        </form>
        </div>
    );
}
      