import { ConfigProvider } from 'antd';
import LeaderIMG from "@/assets/images/LeaderIMG.webp"
import GSLogo from "@/assets/Logos/gs.png"
import RGLogo from "@/assets/Logos/rg.png"
import ORCIDLogo from "@/assets/Logos/orcid.png"
import XLogo from "@/assets/Logos/x.png"
import { motion } from "framer-motion";
import GroupMember from './GroupMember';
import AlumniMember from './AlumniMember';

import { alumnis, groupMembers } from '@/constants';

const People = () => {
  return (
    <ConfigProvider

    theme={{
    token: {
        
        // Seed Token
        colorPrimary: "#A02437",
    },
    components: {
        Button: {
            defaultHoverColor:"#A02437",
            defaultHoverBorderColor:"#A02437",
        }
    }
    }}
>
<div className="w-screen overflow-x-clip">
    <div className="flex flex-col justify-center items-center mt-24 mb-24" >
      <section id="leader" className="mt-20 mb-48 flex flex-col justify-center items-center gap-24 ">
        <div className="h-full flex flex-col justify-between items-start gap-16 mx-auto max-w-xs sm:flex-row sm:max-w-3xl md:max-w-5xl lg:max-w-6xl" 
        >
          <motion.div className="flex flex-col flex-1 justify-between items-start gap-8 sm:px-16 sm:border-r p-0" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
            <div className="flex justify-center items-center"><img src={LeaderIMG} alt="LeaderIMG" width={400}/></div>
            
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-2">Yang Xu</h4>

              <div className="flex flex-col gap-0 p-0">              
                  <p className="text-sm md:text-lg font-bold">Associate Professor</p>
                  <p className="text-sm md:text-lg font-bold">Associate Head (Partnership)</p>
                  <p className="text-sm md:text-lg font-bold">Department of Land Surveying and Geo-Informatics</p>
                  <p className="text-xs md:text-base font-thin">The Hong Kong Polytechnic University</p>
                  <p className="text-xs md:text-base font-thin">181 Chatham Road South, Hung Hom, Kowloon, Hong Kong</p>

              </div>

            </div>
          </motion.div>

          <motion.div className="relative h-full flex flex-col flex-1 justify-center items-center gap-10" initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0 },
          }}>

            <h2 className="text-xl md:text-4xl font-bold">Principal Investigator</h2>
            <p className="text-xs md:text-lg font-thin mb-4 md:mb-0 lg:mb-4 px-4 sm:px-0"><strong>Dr. Yang Xu </strong> is an Associate Professor and Associate Head (Partnership) in the Department of Land Surveying and Geo-Informatics at the Hong Kong Polytechnic University. Dr. Xu obtained his BSc and MSc degrees from Wuhan University and Ph.D degree from University of Tennessee, Knoxville (USA). Before joining PolyU, he worked as a joint postdoctoral associate at the MIT Senseable City Lab and Singapore-MIT Alliance for Research and Technology (SMART). His work focuses on the quantification and modeling of human mobility behavior in cities, aiming to reveal their linkage with urban and technological developments, and impact on future economic, social and transportation systems.</p>
            <div className="flex flex-row justify-center items-center md:gap-4 px-0 w-full text-[0.6rem] md:text-xs lg:text-sm">
              
                <motion.a whileHover={{scale: 1.2}} className="flex-1 flex flex-col justify-center items-center font-bold gap-2" href="https://scholar.google.com/citations?user=97A-qAoAAAAJ&hl=en" target='_blank'>
                  <img src={GSLogo} alt="Google Scholar" className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]"/>
                  <p className="">Google Scholar</p>
                </motion.a>
                <motion.a whileHover={{scale: 1.2}} className="flex-1 flex flex-col justify-center items-center font-bold gap-2" href="https://www.researchgate.net/profile/Yang-Xu-36" target='_blank'>
                  <img src={RGLogo} alt="ResearchGate" className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]"/>
                  <p>ResearchGate</p>
                </motion.a>
                <motion.a whileHover={{scale: 1.2}} className="flex-1 flex flex-col justify-center items-center font-bold gap-2" href="https://orcid.org/0000-0003-3898-022X" target='_blank'>
                  <img src={ORCIDLogo} alt="ORCID" className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]"/>
                  <p>ORCID</p>
                </motion.a>
                <motion.a whileHover={{scale: 1.2}} className="flex-1 flex flex-col justify-center items-center font-bold gap-2" href="https://x.com/_Yang_Xu" target='_blank'>
                  <img src={XLogo} alt="x" className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]"/>
                  <p>Twitter/X</p>
                </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div className="flex flex-col justify-center items-start gap-12 max-w-xs sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto font-thin sm:flex-row" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0},
            visible: { opacity: 1},
          }}>
          <div className="flex flex-1 flex-col justify-center items-center sm:pl-12">
            <h4 className="text-xl md:text-2xl text-center font-thin mb-8 border-b-2 px-5">Education</h4>
            <div>
              <ul className="text-sm md:text-base list-disc pl-6 flex flex-col gap-4">
                <li >Ph.D., Geographic Information Science, University of Tennessee, Knoxville, US (2011 - 2015)</li>
                <li>M.S., Geographic Information Science, Wuhan University, China (2009 - 2011)</li>
                <li>B.S., Remote Sensing and Photogrammetry, Wuhan University, China (2005 - 2009)</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center items-center">
              <h4 className="text-xl md:text-2xl text-center font-thin  mb-8 border-b-2 px-10">Professional Positions</h4>
              <ul className="text-sm md:text-base list-disc pl-6 flex flex-col gap-4">
                <li>Associate Professor, Department of Land Surveying and Geo-Informatics, The Hong Kong Polytechnic University (2023 - Present)</li>
                <li>Assistant Professor, Department of Land Surveying and Geo-Informatics, The Hong Kong Polytechnic University (2017 - 2023)</li>
                <li>Postdoctoral Associate, MIT Senseable City Lab & SMART Centre, Singapore (2016 - 2017)</li>
              </ul>
          </div>

        </motion.div>

      </section>
      <section id="member" className="flex flex-col justify-center items-center">
        <h2 className="text-xl sm:text-4xl font-bold">Group Members</h2>

        <motion.div className="px-32 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}>
          <ul className="flex flex-wrap justify-center items-center gap-24 text-center">
           
      
          {groupMembers.map((groupMember) => {
            return (
              <GroupMember key={groupMember.id} {...groupMember} />
            )
          })}
           
      
            
          </ul>
        </motion.div>
      </section>

      <section id="alumni member">

        <motion.div className="px-32 mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}>
          <h4 className="text-xl sm:text-4xl font-bold text-center mb-6">Alumni</h4>
           {/* Doctoral Student */}
          <div className='mb-12'>
            <p className="text-lg sm:text-2xl font-thin text-center mb-4">Doctoral Student / Postdoctoral Scholar
</p>
            <ul className="flex flex-col justify-start items-start gap-6 text-center">
            
            {alumnis.filter((alumni) => {
              return alumni.type === "Doctoral Student" || (alumni.type === "Postdoctoral Scholar")
            }).map((alumni) => {
              return (
                <AlumniMember key={alumni.id} {...alumni} />
              )
            })}
            </ul>
          </div>

          {/* Research Assistant */}
          <div className='mb-12'>
            <p className="text-lg sm:text-2xl font-thin text-center mb-4">Research Assistant / Master Student</p>
            <ul className="flex flex-col justify-start items-start gap-6 text-center">
            {alumnis.filter((alumni) => {
              return (alumni.type === "Research Assistant") || (alumni.type === "Master Student")
            }).map((alumni) => {
              return (
                <AlumniMember key={alumni.id} {...alumni} />
              )
            })}
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
    </div>
    </ConfigProvider>
  )
}

export default People
