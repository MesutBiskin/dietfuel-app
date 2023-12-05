"use client"
import { Titan_One } from 'next/font/google'
import React from 'react'
import Title from './ui/Title'
import Input from './form/Input'
import { useFormik } from 'formik';  // degerleri bir yerde tutup toplu gondermk icin kullaniyoruz Formiki
import { resolve } from 'styled-jsx/css'
import { reservationSchema } from '@/schema/Reservation'


const Reservation = () => {
 
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();// icini temizliyor submit ettigimiz yerin
    };

      const {values, errors,touched, handleSubmit, handleChange, handleBlur} = 
      useFormik({
            initialValues: {
                fullName: "",
                phoneNumber: "",
                email: "",
                persons: "",
                date: "",
            },
            onSubmit,
            validationSchema: reservationSchema,
            });
         

    const inputs = [
        { 
        id: 1,
        name: "fullName",
        type: "text",
        placeholder:"Your Full Name",
        value : values.fullName,
        errorMessage: errors.fullName,
        touched: errors.fullName,
    },
    { 
        id: 2,
        name: "phoneNumber",
        type: "number",
        placeholder:"Your Phone Number",
        value : values.phoneNumber,
        errorMessage: errors.phoneNumber,
        touched: errors.phoneNumber,

    },
    { 
        id: 3,
        name: "email",
        type: "email",
        placeholder:"Your Email Address",
        value : values.email,
        errorMessage: errors.email,
        touched: errors.email,
    },
    { 
        id: 4,
        name: "persons",
        type: "number",
        placeholder:"How Many Persons?",
        value : values.persons,
        errorMessage: errors.persons,
        touched: errors.persons,
    },
    { 
        id: 5,
        name: "date",
        type: "datetime-local",
        value : values.date,
        errorMessage: errors.date,
        touched: errors.date,
    }
]
  return (
    <div className='container mx-auto py-12'>
        <Title addClass="text-[40px] mb-10"> Book A Table</Title>
     <div className='flex justify-between flex-wrap gap-x-10'>
       <form className='lg:flex-1 w-full' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-y-3'>
        {inputs.map((input) => (
            <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}
            />
        ))}
        </div>
        <button className="btn-primary mt-4" type="submit">
            BOOK NOW
        </button>
    </form>
    <div className='lg:flex-1 w-full'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114386.04886876413!2d-80.19976748555054!3d26.372959621539604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d923c2ef36fb27%3A0xd23ea6eeca6095c9!2sBoca%20Raton%2C%20FL!5e0!3m2!1sen!2sus!4v1701486767106!5m2!1sen!2sus" 
        width="600" 
        height="330"
        style={{ border: '2px solid #000' }}
         allowfullscreen="" 
         loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </div>
    
  )
}

export default Reservation



