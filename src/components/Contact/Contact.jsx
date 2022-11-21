import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
let init={
  user_name:"",
  user_email:"",
  message:""
}
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const [notsend, setnotSend] = useState(false)
  const[data,setData] = useState(init)


  const Handalechange=(e) => {
    e.preventDefault();
    const{name,value}=e.target;
    console.log(value)
    setData({...data,[name]:value});
  }


  const sendEmail = (e) => {
    e.preventDefault();
    let Check=!data.user_name&&!data.user_email&&!data.message
    setnotSend(Check);
    if(notsend){
      alert("Please enter all details")
      return;
    }else{
    emailjs
      .sendForm(
        "service_mtpb58s",
        "template_4kb98yj",
        form.current,
        "msHwx5k9rPyQbzV2B"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      )

    }
  };

  return (
    <div className="contact-form" id="contact">

      <div className="c-left">
          <span>Get in Touch</span>
          <span>Contact me</span>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" onChange={Handalechange}  value={data.user_name}/>
          <input type="email" name="user_email" className="user" placeholder="Email" onChange={Handalechange} value={data.user_email}/>
          <textarea name="message" style={{color:"black"}} className="user" placeholder="Message" onChange={Handalechange} value={data.message}/>
          <input type="submit" value="Send" className="c-button" />
          <span style={{color:"white"}}>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
