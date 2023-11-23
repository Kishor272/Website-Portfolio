import React from 'react'
import { useRef } from 'react';
import './Contact.css'
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_juj86cx",
        "template_rs90dee",
        form.current,
        "c6JCWHSXrj8STW0mb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Submitted Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="mt-5" id='contact'>
        <p className="contact">Contact Me</p>
        <p>Lets Keep In Touch !</p>
      </div>
      <h3 className='mt-5 login'>Contact Details</h3>
      <div className='container contacts mt-4'>
        <form ref={form} onSubmit={sendEmail}>
  <div class="mb-3 row">
    <label for="exampleInputName" class="form-label">Name:</label>
    <input  type="text" name='user_Name' placeholder='Enter your Name' class="form-control  mt-3 " id="exampleInputName" required/>
  </div>
  <div class="mb-3 row ">
    <label for="exampleInputEmail" class="form-label">Email:</label>
    <input type="email" name='user_Email' placeholder='Enter your email' class="form-control mt-3" id="exampleInputEmail" required/>
  </div>

  <div class="mb-3 row">
    <label for="exampleInputEmail" class="form-label mt-3">Message:</label> <br></br>
   <textarea placeholder='Enter text here...' name='message' maxlength='1000' class="mt-3" minlength='4' rows={5} required/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  );
}
