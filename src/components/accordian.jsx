import { Globe } from "../icons/globe";

function Accordian() {
  return (
    <div>
      <div className=" w-full bg-white relative border-b border-t border-amber-100 rounded-br-4xl rounded-bl-4xl">
        {/* Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Your Content/Components */}

        <section className="relative z-10 mx-auto">
          <div className="text-center mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16 ">
            <h2 className="text-3xl md:text-5xl 2xl:text-5xl font-bold tracking-wide pt-9  flex justify-center items-center text-gray-800 font-merri">
              Frequently Asked Questions
              <Globe stroke="#374151" className="ml-3 w-6 h-6 2xl:w-9 2xl:h-9" />
            </h2>
            <p className="text-xl md:text-2xl 2xl:text-2xl text-gray-600 mt-5 font-medium font-nuno">
              Get answers to the most common questions about admissions,
              academics, and campus life at Rotary PU College.
            </p>
          </div>

          <div className="max-w-2xl mx-auto ">
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-2xl ">
              <input type="radio" name="my-accordion-3" defaultChecked aria-label="Toggle answer for: What makes Rotary PU College different from other PU colleges in the region?" />
            <div className="collapse-title font-semibold font-merri text-gray-800">
                What makes Rotary PU College different from other PU colleges in
                the region?
              </div>
              <div className="collapse-content text-sm font-nuno text-gray-600">
                Rotary PU College stands out for its legacy as one of the
                earliest institutions in Moodbidri, offering a strong foundation
                in academics while also focusing on leadership, values, and
                all-round student growth. With experienced faculty and
                supportive infrastructure, we provide an environment where
                students truly thrive.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-2xl">
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: What courses and training programs does Rotary PU College offer?" />
              <div className="collapse-title font-semibold font-merri text-gray-800">
                What courses and training programs does Rotary PU College offer?
              </div>
              <div className="collapse-content text-sm font-nuno text-gray-600">
                We offer Science and Commerce streams with popular combinations
                like PCMB, PCMC, EBAS, CEBA, and SEBA. Alongside the PU
                curriculum, students receive focused training for KCET, JEE, and
                NEET, as well as professional courses like CA and ACCA to
                prepare them for future careers.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-2xl">
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: How does the college provide entrance and professional exam coaching?" />
              <div className="collapse-title font-semibold font-merri text-gray-800">
                How does the college provide entrance and professional exam
                coaching?
              </div>
              <div className="collapse-content text-sm font-nuno text-gray-600">
                Rotary PU College invites expert training officers and subject
                specialists who conduct focused coaching sessions for exams like
                KCET, JEE, NEET, CA, and ACCA, ensuring students get
                personalized guidance alongside their regular classes.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-2xl">
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: What facilities and achievements make Rotary PU College stand out?" />
              <div className="collapse-title font-semibold font-merri text-gray-800">
                What facilities and achievements make Rotary PU College stand
                out?
              </div>
              <div className="collapse-content text-sm font-nuno text-gray-600">
                With a strong 95% academic pass rate, Rotary PU College combines
                excellence in studies with vibrant sports achievements,
                including state-level wins in football and hockey. Students also
                benefit from free mid-day meals and reliable bus facilities,
                making it a supportive and well-rounded environment.{" "}
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-2xl">
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: How does the college ensure the overall development and discipline of students?" />
              <div className="collapse-title font-semibold font-merri text-gray-800">
                How does the college ensure the overall development and
                discipline of students?
              </div>
              <div className="collapse-content text-sm font-nuno text-gray-600">
                Rotary PU College focuses on holistic growth by blending
                academics with extracurricular activities, sports, and cultural
                events. Regular mentoring, value-based programs, and a
                structured discipline system help students build character,
                responsibility, and confidence.{" "}
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-2xl mb-3">
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: What is the admission process, and what documents are required?" />
              <div className="collapse-title font-semibold font-merri text-gray-800">
                What is the admission process, and what documents are required?
              </div>
              <div className="collapse-content text-sm font-nuno text-gray-600">
                Rotary PU College invites expert training officers and subject
                specialists who conduct focused coaching sessions for exams like
                KCET, JEE, NEET, CA, and ACCA, ensuring students get
                personalized guidance alongside their regular classes.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Accordian;
