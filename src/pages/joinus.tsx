
import Image from "next/image";

const Joinus: React.FC = () => {

 
    return (
      <div>
        
      <section style={{width:"380px",height:"830px", top:"6px",left:"495px",position:"relative"}}>
        
        <div
        style={{width:"324px",height:"128px", top:"28px",left:"1px",position:"relative"}}>
          <Image className="ml-5"
           alt="image"
          width={324} height={17}
          src="/nike3.png"
          />

        <div
        style={{width:"324px",height:"182px", top:"28px",left:"28px",position:"relative"}}>
          <h1 className="text-nowrap"
          style={{width:"231.22px",height:"31px", top:"16px",left:"46.48px",lineHeight:"26px",fontSize:"18px",
          position:"relative",textAlign:"center",fontWeight:"700"}}>
              BECOME A NIKE MEMBER
          </h1>

          <p className="text-gray-600"
          style={{width:"282.08px",height:"60px", top:"30px",left:"21.06px",lineHeight:"22px",fontSize:"14px",
            position:"relative",textAlign:"center",fontWeight:"400"}}>

            Create your Nike Member profile and get<br/> first access to the very best of Nike<br/> products inspiration and community.
          </p>

          </div > 

        </div>

        <div
         style={{width:"324px",height:"495px", top:"90px",left:"18px",position:"relative"}}>

        <input
         style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"324px",height:"40px", top:"5px",borderRadius:"3px",position:"relative"}}
         placeholder="   Email address"
        />
         <input
         style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"324px",height:"40px", top:"15px",borderRadius:"3px",position:"relative"}}
         placeholder="   Password"
        />
        <input
         style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"324px",height:"40px", top:"25px",borderRadius:"3px",position:"relative"}}
         placeholder="   First Name"
        />

        <input
         style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"324px",height:"40px", top:"35px",borderRadius:"3px",position:"relative"}}
         placeholder="   Last Name"
        />   

         <input
         style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"324px",height:"40px", top:"45px",borderRadius:"3px",position:"relative"}}
         placeholder="   Date of Birth"
        />
        <p className="text-nowrap text-gray-400"
        style={{width:"301.45px",height:"14px", top:"55px",left:"11.38px",
        position:"relative",fontSize:"11px",lineHeight:"14px",textAlign:"center"}}
        >Get a Nike Member Reward every year on your Birthday.</p>
        
          <option className="px-4 py-3 text-gray-400"
          style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"324px",height:"40px", top:"75px",borderRadius:"3px",position:"relative",
            fontSize:"14px",lineHeight:"17px"
          }}
          >
            India
          </option>

          <div className=" flex gap-3"
           style={{width:"324px",height:"40px", top:"45px",borderRadius:"3px",position:"relative"}}>

        <input className="text-center pr-3"
         style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"153.89px",height:"43px", top:"45px",borderRadius:"3px",position:"relative"}}
         placeholder="  Male"
        />   

<input className="text-center pr-3"
         style={{borderWidth:"1px",borderColor:"#E5E5E5",width:"153.89px",height:"43px", top:"45px",borderRadius:"3px",position:"relative"}}
         placeholder="  Female"
        />
          </div>


            

     </div>

        <div className="flex"
        style={{width:"162px",height:"20px", top:"1px",position:"relative"}}>
           <input
         style={{borderWidth:"1px",left:"18px",borderColor:"#BCBCBC",width:"28px",height:"28px",borderRadius:"3px",position:"relative"}}
         type="checkbox" 
        />
        <p className="text-nowrap text-gray-400 "
        style={{width:"247px",height:"28px", top:"1.3px",left:"34px",
        position:"relative",fontSize:"11px",lineHeight:"14px"}}
        >Sign up for emails to get updates from Nike on<br/> products offers and your Member benefits</p> 
        </div>
        
        <div className="text-gray-400"
        style={{width:"324px",height:"59px", top:"22px",left:"28px",position:"relative"}}>
          <p
          style={{width:"279.31px",height:"30px", top:"4px",left:"4px",textAlign:"center",
            position:"relative",fontSize:"12px",lineHeight:"16px"}}>
          By creating an account you agree to Nikes Privacy Policy and Terms of Use.
          </p>

        </div>
      

        <div className="bg-black text-white"
        style={{width:"324px",height:"40px", top:"25px",left:"17px",borderRadius:"1px",borderWidth:"1px",position:"relative"}}>

          <button className="text-nowrap"
          style={{width:"60px",height:"17px", top:"5.5px",left:"132.5px",textAlign:"center",
            position:"relative",fontSize:"15px",lineHeight:"17px"}}
          >JOIN US</button>
        </div>

        <div className="text-nowrap"
        style={{width:"324px",height:"24px", top:"40px",position:"relative"}}>

          <p className="text-gray-400"
          style={{width:"129.61px",height:"14px", top:"5.5px",left:"112.58px",textAlign:"center",
            position:"relative",fontSize:"12px",lineHeight:"14px"}}
          >Already a Member?<button onClick={() => window.location.href = "/login"} className="px-1 underline text-black">Sign In.</button></p>
        </div>


        

        

        


      </section>
        
  
      </div>
  
      
      
    );
  };
  
  export default Joinus;
  
