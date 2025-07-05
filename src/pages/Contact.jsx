import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

export const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_1hp1x6e',
            'template_mq2wrtg',
            {
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message
            },
            't4f_7WrQ1CocYdOBu'
        )
        .then(() => {
            toast.success("Message sent successfully!");
            setForm({ name: '', email: '', subject: '', message: '' });
        })
        .catch(() => {
            toast.error("Something went wrong. Please try again.");
        });
    };


    return (
        <div className='w-full mt-3 mb-7 px-5 text-white'>
            <h2 className='max-w-150 mx-auto mb-8 text-center text-white text-lg md:text-xl'>
                Got a brilliant project idea waiting to come to life? Reach out now, and let’s kickstart this creative journey together!
            </h2>
            <div className='flex flex-col md:flex-row gap-10 justify-center'>
                <div data-aos="fade-right" className='min-w-1/4 border-1 border-[var(--secondary-color)] rounded-lg p-3'>
                    <h2 className='text-2xl font-bold mb-6'>Contact: </h2>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='border-1 border-[var(--secondary-color)] rounded-lg p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[var(--secondary-color)]"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
                        </div>
                        <div>
                            <h3 className='font-bold'>Phone</h3>
                            <p className='text-sm'>+20 1126820975</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mb-6 flex-wrap'>
                        <div className='border-1 border-[var(--secondary-color)] rounded-lg p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-[var(--secondary-color)]"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                        </div>
                        <div>
                            <h3 className='font-bold'>Email</h3>
                            <p className='text-sm'>seifsayed121@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='border-1 border-[var(--secondary-color)] rounded-lg p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[var(--secondary-color)]"> <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" /></svg>
                        </div>
                        <div>
                            <h3 className='font-bold'>Location</h3>
                            <p className='text-sm'>Giza, Egypt</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-6 font-bold text-lg'>Social Media:</h3>
                        <div className='flex items-center gap-3'>
                            <a target='_blank' href="https://github.com/seif-el-sayed1" className='border-1 border-[var(--secondary-color)] rounded-full p-2 hover:bg-[var(--secondary-color)] duration-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/seif-el-sayed-a8452a31a/" className='border-1 border-[var(--secondary-color)] rounded-full p-2 hover:bg-[var(--secondary-color)] duration-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a target='_blank' href="https://www.facebook.com/seif.sayed.98478" className='border-1 border-[var(--secondary-color)] rounded-full p-2 hover:bg-[var(--secondary-color)] duration-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="size-6">
                                    <path d="M279.14 288l14.22-92.66h-88.91V127.77c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.17 44.38-121.17 124.72v70.62H22.89V288h81.3v224h100.2V288z"/>
                                </svg>
                            </a>
                        </div> 
                    </div>
                </div>

                <div data-aos="fade-left" className='min-w-2/4 border-1 border-[var(--secondary-color)] rounded-lg p-3'>
                    <div className='flex items-center gap-3'>
                        <h2 className='font-bold text-xl'>Send Me a Message</h2>
                    </div>
                    <form onSubmit={sendEmail} className="mt-4">
                        <div className='grid grid-cols-2 gap-5'>
                            {['name', 'email', 'subject'].map((field) => (
                                <div key={field} className="relative">
                                    <input
                                        required
                                        type="text"
                                        id={field}
                                        name={field}
                                        placeholder=" "
                                        value={form[field]}
                                        onChange={handleChange}
                                        className="w-full peer outline-none border-b-2 focus:border-[var(--secondary-color)] border-white duration-300 py-3 bg-transparent text-white"
                                        autoComplete="off"
                                    />
                                    <label
                                        htmlFor={field}
                                        className={`absolute left-0 text-sm transition-all duration-300 
                                            ${form[field]
                                                ? 'top-[-7px] text-[var(--secondary-color)] text-sm'
                                                : 'top-3 text-base text-gray-500'}
                                            peer-focus:top-[-7px] peer-focus:text-[var(--secondary-color)] peer-focus:text-sm
                                        `}
                                    >
                                        {field === 'name' ? 'Full Name' : field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 relative">
                            <textarea
                                required
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full outline-none border-2 focus:border-[var(--secondary-color)] border-white duration-300 rounded-lg p-2 h-35 bg-transparent text-white"
                                placeholder="Tell Me More About Your Project..."
                            ></textarea>
                        </div>

                        <button type="submit" className="cursor-pointer block mx-auto mt-5 border-1 border-[var(--secondary-color)] rounded-full p-2 hover:bg-[var(--secondary-color)] duration-200">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
