import { Globe } from "../icons/globe";
import { motion } from 'framer-motion'

function Accordian() {
  return (
    <div>
      <div className=" w-full bg-white relative border-b border-amber-100 rounded-br-4xl rounded-bl-4xl">
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
          <div className="text-center mb-8 md:mb-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-16 ">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide pt-6 md:pt-9 flex flex-col sm:flex-row justify-center items-center text-gray-800 font-merri gap-2 sm:gap-3">
              <span>Frequently Asked Questions</span>
              <Globe
                stroke="#374151"
                className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
              />
            </h2>
            <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto mt-2 md:mt-4"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-3 md:mt-5 font-medium font-nuno px-4">
              Get answers to the most common questions about admissions,
              academics, and campus life at Rotary PU College.
            </p>
          </div>

          <motion.div
            className="max-w-sm md:max-w-3xl mx-auto bg-stone-200 rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              className="collapse collapse-plus bg-black border border-base-300 rounded-2xl mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <input type="radio" name="my-accordion-3" defaultChecked aria-label="Toggle answer for: What makes Rotary PU College different from other PU colleges in the region?" />
              <div className="collapse-title text-sm font-semibold font-merri text-white">
                What makes Rotary PU College different from other PU colleges in
                the region?
              </div>
              <div className="collapse-content text-sm font-nuno text-white">
                Rotary PU College stands out for its legacy as one of the
                earliest institutions in Moodbidri, offering a strong foundation
                in academics while also focusing on leadership, values, and
                all-round student growth. With experienced faculty and
                supportive infrastructure, we provide an environment where
                students truly thrive.
              </div>
            </motion.div>

            <motion.div
              className="collapse collapse-plus bg-black border border-base-300 rounded-2xl mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: What courses and training programs does Rotary PU College offer?" />
              <div className="collapse-title font-semibold text-sm font-merri text-white">
                What courses and training programs does Rotary PU College offer?
              </div>
              <div className="collapse-content text-sm font-nuno text-white">
                We offer Science and Commerce streams with popular combinations
                like PCMB, PCMC, EBAS, CEBA, and SEBA. Alongside the PU
                curriculum, students receive focused training for KCET, JEE, and
                NEET, as well as professional courses like CA and ACCA to
                prepare them for future careers.
              </div>
            </motion.div>

            <motion.div
              className="collapse collapse-plus bg-black border border-base-300 rounded-2xl mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: How does the college provide entrance and professional exam coaching?" />
              <div className="collapse-title font-semibold text-sm font-merri text-white">
                How does the college provide entrance and professional exam
                coaching?
              </div>
              <div className="collapse-content text-sm font-nuno text-white">
                Rotary PU College invites expert training officers and subject
                specialists who conduct focused coaching sessions for exams like
                KCET, JEE, NEET, CA, and ACCA, ensuring students get
                personalized guidance alongside their regular classes.
              </div>
            </motion.div>

            <motion.div
              className="collapse collapse-plus bg-black border border-base-300 rounded-2xl mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: What facilities and achievements make Rotary PU College stand out?" />
              <div className="collapse-title font-semibold text-sm font-merri text-white">
                What facilities and achievements make Rotary PU College stand
                out?
              </div>
              <div className="collapse-content text-sm font-nuno text-white">
                With a strong 95% academic pass rate, Rotary PU College combines
                excellence in studies with vibrant sports achievements,
                including state-level wins in football and hockey. Students also
                benefit from free mid-day meals and reliable bus facilities,
                making it a supportive and well-rounded environment.{" "}
              </div>
            </motion.div>

            <motion.div
              className="collapse collapse-plus bg-black border border-base-300 rounded-2xl mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: How does the college ensure the overall development and discipline of students?" />
              <div className="collapse-title font-semibold text-sm font-merri text-white">
                How does the college ensure the overall development and
                discipline of students?
              </div>
              <div className="collapse-content text-sm font-nuno text-white">
                Rotary PU College focuses on holistic growth by blending
                academics with extracurricular activities, sports, and cultural
                events. Regular mentoring, value-based programs, and a
                structured discipline system help students build character,
                responsibility, and confidence.{" "}
              </div>
            </motion.div>

            <motion.div
              className="collapse collapse-plus bg-black border border-base-300 rounded-2xl mb-9"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <input type="radio" name="my-accordion-3" aria-label="Toggle answer for: What is the admission process, and what documents are required?" />
              <div className="collapse-title font-semibold  text-sm font-merri text-white">
                What is the admission process, and what documents are required?
              </div>
              <div className="collapse-content text-sm font-nuno text-white">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Admission Timeline</h4>
                    <p className="mb-3">The Admission commences immediately after the announcement of S.S.L.C results.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">How to Apply</h4>
                    <p className="mb-3">Candidates who wish to take admission should contact the Principal/Admission office personally along with parent/guardian. They should bring completely filled application form along with four passport size photographs and a statement of marks obtained in S.S.L.C Examination duly attested by the Headmaster/Principal of the School.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Eligibility Requirements</h4>
                    <ul className="list-disc list-inside mb-3 space-y-1">
                      <li>Passing of 10th standard (SSLC/ICSE/CBSE or equivalent)</li>
                      <li>Student should be above 16 years of age</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Required Documents</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Academic Documents</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>10th Standard Mark Sheet</li>
                          <li>10th Standard Pass Certificate</li>
                          <li>Transfer Certificate</li>
                          <li>Conduct Certificate</li>
                          <li>Marks card of S.S.L.C or equivalent exam</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-2">Personal Documents</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Recent Passport Size Photos (4 copies)</li>
                          <li>Aadhaar Card Copy</li>
                          <li>Caste Certificate (if applicable)</li>
                          <li>Medical Certificate</li>
                          <li>Bank Passbook</li>
                          <li>Income Certificate</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Application Form</h4>
                    <p className="mb-3">Application form with Prospectus can be obtained from the College or Admission Office.</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-yellow-800 text-sm font-medium">
                      <strong>Important Note:</strong> All admissions are provisional and are subject to final approval by the Dept. of P.U. Education, Govt. of Karnataka.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Accordian;
