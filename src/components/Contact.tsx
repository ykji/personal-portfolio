import { useEffect, useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (email && name && message) {
      console.log("good");
      setIsSubmitButtonDisabled(false);
    }
  }, [email, name, message]);

  return (
    <div id="contact" className="w-full bg-gradient-to-b py-10 from-gray-800 to-black text-white md:h-screen pt-32">
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto h-full p-4">
        <div className="pb-8">
          <h2 className="text-4xl border-b-4 border-gray-500 inline">
            Contact
          </h2>
          <p className="py-6">Submit the form to get in touch with me.</p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            method="POST"
            className=" flex flex-col w-1/2"
            action="https://getform.io/f/8280fe9c-5c43-4480-86fa-f45df8ba6"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              required
              rows={10}
              name="message"
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              disabled={isSubmitButtonDisabled}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
