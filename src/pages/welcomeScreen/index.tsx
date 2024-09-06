import "./index.css";
const Welcome = () => {
  return (
    <div className="flex flex-col gap-10">
      <img src="https://s3-alpha-sig.figma.com/img/6fd5/afaf/d8278dc24ad295caf06d351a5743bce6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckj4rSahpRv9x8VX1F2belNS8SoXRurrbHs4ejw3nAVBP8VeXVRkSFbI4SCwrPeLcFtMkGwNd708F6Lq-KdP32sq6-Dbw3yHpXdWBJ3EjznQgDZKPsTPUYPJkwNihSB6~dTQWDgyIv6z7COzXc7dy9VrIf~WXjVkNnV7r2X2IJPOT7Oq1KoheaGaOfVOJrE4fAt9ddZDrLY-PwFEylUeh9fsi7DlIoP3YuQKz620J-XdDonOIml7v3wrvoc~BxrBqMw9yvqH59jQFgsBf8Z81tt1Vqrx3RooSCaPppfcrG9zwq0fETytHPCponv4YdmO7xyT1eWIp5CedAHDasdPOw__" />
      <div className="flex flex-col gap-4 px-6 ">
        <div className="flex justify-between">
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full">
              <p className="font-black text-2xl">Welcome!</p>
              <img src="/src/assets/common/shareIcon.svg" alt="" />
            </div>
            <p className="font-extralight text-g-1 text-3xl">Edward Jones</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-g-1">
            The staff at hotel name is grateful that you have chosen our
            property as your home during your trip!
            <br />
            <br /> Please do not hesitate reaching out to us if you have any
            questions, concerns or request.
            <br />
            <br />
            We hope to make your stay as enjoyable and delightful as we possibly
            can!
            <br />
            <br />
            Welcome again! <br />
            <br />
            Warmest regards,
            <br /> hotel manager
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

// {/* <div className="main-container">
// <img
//     src="https://s3-alpha-sig.figma.com/img/6fd5/afaf/d8278dc24ad295caf06d351a5743bce6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckj4rSahpRv9x8VX1F2belNS8SoXRurrbHs4ejw3nAVBP8VeXVRkSFbI4SCwrPeLcFtMkGwNd708F6Lq-KdP32sq6-Dbw3yHpXdWBJ3EjznQgDZKPsTPUYPJkwNihSB6~dTQWDgyIv6z7COzXc7dy9VrIf~WXjVkNnV7r2X2IJPOT7Oq1KoheaGaOfVOJrE4fAt9ddZDrLY-PwFEylUeh9fsi7DlIoP3YuQKz620J-XdDonOIml7v3wrvoc~BxrBqMw9yvqH59jQFgsBf8Z81tt1Vqrx3RooSCaPppfcrG9zwq0fETytHPCponv4YdmO7xyT1eWIp5CedAHDasdPOw__"
//     alt="Welcome image"
//     className="img"
// />
// <div className="text-container">
//     <div className="headtext-container">
//         <div className="inner-container">
//             <h1 className="wel-text">Welcome!</h1>
//             {/*<img src={CrossIcon} alt="Icon" className="icon" /> */} {/*use the icon*/}
//         </div>
//         <h1 className="name-text">Edward Jones</h1>
//         <p className="para-text">
//             The staff at <span className="span">hotel name</span> is grateful that you have chosen our property as your home during your trip!<br />
//             Please do not hesitate reaching out to us if you have any questions, concerns, or requests.<br />
//             We hope to make your stay as enjoyable and delightful as we possibly can!<br />
//             <span className="spacer">Welcome again!</span><br />
//             <span className="spacer">Warmest regards,</span><br />
//             <span className="span">hotel manager</span>
//         </p>
//     </div>
// </div>
// </div> */}
