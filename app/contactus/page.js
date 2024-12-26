"use client";
import React, { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import MyMap from '@/components/MyMap';
import Nav from '@/components/Nav';

const Page = () => {
    const markerPosition = [25.52636, 91.88502];
    useEffect(() => {
        fetch('/api/contact')
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Nav />
            <div className="bg-slate-200 pb-9 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-semibold">
                    {/* Contact Address Section */}
                    <div className="flex flex-col justify-start text-black my-5 mx-3 px-5 py-9 pl-12 leading-9 text-sm space-y-4 font-montserrat">
                    {/* <div className="flex flex-col justify-start text-black my-5 mx-3 px-5 py-9 pl-12 leading-9 text-xl space-y-4 font-montserrat">  */}
                        <p className="text-3xl font-extralight">Contact Us!</p>
                        <p>Party&apos;s Location & Address</p>
                        <p>Laitkor, Kynton-U-Mon</p>
                        <p>Shillong-21</p>
                        <p>East Khasi Hills, Meghalaya</p>
                        <p><img src="/images/phone.gif" // Replace with the path to your WhatsApp icon alt="ContactUs"
                className="w-6 h-6" />Phone Number - 1234567897</p>
                        {/* Add WhatsApp and Email Links */}
                        <div className="flex flex-col space-y-3 mt-4">
                            {/* WhatsApp Section */}
                            <a
                                href="https://wa.me/1234567890" // Replace with your WhatsApp number
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-green-600 hover:underline"
                            >
                                <img
                                    src="/images/whatsapp.gif" // Replace with the path to your WhatsApp icon
                                    alt="WhatsApp Icon"
                                    className="w-6 h-6"
                                />
                                <span>Chat with us on WhatsApp</span>
                            </a>

                            {/* Email Section */}
                            <a
                                href="mailto:vpp@gmail.com" // Replace with your email address
                                className="flex items-center space-x-2 text-blue-600 hover:underline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path d="M1.5 5.25A3.75 3.75 0 0 1 5.25 1.5h13.5A3.75 3.75 0 0 1 22.5 5.25v13.5A3.75 3.75 0 0 1 18.75 22.5H5.25A3.75 3.75 0 0 1 1.5 18.75V5.25ZM5.25 3a2.25 2.25 0 0 0-2.25 2.25v.883l8.056 6.242c.423.328.961.328 1.384 0l8.056-6.242V5.25A2.25 2.25 0 0 0 18.75 3H5.25ZM3 8.118v10.632A2.25 2.25 0 0 0 5.25 21h13.5a2.25 2.25 0 0 0 2.25-2.25V8.118l-7.592 5.882a3.75 3.75 0 0 1-4.316 0L3 8.118Z" />
                                </svg>
                                <span>Email Us : vpp@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="col-span-2 text-black my-5 mx-3 px-5">
                        <MyMap markerPosition={markerPosition} />
                    </div>

                    {/* Reach Us Section 
                    <div className="flex flex-col justify-start text-black my-5 mx-3 px-5 py-9 pl-12 leading-9 text-xl space-y-4">
                        <p className="text-4xl font-raleway font-medium">Reach Us</p>
                        <p className="font-montserrat">Have any questions? Let us know how we can help. We&apos;d love to hear from you!</p>
                    </div>

                    <div className="col-span-2 text-black my-5 mx-3 px-5">
                        {/* Additional content can go here */}
                   
                </div>
            </div>
        </>
    );
};

export default Page;
