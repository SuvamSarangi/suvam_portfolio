import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending your message...");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (resolve) => {
         
          toast.success("Message sent successfully");
          toast.dismiss();
          form.current.reset();
        
        },
        (error) => {
          toast.dismiss();
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="text-white px-4 py-8 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-center text-3xl sm:text-4xl mb-12">Get In Touch</h1>

      {/* parent div */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact info */}
        <div className="flex flex-col justify-center items-start gap-6  rounded-lg p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl text-center md:text-left font-bold">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-sm sm:text-base max-w-xl text-center md:text-left text-[#5D5D69]">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision. Feel free to reach out
            using any of the methods below.
          </p>

          <div className="bg-[#1C1C21] w-full max-w-md p-4 rounded-lg flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#6250D8] flex justify-center items-center">
              <img src="./phone.png" className="w-6 h-6 invert" alt="email" />
            </div>
            <div>
              <p className="font-medium text-amber-400">Phone</p>
              <p>+91 7008519377</p>
            </div>
          </div>

          <div className="bg-[#1C1C21] w-full max-w-md p-4 rounded-lg flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#6250D8] flex justify-center items-center">
              <img src="./message.png" className="w-6 h-6 invert" alt="email" />
            </div>
            <div>
              <p className="font-medium text-amber-400">Email</p>
              <p>subhamsarangi.dev@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#1C1C21] w-full max-w-md p-4 rounded-lg flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#6250D8] flex justify-center items-center">
              <img
                src="./linkedin.png"
                className="w-6 h-6 invert"
                alt="email"
              />
            </div>
            <div>
              <p className="font-medium text-amber-400">LinkedIn</p>
              <p>linkedin.com/in/subham-sarangi</p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="flex flex-col justify-center items-center bg-[#0E0E10]  rounded-lg w-full px-4 py-6 sm:px-6">
          <Toaster position="top-right" reverseOrder={false} />
          <form
            className="w-full max-w-md space-y-4"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <label className="block mb-1 text-sm">Your Name</label>
              <input
                name="name"
                type="text"
                className="bg-[#1C1C21] w-full rounded-lg h-10 px-3 text-sm"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Your Email</label>
              <input
                name="from_email"
                type="email"
                className="bg-[#1C1C21] w-full rounded-lg h-10 px-3 text-sm"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Your Message</label>
              <textarea
                className="bg-[#1C1C21] w-full min-h-[100px] rounded-lg px-3 py-2 text-sm resize"
                name="message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:border border-amber-200 transition-all duration-300"
              >
                Connect with me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
