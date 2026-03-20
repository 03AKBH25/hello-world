import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mdaweoqo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      e.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-[#020617] via-[#14072e] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities,
            or just a friendly tech conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h3 className="text-2xl text-white font-semibold mb-6">
              Contact Information
            </h3>

            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              className="block bg-slate-900/60 border border-purple-900/40 rounded-xl p-6 hover:border-purple-600 transition"
            >
              <h4 className="text-white font-semibold">GitHub</h4>
              <p className="text-slate-400 text-sm">
                Explore my repositories and projects
              </p>
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              className="block bg-slate-900/60 border border-purple-900/40 rounded-xl p-6 hover:border-purple-600 transition"
            >
              <h4 className="text-white font-semibold">LinkedIn</h4>
              <p className="text-slate-400 text-sm">
                Connect with me professionally
              </p>
            </a>

            <a
              href="mailto:yourmail@email.com"
              className="block bg-slate-900/60 border border-purple-900/40 rounded-xl p-6 hover:border-purple-600 transition"
            >
              <h4 className="text-white font-semibold">Email</h4>
              <p className="text-slate-400 text-sm">
                Send me a direct email
              </p>
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-slate-900/60 border border-purple-900/40 rounded-2xl p-8">

            {!submitted ? (

              <form onSubmit={handleSubmit} className="space-y-6">

                <h3 className="text-2xl text-white font-semibold mb-4">
                  Send a Message
                </h3>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 outline-none"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 outline-none"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message (optional)"
                  className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition"
                >
                  Send Message
                </button>

              </form>

            ) : (

              <div className="text-center py-12">

                <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4" />

                <h3 className="text-2xl text-white font-semibold mb-2">
                  Message Sent!
                </h3>

                <p className="text-slate-400">
                  Thanks for reaching out. I’ll get back to you soon.
                </p>

                <button 
                  onClick={()=>setSubmitted(false)}
                  className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
                >
                  Send Another Message
                </button>

              </div>

            )}

          </div>

        </div>

        {/* CV BUTTON */}
        <div className="text-center mt-20">

          <a
            href="https://drive.google.com/uc?export=download&id=11epPkfBJjZCJmNtks8o2Ke-LUpI_PAjg"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition"
          >
            Download CV
          </a>

          <p className="mt-8 text-slate-500 text-sm">
            © 2026 Aniket Kumar • Built with React & Tailwind
          </p>

        </div>

      </div>
    </section>
  );
}