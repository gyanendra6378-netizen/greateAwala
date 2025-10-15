import { useParams } from "react-router-dom";
import { productsData } from "./Products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) return <h2 className="text-center text-red-600 pt-20">Product not found</h2>;

  return (
    <div className="flex gap-10 pt-32 pb-32 px-10">
      {/* Left Image */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-[400px] h-[400px] object-contain rounded-lg shadow-md"
        />
      </div>

      {/* Right Details */}
      <div className="w-1/2 space-y-4">
        {/* Rating */}
        <p className="text-yellow-500 text-2xl">{"★".repeat(product.rating)}</p>

        {/* Title */}
        <h1 className="text-3xl font-bold">{product.title}</h1>

        {/* Price */}
        <div className="flex items-center gap-3">
          <p className="text-green-600 text-2xl font-bold">₹{product.price}</p>
          {product.originalPrice && (
            <p className="line-through text-gray-500">₹{product.originalPrice}</p>
          )}
          <span className="  text-[#e70e0e] text-xs font-bold px-2 py-1 rounded-full shadow">
                        -{product.discount}%
                      </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        {/* Extra Details */}
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-semibold">Brand:</span> {product.brand || "Great Awala"}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {product.category || "Amla Products"}
          </p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            <span className="text-green-600 font-semibold">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
            </span>
          </p>
          <p>
            <span className="font-semibold">Delivery:</span> Free Delivery within 3-5 days
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-5 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
          Order Now
        </button>
      </div>
    </div>
  );
}
