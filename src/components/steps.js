const Steps = ({ stepNo, heading, detail }) => {
  let containerStyle = {};

  if (stepNo === "Step 1") {
    containerStyle = {
      width: "646px",
    };
  } else if (stepNo === "Step 2") {
    containerStyle = {
      width: "474px",
    };
  } else if (stepNo === "Step 3") {
    containerStyle = {
      width: "674px",
    };
  }

  return (
    <div className="step-container" style={containerStyle}>
      <button className="stepbtn ">{stepNo}</button>
      <h1 className="heading">{heading}</h1>
      <p>{detail}</p>
      <button className="btn bg-[#FF7F3F] text-white mt-[20px] border-[#FF7F3F]">
        Get Started
      </button>
    </div>
  );
};
export default Steps;
