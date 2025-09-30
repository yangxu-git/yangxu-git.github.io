// import ResearchProjectLarge from '@/components/ResearchProjectLarge'
import ResearchProject from '@/components/ResearchProject'


const Connectivity = () => {
  return (
    <section id="connectivity" className="max-w-7xl mx-auto mt-40">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-24">CITIES, SOCIETY & CONNECTIVITY</h2>

    <ResearchProject subSectionTitle="Quantifying Social Segregation in Cities"
                     subSectionText="We introduce an innovative computational framework that integrates extensive data on human mobility, social network ties, and socioeconomic status to significantly advance our understanding of social segregation in urban environments. This framework moves beyond the traditional concept of residential segregation by offering granular measurements at the individual level. It captures segregation not only within the physical realm but also within the dimensions of social networks. Additionally, it facilitates aggregated assessments at the level of specific locales and entire cities, while also tracking their temporal evolution. This multifaceted approach provides a more nuanced and comprehensive understanding of the patterns and dynamics of urban social segregation."
                     subSectionAnno={null}
                     subSectionImg="src/assets/images/ResearchArea/connectivity/social_segregation.webp"
                     cardList={[
                                {title:"Quantifying segregation in an integrated urban physical-social space",
                                      journal:"Journal of The Royal Society Interface",
                                      imageFront:"src/assets/images/ResearchArea/connectivity/social_segregation_paper01_front.webp",
                                      imageBack:"src/assets/images/JournalCovers/RSI.webp",
                                      link:"https://royalsocietypublishing.org/doi/10.1098/rsif.2019.0536",
                                      isESI:false

                                },
                                {title:"Beyond Distance Decay: Discover Homophily in Spatially Embedded Social Networks",
                                      journal:"Annals of the American Association of Geographers",
                                      imageFront:"src/assets/images/ResearchArea/connectivity/social_segregation_paper02_front.webp",
                                      imageBack:"src/assets/images/JournalCovers/AAG.webp",
                                      link:"https://www.tandfonline.com/doi/full/10.1080/24694452.2021.1935208?src=",
                                      isESI:false
                                },
                                {title:"Aggravated social segregation during the COVID-19 pandemic: Evidence from crowdsourced mobility data in twelve most populated U.S. metropolitan areas",
                                      journal:"Sustainable Cities and Society",
                                      imageFront:"src/assets/images/ResearchArea/connectivity/social_segregation_paper03_front.webp",
                                      imageBack:"src/assets/images/JournalCovers/SCS.webp",
                                      link:"https://doi.org/10.1016/j.scs.2022.103869",
                                      isESI:false
                                },
                              ]}
                      videoList={[
                        {year: 2019,
                          title:"Singapore Calling: \n Social and Physical Segregation in Singapore",
                          imageFront:"src/assets/images/ResearchArea/connectivity/social_segregation_video01.webp",
                          youTubeLink:"https://senseable.mit.edu/singapore-calling/",
                          bilibiliLink:"",
                          tencentLink:"",
                          type: "website",
                          text: "Joint research with MIT \n Senseable City Lab"
                          },
                        {year: 2019,
                          title:"Conquer the Divided Cities",
                          imageFront:"src/assets/images/ResearchArea/connectivity/social_segregation_video02.webp",
                          youTubeLink:"https://www.bbvaopenmind.com/en/articles/conquer-the-divided-cities/",
                          bilibiliLink:"",
                          tencentLink:"",
                          type: "media",
                          text: "BBVA OpenMind"
                          },
                        {year: 2022,
                          title:"How Big Data and Local Politics Can Make Our Cities More Inclusive",
                          imageFront:"src/assets/images/ResearchArea/connectivity/social_segregation_video03.webp",
                          youTubeLink:"https://www.weforum.org/agenda/2023/10/how-big-data-local-politics-cities-more-inclusive/",
                          bilibiliLink:"",
                          tencentLink:"",
                          type: "media",
                          text: "World Economic Forum"
                          },
                                  
                      ]}
                      coverCard={null}
                      year={"2019 - 2022"}
                              />
    <ResearchProject subSectionTitle="Inclusive Public Open Space for All"
                     subSectionText="Public open spaces (POS) are crucial public health assets meant for everyone, contributing to physical, social, and psychological well-being. With urban populations diversifying, assessing the spatial justice of Public Open Spaces in Private Developments (POSPDs) to ensure equitable access is crucial. This research evaluated three Hong Kong POSPDs through questionnaire surveys and Bayesian Network modeling. Findings highlighted the most sensitive issues (e.g., safety, affordability, and diversity) impacting spatial justice performance, emphasizing that inclusive POS requires a secure, affordable environment that supports diverse activity for everyone. The findings will guide decision-makers to put the appropriate emphasis on creating inclusive POSPD."
                     subSectionAnno={null}
                     subSectionImg="src/assets/images/ResearchArea/connectivity/public.webp"
                     cardList={[
                                {title:"Inclusive public open space for all: Spatial justice with health considerations",
                                      journal:"Habitat International",
                                      imageFront:"src/assets/images/ResearchArea/connectivity/public_paper01_front.webp",
                                      imageBack:"src/assets/images/ResearchArea/connectivity/public_paper01_back.webp",
                                      link:"https://doi.org/10.1016/j.habitatint.2021.102457",
                                      isESI:false

                                },
                             
                              ]}
                      videoList={[      
                       

                      ]}
                      coverCard={{
                        coverImage:"src/assets/images/JournalCovers/HI.webp",
                        link: "https://doi.org/10.1016/j.habitatint.2021.102457"
                      }}
                      year={"2020 – 2021"}
                              />



    



  </section>
  )
}

export default Connectivity
