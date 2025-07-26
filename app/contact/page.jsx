"use client";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="relative ">
      <div className="px-24 py-2 relative mx-auto flex lg:flex-row gap-6 sm:flex-col bg-amber-50">
        {/* header */}

        {/* item kiri */}
        <div className="relative p-4 flex-row rounded-xl text-primary border border-accent w-1/3">
          {/* Text */}
          <h1 className="text-7xl pt-8 text-primary font-semibold">Contact</h1>
          <div className="py-6 flex mt-12 flex-col gap-2 bg-accent-danger">
            <div className="bg-slate-400">mail</div>
            <div className="bg-accent-ungu">phone</div>
            <div className="bg-accent-cyan">adress</div>
          </div>
          <div className="relative group/button mt-28 mb-4">
            <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-accent-baja blur-2xl opacity-20"></div>
            <Social
              containerStyle="flex gap-2"
              iconStyle="relative w-12 h-12 rounded-lg flex justify-center items-center bg-gradient-to-b from-accent to-accent/60 hover:bg-accent text-primary hover:text-primary  border border-accent/30 hover:border-primary/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* item kanan */}
        <div className="flex flex-col text-primary bg-accent p-12  w-3/4 rounded-xl">
          <div className="bg-white">
            <h1 className="text-5xl font-semibold bg-fuchsia-100">
              Lets Connect <br /> With Me
            </h1>
          </div>
          <div className="my-8 py-4 bg-white flex flex-col gap-4">
            <div className="bg-primary text-white">nama</div>
            <div className="bg-primary text-white">email</div>
            <div className="bg-primary text-white">tittle or description</div>
          </div>

          <Button className="rounded-lg bg-primary text-center text-white">
            Send Massage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
