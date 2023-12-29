import Image from 'next/image';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-FEF1E0">
      <div className="flex">
        {/* Resim */}
        <div className="w-622 h-891 relative border-4 overflow-hidden bg-orange-200">
          <Image
            src="/users.png"
            alt="User"
            width={378}
            height={656}
          />
        </div>
        
        
        {/* Form */}
        <div className="p-20 ">
        <h2 className="text-3xl font-semibold mb-4">We'd love to hear from you</h2>
          <form orm flex flex-col gap-20>
            <div className="mb-4">
             
              <input
                type="text"
                id="name"
                name="name"
                className="p-10 rounded-md border p-6  bg-bgSoft text-text w-full w-96"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
            
              <input
                type="email"
                id="email"
                name="email"
                className="p-10 rounded-md border p-6 bg-bgSoft text-text w-96"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              
              <input
                type="text"
                id="website"
                name="website"
                className="p-10 rounded-md border p-6  bg-bgSoft text-text w-96"
                placeholder="Website"
              />
            </div>
            <div className="mb-4">
              
              <textarea
                id="projectDetails"
                name="projectDetails"
                className="p-10 rounded-md border p-2  bg-bgSoft text-text w-96"
                placeholder="Project Details"
              />
            </div>
            <button
              type="Send Proposal"
              className="bg-black text-white font-bold py-2 px-40 rounded focus:outline-none focus:shadow-outline"
            >
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
