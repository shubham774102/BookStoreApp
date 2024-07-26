import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="py-16 bg-white dark:bg-slate-900 dark:text-gray-700">
        <div className="text-center mb-12">
          <h5 className="text-sm text-gray-500 py-10">
            I do receive your messages and will respond asap if the valid email is provided :)
          </h5>
          <h2 className="text-3xl text-pink-500 font-bold mt-2">Contact Me</h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center ">
            <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                
                <div className="flex-1">
                <div className="flex-1 text-center py-10">
                  <article className="bg-white p-6 rounded-lg shadow-md text-center">
                    <MdOutlineEmail className="text-4xl text-pink-500 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <h5 className="text-gray-500">shubhamthube4422@gmail.com</h5>
                    <a 
                      href="mailto:shubhamthube4422@gmail.com"
                      className="text-pink-500 mt-2 inline-block"
                    >
                      Send a message
                    </a>
                  </article>
                </div>
                  <form 
                    ref={formRef} 
                    onSubmit={handleSubmit} 
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        name="user_name"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="user_email"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        placeholder="Your message"
                        rows="7"
                        name="message"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition-colors"
                    >
                      Send Message
                    </button>
                    {message && (
                      <span className="block mt-4 text-green-600">
                        Thanks, I'll reply :)
                      </span>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
