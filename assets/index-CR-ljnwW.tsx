import ResearchProject from '@/components/ResearchProject'

const Tourism = () => {
  return (
    <section id="tourism" className="max-w-7xl mx-auto mt-40">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-24">TOURIST MOBILITY & SMART TOURISM</h2>

      <ResearchProject subSectionTitle="Modeling Travelers' Spatial Choices within Urban Destinations"
                       subSectionText="Coupling mobile positioning data of international travelers in three South Korean cities and extensive points-of-interest (POI) data, this study develops a discrete choice modeling framework to uncover the key factors that shape travelers’ spatial choices within the urban destinations. By introducing area-of-interest (AOI), a novel spatial unit that captures the combined influence of tourism resources and urban facilities, the study finds that travel distance to and volume of POIs in an AOI, as well as number of prior visits to the AOI during the same journey, are decisive factors influencing where travelers choose to spend their time. The study also uncovers factors with city-specific influences and variations based on travelers’ nationalities and lengths of stay. These insights offer valuable guidance for developing customized marketing and management strategies for tourist destinations."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/tourism/modeling.webp"
                       cardList={[
                                  {title:"Coupling mobile positioning data and discrete choice model to decode travelers’ spatial choices within urban destinations",
                                        journal:"Tourism Management",
                                        imageFront:"src/assets/images/ResearchArea/tourism/modeling_paper01_front.jpg",
                                        imageBack:"src/assets/images/ResearchArea/tourism/modeling_paper01_back.webp",
                                        link:"https://doi.org/10.1016/j.tourman.2025.105254",
                                        isESI: false
                                  }
                                ]}
                        videoList={[
                                   
                        ]}
                        coverCard={{
                        coverImage: "src/assets/images/JournalCovers/TM.webp",
                        link: "https://doi.org/10.1016/j.tourman.2025.105254"
                      }}
                        year={"2024 - 2025"}
                                />

 


      <ResearchProject subSectionTitle="Understanding Tourist Mobility Patterns using Cellphone Big Data"
                       subSectionText="This project represents a multi-year effort to understand the mobility patterns of international travelers to tourism destinations in South Korea. Leveraging high-resolution cellphone big data, we have developed innovative methods to characterize both individual and collective behaviors of travelers. This includes examining how tourists use their time, how their activities are organized spatially, where tourist activities are concentrated, and how mobility patterns differ among different nationalities. The insights gained from this research provide valuable information for optimizing tourism management and enhancing visitor experiences in South Korea. Additionally, the methodologies developed in this project can be applied to other regions, contributing to a broader understanding of global tourism dynamics."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/tourism/cross_scale.webp"
                       cardList={[
                                  {title:"A Cross-Scale Representation of Tourist Activity Space",
                                        journal:"Annals of the American Association of Geographers",
                                        imageFront:"src/assets/images/ResearchArea/tourism/cross_scale_paper01_front.webp",
                                        imageBack:"src/assets/images/JournalCovers/AAG.webp",
                                        link:"https://www.tandfonline.com/doi/full/10.1080/24694452.2023.2231533",
                                        isESI:false
                                  },
                                  {title:"Towards a multidimensional view of tourist mobility patterns in cities: A mobile phone data perspective",
                                    journal:"Computers, Environment and Urban Systems",
                                    imageFront:"src/assets/images/ResearchArea/tourism/tourist_mobility_paper01_front.webp",
                                    imageBack:"src/assets/images/JournalCovers/CEUS.webp",
                                    link:"https://doi.org/10.1016/j.compenvurbsys.2020.101593",
                                    isESI:false

                                  },
                                   {title:"Understanding the movement predictability of international travelers using a nationwide mobile phone dataset collected in South Korea",
                                        journal:"Computers, Environment and Urban Systems",
                                        imageFront:"src/assets/images/ResearchArea/Prediction/prediction_p2.webp",
                                        imageBack:"src/assets/images/JournalCovers/CEUS.webp",
                                        link:"https://doi.org/10.1016/j.compenvurbsys.2021.101753",
                                        isESI: false
                                  },
                                
                                
                                  {title:"Analyzing travel mobility patterns in city destinations: Implications for destination design",
                                    journal:"Tourism Management",
                                    imageFront:"src/assets/images/ResearchArea/tourism/tourism_park_paper01_front.webp",
                                    imageBack:"src/assets/images/JournalCovers/TM.webp",
                                    link:"https://doi.org/10.1016/j.tourman.2022.104718",
                                    isESI:false
                                  },
                                  {title:"Spatial concentration of intra-urban tourist activities and inter-group differences between Asian, European and North American travelers in Korean cities",
                                        journal:"Tourism Management",
                                        imageFront:"src/assets/images/ResearchArea/tourism/jingyi_paper01_front.webp",
                                        imageBack:"src/assets/images/JournalCovers/TM.webp",
                                        link:"https://doi.org/10.1016/j.tourman.2024.105064",
                                        isESI:false
                                  },
                                 {title:"Tourism Geography through the Lens of Time Use: A Computational Framework Using Fine-Grained Mobile Phone Data",
                                    journal:"Annals of the American Association of Geographers",
                                    imageFront:"src/assets/images/ResearchArea/tourism/tourist_time_paper01_front.webp",
                                    imageBack:"src/assets/images/JournalCovers/AAG.webp",
                                    link:"https://www.tandfonline.com/doi/full/10.1080/24694452.2020.1812372",
                                    isESI:false
                              },
                                  
                                ]}
                        videoList={[{
                                    year:2022,
                                    title:"Urban Tour",
                                    imageFront:"src/assets/images/ResearchArea/Prediction/prediction_urban_tour.webp",
                                    youTubeLink:"https://www.youtube.com/watch?v=zkH6Xu2_8MA",
                                    bilibiliLink:'https://www.bilibili.com/video/BV1ii4y1R7of',
                                    tencentLink:'',
                                    type:"video",
                                    text:""
                                    }
                        ]}
                        coverCard={null}
                        year={"2020 - 2024"}
                                />
      {/* <ResearchProject subSectionTitle="A Cross-Scale Representation of Tourist Activity Space"
                       subSectionText="We introduce a conceptual framework to represent the spatial organization of tourist activities from a cross-scale perspective. By using tourists' accommodation locations as key reference points, this framework views a tourist's itinerary as a combination of long-distance travels due to changes of accommodations, and localized movements around each accommodation. This approach allows for a more flexible representation of tourist activity spaces, enabling the characterization of a traveler's itinerary that spans multiple destinations (e.g., cities). Additionally, it offers a systematic typology of tourist activity spaces and a hierarchical measurement of spatial extents and time budgets. Moreover, this framework can be adapted to broader studies of human movements that involve hierarchical structures, making it a versatile tool for understanding human spatial dynamics."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/tourism/cross_scale.webp"
                       cardList={[
                                  {title:"A Cross-Scale Representation of Tourist Activity Space",
                                        journal:"Annals of the American Association of Geographers",
                                        imageFront:"src/assets/images/ResearchArea/tourism/cross_scale_paper01_front.webp",
                                        imageBack:"src/assets/images/ResearchArea/tourism/cross_scale_paper01_back.webp",
                                        link:"https://www.tandfonline.com/doi/full/10.1080/24694452.2023.2231533",
                                        isESI:false
                                  }
                                ]}
                        videoList={[
                        ]}
                        coverCard={{
                          coverImage:"src/assets/images/JournalCovers/AAG.webp",
                          link: "https://www.tandfonline.com/doi/full/10.1080/24694452.2023.2231533"
                        }}
                        year={"2022 - 2023"}
                                />
      <ResearchProject subSectionTitle="Tourist Mobility Profiling"
                       subSectionText="In our analysis of mobile phone trajectories from international travelers visiting three distinct cities in South Korea—Jeonju, Gangneung, and Chuncheon—we have identified nine mobility indicators that encapsulate various aspects of tourist travel behavior. These indicators include the duration of stay within a city, the spatial range of activities, the number of locations visited, the number of trips conducted, and the overall mobility diversity. We scrutinize their statistical characteristics and compare them across the different cities. To delve deeper into the relationships between these mobility indicators and to discern the underlying variations in individual travel patterns, we introduce an eigendecomposition method. This technique provides a nuanced understanding of the interplay among the indicators and the unique mobility signatures of travelers."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/tourism/tourist_mobility.webp"
                       cardList={[
                                  {title:"Towards a multidimensional view of tourist mobility patterns in cities: A mobile phone data perspective",
                                        journal:"Computers, Environment and Urban Systems",
                                        imageFront:"src/assets/images/ResearchArea/tourism/tourist_mobility_paper01_front.webp",
                                        imageBack:"src/assets/images/ResearchArea/tourism/tourist_mobility_paper01_back.webp",
                                        link:"https://doi.org/10.1016/j.compenvurbsys.2020.101593",
                                        isESI:false

                                  }
                                  
                                ]}
                        videoList={[
                                 
                        ]}
                        coverCard={{
                          coverImage:"src/assets/images/JournalCovers/CEUS.webp",
                          link: "https://doi.org/10.1016/j.compenvurbsys.2020.101593"
                        }}
                        year={"2020 - 2021"}
                                />
      <ResearchProject subSectionTitle="Understanding Tourist Time Use"
                       subSectionText="Leveraging a comprehensive mobile phone dataset gathered from three South Korean cities—Gangneung, Jeonju, and Chuncheon—we have crafted a computational framework designed to precisely quantify tourist time utilization, visualize their spatiotemporal activity patterns, and facilitate systematic comparisons across different urban settings. This framework incorporates a variety of methodologies for extracting and semantically labeling tourist activities. It also includes visual-analytic tools, such as time use diagrams and time–activity diagrams, to investigate how tourists allocate their time. Additionally, it employs quantitative measures that enable day-to-day comparisons. This multifaceted approach offers a detailed insight into tourist behaviors, enhancing our understanding of their preferences and movements within urban environments."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/tourism/tourist_time.webp"
                       cardList={[
                                  {title:"Tourism Geography through the Lens of Time Use: A Computational Framework Using Fine-Grained Mobile Phone Data",
                                        journal:"Annals of the American Association of Geographers",
                                        imageFront:"src/assets/images/ResearchArea/tourism/tourist_time_paper01_front.webp",
                                        imageBack:"src/assets/images/ResearchArea/tourism/tourist_time_paper01_back.webp",
                                        link:"https://www.tandfonline.com/doi/full/10.1080/24694452.2020.1812372",
                                        isESI:false
                                  }
                                ]}
                        videoList={[
                                 
                        ]}
                        coverCard={{
                          coverImage:"src/assets/images/JournalCovers/AAG.webp",
                          link: "https://www.tandfonline.com/doi/full/10.1080/24694452.2020.1812372"
                        }}
                        year={"2020 - 2021"}
                                /> */}

<ResearchProject subSectionTitle="Tourism Network"
                       subSectionText="Our study showcases the integration of large-scale tourist mobility data with network science methodologies to enhance our understanding of tourism destinations and their interconnectivity. Through the analysis of a mobile positioning dataset that records both the nationality and movement patterns of international tourists in South Korea, we apply several network metrics to quantify the characteristics of tourism destination networks. Our objective is to uncover the collective dynamics of tourist flows and identify distinct movement patterns among different nationalities. This approach provides valuable insights into the structural nuances of tourism networks and the diverse behaviors of travelers from various countries."
                       subSectionAnno={null}
                       subSectionImg="src/assets/images/ResearchArea/tourism/tourism_network.webp"
                       cardList={[
                                  {title:"Characterizing destination networks through mobility traces of international tourists — A case study using a nationwide mobile positioning dataset",
                                        journal:"Tourism Management",
                                        imageFront:"src/assets/images/ResearchArea/tourism/tourism_network_paper01_front.webp",
                                        imageBack:"src/assets/images/JournalCovers/TM.webp",
                                        link:"https://doi.org/10.1016/j.tourman.2020.104195",
                                        isESI: false
                                  }
                                ]}
                        videoList={[
                                    {
                                    year:2020,
                                    title:"Tourism Network",
                                    imageFront:"src/assets/images/ResearchArea/tourism/2020_tourism_network.webp",
                                    youTubeLink:"https://www.youtube.com/watch?v=XxyWzBUp-NU",
                                    bilibiliLink:"https://www.bilibili.com/video/BV1M5411V7ft/?vd_source=97a695383c4b98a4ed8b80d5fdecc716",
                                    tencentLink:"",
                                    type:"video",
                                    text:""
                                    }
                        ]}
                        coverCard={null}
                        year={"2020 - 2021"}
                                />


      



    </section>
  )
}

export default Tourism
