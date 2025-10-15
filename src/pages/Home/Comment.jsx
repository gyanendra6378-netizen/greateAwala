import { useEffect, useState } from "react";
import img1 from "../../assets/4.png";
import "../../index.css"; 
import bgimg from "../../assets/lastBanner.png"// make sure your slide-in animation is in index.css

const testimonials = [
  {
    name: "Alex Roberts",
    role: "Farmer, AgroHolding",
    text: `“Absorbent lower warranty smart deluxe lasting sporty fast customer spring rated. Free every challenge your spicey racy. Introducing handcrafted credit-card like supreme monster just hurry fresh outlasts flip quality.”`,
    image: img1,
  },
  {
    name: "Sarah Mills",
    role: "Organic Grower",
    text: `“Value far mouthwatering wherever try offer ultra aroma. Introducing handcrafted eco-packaged vegetables like never before.”`,
    image: img1,
  },
  {
    name: "David Park",
    role: "Eco Marketer",
    text: `“Authentic nature-picked products flipping freshness like you’ve never tasted. Real value and smart branding for today’s market.”`,
    image: img1,
  },
];

const Comment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setAnimate(true);
      }, 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full bg-cover bg-black bg-center
         text-white"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black/50 w-full h-full md:px-16 py-20 px-6">

      
      <div className="max-w-5xl mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What People Says</h2>

        {/* Testimonial Slide */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 transition-all duration-500 ease-in-out">
          {/* Image and Info */}
          <div className="shrink-0 text-center md:text-left">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md transition-all duration-500"
            />
            <div className="mt-4">
              <p className="font-semibold text-lg">{testimonials[activeIndex].name}</p>
              <p className="text-sm opacity-80">{testimonials[activeIndex].role}</p>
            </div>
          </div>

          {/* Text with animation */}
          <div className={`max-w-xl text-left transition-opacity duration-500 ${animate ? "animate-slide-in" : ""}`}>
            <p className="text-lg md:text-xl leading-relaxed">
              {testimonials[activeIndex].text}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#ffd33d]" : "bg-[#5c5b5b]"
              }`}
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  setActiveIndex(index);
                  setAnimate(true);
                }, 100);
              }}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Comment;
