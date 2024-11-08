import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


import 'react-datepicker/dist/react-datepicker.css';
const classNames = [
  "Class One", "Class Two", "Class Three", "Class Four", "Class Five", "Class Six", "Class Seven", "Class Eight", "Class Nine", "Class Ten"
];

export const Addmision = () => {
  // Step 1: Use useForm hook from react-hook-form

  const { register, control, handleSubmit, formState: { errors } } = useForm();

  // Step 2: Handle form submission
  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    // You can send this data to an API or perform other actions here.
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Student Name */}
        <div>
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            {...register('name', { required: 'Student Name is required' })}
            className="w-full p-2 border"
          />
        {/*   {errors.name && <p className="text-red-500">{errors.name.message}</p>} */}
        </div>

        {/* Father Name */}
        <div>
          <label htmlFor="Father">Father Name</label>
          <input
            type="text"
            {...register('FatherName', { required: 'Father Name is required' })}
            className="w-full p-2 border"
          />
{/*           {errors.FatherName && <p className="text-red-500">{errors.FatherName.message}</p>} */}
        </div>

        {/* Mother Name */}
        <div>
          <label htmlFor="Mother">Mother Name</label>
          <input
            type="text"
            {...register('MotherName', { required: 'Mother Name is required' })}
            className="w-full p-2 border"
          />
    {/*       {errors.MotherName && <p className="text-red-500">{errors.MotherName.message}</p>} */}
        </div>

        {/* Class */}
        <div>
          <label htmlFor="class">Class</label>
          <select
            {...register('class', { required: 'Class is required' })}
            className="w-full p-2 border"
          >
            {classNames.map((className, idx) => (
              <option key={idx} value={className}>{className}</option>
            ))}
          </select>
        {/*   {errors.class && <p className="text-red-500">{errors.class.message}</p>} */}
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            {...register('contactNumber', { required: 'Contact Number is required' })}
            className="w-full p-2 border"
          />
        {/*   {errors.contactNumber && <p className="text-red-500">{errors.contactNumber.message}</p>} */}
        </div>
  {/* Date of Birth */}
{/* Date of Birth */}
<div>
          <label htmlFor="dob">Date of Birth</label>
          <Controller
            control={control}
            name="dob"
            rules={{ required: 'Date of Birth is required' }}
            render={({ field }) => (
              <DatePicker
                placeholderText="Select Date of Birth"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                dateFormat="yyyy-MM-dd"
                className="w-full p-2 border"
              />
            )}
          />
{/*           {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
 */}        </div>
        <button type="submit" className="p-2 bg-blue-600 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};
