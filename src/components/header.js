const Header = () => {
  return (
    <nav className="w-full h-[130px] ">
      <div className="w-full h-[50px] text-[8px] font-[400] flex justify-center py-[16px] sm:text-[16px] ">
        Join the waitlist 🚨 Personalized Protein & Fiber Powder Supplements
        coming soon →
      </div>

      <div className="h-[80px] flex flex-row items-center justify-around bg-[#146356] text-white ">
        <div className="text-[16px] sm:text-[40px] font-[800] ">Logo</div>
        <div>
          <ul className="flex flex-row text-[6px] sm:text-[16px] font-[400] justify-around sm:w-[753px] pl-[70px]  w-[100px] ">
            <li>DNA Nutrition Analysis</li>
            <li> Personalized Vitamins & Supplements</li>
            <li>Dietitian</li>
            <li>Our Science</li>
          </ul>
        </div>

        <div>
          <button className="btn ">Log In</button>
          <button className="btn bg-[#FF7F3F] ml-[18px] border-[#FF7F3F]">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
