import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const imgbbApiKey = "1a966cfbd07e3910ee83643cc841280a";
export const Register = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const imgbbApiKey = 'YOUR_IMGBB_API_KEY';  // Replace with your API key

  // Initialize the form methods from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = async (data) => {
    setLoading(true); // Start loading when the user submits the form
    setError(""); // Reset previous errors
  
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);
  
    try {
      // Step 1: Upload image to imgbb API
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
  
      if (response.data.success) {
        // If image is uploaded successfully, get the URL
        const imageUrl = response.data.data.url;
        setUploadedImageUrl(imageUrl);
  
        // Step 2: Send user data with the uploaded image URL
        const userData = { ...data, uploadedImageUrl: imageUrl };
        const userResponse = await axios.post(
          "http://localhost:5001/api/posts", // Adjust the URL as needed
          userData
        );
        console.log(userResponse.data);
  
        if (userResponse.data.userId) {
          // Success: Display a SweetAlert2 toast
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account has been created successfully!",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "custom-popup", // Custom class for the popup
            },
            didOpen: () => {
              Swal.getPopup().style.backgroundColor = "#28a745"; // Change the background color
              Swal.getPopup().style.color = "#fff"; // Ensure the text is white for readability
            },
          });
        } else {
          // Error: If user submission failed, set the error
          setError("Failed to submit user data");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to create user, please try again.",
          });
        }
        


      } else {
        // Error: If image upload failed, set the error
        setError("Image upload failed");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Image upload failed, please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    } finally {
      setLoading(false); // Stop loading once the process is complete
    }
  };
  
  
  return (
    <div>
      <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <img
              src="https://floatui.com/logo.svg"
              width={150}
              className="mx-auto"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Create an account
              </h3>
              <p className="">
                Already have an account?{" "}
                <a
                  href="javascript:void(0)"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Image Input */}
              <div>
                <label className="font-medium">Image</label>
                <input
                  type="file"
                  {...register("image", { required: "Image is required" })}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">{errors.image.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Create account
              </button>
            </form>

            <div className="mt-5">
              <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
