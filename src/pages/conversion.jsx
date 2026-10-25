import React, { useState } from "react";
import {Asterisk} from 'lucide-react'
import Lottie from "lottie-react";
import Stairs_Success from '../assets/Stairs_Success.json'

const Conversion = () =>{

    const [formData, setFormData] = useState({
        firstName: "", lastName:"", email:"", companyName:"", message:""
    }) 
    const [formError, setFormError] = useState({
        firstNameError:"", lastNameError:"", emailError:"", companyNameError:"", messageError:""
    })
    const [status, setStatus] = useState('IDLE')


    const handleSubmit = async (e)=>{
        e.preventDefault()

        let errors = {
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        companyNameError: "",
        messageError: ""
    };
    let hasError = false;

    if (!formData.firstName.trim()|| formData.firstName === "") {
        errors.firstNameError = "First Name is required";
        hasError = true; 
    }
    if (!formData.lastName.trim()) {
        errors.lastNameError = "Last Name is required.";
        hasError = true;
    }
    if (!formData.email.trim()) {
        errors.emailError = "Email is required.";
        hasError = true;
    }
    if (!formData.companyName.trim()) {
        errors.companyNameError = "Please enter your company name.";
        hasError = true;
    }
    if (!formData.message.trim()) {
        errors.messageError = "Tell us how we can help.";
        hasError = true;
    }
     setFormError(errors);
    if (hasError) return;    

        setStatus('SUBMITTING')
         try{
            const contactForm = new FormData(event.target);
            contactForm.append("access_key", import.meta.env.VITE_FORM_KEY);

            const response = await fetch(import.meta.env.VITE_FORM_URL, {
            method: "POST",
            body: contactForm
            });
            const result = await response.json();
                if (result.success) {
                setStatus("IDLE");
                e.target.reset();
                } else {
                setStatus("Error");
                }
            
             setStatus("IDLE")
            setFormData({ firstName: "", lastName: "", email: "", companyName: "", message: "" });

        }catch(error){
            console.log(error)
            setStatus("IDLE")
        }
    }

    return(
        <>
        <div className="bg-black pt-25 md:pt-30 pb-35 flex flex-col md:flex-row justify-center items-center mx-auto pt-15 md:pt-30 font-LibreFranklin ">

            <div className="mb-10 bg-[#16161a] min-h-[60vh] w-8/10 md:w-[50vh] md:mr-10 border-t-2 border-green-500 ">
                    <form onSubmit={handleSubmit} className="px-3 md:px-5 pt-5 flex flex-col gap-1">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row "><label className="text-neutral-300 font-bold font-Catamaran ">First Name</label><Asterisk className="text-red-500" size={12} /></div>
                          <input 
                            type="text" 
                            placeholder="Enter your first name..." 
                            name="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full h-[32px] p-2 border-[0.1px] border-neutral-500 bg-neutral-800 rounded-xs text-neutral-50 text-sm outline-none transition-all focus:ring-1 focus:ring-green-300"
                        />
                        <p className="text-red-500 text-sm">{formError.firstNameError}</p>
                        </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row "><label className="text-neutral-300 font-bold font-Catamaran ">Last Name</label><Asterisk className="text-red-500" size={12} /></div>
                                <input 
                                    type="text" 
                                    placeholder="Enter your last name..." 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full h-[32px] p-2 border-[0.1px] border-neutral-500 bg-neutral-800 rounded-xs text-neutral-50 text-sm outline-none transition-all focus:ring-1 focus:ring-green-300"
                                />
                                <p className="text-red-500 text-sm">{formError.lastNameError}</p>
                        </div>

                          <div className="flex flex-col gap-2">
                                <div className="flex flex-row "><label className="text-neutral-300 font-bold font-Catamaran ">Email</label><Asterisk className="text-red-500" size={12} /></div>
                                <input 
                                type="email" 
                                placeholder="Enter your email..." 
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full h-[32px] p-2 border-[0.1px] border-neutral-500 bg-neutral-800 rounded-xs text-neutral-50 text-sm outline-none transition-all focus:ring-1 focus:ring-green-300"
                                />
                                <p className="text-red-500 text-sm">{formError.emailError}</p>
                        </div>

                          <div className="flex flex-col gap-2">
                                <div className="flex flex-row "><label className="text-neutral-300 font-bold font-Catamaran ">Company Name</label><Asterisk className="text-red-500" size={12} /></div>
                                <input 
                                type="text" 
                                placeholder="Enter company name..." 
                                name="companyName"
                                value={formData.companyName}
                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                className="w-full h-[32px] p-2 border-[0.1px] border-neutral-500 bg-neutral-800 rounded-xs text-neutral-50 text-sm outline-none transition-all focus:ring-1 focus:ring-green-300"
                                />
                                <p className="text-red-500 text-sm">{formError.companyNameError}</p>
                        </div>

                          <div className="flex flex-col gap-2">
                                <div className="flex flex-row "><label className="text-neutral-300 font-bold font-Catamaran ">How can we help?</label><Asterisk className="text-red-500" size={12} /></div>
                                <textarea 
                                rows={5}
                                placeholder="Tell us about your business and how we can help..." 
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full  p-2 border-[0.1px] border-neutral-500 bg-neutral-800 rounded-xs text-neutral-50 text-sm outline-none transition-all focus:ring-1 focus:ring-green-300"
                                />
                                <p className="text-red-500 text-sm">{formError.messageError}</p>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'SUBMITTING'}
                            className="w-full py-3 mt-5 mb-10 bg-green-400 text-black font-semibold rounded-xs hover:bg-green-300 hover:cursor-pointer disabled:opacity-50"
                        >
                            {status === 'SUBMITTING' ? 'Sending...' : 'Submit'}
                        </button>

                    </form>
            </div>
                
            <div className=" min-h-[60vh] w-8/10 md:w-[50vh] mt-10 md:mt-0 md:px-10 ">
                <h2 className="text-3xl md:text-4xl text-cyan-50 font-LibreFranklin font-extrabold">Connect With Us. Grow</h2>
                 <Lottie animationData={Stairs_Success} className="p-3"/>
                <p className="text-md font-LibreFranklin text-neutral-300 pt-5">We help budding businesses reach new heights to realize their dreams and potential. Connect with us today. </p>

               
            </div>
        </div>
        </>
    )
}

export default Conversion; 