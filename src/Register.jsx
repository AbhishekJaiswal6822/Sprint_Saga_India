import React, { useState } from "react";

function Register() {
  const [tab, setTab] = useState("individual"); // "individual" | "group"

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-teal-700 mb-3">Register for Marathon Run 2024</h1>
        <p className="text-slate-500 mb-8">Choose your registration type and complete your details</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          {/* Section heading */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">Registration Type</h2>
            <p className="text-slate-500 mt-1">Choose between individual or group registration</p>
          </div>

          {/* Tabs */}
          <div className="bg-slate-100 rounded-lg p-2 mb-6">
            <div className="flex items-stretch gap-3">
              <button
                onClick={() => setTab("individual")}
                className={`flex-1 py-3 rounded-lg text-slate-700 flex items-center justify-center gap-3 font-medium transition
                  ${tab === "individual" ? "bg-white shadow-inner text-slate-900" : "hover:bg-slate-50"}`}
                aria-pressed={tab === "individual"}
              >
                <svg className="w-5 h-5 text-teal-600" viewBox="0 0 24 24" fill="none"><path d="M12 12c2.761 0 5 -2.239 5 -5s-2.239 -5 -5 -5 -5 2.239 -5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Individual Registration</span>
              </button>

              <button
                onClick={() => setTab("group")}
                className={`flex-1 py-3 rounded-lg text-slate-700 flex items-center justify-center gap-3 font-medium transition
                  ${tab === "group" ? "bg-white shadow-inner text-slate-900" : "hover:bg-slate-50"}`}
                aria-pressed={tab === "group"}
              >
                <svg className="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none"><path d="M16 11c1.657 0 3 -1.343 3 -3s-1.343 -3 -3 -3 -3 1.343 -3 3 1.343 3 3 3zM8 11c1.657 0 3 -1.343 3 -3s-1.343 -3 -3 -3 -3 1.343 -3 3 1.343 3 3 3zM8 13c-2.33 0 -7 1.17 -7 3.5V19h14v-1.5C15 14.17 10.33 13 8 13zM16 13c-.29 0 -.62 .02 -.97 .05C15.54 13.03 17 13.79 17 15.5V19h5v-1.5c0-2.33-4.67-3.5-6-3.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Group Registration</span>
              </button>
            </div>
          </div>

          {/* Content box for the selected tab */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            {tab === "individual" ? (
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white text-teal-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 12c2.761 0 5 -2.239 5 -5s-2.239 -5 -5 -5 -5 2.239 -5 5 2.239 5 5 5zM4 20v-1c0-2.761 4.477-4 8-4s8 1.239 8 4v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Individual Registration</h3>
                  <p className="text-slate-500 mt-1">Register yourself for the marathon</p>

                  {/* Example CTA / Start Registration button */}
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-700 transition"
                    >
                      Start Individual Registration
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white text-slate-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M7 7h10M7 12h6M7 17h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Group Registration</h3>
                  <p className="text-slate-500 mt-1">Register multiple participants together</p>

                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-block bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-lg shadow-sm hover:bg-slate-50 transition"
                    >
                      Start Group Registration
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}


export default Register;