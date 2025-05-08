"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

type BookingFormData = {
  name: string;
  phone: string;
  date: string;
  location: string;
  eventType: string;
};

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    date: "",
    location: "",
    eventType: "",
  });

  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit number";
    if (!formData.date) newErrors.date = "Event date is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.eventType) newErrors.eventType = "Select event type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const sendEmail = () => {
  //   emailjs.send(
  //     "your_service_id",     // Replace
  //     "your_template_id",    // Replace
  //     {
  //       name: formData.name,
  //       phone: formData.phone,
  //       date: formData.date,
  //       location: formData.location,
  //       eventType: formData.eventType,
  //     },
  //     "your_public_key"       // Replace
  //   )
  //     .then(() => {
  //       toast.success("Confirmation email sent!");
  //     })
  //     .catch(() => {
  //       toast.error("Email sending failed.");
  //     });
  // };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // sendEmail();
      alert("hi")
      const message = `Hello! I would like to book flower decoration for:\n\n📅 Date: ${formData.date}\n📍 Location: ${formData.location}\n🎉 Event Type: ${formData.eventType}\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
      toast.success("Opening WhatsApp...");
      window.open(whatsappUrl, "_blank");

      setSubmitted(true);
      setTimeout(() => setIsSubmitting(false), 3000);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="booking"
      className="bg-pink-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Book Your Event
        </motion.h2>

        {submitted ? (
          <motion.div
            className="text-center text-green-600 text-lg font-medium"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            🎉 Thank you! We’ll get in touch with you shortly.
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-xl shadow-md"
          >
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Phone", name: "phone", type: "tel" },
              { label: "Date", name: "date", type: "date" },
              { label: "Location", name: "location", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors[field.name as keyof BookingFormData] && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors[field.name as keyof BookingFormData]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">-- Select Event --</option>
                <option value="Wedding">Wedding</option>
                <option value="Temple">Temple Floral Decor</option>
                <option value="Housewarming">Housewarming / Naming Ceremony</option>
                <option value="Other">Other</option>
              </select>
              {errors.eventType && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.eventType}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white rounded-lg py-2 font-medium hover:bg-pink-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? "Submitting..." : "Book Flower Now 🪻"}
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
