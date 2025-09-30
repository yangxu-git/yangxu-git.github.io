import {motion} from "framer-motion";
import { useState } from "react";
import ESI from "@/assets/Logos/esi.png";


type CardsProps = {
  title: string;
  journal: string;
  imageFront: string;
  imageBack: string;
  link: string;
  isESI: boolean;

}


const Cards = ({title, journal, imageFront, imageBack, link, isESI}:CardsProps) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const handleFlip = () => {

      setIsFlipped(!isFlipped);

  }


  return (
      <a  
              className="w-[280px] h-[400px] flip-card" 
              onMouseEnter={handleFlip}
              onMouseLeave={handleFlip}
              href={link}
              target={link ? '_blank' : ''}
              onClick={(e) => {
                if (link == "") {
                  e.preventDefault();
                  alert('Coming soon...');
                }
              }}
              >

                  <motion.div 
                    className="relative flex-col justify-center items-center flip-card-inner w-[100%] h-[100%] gap-0 cursor-pointer hidden sm:flex"
                    initial={false}
                    animate={{rotateY: isFlipped ? 180 : 360}}
                    transition={{duration: 0.1, animationDirection: "normal", easing:"linear"}}
                   >
                        {/* Card Front */}
                        <div id="front" className="flex flex-col justify-start items-center flip-card-front w-[100%] h-[100%] border-gray-500 border-2 p-4 pt-6 shadow-lg rounded-lg">
                          <div className="h-[250px] mb-2 overflow-hidden"><img src={new URL(`/${imageFront}`, import.meta.url).href} alt=""/></div>
                          <div className="flex flex-col justify-start items-start">
                            <div className="font-bold text-sm mb-2 leading-tight h-[85px]">{title}</div>
                            <div className="text-xs font-thin italic h-[30px]">{journal}</div> 
                            {isESI ? (
                              <div className="text-xs text-red-600 font-bold flex flex-row justify-center items-center h-[15px] gap-1">
                                <div className="w-[15px] h-[15px] overflow-hidden"><img src={ESI} alt="esi cup" className="" /></div>
                                <p className="text-xs font-bold italic">ESI Highly Cited</p>
                              </div>
                            ): <div className="h-[15px]"></div>}
                            
                          </div>
                        </div>

                        {/* Card Back */}
                        <div
                          id="back"
                          className="absolute flip-card-back flex justify-center items-center w-[100%] h-[100%] overflow-hidden shadow-lg rounded-lg "   
                        >
                          <img src={new URL(`/${imageBack}`, import.meta.url).href} alt="" className="" />
                    
                         
                        </div>


                  </motion.div>

                  <motion.div 
                    className="relative flex-col justify-center items-center w-[100%] h-[100%] gap-0 cursor-pointer flex sm:hidden"
                    initial={false}
                    transition={{duration: 0.1, animationDirection: "normal", easing:"linear"}}
                   >
                        {/* Card Front */}
                        <div id="front" className="flex flex-col justify-start items-center w-[100%] h-[100%] border-gray-500 border-2 p-4 pt-6 shadow-lg rounded-lg">
                          <div className="h-[250px] mb-2 overflow-hidden"><img src={new URL(`/${imageFront}`, import.meta.url).href} alt=""/></div>
                          <div className="flex flex-col justify-start items-start">
                            <div className="font-bold text-sm mb-2 leading-tight h-[85px]">{title}</div>
                            <div className="text-xs font-thin italic h-[30px]">{journal}</div> 
                            {isESI ? (
                              <div className="text-xs text-red-600 font-bold flex flex-row justify-center items-center h-[15px] gap-1">
                                <div className="w-[15px] h-[15px] overflow-hidden"><img src={ESI} alt="esi cup" className="" /></div>
                                <p className="text-xs font-bold italic">ESI Highly Cited</p>
                              </div>
                            ): <div className="h-[15px]"></div>}
                            
                          </div>
                        </div>

                    


                  </motion.div>
              
      

      </a>

  )
}

export default Cards
