import Image from 'next/image';

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-FEF1E0">
      <div className="flex flex-col md:flex-row w-screen max-w-screen-xl">
        
       
        <div className="w-full md:w-2/5  md:h-full mt-10 bg-orange-200">
          <div className="flex items-center justify-center h-full">
            <Image
              src="/users.png"
              alt="User"
              width={356}
              height={340}
            />
          </div>
        </div>
       
        <div className="flex-1 p-8 md:p-20 w-full">
          <h2 className="font-semibold text-3xl md:text-5xl mb-4 text-center md:text-right">We'd love to hear <br/>from you</h2>
          <div className="mb-4">
            <input
              name="name"
              className="border border-black p-4 md:p-6 w-full"
              placeholder="Name*"
            />
          </div>
          <div className="mb-4">
            <input
              name="email"
              className="border border-black p-4 md:p-6 w-full"
              placeholder="Email*"
            />
          </div>
          <div className="mb-4">
            <input
              name="website"
              className="border border-black p-4 md:p-6 w-full"
              placeholder="Website URL*"
            />
          </div>
          <div className="mb-4">
            <input
              name="projectDetails"
              className="p-4 md:p-10 border border-black text-text w-full"
              placeholder="Project Details*"
            />
          </div>
          <button
            type="button"
            className="bg-black text-white font-bold py-4 md:py-6 rounded-md w-full"
          >
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
