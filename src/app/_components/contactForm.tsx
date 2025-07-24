'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Slide, toast, ToastContainer } from 'react-toastify';
import FullPageSpinner from './full-page-spinner';
import { motion } from 'motion/react';

export type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const statusPendning = 0;   
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState(statusPendning);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    function notifySucccess() {
        toast.success("Email successfuly sent!", 
            {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            }
        );
    }

    function notifyError() {
        toast.error("There was a problem with sending the email, please try again", 
            {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            }
        );
    }

    function sendEmail(data: any) {
        const apiEndpoint = '/api/email';

        startTransition(async () => {
            setStatus(statusPendning);

            fetch(apiEndpoint, 
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                }
            )
            .then((res) => res.json())
            .then((response) => setStatus(response.status))
        })
    }

    useEffect(() => {
        if (status !== statusPendning) {
            if (status === 200) {
                notifySucccess();
                reset();
            } else {
                notifyError();
            }

            setStatus(statusPendning);
        }
    }, [status, isPending])

    return (
        <>
            {isPending && <FullPageSpinner /> }
            <div className='section-beige grid grid md:grid-cols-3 gap-4 mx-auto mt-8 rounded-3xl shadow-sm p-6 xl:p-8'>
                <div>
                    <h2 className="text-2xl xl:text-4xl font-bold tracking-tighter pb-8">Contact</h2>
                    <div className="text-base xl:text-lg tracking-tighter leading-tight md:pr-6 pb-4">
                        <p>Let's get in touch and see how I can support your business to grow</p>
                    </div>
                </div>
                
                <div className='col-span-2 justify-items-center border-2 border-r-8 bg-amber-100 border-b-8 border-neutral-800 rounded-3xl shadow-sm p-6 xl:p-8'>
                    <form onSubmit={handleSubmit(sendEmail)} className="w-full max-w-2xl space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                {...register("name", 
                                    { 
                                        required: 'Name is required' 
                                    }
                                )}
                                className={
                                    errors.name 
                                        ? "block p-3 w-full text-sm text-gray-900 rounded-lg border-2 border-b-4 border-r-4 border-red-700 shadow-sm focus:outline focus:outline-red-700"
                                        : "block p-3 w-full text-sm text-gray-900 rounded-lg border-2 border-b-4 border-r-4 border-gray-800 shadow-sm focus:outline focus:outline-gray-800"
                                }
                                placeholder="John Doe"/>
                            {errors.name && <span className='text-xs text-red-700 font-bold'>{errors.name.message as string}</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                {...register("email", 
                                    { 
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                            message: "Invalid email address",
                                        },
                                    }
                                )}
                                className={
                                    errors.email 
                                        ? "block p-3 w-full text-sm text-gray-900 rounded-lg border-2 border-b-4 border-r-4 border-red-700 shadow-sm focus:outline focus:outline-red-700"
                                        : "block p-3 w-full text-sm text-gray-900 rounded-lg border-2 border-b-4 border-r-4 border-gray-800 shadow-sm focus:outline focus:outline-gray-800"
                                }
                                placeholder="john.doe@email.com"/>
                            {errors.email && <span className='text-xs text-red-700 font-bold'>{errors.email.message as string}</span>}
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-900">Subject</label>
                            <input 
                                type="text" 
                                id="subject"
                                placeholder="Let me know how I can help you"
                                {...register("subject", 
                                    { 
                                        required: 'Subject is required'
                                    }
                                )}
                                className={
                                    errors.subject 
                                        ? "block p-3 w-full text-sm text-gray-900 rounded-lg border-2 border-b-4 border-r-4 border-red-700 shadow-sm focus:outline focus:outline-red-700" 
                                        : "block p-3 w-full text-sm text-gray-900 rounded-lg border-2 border-b-4 border-r-4 border-gray-800 shadow-sm focus:outline focus:outline-gray-800" 
                                }/>
                            {errors.subject && <span className='text-xs text-red-700 font-bold'>{errors.subject.message as string}</span>}
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900">Your message</label>
                            <textarea 
                                id="message" 
                                rows={6}
                                placeholder="Leave a message..."
                                {...register("message", 
                                    { 
                                        required: 'Message is required' 
                                    }
                                )}
                                className={
                                    errors.message 
                                        ? "block p-3 w-full text-sm text-gray-900 rounded-lg border-2 border-b-4 border-r-4 border-red-700 shadow-sm focus:outline focus:outline-red-700" 
                                        : "block p-3 w-full text-sm text-gray-900 rounded-lg border-2 border-b-4 border-r-4 border-gray-700 shadow-sm focus:outline focus:outline-gray-800"
                                }></textarea>
                            {errors.message && <span className='text-xs text-red-700 font-bold'>{errors.message.message as string}</span>}
                        </div>
                        <motion.button
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 1.05
                            }}
                            whileFocus={{
                                scale: 1.05
                            }}
                            disabled={isPending}
                            type="submit" 
                            className="bg-stone-700 hover:bg-stone-950 py-3 px-5 text-sm text-white font-medium text-center rounded-lg sm:w-fit hover:shadow-lg">
                                Send message
                        </motion.button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}