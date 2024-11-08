import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

// Sample class options
const classNames = [
  "Class One", "Class Two", "Class Three", "Class Four",
  "Class Five", "Class Six", "Class Seven", "Class Eight",
  "Class Nine", "Class Ten"
];

// Define the structure of form data with TypeScript
interface AdmissionFormData {
  name: string;
  FatherName: string;
  MotherName: string;
  class: string;
  contactNumber: string;
  dob: Date;
  image: FileList;
}

export const Admission = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  // Imgbb API Key
  const imgbbApiKey = 'YOUR_IMGBB_API_KEY';

  const { register, control, handleSubmit, formState: { errors } } = useForm<AdmissionFormData>();

  // Handle form submission
  const onSubmit = async (data: AdmissionFormData) => {
    console.log("Form Data:", data);

    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        const imageUrl = response.data.data.url;
        setUploadedImageUrl(imageUrl);
        console.log("Image URL:", imageUrl);
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Student Name */}
        <div>
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            {...register("name", { required: "Student Name is required" })}
            className="w-full p-2 border"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Image Upload Field */}
        <div>
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            {...register("image", {
              required: "Please upload an image",
              validate: {
                checkFileType: (files) =>
                  ["image/jpeg", "image/png"].includes(files[0]?.type) || "Only JPEG/PNG images are allowed",
                checkFileSize: (files) =>
                  files[0]?.size < 2 * 1024 * 1024 || "Image size should be under 2MB",
              },
            })}
            className="w-full p-2 border"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>

        {/* Father Name */}
        <div>
          <label htmlFor="Father">Father Name</label>
          <input
            type="text"
            {...register("FatherName", { required: "Father Name is required" })}
            className="w-full p-2 border"
          />
          {errors.FatherName && <p className="text-red-500">{errors.FatherName.message}</p>}
        </div>

        {/* Mother Name */}
        <div>
          <label htmlFor="Mother">Mother Name</label>
          <input
            type="text"
            {...register("MotherName", { required: "Mother Name is required" })}
            className="w-full p-2 border"
          />
          {errors.MotherName && <p className="text-red-500">{errors.MotherName.message}</p>}
        </div>

        {/* Class */}
        <div>
          <label htmlFor="class">Class</label>
          <select
            {...register("class", { required: "Class is required" })}
            className="w-full p-2 border"
          >
            {classNames.map((className, idx) => (
              <option key={idx} value={className}>
                {className}
              </option>
            ))}
          </select>
          {errors.class && <p className="text-red-500">{errors.class.message}</p>}
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            {...register("contactNumber", { required: "Contact Number is required" })}
            className="w-full p-2 border"
          />
          {errors.contactNumber && <p className="text-red-500">{errors.contactNumber.message}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <Controller
            control={control}
            name="dob"
            rules={{ required: "Date of Birth is required" }}
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
          {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
        </div>

        <button type="submit" className="p-2 bg-blue-600 text-white">
          Submit
        </button>
      </form>

      {/* Display the uploaded image */}
      {uploadedImageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={uploadedImageUrl} alt="Uploaded" className="mt-2" />
        </div>
      )}
    </div>
  );
};
