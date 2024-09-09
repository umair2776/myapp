import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

import Select from 'react-select';
import countryList from 'react-select-country-list';
import { toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: ''
  });

  const options = useMemo(() => countryList().getData(), []);
  const { name, email, phone, country, password, confirmPassword } = formData;
const navigate=useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption.value });
  };
const handleSubmit=(e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
        toast.error("Password Does Not Match")
    }
    else{
        console.log(formData);
        toast.success("User Registration Success")
        navigate("/")
    }

}
 

  return (
    <form onSubmit={handleSubmit}>
      <div className='d-flex justify-content-center flex-column align-items-center'>
        <label>Name:</label>
        <input type='text' name='name' value={name} onChange={onChange} />
        <label>Email:</label>
        <input type='email' name='email' value={email} onChange={onChange} />
        <label>Phone:</label>
        <input type='number' name='phone' value={phone} onChange={onChange} />
        <label>Country:</label>
        <Select options={options} value={options.find(opt => opt.value === country)} name='country' onChange={onCountryChange} />
        <label>Password:</label>
        <input type='password' name='password' value={password} onChange={onChange} />
        <label>Confirm Password:</label>
        <input type='password' name='confirmPassword' value={confirmPassword} onChange={onChange} />
        <button type='submit' className='btn btn-success my-2'>Register</button>
      </div>
    </form>
  );
};

export default Signup;
