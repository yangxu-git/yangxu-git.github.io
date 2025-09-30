

import ResearchProject from '@/components/ResearchProject'




const Prediction = () => {
  return (
    <section id="prediction" className="max-w-7xl mx-auto mt-40">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-24">MOBILITY & GEOSPATIAL AI</h2>
      <ResearchProject subSectionTitle="Preference-guided Transformer for Individual Mobility Prediction"
                       subSectionText="Predicting individual mobility patterns, such as their next location or movement sequences, is important for rendering location recommendations and generating realistic synthetic data to support urban and transportation planning. Existing prediction models generally fall into two categories, namely, classification- and regression-based models. Classification-based models often overpredict visits to familiar locations, making individuals’ movement patterns appear more regular than they actually are. In contrast, regression-based models tend to predict visits that are more widely distributed, which leads to an overestimation of individual mobility diversity. To address these limitations, this study develops a spatial preference-guided Transformer model. By incorporating individuals’ location preferences as prior information, the model improves prediction accuracy and achieves a better balance between capturing both regular and diverse mobility behaviors."
                       subSectionAnno={null}
                       subSectionImg={"src/assets/images/ResearchArea/Prediction/transformer.webp"}
                       cardList={[
                                  {title:"Striking a balance between diversity and regularity: A preference-guided Transformer for individual mobility prediction",
                                        journal:"International Journal of Geographical Information Science",
                                        imageFront:"src/assets/images/ResearchArea/Prediction/transformer_p1.webp",
                                        imageBack:"src/assets/images/ResearchArea/Prediction/transformer_p1b.webp",
                                        link:"https://www.tandfonline.com/doi/full/10.1080/13658816.2025.2534159",
                                        isESI: false
                                  },
                           
                                ]}
                        videoList={[
                                   
                        ]}
                        coverCard={{
                          coverImage: "src/assets/images/JournalCovers/IJGIS.webp",
                          link: "https://www.tandfonline.com/doi/full/10.1080/13658816.2025.2534159"
                        }}
                        year={"2024 - 2025"}
                                />

      <ResearchProject subSectionTitle="Demand Forecast for Bike Sharing Systems"
                       subSectionText="Bike sharing systems have become a crucial component of the contemporary urban transportation ecosystem. In this project, we employ a data-driven approach to explore the usage patterns of these systems within cities, encompassing both dockless and station-based models, and examine how urban form and built environment characteristics impact ridership. Simultaneously, by harnessing historical travel data and environmental observations, we develop advanced deep learning algorithms aimed at providing precise and short-term forecasts of bike sharing travel demand."
                       subSectionAnno={null}
                       subSectionImg={"src/assets/images/ResearchArea/Prediction/prediction1.webp"}
                       cardList={[
                                  {title:"Improving short-term bike sharing demand forecast through an irregular convolutional neural network",
                                        journal:"Transportation Research Part C: Emerging Technologies",
                                        imageFront:"src/assets/images/ResearchArea/Prediction/prediction_p1.webp",
                                        imageBack:"src/assets/images/JournalCovers/TRC.webp",
                                        link:"https://doi.org/10.1016/j.trc.2022.103984",
                                        isESI: false
                                  },
                                  {title:"Short-Term Forecast of Bicycle Usage in Bike Sharing Systems: A Spatial-Temporal Memory Network",
                                    journal:"IEEE Transactions on Intelligent Transportation Systems",
                                    imageFront:"src/assets/images/ResearchArea/Prediction/prediction_p3.webp",
                                    imageBack:"src/assets/images/JournalCovers/ITS.webp",
                                      link:"https://ieeexplore.ieee.org/document/9497869",
                                      isESI: false
                                  },
                                  {title:"Unravel the landscape and pulses of cycling activities from a dockless bike-sharing system",
                                    journal:"Computers, Environment and Urban Systems",
                                    imageFront:"src/assets/images/ResearchArea/Prediction/prediction_p4.webp",
                                    imageBack:"src/assets/images/JournalCovers/CEUS.webp",
                                    link:"https://www.sciencedirect.com/science/article/pii/S0198971518305192?dgcid=author",
                                    isESI: true
                                  }
                                ]}
                        videoList={[
                                    {year: 2018,
                                    title:"Shared Bikes",
                                    imageFront:"src/assets/images/ResearchArea/Prediction/prediction_shared_bikes.webp",
                                    youTubeLink:"https://www.youtube.com/watch?v=_yfiuV4j9Jw",
                                    bilibiliLink:"https://www.bilibili.com/video/av36450369/",
                                    tencentLink:"",
                                    type:"video",
                                    text:""
                                    }
                        ]}
                        coverCard={null}
                        year={"2018 - Present"}
                                />

          {/* <ResearchProject subSectionTitle="Movement Predictability of Urban Tourists"
                       subSectionText="This study seeks to gauge the predictability of tourists' movements at the destinations. Leveraging cellphone big data from approximately 100,000 international visitors to South Korea in 2018, we construct both machine learning and deep learning models to quantify the predictability of their movements. We evaluate how factors such as duration of stay and activeness in travel patterns influence the accuracy of our predictions. Furthermore, our research uncovers the efficacy of these models in forecasting movements across various spatial dimensions, distinguishing between intra-city and inter-city travels. This nuanced understanding of traveler behavior has significant implications for enhancing tourism management and destination planning."
                       subSectionAnno={null}
                       subSectionImg={"src/assets/images/ResearchArea/Prediction/prediction2.webp"}
                       cardList={[
                                  {title:"Understanding the movement predictability of international travelers using a nationwide mobile phone dataset collected in South Korea",
                                        journal:"Computers, Environment and Urban Systems",
                                        imageFront:"src/assets/images/ResearchArea/Prediction/prediction_p2.webp",
                                        imageBack:"src/assets/images/JournalCovers/CEUS.webp",
                                        link:"https://doi.org/10.1016/j.compenvurbsys.2021.101753",
                                        isESI: false
                                  },
                                ]}
                        videoList={[
                                    {
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
                        year={"2021 - 2022"}
                                /> */}
      



    </section>
  )
}

export default Prediction
