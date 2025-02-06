import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-xl">Feel free to reach out!</p>
        <p className="text-lg text-gray-700 mt-4">Email: contact@blogsite.com</p>
        <p className="text-lg text-gray-700 mt-2">Phone: (123) 456-7890</p>
      </div>
    </section>
  );
};

export default Contact;
