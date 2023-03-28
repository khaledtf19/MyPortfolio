import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs
        .sendForm(
          import.meta.env.PUBLIC_SERVICE_ID,
          import.meta.env.PUBLIC_TEMPLATE_ID,
          form.current as HTMLFormElement,
          import.meta.env.PUBLIC_KEY
        )
        .then(
          (result) => {
            setLoading(false);
            setFinished(true);
          },
          (error) => {
            setLoading(false);
            console.log(error);
          }
        );
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div
      className={` bg-black flex item-center justify-center px-5 py-10  w-full text-white rounded-t-lg relative transition duration-500`}
    >
      <div className="w-full md:w-2/3 lg:w-1/3 relative flex item-center justify-center">
        {loading ? (
          <div className="  absolute z-50 self-center w-full  flex items-center justify-center ">
            Loading...
          </div>
        ) : finished ? (
          <div className="absolute z-50 self-center w-full h-full shadow-lg rounded-lg  flex items-center justify-center bg-white/10 text-xl">
            <p>the email has been sent successfully</p>
          </div>
        ) : (
          ""
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          className={`flex flex-col items-center justify-center w-full gap-5 ${
            loading ? "blur pointer-events-none animate-pulse" : ""
          } ${finished ? "blur pointer-events-none" : ""}`}
        >
          <input
            type="text"
            name="user_name"
            minLength={5}
            maxLength={200}
            required={true}
            className="bg-black text-gray-300 border border-gray-500 rounded-md p-2 outline-gray-900 focus-visible:outline-none  shadow-md focus:shadow-primary-600 w-full transform duration-500 "
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            minLength={5}
            maxLength={200}
            required={true}
            className="bg-black text-gray-300 border border-gray-500 rounded-md p-2 outline-gray-900 focus-visible:outline-none  shadow-md focus:shadow-primary-600 w-full transform duration-500 "
            placeholder="Email"
          />
          <textarea
            name="message"
            minLength={5}
            maxLength={700}
            required={true}
            className="bg-black text-gray-300 border border-gray-500 rounded-md p-2 outline-gray-900 focus-visible:outline-none  shadow-md focus:shadow-primary-600 w-full transform duration-500  resize-none h-40"
            placeholder="Message"
          />
          <button
            type="submit"
            className="p-1 bg-primary-900 rounded-xl py-1 w-full flex items-center justify-center hover:bg-primary-800 transition-colors duration-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
