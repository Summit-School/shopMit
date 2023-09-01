import { ElectroImg } from "../assests/Electronics/Electronics";
import {   Ecat } from "./Ecat";
import hero from "../assests/Electronics/1.png"
export const Mecat = () => {
    return ( 
      <div className="EcatWrap">
        <div className="EcatP">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima commodi deserunt atque at, vel, porro dignissimos cupiditate illo aliquam corporis architecto, sit esse quisquam tenetur! </p>
            <img src={hero} alt="" />
            </div>  
          <div className="MEcat">
                      {ElectroImg.map((Eproduct) => (
                 <Ecat data={Eproduct}>  </Ecat>
              ))}
              
          </div>
      </div>
    );
};