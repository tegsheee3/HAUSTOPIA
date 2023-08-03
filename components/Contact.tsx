"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button } from '@mui/material';
import CustomButton from './CustomButton';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can add your submit logic here.
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div id ="contact" className='h-[590px] flex flex-col justify-center bg-gray-100'>
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 mx-auto px-4 py-4 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-0 pb-0">Kontakt</h2>
        <p className='pb-3'>Unser professionelles Team wird Ihnen so schnell wie möglich bei Ihren Fragen helfen.</p>
        <div className="space-y-4">
          <TextField
            label="Vorname"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Nachname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email Adresse"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Nachricht"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            fullWidth
            rows={4}
          />
          <CustomButton
          btnType="submit"
          title="Senden"
          containerStyles="bg-blue-400 rounded-full text-white w-full hover:bg-green-400"
          handleClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
