// src/components/ContactForm.jsx
export default function ContactForm() {
  return (
    <div className="p-8 border bg-white border-white/60 rounded-lg shadow-md">
      <h2 className="text-5xl text-primary font-bold mb-4">Lets Connect</h2>
      <form className="mt-14 space-y-4">
        <div>
          <input
            type="text"
            className="w-full p-2 bg-transparent border border-primary rounded"
          />
        </div>
        <div>
          <input
            type="email"
            className="w-full p-2 bg-transparent border border-primary rounded"
          />
        </div>
        <div>
          <textarea
            className="w-full p-2 bg-transparent border border-primary rounded"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
