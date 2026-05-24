"use client";
import toast from "react-hot-toast";
const Pricing = () => {
  return (
    <section className="w-full py-10 px-5 sm:px-0 text-black">
      {/* Heading */}
      <div className="text-center mb-10 dark:text-white">
        <h2 className="text-2xl md:text-4xl font-bold">Choose Your Plan</h2>
        <p className="text-xs sm:text-[16px] mt-2">
          Simple pricing for unlimited creativity with PixGen
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
        {/* FREE */}
        <div className="group rounded-2xl p-6 bg-white/30 dark:bg-black/20 dark:text-white backdrop-blur-xl border border-black/10 dark:border-white/10 transition-transform hover:scale-102 hover:border-blue-400/40 shadow-sm dark:shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className=" mt-2">Start exploring AI image generation</p>

          <div className="text-3xl font-bold mt-6">$0</div>

          <ul className="mt-6 space-y-2 text-sm">
            <li>✔ 20 generations/day</li>
            <li>✔ Basic quality</li>
            <li>✔ Watermarked images</li>
          </ul>

          <button
            onClick={() => toast.success("Free plan activated!")}
            className="btn btn-ghost btn-primary btn-dash mt-10 w-full py-2 rounded-2xl "
          >
            Get Started
          </button>
        </div>

        {/* PRO (Highlighted) */}
        <div className="relative group rounded-2xl p-6 bg-white/40 dark:bg-white/10 backdrop-blur-2xl border border-purple-500/30 dark:border-purple-500/40 hover:scale-102 dark:text-white transition-transform  shadow-lg dark:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:shadow-[0_0_50px_rgba(168,85,247,0.35)]">
          {/* Badge */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-xs px-3 py-1 rounded-full text-white">
            Most Popular
          </span>
          <h3 className="text-2xl font-semibold text-indigo-700">Pro</h3>
          <p className=" mt-2">Best for creators & daily use</p>

          <div className="text-3xl font-bold mt-6">$12</div>

          <ul className="mt-6 space-y-2   text-sm">
            <li>✔ Unlimited generations</li>
            <li>✔ HD quality images</li>
            <li>✔ No watermark</li>
            <li>✔ Faster processing</li>
          </ul>

          <button
            onClick={() =>
              toast.success("Welcome to Pro 🚀 Unlimited generation unlocked!")
            }
            className="mt-6 w-full py-2 rounded-2xl btn btn-primary"
          >
            Upgrade Now
          </button>
        </div>

        {/* ULTRA */}
        <div className="group rounded-2xl p-6 bg-white/30 dark:bg-black/20 dark:text-white backdrop-blur-xl border border-black/10 dark:border-white/10 transition-transform hover:scale-102 hover:border-blue-400/40 shadow-sm dark:shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h3 className="text-xl font-semibold">Enterprice</h3>
          <p className="  mt-2">For professionals & teams</p>

          <div className="text-3xl font-bold mt-6">$29</div>

          <ul className="mt-6 space-y-2 text-sm">
            <li>✔ Commercial license</li>
            <li>✔ Priority generation</li>
            <li>✔ API access</li>
            <li>✔ Advanced AI models</li>
          </ul>

          <button
            onClick={() =>
              toast.success(
                "Enterprise request sent. Our team will contact you soon.",
              )
            }
            className="btn btn-ghost btn-primary btn-dash mt-6 w-full py-2 rounded-2xl"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
