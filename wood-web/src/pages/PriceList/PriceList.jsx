import React, { useState } from "react";
import { ChevronLeft, ChevronRight, TreePine } from "lucide-react";

const priceData = [
  {
    title: "buk pr",
    rows: [
      {
        delka: 1000,
        sirka: 300,
        tloustka: 40,
        m3: 0.012,
        cenaM3: 1100,
        cenaKs: 462,
      },
      {
        delka: 1100,
        sirka: 300,
        tloustka: 40,
        m3: 0.0132,
        cenaM3: 1100,
        cenaKs: 508.2,
      },
      {
        delka: 800,
        sirka: 300,
        tloustka: 40,
        m3: 0.0096,
        cenaM3: 1100,
        cenaKs: 369.6,
      },
      {
        delka: 900,
        sirka: 300,
        tloustka: 40,
        m3: 0.0108,
        cenaM3: 1100,
        cenaKs: 415.8,
      },
    ],
  },
  {
    title: "buk cink",
    rows: [
      {
        delka: 3000,
        sirka: 400,
        tloustka: 20,
        m3: 0.024,
        cenaM3: 1000,
        cenaKs: 840,
      },
      {
        delka: 4000,
        sirka: 300,
        tloustka: 20,
        m3: 0.024,
        cenaM3: 1000,
        cenaKs: 840,
      },
      {
        delka: 4000,
        sirka: 400,
        tloustka: 20,
        m3: 0.032,
        cenaM3: 1000,
        cenaKs: 1120,
      },
    ],
  },
  {
    title: "dub",
    rows: [
      {
        delka: 800,
        sirka: 200,
        tloustka: 20,
        m3: 0.0032,
        cenaM3: 2000,
        cenaKs: 224,
      },
      {
        delka: 900,
        sirka: 200,
        tloustka: 20,
        m3: 0.0036,
        cenaM3: 2000,
        cenaKs: 252,
      },
      {
        delka: 1400,
        sirka: 600,
        tloustka: 40,
        m3: 0.00336,
        cenaM3: 2000,
        cenaKs: 2352,
      },
      {
        delka: 1400,
        sirka: 650,
        tloustka: 40,
        m3: 0.00364,
        cenaM3: 2000,
        cenaKs: 2548,
      },
      {
        delka: 1500,
        sirka: 600,
        tloustka: 40,
        m3: 0.036,
        cenaM3: 2000,
        cenaKs: 2520,
      },
      {
        delka: 1600,
        sirka: 600,
        tloustka: 40,
        m3: 0.0384,
        cenaM3: 2000,
        cenaKs: 2688,
      },
      {
        delka: 1700,
        sirka: 600,
        tloustka: 40,
        m3: 0.0408,
        cenaM3: 2000,
        cenaKs: 2856,
      },
      {
        delka: 1800,
        sirka: 600,
        tloustka: 40,
        m3: 0.0432,
        cenaM3: 2000,
        cenaKs: 3024,
      },
      {
        delka: 1900,
        sirka: 600,
        tloustka: 40,
        m3: 0.0456,
        cenaM3: 2500,
        cenaKs: 3990,
      },
      {
        delka: 2000,
        sirka: 600,
        tloustka: 40,
        m3: 0.048,
        cenaM3: 2500,
        cenaKs: 4200,
      },
      {
        delka: 2100,
        sirka: 600,
        tloustka: 40,
        m3: 0.0504,
        cenaM3: 2500,
        cenaKs: 4410,
      },
      {
        delka: 2200,
        sirka: 600,
        tloustka: 40,
        m3: 0.0528,
        cenaM3: 2500,
        cenaKs: 4620,
      },
      {
        delka: 2300,
        sirka: 600,
        tloustka: 40,
        m3: 0.0552,
        cenaM3: 2500,
        cenaKs: 4830,
      },
      {
        delka: 2400,
        sirka: 600,
        tloustka: 40,
        m3: 0.0576,
        cenaM3: 2500,
        cenaKs: 5040,
      },
      {
        delka: 2500,
        sirka: 600,
        tloustka: 40,
        m3: 0.06,
        cenaM3: 2500,
        cenaKs: 5250,
      },
      {
        delka: 2700,
        sirka: 650,
        tloustka: 40,
        m3: 0.0702,
        cenaM3: 2500,
        cenaKs: 6142.5,
      },
      {
        delka: 3000,
        sirka: 650,
        tloustka: 40,
        m3: 0.078,
        cenaM3: 2500,
        cenaKs: 6825,
      },
      {
        delka: 3800,
        sirka: 650,
        tloustka: 40,
        m3: 0.0988,
        cenaM3: 2500,
        cenaKs: 8645,
      },
      {
        delka: 4000,
        sirka: 650,
        tloustka: 40,
        m3: 0.104,
        cenaM3: 1700,
        cenaKs: 6188,
      },
    ],
  },
];

function PriceList() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(priceData.length / 1);

  return (
    <div className="min-h-screen bg-black/90 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)_repeat] bg-[length:30px_30px]">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12"></div>
      <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-left fahkwang-semibold mb-8 md:mb-16 tracking-wider">
        PRICE LIST
      </h1>

      <div className="relative">
      <div className="mt-8 md:mt-12">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            className={`text-white p-2 rounded-full bg-black/30 backdrop-blur-sm transition-all hover:scale-110 flex items-center justify-center
                  ${
                    currentPage === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-80 hover:opacity-100"
                  }`}
            disabled={currentPage === 0}
          >
            <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            className={`text-white p-2 rounded-full bg-black/30 backdrop-blur-sm transition-all hover:scale-110 flex items-center justify-center
                  ${
                    currentPage === totalPages - 1
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-80 hover:opacity-100"
                  }`}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight size={24} className="sm:w-8 sm:h-8" />
          </button>
      </div>
      
      {/* Price Tables */}
      <div className="grid gap-4 sm:gap-8 text-black">
        {priceData.slice(currentPage, currentPage + 1).map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-white text-xl font-semibold mb-2 md:hidden">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
              {/* Left Card - Dimensions */}
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
                <h2 className="text-white text-xl font-semibold mb-4 hidden md:block">
                  {section.title}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-black text-sm border-b border-gray-700">
                        <th className="text-left py-2 font-bold">délka</th>
                        <th className="text-left py-2 font-bold">šířka</th>
                        <th className="text-left py-2 font-bold">tlouštka</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className="text-gray-800 border-b border-gray-800"
                        >
                          <td className="py-2 sm:py-3">{row.delka}</td>
                          <td className="py-2 sm:py-3">{row.sirka}</td>
                          <td className="py-2 sm:py-3">{row.tloustka}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Card - Prices */}
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#cd8a7b] bg-opacity-10" />
                <div className="overflow-x-auto">
                  <table className="w-full relative z-10">
                    <thead>
                      <tr className="text-black text-sm border-b border-gray-700">
                        <th className="text-left py-3 sm:py-5 font-bold">m³</th>
                        <th className="text-left py-3 sm:py-5 font-bold">
                          cena m³
                        </th>
                        <th className="text-left py-3 sm:py-5 text-white font-semibold">
                          cena ks.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className="text-gray-800 border-b border-gray-800"
                        >
                          <td className="py-2 sm:py-3">{row.m3}</td>
                          <td className="py-2 sm:py-3">{row.cenaM3}</td>
                          <td className="py-2 sm:py-3 text-white">
                            {row.cenaKs}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Fixed positioning for better responsiveness */}
     

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 p-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all transform hover:scale-150 ${
                  i === currentPage
                    ? "bg-white scale-150"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default PriceList;
