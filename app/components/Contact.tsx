'use client';

import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data)

      if (res.ok) {
        setResponseMsg('Message sent successfully!');
        setForm({ email: '', subject: '', message: '' });
      } else {
        setResponseMsg('Something went wrong. Try again.');
      }
    } catch (error) {
      setResponseMsg('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className=' mt-10 py-10 px-2 lg:px-40 bg-secondary-50 dark:bg-[#272b3c]  lg:py-20 flex flex-col space-y-8 '>
      <h1 className='text-center text-secondary-800 dark:text-white text-3xl lg:text-5xl font-bold'>Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center ">
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full lg:w-[50%] mx-auto p-4 outline-none border-2 border-gray-500/20 focus:border-secondary-500/50 focus:shadow-xl focus:shadow-secondary-400/10 duration-200 rounded-xl dark:bg-primary-500/10 dark:text-white"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full lg:w-[50%] p-4 outline-none border-2 border-gray-500/20 focus:border-secondary-500/50 focus:shadow-xl focus:shadow-secondary-400/10 duration-200 rounded-xl dark:bg-primary-500/10 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full lg:w-[50%] p-4 outline-none border-2 border-gray-500/20 focus:border-secondary-500/50 focus:shadow-xl focus:shadow-secondary-400/10 duration-200 rounded-xl dark:bg-primary-500/10 dark:text-white h-32"
        />
        <button
          type="submit"
          className="bg-primary-500 w-full lg:w-[50%] font-semibold hover:bg-yellow-600 text-white py-4 px-4 rounded-xl transition"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {responseMsg && (
        <p className="mt-4 text-sm text-center text-gray-700 dark:text-white">{responseMsg}</p>
      )}
    </section>
  );
};

export default Contact;
