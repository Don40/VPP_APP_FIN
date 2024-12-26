"use client";
import React, { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import MyMap from '@/components/MyMap';
import Nav from '@/components/Nav';
import SecondaryHero from '@/components/SecondaryHero';

const Page = () => {
    const markerPosition = [25.589413663131815, 91.87529363647245];

    useEffect(() => {
        fetch('api/contact')
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Nav />
            <div className='bg-slate-200 pb-9 pt-6'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-semibold">
                    {/* Sidebar with Text */}
                    <div className='flex flex-col justify-start text-black my-5 mx-3 px-5 py-4 pl-12 leading-9 text-xl space-y-4'>
                        <p className='text-3xl font-raleway font-medium '>Registration Form</p>
                        <p className='font-montserrat'>Fill up to Join</p>
                     
                    </div>

                    {/* Form Section */}
                    <div className='col-span-2 text-black my-5 mx-3 px-5'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
