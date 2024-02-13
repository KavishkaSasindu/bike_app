import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-1 w-full h-[100vh] bg-no-repeat bg-cover">
      <div>
        <h1 className=" text-center text-3xl py-16">Contact</h1>
      </div>
      <div className=" ">
        <div className="h-[63vh] w-[35%] ml-6 bg-transparent mt-20 rounded-lg ">
          <form className="flex justify-center items-center ">
            <div className="space-y-6 mt-10">
              <input
                className="p-4 w-96 rounded-lg bg-transparent  outline placeholder-black  text-lg"
                type="text"
                placeholder="Enter Name"
              />
              <br />
              <input
                className="p-4 w-96 rounded-lg bg-transparent  outline placeholder-black  text-lg"
                type="text"
                placeholder="Enter Contact Number"
              />
              <br />
              <textarea className="p-4 w-96 rounded-lg bg-transparent  outline placeholder-black  text-lg"
                cols="30"
                rows="6"
                placeholder="How can I help"
              ></textarea>
              <br />
              <button className="p-2 rounded-lg bg-zinc-800 hover:bg-black text-white transition-all ease-in-out duration-300 hover:scale-105">Send Me</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
