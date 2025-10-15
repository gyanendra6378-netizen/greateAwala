// components/Checkout/AddressForm.jsx
import { useState } from "react";

export default function Address() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Delivery Address Submitted:", formData);
        // 👇 yaha API ya state update karo
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Delivery Address</h2>
            <form onSubmit={handleSubmit} className="space-y-4  px-32">
                <div>
                    <label className="block text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                         placeholder="Enter Name"
                        className="mt-1 border border-[gray] outline w-full rounded-md  py-3  px-5 "
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        placeholder="Enter Number"
                        className="mt-1 w-full py-3  px-5  border rounded-md border-[gray] outline "
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Address Line 1</label>
                    <input
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-md py-3  px-5  border  border-[gray]  outline"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Address Line 2</label>
                    <input
                        type="text"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md py-3  px-5  border  border-[gray]  outline"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-md py-3  px-5  border  border-[gray]  outline"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">State</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full rounded-md py-3  px-5  border  border-[gray]  outline"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                            pattern="[0-9]{6}"
                            placeholder="6-digit PIN"
                            className="mt-1 w-full rounded-md py-3  px-5  border  border-[gray]  outline"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium">Country</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md py-3  px-5  border  border-[gray]  outline"
                    >
                        <option>India</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                >
                    Confirm Address
                </button>
            </form>
        </div>
    );
}
