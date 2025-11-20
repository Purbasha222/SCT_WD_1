function ContactPage() {
  return (
    <>
      <div className="mt-15 min-h-screen bg-yellow-100 pt-5 p-5 md:p-20 flex flex-col">
        <h1 className="font-bold text-4xl text-center">Contact Us</h1>
        <div className="flex flex-col border-3 rounded-2xl mt-10 p-5">
          <label className="text-2xl font-bold mb-5">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 border-2 rounded-md w-full mb-3"
          />
          <label className="text-2xl font-bold mb-3">Your Number</label>
          <input
            type="telephone"
            placeholder="Enter your number"
            className="p-2 border-2 rounded-md w-full mb-3"
          />
          <label className="text-2xl font-bold mb-3">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border-2 rounded-md w-full"
          />
          <button className="rounded-full bg-amber-900 text-white text-2xl font-semibold mt-5">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
