import React from "react";
import image2 from "../../assets/video.png";
export default function Advantages() {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "123456789"; // Replace with your WhatsApp number
    const message = encodeURIComponent(
      "Hello, I'm interested in your services!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-[#211f21] bg-[url('/Vector30.png')] bg-contain bg-repeat text-white min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-20">
      <div className="max-w-6xl w-full flex flex-col items-center gap-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 text-left">
          <span className="block md:inline ">ADVANTAGES</span>
          <br className="max-md:hidden" />
          <span className="text-gray-400 ">WORKING WITH US</span>
        </h2>
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 md:ml-10">
            <img
              src={image2} // Replace with correct image path
              alt="Wooden staircase"
              className="w-full md:w-[400px] rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:mr-10">
            <ul className="mt-6 space-y-4 text-gray-300 text-lg text-center md:text-left">
              <li> In-house carpentry production</li>
              <li>
                {" "}
                We only treat wood with environmentally friendly and safe
                products
              </li>
              <li> Prices from the manufacturer, no extra charges</li>
            </ul>
          </div>
        </div>
        {/* WhatsApp Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-md text-lg"
          >
            Receive a consultation
          </button>
        </div>
      </div>
    </div>
  );
}
