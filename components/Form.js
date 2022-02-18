import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // const [address, setAddress] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["address"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      emailjs
        .sendForm(
          "Finaco_gmail", //services_id
          "Finaco", //Templates_id
          e.target,
          "user_wxgEPX2MHHmPLkuiivZWl", //User_id from emailjs which section name call intergratio to get yours user_id
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
      e.target.reset();

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
      // setAddress("");
    }
  };

  return (
    <div className="w-full">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className=" flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
      >
        <h1 className="text-4xl font-bold  dark:text-gray-50">請給些意見</h1>

        {/*FullName */}
        <label
          htmlFor="fullname"
          className="text-black font-light mt-8 dark:text-gray-50"
        >
          名字<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
          placeholder="Name"
          className="bg-transparent border-b py-2 pl-4  focus:outline-none focus:rounded-md focus:ring-1 ring-gray-600 font-light text-black mt-1"
        />
        {errors?.fullname && (
          <p className="text-red-500">Fullname cannot be empty.</p>
        )}

        {/*address */}
        {/* <label
          htmlFor="address"
          className= text-black mt-1 font-light mt-8 dark:text-gray-50"
        >
          地址<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          name="address"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-600 font-light text-black mt-1"
        />
        {errors?.address && (
          <p className="text-red-500">Fullname cannot be empty.</p>
        )} */}

        {/*email */}
        <label
          htmlFor="email"
          className="text-black font-light mt-4 dark:text-gray-50"
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-600 font-light text-black mt-1"
        />
        {errors?.email && (
          <p className="text-red-500">Email cannot be empty.</p>
        )}

        {/*Subject */}
        <label
          htmlFor="subject"
          className="text-black font-light mt-4 dark:text-gray-50"
        >
          標題<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          placeholder="Poduct Type"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-600 font-light text-black mt-1"
        />
        {errors?.subject && (
          <p className="text-red-500">Subject cannot be empty.</p>
        )}

        {/*Message */}
        <label
          htmlFor="message"
          className="text-black font-light mt-4 dark:text-gray-50"
        >
          意見<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          placeholder="Advice......"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-600 font-light text-black mt-1 h-28"
        ></textarea>
        {errors?.message && (
          <p className="text-red-500">Message body cannot be empty.</p>
        )}
        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
          >
            {buttonText}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-cyan-500 ml-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="text-green-500 font-semibold text-sm my-2">
              Thankyou! Your Message has been delivered.
            </p>
          )}
          {showFailureMessage && (
            <p className="text-red-500">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
