import Image from "next/image";
import Steps from "@/components/steps";
import s1 from "../../public/images/Rectangle 7.png";
import s2 from "../../public/images/Rectangle 12.png";
import s3 from "../../public/images/Rectangle 14.png";
const StepProgram = () => {
  return (
    <>
      <div className="w-[100%] h-[386px] bg-[url('/images/Rectangle.png')] bg-no-repeat bg-cover  ">
        <div className="h-[385px] w-[100%] bg-gradient-to-t from-[rgba(20,99,86,0.9)] via-[rgba(20,99,86,0.9)] to-[rgba(20,99,86,0.9)] flex flex-col justify-center items-center ">
          <p className="text-white w-[776px] text-center">
            Built on years of analyzing clinical trials and nutrigenetic
            studies, our algorithm generates 23 personalized nutrition
            recommendations and over 100 food suggestions based on your DNA.
            With a custom formula multivitamin and dietitian coaching,
            GenoPalate eliminates the guesswork and helps you achieve optimal
            wellness and health.
          </p>

          <button className="btn bg-[#FF7F3F] text-white border-[#FF7F3F] mt-[20px]">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center text-center mt-[56px] mb-[30px]">
        <div>
          <h1 className="text-[40px] font-[700] text-[#FF7F3F]">New</h1>
          <h1 className="heading">Personalized Nutrition Program</h1>
          <p className="w-[776px]">
            Our 3-step program jumpstarts your health journey. With your
            Essential Nutrition Report, we provide a tailored daily nutrition
            program based on your genetic needs. Get personalized vitamins and
            ongoing support from our expert dietitians for lasting health,
            starting today.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center my-[80px]">
        <div className="mr-[33px]">
          <Image src={s1} />
        </div>

        <Steps
          stepNo={"Step 1"}
          heading={"Essential Nutrition Report"}
          detail={
            "Embarking on a mission to unlock the secrets hidden within your DNA, GenoPalate has revolutionized the way people approach their health and nutrition. By analyzing your genetic profile, we provide you with a comprehensive understanding of how your body responds to different foods, empowering you to make informed choices tailored to your unique genetic makeup."
          }
        />
      </div>

      <div className="w-full bg-[#CFEAF5]">
        <div className="h-[545px] bg-[url('/images/Rectangle8.png')] bg-no-repeat bg-right flex items-center pl-[100px]">
          <Steps
            stepNo={"Step 2"}
            heading={"Personalized Vitamins"}
            detail={
              "Unlock your unique nutritional needs with personalized vitamins. Our advanced genetic testing and algorithm create a tailored blend of vitamins and minerals based on your DNA, age, gender, and diet. Take control of your well-being and embark on a transformative journey towards a healthier life."
            }
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center my-[80px]">
        <div className="mr-[33px]">
          <Image src={s2} />
        </div>

        <Steps
          stepNo={"Step 3"}
          heading={"Essential Nutrition Report"}
          detail={
            "Embarking on a mission to unlock the secrets hidden within your DNA, GenoPalate has revolutionized the way people approach their health and nutrition. By analyzing your genetic profile, we provide you with a comprehensive understanding of how your body responds to different foods, empowering you to make informed choices tailored to your unique genetic makeup."
          }
        />
      </div>

      <div className="h-[617px] bg-[#CFEAF5] flex flex-row items-center justify-around">
        <div className="w-[40%]">
          <h1 className="heading"> Your Success matters to us </h1>
          <p className="mb-[20px] mt-[15px]">
            A decade ago, our team of researchers made a groundbreaking genetic
            discovery that fueled my passion to help others. That's when
            GenoPalate was born. With experts in genetics, medicine, and
            nutrition, we're revolutionizing lifelong health through
            personalized eating. It's been an incredible journey, witnessing our
            customers find happiness and wellness. Now, with 84% of Americans
            facing metabolic health issues, we're committed to reshaping our
            future together.
          </p>
          <span>
            Let's move mountains—for ourselves, our loved ones, and our
            community. We can't wait to hear about your successes.
          </span>
          <h2 className="smallHeading mt-[20px]">Dr. James Williams</h2>
          <p>Phd</p>
        </div>

        <div>
          <Image src={s3} />
        </div>
      </div>

      <div className="w-full h-[153px] bg-[#146356] flex flex-row items-center justify-between px-[90px]">
        <h1 className="text-white text-[24px] font-[500] ">
          Take the first step to a healthier you.
        </h1>

        <button className="btn bg-[#FF7F3F] border-[#FF7F3F]">
          Get Started
        </button>
      </div>
    </>
  );
};
export default StepProgram;
