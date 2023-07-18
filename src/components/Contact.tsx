import SocialLinks from "./SocialLinks";
import { FaAngleDoubleDown } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-b py-10 from-gray-800 to-black text-white md:h-screen pt-32 relative z-7"
    >
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto h-full p-4">
        <div className="pb-8">
          <h2 className="text-4xl border-b-4 border-gray-500 inline">
            Contact
          </h2>
          <p className="py-6 flex items-center">
            Submit the form to get in touch with me
            <span className="ml-2">
              <FaAngleDoubleDown size={20} />
            </span>
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            method="POST"
            className=" flex flex-col w-1/2"
            action="https://getform.io/f/8280fe9c-5c43-4480-86fa-f45df8ba6fcb"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-gray-300 border-gray-400 focus:outline-none"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-gray-300 border-gray-400 focus:outline-none`}
            />
            <textarea
              required
              rows={10}
              name="message"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-gray-300 border-gray-400 focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <SocialLinks hideForMobile={false} />
    </div>
  );
};

export default Contact;
