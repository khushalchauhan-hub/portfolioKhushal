import { useState } from "react";
import axios from "axios";
import { RiMailSendLine } from "react-icons/ri";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      setMsg(res.data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setMsg("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-20 flex flex-col items-center justify-center">
      <header className="flex text-2xl items-center mb-6">
        <RiMailSendLine className="text-3xl mr-2" />
        <h2 className="text-2xl font-bold font-abril">Contact Me</h2>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 rounded bg-gray-100 dark:bg-gray-800"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded bg-gray-100 dark:bg-gray-800"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Enter your message"
          className="p-2 rounded bg-gray-100 dark:bg-gray-800"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded"
        >
          Send Message
        </button>
      </form>

      {msg && <p className="mt-4 text-sm text-green-500">{msg}</p>}
    </section>
  );
}
