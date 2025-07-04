import React, { useState } from "react";
import ContactInput from "../Shared/LandingPage/ContactInput";
import SectionHeader from "../Shared/LandingPage/SectionHeader";
import ToastNotification from "../Panels/ToastNotification";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState({ message: "", type: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const result = await res.text();
      console.log("✅ Message sent:", result);

      setToast({ message: "✅ Message sent successfully!", type: "success" });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("❌ Error sending message:", err);
      setToast({ message: "❌ Failed to send message.", type: "error" });
    }
  };

  return (
    <div className="contact-fullscreen">
      <div className="contact-content">
        <div className="contact-inner">
          <SectionHeader
            badge="Get In Touch"
            title="Contact"
            highlight="WildTeach"
            subtitle="Ready to transform your learning experience? We'd love to hear from you."
            layout="vertical"
          />

          <div className="contact-container">
            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <ContactInput
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <ContactInput
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <ContactInput
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <ContactInput
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  isTextarea
                />
                <button type="submit" className="contact-submit-btn">
                  <span>Send Message</span>
                  <div className="btn-shine"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {toast.message && (
        <ToastNotification
          type={toast.type}
          message={toast.message}
          onClose={() => setToast({ message: "", type: "" })}
        />
      )}
    </div>
  );
}
