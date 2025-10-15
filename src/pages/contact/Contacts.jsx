import { MapPin, Mail, Phone } from "lucide-react";
import banner from "../../assets/banner-6.png"; // 👈 apna background image yaha import karein

export default function Contacts() {
  return (
    <div className="bg-white text-gray-800 pt-20">
      {/* Contact Hero Section */}
      <section
        className="relative h-[420px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">

          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Contact  MyAwala
          </h2>
          <p className="text-lg text-gray-200">
            Have questions about Amla products? We’re here to help you.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#a44d25]">
              Get in touch
            </h3>
            <h2 className="text-3xl font-semibold mt-2">
              Let’s talk about Amla
            </h2>
            <p className="mt-4 text-gray-600">
              Whether it’s about our Amla juice, tablets, or natural health
              products – Team Greate Awala is always ready to connect with you.
            </p>
          </div>

          {/* Locations */}
          <div className="flex items-start space-x-4">
            <MapPin className="text-[#a44d25]" size={28} />
            <div>
              <h4 className="font-medium text-lg">Our Office</h4>
              <p className="text-gray-600">
                Greate Awala Pvt. Ltd.
                <br />
                New Delhi, India
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <Mail className="text-[#a44d25]" size={28} />
            <div>
              <h4 className="font-medium text-lg">Email us</h4>
              <p className="text-gray-600">
                gyanendra9506@gmail.com
                <br />
                shubhamyadav0@zohomai.in
                <br />
                
              </p>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-start space-x-4">
            <Phone className="text-[#a44d25]" size={28} />
            <div>
              <h4 className="font-medium text-lg">Call us</h4>
              <p className="text-gray-600">
                +91 9871326378
                <br />
                +91 9792781778
                <br /> +91 8960025304
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white shadow-xl p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>
          <p className="text-gray-600 mb-6">
            Have a query about our Amla products? Drop your details and our team
            will get back to you shortly.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a44d25]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a44d25]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a44d25]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#a44d25] text-white px-6 py-3 rounded-md hover:bg-[#98602c] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4286563853183!2d77.3910296150824!3d28.535516982456974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef4d1b5a8f11%3A0xa63e5823cf4c3aa!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1693664872723!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        />

      </section>
    </div>
  );
}
