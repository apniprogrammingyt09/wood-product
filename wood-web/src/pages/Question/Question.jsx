import React, { useState } from "react";
import log from "../../assets/image-4.png";

// bg-[#1a1a1a] bg-gradient-to-b from-[rgba(30,30,30,0.7)] via-transparent bg-[length:100%_8px]
const Question = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && phone && question) {
      const response = await fetch("http://localhost:5000/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, question }),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .catch((error) => {
          console.log(error);
        });

      console.log("response", response?.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20 bg-[#211f21]">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h1 className="font-['KyivType'] text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-left md:text-left">
              ANY QUESTIONS?
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your name"
                  className="bg-transparent border border-[rgba(100,130,170,0.5)] rounded-full text-white py-3 px-6 w-full"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Your telephone number"
                  className="bg-transparent border border-[rgba(100,130,170,0.5)] rounded-full text-white py-3 px-6 w-full"
                />
              </div>
              <div>
                <textarea
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Your question"
                  className="bg-transparent border border-[rgba(100,130,170,0.5)] rounded-3xl text-white py-3 px-6 w-full h-32"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[rgba(100,130,170,0.7)] hover:bg-[rgba(100,130,170,0.9)] text-white rounded-full py-2 px-8 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 text-white">
            <p className="text-lg mb-8">
              Write to us and we will be sure to answer all your questions and
              give you a comprehensive consultation.
            </p>

            <div className="relative ">
              <img
                src={log}
                alt="Wood cross-section"
                className="w-[50%] ml-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
