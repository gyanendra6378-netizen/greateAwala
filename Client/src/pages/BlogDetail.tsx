import { useParams, useLocation, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { dummyBlogs } from "./Blogs";
import { ArrowLeft, Calendar, User, Share2, Lightbulb, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const blog =
    (location.state as { blog?: (typeof dummyBlogs)[number] } | null)
      ?.blog || dummyBlogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Blog not found
          </h2>
          <button
            onClick={() => navigate("/blogs")}
            className="bg-[#a75c22] text-white px-6 py-2 rounded-lg hover:bg-[#98602c] transition"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${blog.title} - Greate Awala Blog`}
        description={blog.description}
        keywords={`${blog.title.toLowerCase()}, amla blog, ${blog.author.toLowerCase()}, amla health, natural products, wellness tips`}
        url={`https://myawala.com/blog/${blog.id}`}
        image="https://myawala.com/banner-6.png"
        type="article"
      />
      <div className="bg-white">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#a75c22] hover:text-[#98602c] transition font-medium"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </button>
        </div>

        {/* Blog Content */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Blog Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <span className="inline-block bg-[#d89a7e] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Amla Health
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Author & Date */}
            <div className="flex items-center gap-6 text-gray-600 mb-8 pb-6 border-b">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{blog.time}</span>
              </div>
              <button className="flex items-center gap-2 text-[#a75c22] hover:text-[#98602c] transition">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 rounded-2xl overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Description */}
            <p className="text-xl text-gray-700 font-medium mb-6 border-l-4 border-[#d89a7e] pl-6">
              {blog.description}
            </p>

            {/* Full Content */}
            <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
              <p>{blog.fullContent}</p>

              {/* Conclusion Section */}
              <div className="bg-gradient-to-r from-[#fef8f4] to-white rounded-xl p-6 border border-[#d89a7e]/20 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Conclusion
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Incorporating Amla into your daily routine is one of the best
                  decisions you can make for your health. With its powerful
                  nutritional profile and proven health benefits, Amla stands
                  out as a true superfood that has stood the test of time. From
                  boosting your immunity to improving your skin and hair health,
                  Amla offers comprehensive wellness support in the most natural
                  way possible.
                </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                At Greate Awala, we are committed to bringing you the purest,
                most authentic Amla products. Our products are made with care,
                ensuring that you receive all the natural goodness that Amla
                has to offer. Start your journey towards better health today
                with Greate Awala!
              </p>
              </div>
            </div>

            {/* Benefits Section */}
            {blog.benefits && (
              <div className="mt-12 bg-[#fef8f4] rounded-xl p-8 border-l-4 border-[#d89a7e]">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {blog.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#d89a7e]" />
                      <span className="text-lg leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Tips Section */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Lightbulb className="text-[#d89a7e]" size={26} />
                <span>Expert Tips</span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <strong>Daily Consumption:</strong> For maximum benefits,
                  consume Amla products consistently. Whether it's juice in the
                  morning, powder with meals, or candy as a snack, consistency
                  is key to experiencing long-term health improvements.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Quality Matters:</strong> Always choose 100% natural
                  and organic Amla products. Avoid products with artificial
                  preservatives, colors, or sweeteners. Greate Awala ensures
                  purity in every product.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Stay Hydrated:</strong> When consuming Amla products,
                  especially powder, ensure you drink plenty of water throughout
                  the day. This helps your body absorb nutrients more
                  effectively.
                </p>
              </div>
            </div>

            {/* Nutritional Value Section */}
            <div className="mt-12 bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Leaf className="text-green-600" size={26} />
                <span>Nutritional Value</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                    Vitamins & Minerals
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Vitamin C</span>
                      <span className="font-semibold text-green-700">
                        Very High
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Iron</span>
                      <span className="font-semibold">Moderate</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Calcium</span>
                      <span className="font-semibold">Good</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Antioxidants</span>
                      <span className="font-semibold text-green-700">
                        High
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">
                    Health Properties
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Anti-inflammatory</span>
                      <span className="text-green-600">Yes</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Antimicrobial</span>
                      <span className="text-green-600">Yes</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Antioxidant</span>
                      <span className="text-green-600">Yes</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Immune Booster</span>
                      <span className="text-green-600">Yes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-[#d89a7e] to-[#a75c22] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Experience Amla Benefits?
              </h3>
              <p className="mb-6 text-lg">
                Shop our premium collection of natural Amla products today!
              </p>
              <button
                onClick={() => navigate("/products")}
                className="bg-white text-[#a75c22] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Shop Amla Products
              </button>
            </div>
          </motion.div>
        </article>

        {/* Related Blogs Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 bg-[#f9f9f9]">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyBlogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 3)
              .map((relatedBlog) => (
                <motion.div
                  key={relatedBlog.id}
                  onClick={() =>
                    navigate(`/blog/${relatedBlog.id}`, {
                      state: { blog: relatedBlog },
                    })
                  }
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 text-[#a75c22] group-hover:text-[#98602c] transition">
                      {relatedBlog.title}
                    </h3>
                    <div className="text-sm text-gray-500 mb-2">
                      <span>{relatedBlog.time}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedBlog.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}


