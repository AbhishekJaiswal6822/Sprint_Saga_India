function HeroSection() {
    return (
        <>
            <div className="bg-teal-100 h-100 flex flex-col items-center justify-center py-10">

                {/* Date + Location Box */}
                <div className="bg-teal-400 text-white text-xl font-bold px-6 py-4 m-4 rounded-2xl">
                    March 15, 2024 * Central Park, NYC
                </div>

                {/* Marathon Title */}
                <div className="text-teal-700 text-3xl font-extrabold">
                    Marathon Run 2024
                </div>

                <div className="">Join thousands of runners in the most exiciting marathon event of the year.
                    <br />
                    Challenge yourself, achieve your goals,
                    and cross the finish line with pride.
                </div>

                <div className="flex gap-4 mt-6">
  <button
    className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold"
    onClick={() => alert("Register button clicked!")}
  >
    Register Now
  </button>

  <button
    className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold"
    onClick={() => alert("View Results clicked!")}
  >
    View Results
  </button>
</div>



            </div>
        </>
    )
}

export default HeroSection;