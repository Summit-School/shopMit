// import svgI from "./test.png";
import svgI from "../assests/HComponentsImages/test.png";
export const Testimonials = () => {
  return (
    <div className="testimony">

      <p className="testP" > <span>Amazing</span> Testimonies So Far</p>
      <p className="searchP2" > <span>Hear what our clients say</span> </p>

        <div className="testImage" >
            <div className="testwrap">
            <img src={svgI} alt="" />
             </div>
        </div>
    
        <div className="testimony2" >
          <p className="testP " >Before you Leave</p>
          <p className="searchP2">Get started with <span> ShopMit </span>today
          </p>
          <button className="testButton">Get started</button>
        </div>
    </div>
  );
};
