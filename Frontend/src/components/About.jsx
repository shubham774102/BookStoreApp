import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white py-20  dark:bg-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-pink-500 sm:text-4xl">
            Welcome to Book Haven
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto  dark:bg-slate-900 dark:text-white">
            Your go-to place for an extensive collection of books from various genres and authors.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6  dark:bg-slate-900 dark:text-white">
              <h3 className="text-lg leading-6 font-medium text-gray-900  dark:bg-slate-900 dark:text-white">Our Mission</h3>
              <p className="mt-4 text-gray-500">
                At Book Haven, we strive to foster a love for reading by providing a diverse selection of books to our customers. Our mission is to create a community where book lovers can find, read, and share their favorite books.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6  dark:bg-slate-900 dark:text-white">
              <h3 className="text-lg leading-6 font-medium text-gray-900  dark:bg-slate-900 dark:text-white">Our Story</h3>
              <p className="mt-4 text-gray-500 ">
                Founded in 2022, Book Haven began as a small local bookstore. With a passion for literature and a vision to make books accessible to everyone, we expanded to an online platform, reaching book enthusiasts all over the world.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="bg-white shadow-md rounded-lg p-6  dark:bg-slate-900 dark:text-white">
            <h3 className="text-lg leading-6 font-medium text-gray-900  dark:bg-slate-900 dark:text-white">Meet the Team</h3>
            <p className="mt-4 text-gray-500">
              Our dedicated team is made up of experienced professionals who share a common love for books. We are committed to providing the best service and recommendations to our customers.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Repeat this block for each team member */}
              <div className="flex flex-col items-center text-center">
                <img
                  className="h-24 w-24 rounded-full "
                  src="https://avatars.githubusercontent.com/u/121854622?v=4"
                  alt="Team member"
                />
                <h4 className="mt-4 text-lg font-medium text-gray-900  dark:bg-slate-900 dark:text-white">Shubham Thube</h4>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
