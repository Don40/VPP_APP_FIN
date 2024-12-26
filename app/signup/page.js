"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav"; // Import the Nav component

const Page = () => {
  const [signupDetails, setSignupDetails] = useState({ username: "", password: "" });
  const [error, setError] = useState(""); // Track error message
  const [success, setSuccess] = useState(false); // Track success message
  const router = useRouter();

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle sign-up form submission
  const handleSignUp = async (event) => {
    event.preventDefault();

    // Clear any previous errors or success messages
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupDetails),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true); // Show success message
        setError(""); // Clear error message if the request is successful
        setSignupDetails({ username: "", password: "" }); // Clear the form
        setTimeout(() => {
          router.push("/login"); // Redirect to login page after successful sign-up
        }, 2000);
      } else {
        setError(data.message || "An error occurred. Please try again."); // Show error message
      }
    } catch (error) {
      setError("An error occurred while processing your request."); // Show a general error if the fetch fails
    }
  };

  return (
    <>
      <Nav /> {/* Add the navigation bar here */}
      <div className="flex justify-center items-center h-screen">
        <div className="bg-black bg-opacity-70 rounded-lg w-96 p-8">
          <h2 className="text-3xl font-semibold text-white mb-4">Sign Up</h2>

          {/* Show success message */}
          {success && (
            <div className="text-green-500 text-center mb-4">
              <p>Sign up successful! Redirecting to login...</p>
            </div>
          )}

          {/* Show error message */}
          {error && (
            <div className="text-red-500 text-center mb-4">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSignUp}>
            <div className="mb-6">
              <label htmlFor="username" className="text-gray-400">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={signupDetails.username}
                onChange={handleChange}
                className="w-full border-b border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-violet-400"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="text-gray-400">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={signupDetails.password}
                onChange={handleChange}
                className="w-full border-b border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-violet-400"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-violet-950 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:bg-violet-700"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-white">
                Login now.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
