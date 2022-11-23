import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import './Contact.css'

export const Contact = () => {
    let navigate = useNavigate();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message,setMessage] = useState("")
    const [visible, setVisible] = useState(true);
    const [data, setData] = useState({
      userName: "",
      email: "",
    });

    const initialState = {
        userName: "",
        email: "",
      };
    
    const clearState = () => {
    setData({ ...initialState });
      };
    
    useEffect(() => {
    if (data.userName.length < 3) {
        setMessage("Name must be at least 3 characters");
        setBtnDisabled(true);
        } else {
        setMessage(null);
        setBtnDisabled(false);
        }
      }, [data]);

    const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Sending data..." + data.userName + " " + data.email);
        localStorage.setItem("user", JSON.stringify(data));
        clearState();
        setTimeout(() => {
            navigate('/')
        }, 3000);
        setVisible(false)
      };

    return (
        <>
           <h1>Contact</h1>
          <form onSubmit={handleSubmit} className="formulario">

            <input className="inputito"
              type="text"
              placeholder="name"
              value={data.userName}
              onChange={handleInputChange}
              name="userName"
            />
            <br />
            <br />
            <input className="inputito"
              type="email"
              placeholder="email"
              value={data.email}
              onChange={handleInputChange}
              name="email"
            />
            <br />
            <br />
            <button type="submit" disabled={btnDisabled}>
              Enviar
            </button>
            <br />
            <br /> <hr />
           
          </form>
          <p>{visible ?message :'Redirecting to Home...'}</p>
        </>
      );
    }

export default Contact