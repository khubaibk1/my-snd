import Image from "next/image";
import box from "../../public/images/pngegg.png";
const Section = () => {
  return (
    <div className="bg-[#D0EAF536] h-[644px] ">
      <div className="h-[644px] absolute inset-0 bg-left-top  bg-[url('/images/kisspng-leaf-green-blog-mint-leaf.png')] bg-no-repeat transform translate-y-[-130px] "></div>

      <div className=" sm:h-[644px] sm:w-full bg-contain  h-[644px] absolute inset-0 bg-right  bg-[url('/images/green-leaves-organic-png-file-hd.png')] bg-no-repeat  "></div>

      <div className="flex flex-row ">
        <div className="text-black pl-[100px] pt-[175px] z-20">
          <h1 className="sm:text-[64px] text-[12px] font-[700] text-[#146356] leading-[33px] sm:mb-[45px] mb-[0px]">
            Unlock Your Health
          </h1>

          <h1 className="text-[#FF7F3F] sm:text-[111px] text-[16px] font-[800] leading-[68px] tracking-[9px] sm:mb-[45px] mb-[0px]">
            Potential
          </h1>

          <p className=" text-[#146356] font-[700] sm:text-[24px] text-[8px] leading-[13px] tracking-[4.5%] sm:mb-[45px] mb-[0px]">
            Personalized nutrition powered by your DNA
          </p>

          <button className="btn bg-[#FF7F3F] text-white">Get Started</button>
        </div>
        <div className="z-10 mt-[120px] ml-[50px] sm:w-[512] sm:h-[563] w-[500px] h-[500px]">
          <Image
            src={box}
            width={"100%"}
            height={"100%"}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};
export default Section;
