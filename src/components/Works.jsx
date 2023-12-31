import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {github} from '../assets'
import {SectionWrapper} from '../hoc'
import {projects} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

const ProjectCard=({index,name,description,tags,image})=>{
  return( <motion.div>
        <Tilt
           options={{
            max:45,
            scale:1,
            speed:450
           }}
           className="bg-tertiary p-5 rounded-2xl xs:w-[250px] sm:w-[360px] w-full"
        >
            <div className="relative w-full h-[230px]">
                  <img src={image} alt={name}
                       className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 flex justify-end m-3
                     card-img_hover
                  ">
                       {/* <div
                          onClick={()=>window.open(source_code_link,"_blank")}
                          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                       >
                            <img src={github} alt="github"
                                className="w-1/2 h-1/2 object-contain"
                            />
                       </div> */}

                  </div>
            </div>
            <div className="mt-5">
              <h3 className="text-white font-bold text-[23px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                 {tags.map((tag)=>{
                    return <p key={tag.name}
                               className={`text-14px ${tag.color}`}
                            >#{tag.name}</p>
                 })}
            </div>
        </Tilt>
  </motion.div>)
}



const Works = () => {
  return (
    <>
       <motion.div >
            <p className={`${styles.sectionSubText}`}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
       </motion.div>
       
       <div className="w-full flex">
           <motion.p
              //variants={fadeIn("","",0.1,1)}
              clasName="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
           >
                Create diffrernt projects using React js,Laravel,Node js ,HTML,CSS,Node js,Bottstrap and tailwind also use fabric js and three.js,
                Using react js fabric and three.js I mostly work on designtools and created some modules in E-commerse site. Using Laravel created Dashboard
                and work on some E-commesrce site also. Created project where user can purchase policy and cliam for this policies also.
           </motion.p>
           
       </div>
       <div className="mt-20 flex flex-wrap gap-10">
            {projects.map((project,index)=>{
                return <ProjectCard key={`project${index}`}
                           index={index}
                           {...project}
                        />
            })}
       </div>
    </>
  )
}

export default SectionWrapper(Works,"")