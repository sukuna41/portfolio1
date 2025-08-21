// src/components/ContactForm.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/button";
export default function ContactForm() {
  return (
    <div className="p-8 border bg-white h-5/6 mb-10 border-white/60 rounded-lg shadow-md">
      <h2 className="text-6xl text-primary font-bold mb-4">Lets Connect</h2>
      <form className="mt-14 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 bg-transparent border border-primary rounded"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email Address"
            className="w-full p-2 bg-transparent border border-primary rounded"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            className="w-full p-2 bg-transparent border border-primary rounded"
            rows="4"
          ></textarea>
        </div>
        <Button
          variant="outline"
          className="relative h-10 w-full rounded-lg border border-accent uppercase flex items-center gap-2 px-8 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-primary/50 transition-all duration-300"
        >
          <span className="font-normal">Send Message</span>
        </Button>
      </form>
    </div>
  );
}
