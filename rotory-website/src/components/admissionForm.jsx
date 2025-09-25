import { useEffect, useState } from "react";

function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stream: "",
    school: "",
    message:""
    });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500)

      return () => clearTimeout(timer)
    }
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/admission-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error sending mail", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="relative  w-full bg-white">
        {/* Noise Texture (Darker Dots) Background - NOW INSIDE SECTION */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Content on top of background */}
        <div className="relative z-10">
          <div className="text-center mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-5xl 2xl:text-5xl font-bold tracking-wide pt-9 flex justify-center items-center text-gray-800 font-merri">
              Admission Enquiry
            </h2>
            <p className="text-xl md:text-2xl 2xl:text-2xl text-gray-600 mt-5 font-medium font-nuno">
              Take the first step towards your bright future. Submit your
              enquiry and we'll get back to you soon!
            </p>
          </div>

          {loading ? <div className="toast toast-top toast-end z-10">
            {/* <div className="alert alert-info">
              <span>New mail arrived.</span>
            </div> */}
            <div className="alert alert-success rounded-xl bg-gradient-to-tl from-[#c2410c] via-[#f97316] to-[#fdba74] border border-black">
              <span className="text-lg text-white tracking-wide font-nuno">Enquiry Sent!</span>
            </div>
          </div> : "" }
          

          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pb-12">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Form Sections */}
              <div className="p-8 space-y-8">
                {/* Personal Information Section */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 font-merri mb-4 flex items-center tracking-wide">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    Personal Information
                  </h4>
                  <div className="">
                    <div className="bg-gray-50 p-4 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 gap-4">
                      <div>
                        <fieldset className="fieldset">
                          <legend className="fieldset-legend font-nuno text-gray-800 text-sm">
                            What is your name?
                          </legend>
                          <input
                            name="name"
                            type="text"
                            className="input"
                            placeholder="Type here"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>
                      <div>
                        <fieldset className="fieldset">
                          <legend className="fieldset-legend text-gray-800 text-sm">
                            Enter Your Email
                          </legend>
                          <input
                            name="email"
                            type="text"
                            className="input"
                            placeholder="xyz@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>
                      <div>
                        <fieldset className="fieldset">
                          <legend className="fieldset-legend text-gray-800 text-sm">
                            Enter Your Phone Number
                          </legend>
                          <input
                            name="phone"
                            type="text"
                            className="input"
                            placeholder="+91"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>
                      <div>
                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">
                            Select Your Stream
                          </legend>
                          <select
                            name="stream"
                            className="select"
                            value={formData.stream}
                            onChange={handleChange}
                          >
                            <option value="">Preferred Stream</option>
                            <option value="science">Science</option>
                            <option value="commerce">Commerce</option>
                          </select>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Information Section */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 font-merri mb-4 flex items-center tracking-wide">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    Academic Information
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div>
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend text-sm">
                          Enter Your Previous/Current School
                        </legend>
                        <input
                          name="school"
                          type="text"
                          className="input w-full rounded-xl"
                          placeholder="Type here"
                          value={formData.school}
                          onChange={handleChange}
                        />
                      </fieldset>
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-800 font-merri mb-4 flex items-center tracking-wide">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm ">3</span>
                    </div>
                    Additional Information
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div>
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend text-sm">
                          Message/Questions
                        </legend>
                        <textarea
                          name="message"
                          className="textarea h-24 w-full rounded-lg"
                          placeholder="Any specific questions/requirements you'd like to share.."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <div className="label">Optional</div>
                      </fieldset>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg font-nuno"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdmissionForm;
