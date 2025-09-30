import ResearchProject from '@/components/ResearchProject'

const Sensing = () => {
  return (
    <section id="sensing" className="max-w-7xl mx-auto mt-40">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-24">MOBILITY SENSING & ANALYTICS</h2>

      <ResearchProject subSectionTitle="Profiling Drivers'  Mobility Behavior through Trajectory Trait"
                       subSectionText="Inspired by the Big Five personality traits, this study develops a novel trajectory trait scale (TTS) that can be used to quantify individual drivers' mobility behavior across four key dimensions: extroversion, openness, neuroticism, and conscientiousness. By validating the model using extensive, longitudinal GPS trajectories from 2,051 private vehicle volunteers, the study demonstrates that the TTS can provide deep insights into the intrinsic characteristics of drivers' trajectory traits. The results also reveal the hidden linkage between drivers' mobility profile and external behavioral observations, such as customer service records related to life rescue and traffic violation queries. Additionally, the TTS may inform the interplay between trajectory traits and personality traits. The proposed driver profiling model has significant implications for driving safety, targeted advertising, usage-based insurance, and more."
                       subSectionAnno={"Collaborative Research (Lead PI: Zhipeng Gui @ WHU)"}
                       subSectionImg="src/assets/images/ResearchArea/sensing/trait.webp"
                       cardList={[
                                  {title:"Profiling mobility patterns and driving behaviors of individual drivers via trajectory trait",
                                        journal:"The Innovation Geoscience",
                                        imageFront:"src/assets/images/ResearchArea/sensing/trait_paper01_front.webp",
                                        imageBack:"src/assets/images/ResearchArea/sensing/trait_paper01_back.webp",
                                        link:"https://www.the-innovation.org/article/doi/10.59717/j.xinn-geo.2024.100114",
                                        isESI: false
                                  }
                                ]}
                        videoList={[
                                   
                        ]}
                        coverCard={{
                              coverImage:"src/assets/images/JournalCovers/TIG.jpg",
                              link: "https://www.the-innovation.org/"
                            }}
                        year={"2023 - 2025"}
                                />

      <ResearchProject subSectionTitle="Human Mobility and Socioeconomic Status"
                       subSectionText="This study leverages large-scale cellphone data combined with socioeconomic data from Singapore and Boston to extract six widely recognized mobility indicators and conducts a thorough analysis of how these indicators correlate with the estimated socioeconomic status (SES) of cellphone users. The research uncovers two key insights: firstly, the relationship between movement radius and SES tends to vary across different urban environments. Specifically, it is found that phone user groups that are generally richer tend to travel shorter in Singapore but longer in Boston; secondly, there is no significant correlation between the diversity of an individual's mobility behavior and their socioeconomic status. These findings, which have been widely confirmed by subsequent studies, underscore the complex interplay between human mobility patterns and socioeconomic characteristics."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/sensing/human_mobility.webp"
                       cardList={[
                                  {title:"Human mobility and socioeconomic status: Analysis of Singapore and Boston",
                                        journal:"Computers, Environment and Urban Systems",
                                        imageFront:"src/assets/images/ResearchArea/sensing/human_mobility_paper01_front.webp",
                                        imageBack:"src/assets/images/JournalCovers/CEUS.webp",
                                        link:"https://www.sciencedirect.com/science/article/pii/S0198971517304179",
                                        isESI: true
                                  }
                                ]}
                        videoList={[
                                    {
                                      year:2021,
                                      title:"Editor's Choice\n(in Chinese)",
                                      imageFront:"src/assets/images/ResearchArea/sensing/human_mobility_media.webp",
                                      youTubeLink:"https://mp.weixin.qq.com/s/CQ0OYsqlaq6tyWEmhoNE1g",
                                      bilibiliLink:"",
                                      tencentLink:"",
                                      type:"media",
                                      text:"主编推荐 | 手机大数据揭示人群移动模式与社会经济属性之间的关系"
                                    }
                        ]}
                        coverCard={null}
                        year={"2017 - 2021"}
                                />


      <ResearchProject subSectionTitle="Characterizing Human Mobility Using Cellphone Big Data"
                       subSectionText="This project represents a multi-year endeavor to innovate methods for delineating human mobility patterns through the analysis of various forms of cellphone big data, including Call Detail Records (CDRs) and mobile signaling data. The outcomes of this research offer a comprehensive perspective on individual mobility traits, encompassing the utilization of urban spaces, pinpointing activity locations, and understanding movement dynamics. Additionally, the project delves into the various manifestations of location uncertainty inherent in cellphone data, evaluates their influence on mobility characterization, and formulates algorithms to mitigate these challenges."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/sensing/cellphone.webp"
                       cardList={[
                                  {title:"Understanding aggregate human mobility patterns using passive mobile phone location data: a home-based approach",
                                        journal:"Transportation",
                                        imageFront:"src/assets/images/ResearchArea/sensing/cellphone_paper01_front.webp",
                                        imageBack:"src/assets/images/JournalCovers/T.webp",
                                        link:"http://link.springer.com/article/10.1007/s11116-015-9597-y",
                                        isESI:false
                                  },
                                  {title:"Another tale of two cities: Understanding human activity space using actively tracked cellphone location data",
                                        journal:"Annals of the American Association of Geographers",
                                        imageFront:"src/assets/images/ResearchArea/sensing/cellphone_paper02_front.webp",
                                        imageBack:"src/assets/images/JournalCovers/AAG.webp",
                                        link:"http://www.tandfonline.com/doi/abs/10.1080/00045608.2015.1120147?journalCode=raag21",
                                        isESI:false
                                  },
                                  {title:"Effects of data preprocessing methods on addressing location uncertainty in mobile signaling data",
                                        journal:"Annals of the American Association of Geographers",
                                        imageFront:"src/assets/images/ResearchArea/sensing/cellphone_paper03_front.webp",
                                        imageBack:"src/assets/images/JournalCovers/AAG.webp",
                                        link:"https://www.tandfonline.com/doi/full/10.1080/24694452.2020.1773232",
                                        isESI:false
                                  },
                                  {title:"Modeling activity spaces using big geo‐data: Progress and challenges",
                                        journal:"Geography Compass",
                                        imageFront:"src/assets/images/ResearchArea/sensing/cellphone_paper04_front.webp",
                                        imageBack:"src/assets/images/JournalCovers/GC.webp",
                                        link:"https://doi.org/10.1111/gec3.12663",
                                        isESI:false
                                  }
                                ]}
                        videoList={[
                        ]}
                        coverCard={null}
                        year={"2015 - 2022"}
                                />



      



    </section>
  )
}

export default Sensing
