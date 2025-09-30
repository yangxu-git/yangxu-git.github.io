



const news = [
    {id:1,
      title: "The kickoff video of our project, Shared Bikes, is released!",
      contents: "What will a city look like if shared bikes are unleashed from docking stations? The so-called dockless bike-sharing represents a new urban phenomenon that brings various opportunities and challenges to transport planning. This project aims to conduct empirical studies to understand the usage of this new mobility service in cities and its relationship with physical urban environment. Meanwhile, new approaches will be developed to support travel demand forecast and fleet size management.",
      date: "Nov 2018",
      site: "Youtube",
      image: "src/assets/images/NewsImages/0.webp",
      link: "https://www.youtube.com/watch?v=_yfiuV4j9Jw",
      backUpLink: "https://www.bilibili.com/video/av36450369",
      year: 2018
    },
    {id:2,
      title: "“Singapore Calling” - A collaborative research project with the MIT Senseable City Lab, is an honorable mention in the Data Design category of FastCompany 2020 Innovation by Design Awards!",
      contents: "",
      date: "Oct 2020",
      site: "MIT Senseable City Lab",
      image: "src/assets/images/NewsImages/2.webp",
      link: "https://senseable.mit.edu/singapore-calling/",
      year: 2020
    },
    {id:3,
      title: "Our project video, Tourism Network, is released!",
      contents: "We demonstrate how large-scale tourist mobility data can be linked with network science approaches to better understand tourism destinations and their interactions. By analyzing a mobile positioning dataset that captures the nationality and movement patterns of foreign tourists to South Korea, we employ a few metrics to quantify the network properties of tourism destinations, aiming to reveal the collective dynamics of tourist movements and key differences across nationalities.",
      date: "Dec 2020",
      site: "Youtube",
      image: "src/assets/images/NewsImages/2020_tourism_network.webp",
      link: "https://www.youtube.com/watch?v=XxyWzBUp-NU",
      backUpLink: "https://www.bilibili.com/video/BV1M5411V7ft",
      year: 2020
    },
    {id:4,
      title: 'Yang Xu delivered an invited talk by GeoInsider on "Using cellphone big data to measure human mobility and interactions in cities"',
      contents: "",
      date: "May 2021",
      site: "Bilibili",
      image: "src/assets/images/NewsImages/2021_GeoInsider.webp",
      link: "https://www.bilibili.com/video/BV1J5411u7MX/?vd_source=97a695383c4b98a4ed8b80d5fdecc716",
      year: 2021
    },
    {id:5,
      title: "Our project video, Urban Tour, is released!",
      contents: "How well can we predict the movements of urban tourists and visitors? We use machine & deep learning models to assess the movement predictability of international travelers who visited South Korea.",
      date: "Jan 2022",
      site: "Youtube",
      image: "src/assets/images/NewsImages/2022_urban_tour.webp",
      link: "https://www.youtube.com/watch?v=zkH6Xu2_8MA",
      backUpLink: "https://www.bilibili.com/video/BV1ii4y1R7of",
      year: 2022
    },
    {id:6,
      title: "Yang Xu delivered CPGIS invited talk on “Understanding human mobility in a dynamic and changing world: A dual perspective of urban residents and visitors”.",
      contents: "",
      date: "March 2022",
      site: "Youtube",
      image: "src/assets/images/NewsImages/2022_cpgis.webp",
      link: "https://www.youtube.com/watch?v=9BB-IAhCCoc&t=133s",
      year: 2022
    },
    {id:7,
    title: "MSL members won the Third Prize in Huawei APAC ICT Competition. Congratulations to the Polynomia Team!",
    contents: "Huawei APAC ICT Competition 2022 is the largest ICT skills contest in the Asia Pacific region developed by Huawei to promote a sound talent ecosystem. Entrants had to compete in one of two technology tracks: Network or Cloud. The PolyU's Polynomials team won the Third Prize in Cloud track for their multidisciplinary knowledge, outstanding performance, and good teamwork. They stood out from 114 students who advanced to the regional final.",
    date: "March 2022",
    site: "Huawei APAC ICT Competition",
    image: "src/assets/images/NewsImages/1.webp",
    link: "https://www.polyu.edu.hk/rio/news/2022/20220408-huawei-apac-ict-competition-2022/",
    year: 2022
    },
    {id:8,
    title: "MSL members triumph in global ICT competition!",
    contents: "Huawei ICT Competition is one of the largest ICT skills contests in the world developed by Huawei to promote a sound talent ecosystem. This year marks the sixth Huawei ICT Competition, which included three competitions – Practice, Innovation, and Industry – attracted 150,000 students from over 2,000 universities and colleges across 85 countries and regions.In the Practice Competition, entrants had to compete in one of two technology tracks: Network or Cloud. After winning the First Prize in Hong Kong SAR Final and Third Prize in the APAC Region Final in the Cloud Track, the PolyU's Team “Polynomials” continued their journey for the Global Final in June 2022 held in Shenzhen, China. Finally, The team stood out among 130 teams from 43 countries and regions and won the First Prize in Cloud Track of the Practice Competition in the Huawei ICT Competition 2021-2022 Global Final.",
    date: "Jun 2022",
    site: "PolyU Media",
    image: "src/assets/images/NewsImages/2022_ict.webp",
    link: "https://www.polyu.edu.hk/lsgi/news-and-events/news/2022/0626-polyu-students-triumph-in-global-ict-competition/",
    year: 2022
    },
    {id:9,
    title: "Yang Xu receives CPGIS Young Scholar Award!",
    contents: "Dr. Yang Xu has been selected as the recipient of the 2022 CPGIS Young Scholar Award from the International Association of Chinese Professionals in Geographic Information Sciences. The award seeks to recognize young 'rising stars' for research contributions to GIScience. In particular, this award is to recognize Dr. Xu's impressive research output in combining geospatial technologies, big data, and computational methods to advance understanding and modeling of human activities in urban contexts.",
    date: "Sep 2022",
    site: "CPGIS",
    image: "src/assets/images/NewsImages/2022_young_scholar.webp",
    link: "https://www.cpgis.org/Awards/ShowAwards.aspx?ID=60",
    year: 2022
    },
    {id:10,
      title: "MSL member won outstanding presentation award in the Annual Conference of the Commission of Tourism Geography, Geographical Society of China.",
      contents: "The Annual Conference of the Commission of Tourism Geography, Geographical Society of China (中国地理学会) was held in Chengdu, 12-14 July 2023. The conference had attracted over five hundred researchers to share their research work in eighteen sub-sessions of frontier topics related to tourism geography. A PhD student, Xinyue CHEN (under the supervision of Dr. Yang XU), from Department of Land Surveying and Geo-Informatics (LSGI) won the Outstanding Presentation Award in the mentioned conference.",
      date: "20 July 2023",
      site: "PolyU Media",
      image: "src/assets/images/NewsImages/2023_msl_award.webp",
      link: "https://www.polyu.edu.hk/lsgi/news-and-events/news/2023/0720-lsgi-phd-student-won-outstanding-presentation-award/",
      year: 2023
      },
    {id:11,
      title: "Yang Xu joins the editorial board of Annals of the American Association of Geographers.",
      contents: "As the world's leading geography journal and AAG's flagship, the Annals publishes original, timely, and innovative articles that advance geographic knowledge in all facets of the discipline.",
      date: "Nov 2023",
      site: "AAG",
      image: "src/assets/images/NewsImages/2023_aag.webp",
      link: "https://www.aag.org/",
      year: 2023
      },
      {id:12,
        title:"MSL PhD student began exchange at EPFL.",
        contents: "The Mobility Science Lab is delighted to announce that Yuqian Lin started her exchange program at Lab for Human-Oriented Mobility Eco-System (HOMES) at École Polytechnique Fédérale de Lausanne (EPFL) from 1 February, 2024. Yuqian is currently a PhD student at The Hong Kong Polytechnic University, supervised by Prof. Yang Xu. Her research focuses on human travel behavior and shared mobility. The exchange program will further rich her research experience and international academic connections.",
        date: "1 Feb 2024",
        site: "EPFL",
        image: "src/assets/images/NewsImages/2024_yuqian.webp",
        link:"https://www.epfl.ch/en/",
        year:2024

      },
      {id:13,
        title:"MSL PhD student began exchange at University College London.",
        contents: "The Mobility Science Lab is delighted to announce that Mengqi Sun, our third-year PhD student, has commenced an exchange program at the Bartlett Centre for Advanced Spatial Analysis (CASA) at University College London (UCL). This exchange is generously supported by the Research Student Attachment Programme at the Hong Kong Polytechnic University. CASA is renowned for its innovative research in urban science and spatial analysis, employing advanced computational methods to address complex spatial challenges. The centre excels in integrating urban planning, data science, and geographical information systems (GIS) to create pioneering solutions for real-world problems.",
        date: "May 2024",
        site: "UCL",
        image: "src/assets/images/NewsImages/2024_mengqi.webp",
        link:"https://www.ucl.ac.uk/",
        year:2024
      },
      {id:14,
        title:"Curated collection on Covid-19 pandemic and behavior change.",
        contents: "After several years of dedicated efforts, MSL is pleased to present a curated collection of research articles on Covid-19 pandemic and behavior change. The articles showcase our work on utilizing extensive mobility datasets – including LBS navigation, smart card transactions, and geolocated transaction data – to study how the pandemic has shaped transit usage behavior, tourism travel, and consumer spending within and across cities.",
        date: "Sep 2024",
        site: "Check the Article Collection",
        image: "src/assets/images/NewsImages/2024_curate1.webp",
        link:"#/behavior",
        year:2024
      },
      {id:15,
        title:"New MSL study on the spatial concentration effect of urban tourism activity.",
        contents: "In response to growing concerns about overtourism, a recent MSL study published in Tourism Management highlights the value of cellphone positioning data for understanding the spatial concentration of urban tourist activities. Analyzing international travelers in three popular South Korean destinations, the study finds that Asian travelers demonstrate the highest spatial concentration, followed by European and North Americans. The findings underscore the importance of considering travelers' social backgrounds in tourist flow management.",
        date: "Oct 2024",
        site: "Check the paper in Tourism Management",
        image: "src/assets/images/NewsImages/2024_urban_tourism.webp",
        link:"https://doi.org/10.1016/j.tourman.2024.105064",
        year:2024
      },
      {id:16,
        title:"MSL PhD student won ICA Scholarship in the First Asian Cartographic Conference.",
        contents: "The First Asian Cartographic Conference (AsiaCarto 2024) was organized by the International Cartographic Association (ICA) and held at The Hong Kong Polytechnic University from December 8-10, 2024. AsiaCarto 2024 marked the initiation of the first regional cartographic conferences (RCC) in Asia and attracted hundreds of researchers who participated and shared their work in sixteen parallel sessions on cartography, human mobility, spatial cognition, etc. An MSL PhD student, Bowen SHI, was awarded the ICA Scholarship at this conference.",
        date: "Dec 2024",
        site: "AsiaCarto 2024",
        image: "src/assets/images/NewsImages/2024_AsiaCarto.webp",
        link:"https://asiacarto.org/2024",
        year:2024
      },
      {id:17,
        title:"Yang Xu joins the editorial board of Computers, Environment and Urban Systems.",
        contents: "Computers, Environment and Urban Systems is an interdisciplinary journal publishing cutting-edge and innovative computer-based research on urban systems, systems of cities, and built and natural environments, that privileges the geospatial perspective.",
        date: "Dec 2024",
        site: "Computers, Environment and Urban Systems",
        image: "src/assets/images/NewsImages/2024_ceus.webp",
        link:"https://www.sciencedirect.com/journal/computers-environment-and-urban-systems",
        year:2024
      },
      {id:18,
        title:"New MSL study on profiling vehicle drivers’ mobility behavior.",
        contents: "Through a research collaboration with Wuhan University, MSL publishes a new study that delves into the \"personality\" of vehicle drivers' trajectories. Drawing inspiration from the Big Five personality traits, the study develops an innovative Trajectory Trait Scale (TTS) that can be used to quantify individual drivers' mobility behavior across four key dimensions: extroversion, openness, neuroticism, and conscientiousness. This driver profiling model holds significant potential for enhancing driving safety, enabling targeted advertising, informing usage-based insurance, and more.",
        date: "Jan 2025",
        site: "The Innovation Geoscience",
        image: "src/assets/images/NewsImages/2025_trait.webp",
        link:"https://www.the-innovation.org/article/doi/10.59717/j.xinn-geo.2024.100114",
        year:2025
      },
      {id:19,
        title:"Yang Xu receives the Outstanding Alumni Award.",
        contents: "Dr. Yang Xu was honored with the Outstanding Alumni Award by his alma mater, the Department of Geography and Sustainability at the University of Tennessee, Knoxville. This award recognizes Dr. Xu’s distinguished mid-career achievements and contributions to the advancement of Geographic Information Science.",
        date: "Mar 2025",
        site: "Department of Geography and Sustainability, University of Tennessee, Knoxville",
        image: "src/assets/images/NewsImages/2025_alumni.webp",
        link:"https://geography.utk.edu",
        year:2025
      },
      {id:20,
        title:"Yang Xu serves as Associate Editor of Tourism Geographies.",
        contents: "Tourism Geographies is the flagship social science journal focused on tourism from a geographic perspective. The journal publishes critical, multidisciplinary work from social science fields such as geography, anthropology, sociology, area studies, urban and regional planning, environmental studies, and geospatial sciences.",
        date: "Apr 2025",
        site: "Tourism Geographies",
        image: "src/assets/images/NewsImages/2025_tg.webp",
        link:"https://www.tandfonline.com/journals/rtxg20",
        year:2025
      },

  
]

const groupMembers = [
    {id:1,
     headImg: "src/assets/images/GroupMemberImage/ChenJingyi.webp",
     name: "CHENG Jingyi",
     position: "PhD Student"},
    {id:2,
     headImg: "src/assets/images/GroupMemberImage/LiangShen.webp",
     name: "LIANG Shen",
     position: "PhD Student"},
    {id:3,
     headImg: "src/assets/images/GroupMemberImage/LinYuqian.webp",
     name: "LIN Yuqian",
     position: "PhD Student"},
    // {id:4,
    //  headImg: "src/assets/images/GroupMemberImage/RenMengyao.webp",
    //  name: "REN Mengyao",
    //  position: "PhD Student"},
    {id:5,
     headImg: "src/assets/images/GroupMemberImage/SunMengqi.webp",
     name: "SUN Mengqi",
     position: "PhD Student"},
    {id:6,
     headImg: "src/assets/images/GroupMemberImage/ChenXinyue.webp",
     name: "CHEN Xinyue",
     position: "PhD Student"},
    // {id:7,
    //  headImg: "src/assets/images/GroupMemberImage/MaiKe.webp",
    //  name: "MAI Ke",
    //  position: "PhD Student"},
    // {id:8,
    //  headImg: "src/assets/images/GroupMemberImage/LuYuliang.webp",
    //  name: "LU Junwen",
    //  position: "Visiting Scholar"},
    {id:9,
     headImg: "src/assets/images/GroupMemberImage/ZhangOuwen.webp",
     name: "ZHANG Ouwen",
     position: "Research Assistant"},
    {id:10,
      headImg: "src/assets/images/GroupMemberImage/LuoYuxiao.webp",
      name: "LUO Yuxiao",
      position: "PhD Student"},
    {id:11,
      headImg: "src/assets/images/GroupMemberImage/ShiBowen.webp",
      name: "SHI Bowen",
      position: "PhD Student"},
    {id:12,
      headImg: "src/assets/images/GroupMemberImage/LiGuangyue.webp",
      name: "LI Guangyue",
      position: "PhD Student"},
    {id:13,
    headImg: "src/assets/images/GroupMemberImage/HuangZiyan.webp",
    name: "HUANG Ziyan",
    position: "PhD Student"},
    {id:14,
    headImg: "src/assets/images/GroupMemberImage/WangXuanqing.webp",
    name: "WANG Xuanqing",
    position: "PhD Student"},


]

const alumnis =[
    {id:1,
     name: "LI Xinyu",
     position: "Lecturer, State University of New York at Albany.",
     type: "Doctoral Student"},
     
    {id:2,
     name: "JIAN Yi Izzy",
     position: "co-supervised, Assistant Professor, Education University of Hong Kong.",
     type: "Doctoral Student"},
    {id:3,
     name: "ZU Jinyan",
     position: "PhD Student, University of Hong Kong.",
     type: "Research Assistant"},
    {id:4,
     name: "ZHONG Xiuming",
     position: "Technical Service Engineer, Huawei Cloud Hong Kong.",
     type: "Research Assistant"},
    {id:5,
     name: "ZONG Shuya",
     position: "PhD Student, Purdue University.",
     type: "Research Assistant"},
    {id:6,
     name: "ZOU Dan",
     position: "PhD Student, Sun Yat-sen University.",
     type: "Master Student"},
    {id:7,
     name: "LI Jingyan",
     position: "PhD Student, Carnegie Mellon University.",
     type: "Master Student"},
    {id:8,
     name: "XUE Jiaying",
     position: "PhD Student, Technical University of Munich.",
     type: "Master Student"},
    {id:9,
     name: "JIANG Liu",
     position: "Senior Software Engineer, JPMorgan Chase & Co.",
     type: "Master Student"},
    {id:10,
     name: "CHEN Dachi",
     position: "Software Engineer, Meta Platforms Inc.",
     type: "Master Student"},
    {id:11,
     name: "CHEN Yuanyang",
     position: "Algorithm Engineer, Vivo Inc.",
     type: "Master Student"},
    {id:12,
     name: "LU Junwen",
     position: "Postdoctoral Researcher, South China University of Technology. ",
     type: "Postdoctoral Scholar"},
]

const researchAreas = [
    {id:1,
    title: "Mobility Sensing & Analytics",
    contents: "To improve the understanding of human and vehicle mobility using location-aware technologies and big data analytics.",
    image: "src/assets/images/ResearchArea/ra1.webp",
    aiImage: "src/assets/images/ResearchArea/AI1.webp",
    link:"/sensing"
    },
    {id:2,
    title: "Mobility & Geospatial AI",
    contents: "To develop GeoAI-powered solutions that advance mobility research and applications.",
    image: "src/assets/images/ResearchArea/ra2.webp",
    aiImage: "src/assets/images/ResearchArea/AI2.webp",
    link:"/prediction"
    },
    {id:3,
    title: "Behavior Change & Modelling",
    contents: "To understand short- and long-term changes of mobility behavior in the context of global change and new urban crises (e.g., pandemic, natural disasters).",
    image: "src/assets/images/ResearchArea/ra3.webp",
    aiImage: "src/assets/images/ResearchArea/AI3.webp",
    link:"/behavior"
    },
    {id:4,
    title: "Mobility X",
    contents: "To study the impact of emerging mobility solutions (e.g., shared mobility; autonomous vehicles) on future urban systems.",
    image: "src/assets/images/ResearchArea/ra4.webp",
    aiImage: "src/assets/images/ResearchArea/AI4.webp",
    link:"/shared"
    },
    {id:5,
    title: "Cities, Society & Connectivity",
    contents: "To understand the broad implications of mobility for urban development and human interactions.",
    image: "src/assets/images/ResearchArea/ra5.webp",
    aiImage: "src/assets/images/ResearchArea/AI5.webp",
    link:"/connectivity"
    },
    {id:6,
    title: "Tourist Mobility & Smart Tourism",
    contents: "To understand tourist spatial behavior and destination choices & Develop solutions for smart and sustainable tourism development.",
    image: "src/assets/images/ResearchArea/ra6.webp",
    aiImage: "src/assets/images/ResearchArea/AI6.webp",
    link:"/tourism"
    },

]

const awards = [
  {id: 1,
    year:2020,
    name: "FastCompany Innovation by Design Award (Honorable Mention)",
    asso:"FastCompany (Awarded Project: Singapore Calling)"
  },
  {id: 2,
    year:2021,
    name: "IFITT Journal Paper of the Year Award (2nd Place)",
    asso:"International Federation for IT and Travel & Tourism (IFITT)"
  },
  {id: 3,
    year:2021,
    name: "First Prize, Huawei ICT Competition Hong Kong SAR \n Third Prize, Huawei ICT Competition Asia Pacific (Cloud Track)",
    asso:""
  },
  {id: 4,
    year:2022,
    name: "IFITT Journal Paper of the Year Award (1st Place)",
    asso:"International Federation for IT and Travel & Tourism (IFITT)"
  },
  {id: 5,
    year:2022,
    name: "Best Paper Award",
    asso:"The 5th Global Tourism and Hospitality Conference, Hong Kong"
  },
  {id: 6,
    year:2022,
    name: "First Prize, Huawei ICT Competition Global Final",
    asso:""
  },
  {id: 7,
    year:2022,
    name: "CPGIS Young Scholar Award",
    asso:"The International Association of Chinese Professionals in Geographic Information Sciences (CPGIS)"
  },
  {id: 8,
    year:2023,
    name: "FrontRunner 5000, Top articles in outstanding S&T Journals of China",
    asso:"Institute of Scientific and Technical Information of China"
  },
  {id: 9,
    year:2023,
    name: "地理信息科技进步奖, 一等奖",
    asso:"中国地理信息产业协会 (China Association for Geospatial Industry and Sciences)"
  },
  {id: 10,
    year:2025,
    name: "Outstanding Alumni Award",
    asso:"Department of Geography and Sustainability, University of Tennessee, Knoxville"
  },
 
]

const publications = [

    {id: 1,
    title: "Understanding aggregate human mobility patterns using passive mobile phone location data: a home-based approach.",
    authors: "Xu, Y., Shaw, S-L., Zhao, Z., Yin, L., Fang, Z. and Li. Q.",
    journal: "Transportation, 42(4), 625-646.",
    year: 2015,
    doi: "https://link.springer.com/article/10.1007/s11116-015-9597-y",
    pdf:"src/assets/pdfs/2015_Transportation_CDR.pdf",
    abstract: "Advancements of information, communication and location-aware technologies have made collections of various passively generated datasets possible. These datasets provide new opportunities to understand human mobility patterns at a low cost and large scale. This study presents a home-based approach to understanding human mobility patterns based on a large mobile phone location dataset from Shenzhen, China. First, we estimate each individual's “home” anchor point, and a modified standard distance (S) is proposed to measure the spread of each individual's activity space centered at this “home” anchor point. We then derive aggregate mobility patterns at mobile phone tower level to describe the distance distribution of for people who share the same “home” anchor point. A hierarchical clustering algorithm is performed and the spatial distributions of the derived clusters are analyzed to highlight areas with similar aggregate human mobility patterns. The results suggest that 43 % of the population sample travelled within a short distance () during the 13-day study period while 23.9 % of them were associated with a large activity space (). The geographical differences of people's mobility patterns in Shenzhen are evident. Areas with a large proportion of people who have a small activity space mainly locate in the northern part of Shenzhen such as Baoan and Longgang districts. In the southern part where the economy is highly developed, the percentage of people with a larger activity space is higher in general. The findings could offer useful implications on policy and decision making. The proposed approach can also be used in other studies involving similar spatiotemporal datasets for travel behavior and policy analysis.",
    cite: "@article{xu2015understanding,\n\
      title={Understanding aggregate human mobility patterns using passive mobile phone location data: A home-based approach},\n\
      author={Xu, Yang and Shaw, Shih-Lung and Zhao, Ziliang and Yin, Ling and Fang, Zhixiang and Li, Qingquan},\n\
      journal={Transportation},\n\
      volume={42},\n\
      pages={625--646},\n\
      year={2015},\n\
      publisher={Springer}\n\
    }"
    }, 
    {id: 2,
    title: "Understanding the Bias of Call Detail Records in Human Mobility Research.",
    authors: "Zhao, Z., Shaw, S-L., Xu, Y., Lu, F., Chen, J. and Yin, L.",
    journal: "International Journal of Geographical Information Science, 30(9), 1738-1762.",
    year: 2016,
    doi: "https://www.tandfonline.com/doi/abs/10.1080/13658816.2015.1137298?journalCode=tgis20#.V4zdkfl97IU",
    pdf:"src/assets/pdfs/2016_IJGIS_CDR.pdf",
    abstract: "In recent years, call detail records (CDRs) have been widely used in human mobility research. Although CDRs are originally collected for billing purposes, the vast amount of digital footprints generated by calling and texting activities provide useful insights into population movement. However, can we fully trust CDRs given the uneven distribution of people's phone communication activities in space and time? In this article, we investigate this issue using a mobile phone location dataset collected from over one million subscribers in Shanghai, China. It includes CDRs (~27%) plus other cellphone-related logs (e.g., tower pings, cellular handovers) generated in a workday. We extract all CDRs into a separate dataset in order to compare human mobility patterns derived from CDRs vs. from the complete dataset. From an individual perspective, the effectiveness of CDRs in estimating three frequently used mobility indicators is evaluated. We find that CDRs tend to underestimate the total travel distance and the movement entropy, while they can provide a good estimate to the radius of gyration. In addition, we observe that the level of deviation is related to the ratio of CDRs in an individual's trajectory. From a collective perspective, we compare the outcomes of these two datasets in terms of the distance decay effect and urban community detection. The major differences are closely related to the habit of mobile phone usage in space and time. We believe that the event-triggered nature of CDRs does introduce a certain degree of bias in human mobility research and we suggest that researchers use caution to interpret results derived from CDR data.",
    cite: "@article{zhao2016understanding,\n\
      title={Understanding the bias of call detail records in human mobility research},\n\
      author={Zhao, Ziliang and Shaw, Shih-Lung and Xu, Yang and Lu, Feng and Chen, Jie and Yin, Ling},\n\
      journal={International Journal of Geographical Information Science},\n\
      volume={30},\n\
      number={9},\n\
      pages={1738--1762},\n\
      year={2016},\n\
      publisher={Taylor \\& Francis}\n\
    }"
    }, 
    {id: 3,
    title: "Another Tale of Two Cities: Understanding Human Activity Space Using Actively Tracked Cellphone Location Data.",
    authors: "Xu, Y., Shaw, S-L., Zhao, Z., Yin, L., Lu, F., Chen, J., Fang, Z. and Li, Q.",
    journal: "Annals of the American Association of Geographers, 106(2), 489-502.",
    year: 2016,
    doi: "https://www.tandfonline.com/doi/abs/10.1080/00045608.2015.1120147?journalCode=raag21",
    pdf:"src/assets/pdfs/2016_Annals.pdf",
    abstract: "Activity space is an important concept in geography. Recent advancements of location-aware technologies have generated many useful spatiotemporal data sets for studying human activity space for large populations. In this article, we use two actively tracked cellphone location data sets that cover a weekday to characterize people's use of space in Shanghai and Shenzhen, China. We introduce three mobility indicators (daily activity range, number of activity anchor points, and frequency of movements) to represent the major determinants of individual activity space. By applying association rules in data mining, we analyze how these indicators of an individual's activity space can be combined with each other to gain insights of mobility patterns in these two cities. We further examine spatiotemporal variations of aggregate mobility patterns in these two cities. Our results reveal some distinctive characteristics of human activity space in these two cities: (1) A high percentage of people in Shenzhen have a relatively short daily activity range, whereas people in Shanghai exhibit a variety of daily activity ranges; (2) people with more than one activity anchor point tend to travel further but less frequently in Shanghai than in Shenzhen; (3) Shenzhen shows a significant north–south contrast of activity space that reflects its urban structure; and (4) travel distance in both cities is shorter around noon than in regular work hours, and a large percentage of movements around noon are associated with individual home locations. This study indicates the benefits of analyzing actively tracked cellphone location data for gaining insights of human activity space in different cities.",
    cite: "@incollection{xu2018another,\n\
      title={Another tale of two cities: Understanding human activity space using actively tracked cellphone location data},\n\
      author={Xu, Yang and Shaw, Shih-Lung and Zhao, Ziliang and Yin, Ling and Lu, Feng and Chen, Jie and Fang, Zhixiang and Li, Qingquan},\n\
      booktitle={Geographies of Mobility},\n\
      pages={246--258},\n\
      year={2018},\n\
      publisher={Routledge}\n\
    }"
    }, 
    {id: 4,
    title: "Data synthesis in the Community Land Model for ecosystem simulation.",
    authors: "He, H., Wang, D., Xu, Y. and Tan, J.",
    journal: "Journal of Computational Science, 13, 83-95.",
    year: 2016,
    doi: "http://www.sciencedirect.com/science/article/pii/S1877750316300059",
    pdf:"src/assets/pdfs/2016_Computation_Science.pdf",
    abstract: "Though many ecosystem states are physically observable, the number of measured variables is limited owning to the constraints of practical environments and onsite sensors. It is therefore beneficial to only measure fundamental variables that determine the behavior of the whole ecosystem, and to simulate other variables with the measured ones. This paper proposes an approach to extract fundamental variables from simulated or observed ecosystem data, and to synthesize the other variables using the fundamental variables. Because the relation of variables in the ecosystem depends on sampling time and frequencies, a region of interest (ROI) is determined using a sliding window on time series with a predefined sampling point and frequency. Within each ROI, system variables are clustered in accordance with a group of selective features by a combination of Affinity Propagation and k-Nearest-Neighbor. In each cluster, the unobserved variables are synthesized from selected fundamental variables using a linear fitting model with ARIMA errors. In the experiment, we studied the performance of variable clustering and data synthesis under a community-land-model based simulation platform. The performance of data synthesis is evaluated by data fitting errors in prediction and forecasting, and the change of system dynamics when synthesized data are in the loop. The experiment proves the high accuracy of the proposed approach in time-series analysis and synthesis for ecosystem simulation.",
    cite: "@article{he2016data,\n\
      title={Data synthesis in the Community Land Model for ecosystem simulation},\n\
      author={He, Hongsheng and Wang, Dali and Xu, Yang and Tan, Jindong},\n\
      journal={Journal of Computational Science},\n\
      volume={13},\n\
      pages={83--95},\n\
      year={2016},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 5,
    title: "Estimating Potential Demand of Bicycle Trips from Mobile Phone Data—An Anchor-Point Based Approach.",
    authors: "Xu, Y., Shaw, S-L., Zhao, Z., Yin, L., Fang, Z. and Li. Q.",
    journal: "ISPRS International Journal of Geo-Information, 5(8), 131.",
    year: 2016,
    doi: "https://www.mdpi.com/2220-9964/5/8/131",
    pdf:"src/assets/pdfs/2016_IJGI.pdf",
    abstract: "This study uses a large-scale mobile phone dataset to estimate potential demand of bicycle trips in a city. By identifying two important anchor points (night-time anchor point and day-time anchor point) from individual cellphone trajectories, this study proposes an anchor-point based trajectory segmentation method to partition cellphone trajectories into trip chain segments. By selecting trip chain segments that can potentially be served by bicycles, two indicators (inflow and outflow) are generated at the cellphone tower level to estimate the potential demand of incoming and outgoing bicycle trips at different places in the city and different times of a day. A maximum coverage location-allocation model is used to suggest locations of bike sharing stations based on the total demand generated at each cellphone tower. Two measures are introduced to further understand characteristics of the suggested bike station locations: (1) accessibility; and (2) dynamic relationships between incoming and outgoing trips. The accessibility measure quantifies how well the stations could serve bicycle users to reach other potential activity destinations. The dynamic relationships reflect the asymmetry of human travel patterns at different times of a day. The study indicates the value of mobile phone data to intelligent spatial decision support in public transportation planning.",
    cite: "@article{xu2016estimating,\n\
      title={Estimating potential demand of bicycle trips from mobile phone data—An anchor-point based approach},\n\
      author={Xu, Yang and Shaw, Shih-Lung and Fang, Zhixiang and Yin, Ling},\n\
      journal={ISPRS International Journal of Geo-Information},\n\
      volume={5},\n\
      number={8},\n\
      pages={131},\n\
      year={2016},\n\
      publisher={MDPI}\n\
    }"
    }, 
    {id: 6,
    title: "Understanding Spatiotemporal Patterns of Human Convergence and Divergence Using Mobile Phone Location Data.",
    authors: "Yang, X., Fang, Z., Xu, Y., Shaw, S-L., Zhao Z., Yin, L., Zhang, T. and Lin, Y.",
    journal: "ISPRS International Journal of Geo-Information, 5(10), 177.",
    year: 2016,
    doi: "https://www.mdpi.com/2220-9964/5/10/177",
    pdf:"src/assets/pdfs/2016_IJGI2.pdf",
    abstract: "Investigating human mobility patterns can help researchers and agencies understand the driving forces of human movement, with potential benefits for urban planning and traffic management. Recent advances in location-aware technologies have provided many new data sources (e.g., mobile phone and social media data) for studying human space-time behavioral regularity. Although existing studies have utilized these new datasets to characterize human mobility patterns from various aspects, such as predicting human mobility and monitoring urban dynamics, few studies have focused on human convergence and divergence patterns within a city. This study aims to explore human spatial convergence and divergence and their evolutions over time using large-scale mobile phone location data. Using a dataset from Shenzhen, China, we developed a method to identify spatiotemporal patterns of human convergence and divergence. Eight distinct patterns were extracted, and the spatial distributions of these patterns are discussed in the context of urban functional regions. Thus, this study investigates urban human convergence and divergence patterns and their relationships with the urban functional environment, which is helpful for urban policy development, urban planning and traffic management.",
    cite: "@article{yang2016understanding,\n\
      title={Understanding spatiotemporal patterns of human convergence and divergence using mobile phone location data},\n\
      author={Yang, Xiping and Fang, Zhixiang and Xu, Yang and Shaw, Shih-Lung and Zhao, Zhiyuan and Yin, Ling and Zhang, Tao and Lin, Yunong},\n\
      journal={ISPRS International Journal of Geo-Information},\n\
      volume={5},\n\
      number={10},\n\
      pages={177},\n\
      year={2016},\n\
      publisher={MDPI}\n\
    }"
    }, 
    {id: 7,
    title: "Building a Virtual Ecosystem Dynamic Model for Root Research.",
    authors: "Xu, Y., Wang, D., Iverson, C., Walker, A. and Warren, J.",
    journal: "Environmental Modelling & Software, 89, 97-105.",
    year: 2017,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S1364815216309379",
    pdf:"src/assets/pdfs/2017_EMS_Root.pdf",
    abstract: "Understanding the fundamental mechanistic processes within large environmental models has great implications in model interpretation and future improvement. However, obtaining a good understanding of these processes can be challenging due to the complexities in model structures and software configurations. This paper introduces a functional test framework - with unique approaches to tackling software complexities in large environmental models – to facilitate process-based model exploration and validation. A Virtual Ecosystem Dynamic Model is developed as a case study to better understand and validate root-related processes in the Community Land Model (CLM). The proposed framework could help empiricists better access the inner workings of large environmental models, and facilitate integrative collaborations among broad scientific communities including field scientists, environmental system modelers, and computer scientists.",
    cite: "@article{xu2017building,\n\
      title={Building a virtual ecosystem dynamic model for root research},\n\
      author={Xu, Yang and Wang, Dali and Iversen, Colleen M and Walker, Anthony and Warren, Jeff},\n\
      journal={Environmental modelling \\& software},\n\
      volume={89},\n\
      pages={97--105},\n\
      year={2017},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 8,
    title: "A Web-based Visual Analytic Framework for Understanding Large-scale Environmental Models: A Use Case for The Community Land Model.",
    authors: "Xu, Y., Wang, D., Janjusic, T., Wu, W., Pei, Y. and Yao, Z.",
    journal: "Procedia Computer Science, 108, 1731-1740.",
    year: 2017,
    doi: "https://www.sciencedirect.com/science/article/pii/S1877050917307676",
    pdf:"src/assets/pdfs/2017_Procedia_CS_Web.pdf",
    abstract: "This study introduces a web-based visual analytic framework to better understand the software structures of large-scale environmental models. The framework integrates data management, software structures analysis, and web-based visualizations. A system for the Community Land Model (CLM) is developed to demonstrate the capability of the proposed framework. It consists of three major components: (1) a Fortran-syntax analysis tool that decomposes CLM source code into simpler forms; (2) an application tier that further analyzes and converts the prepro-cessed data into meaningful software structural information; (3) a web-based front end that is developed using state-of-the-art web technologies and visualization toolkit (e.g., D3.js). The framework provides users with easy access to the internal structures of complex environmental models. Currently, the prototype system is being used by CLM modelers and field scientists to tackle different environmental research problems.",
    cite: "@article{xu2017web,\n\
      title={A web-based visual analytic framework for understanding large-scale environmental models: A use case for the community land model},\n\
      author={Xu, Yang and Wang, Dali and Janjusic, Tomislav and Wu, Wei and Pei, Yu and Yao, Zhuo},\n\
      journal={Procedia Computer Science},\n\
      volume={108},\n\
      pages={1731--1740},\n\
      year={2017},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 9,
    title: "How friends share urban space: An exploratory spatiotemporal analysis using mobile phone data.",
    authors: "Xu, Y.*, Belyi, A., Bojic, I. and Ratti C.",
    journal: "Transactions in GIS, 21, 468-487.",
    year: 2017,
    doi: "https://onlinelibrary.wiley.com/doi/10.1111/tgis.12285/abstract;jsessionid=551FAD51EAA98E98A17B077B46A80025.f04t02",
    pdf:"src/assets/pdfs/2017_TGIS_Friendship.pdf",
    abstract: "This study proposes a framework to investigate the roles of urban spaces in connecting social contacts (i.e., “friends”). The framework is applied to a Call Detail Record (CDR) dataset collected in Singapore. First, a comparative analysis is performed to understand how friends share urban space differently from random people. Then, we derive two metrics to quantify the “bonding” and “bridging” capabilities of places in the city. The two metrics reflect the potential of a place in connecting friends and random people (e.g., chance encounters), respectively. Finally, we examine the temporal signature of the places' bonding capabilities, and associate the results with various types of Points of Interest (POIs). We find that: (1) friends are more likely to share urban space than random people, and they also share more locations; (2) a place could play different roles in connecting friends vs. random people, and the relationship (between bonding and bridging) varies depending on the time and type of a day (weekdays vs. weekends); (3) the temporal signature of bonding capability is strongly related to the semantics of a place; (4) certain POI types (e.g., shopping malls) tend to have a much higher impact on bonding capability than others (e.g., sports centers).",
    cite: "@article{xu2017friends,\n\
      title={How friends share urban space: An exploratory spatiotemporal analysis using mobile phone data},\n\
      author={Xu, Yang and Belyi, Alexander and Bojic, Iva and Ratti, Carlo},\n\
      journal={Transactions in GIS},\n\
      volume={21},\n\
      number={3},\n\
      pages={468--487},\n\
      year={2017},\n\
      publisher={Wiley Online Library}\n\
    }"
    }, 
    {id: 10,
    title: "Spatiotemporal model for assessing the stability of urban human convergence and divergence patterns.",
    authors: "Fang, Z., Yang, X., Xu, Y., Shaw, S.L. and Yin, L.",
    journal: "International Journal of Geographical Information Science, 31(11), 2119-2141.",
    year: 2017,
    doi: "https://www.tandfonline.com/doi/abs/10.1080/13658816.2017.1346256",
    pdf:"src/assets/pdfs/2017_IJGIS_Convergence.pdf",
    abstract: "Understanding the stability of urban flows is critical for urban transportation, urban planning and public health. However, few studies have measured the stability of aggregate human convergence or divergence patterns. We propose a spatiotemporal model for assessing the stability of human convergence and divergence patterns. A mobile phone location data set obtained from Shenzhen, China, was used to assess the stability of daily human convergence and divergence patterns at three different spatial scales, i.e. points (cell phone towers), lines (bus lines) and areas (traffic analysis zones [TAZs]). Our analysis results demonstrated that the proposed model can identify points and bus lines with time-dependent variations in stability, which is useful for delineating TAZs for transportation planning, or adjusting bus timetables and routes to meet the needs of bus riders. Comparisons of the results obtained from the proposed model and the widely used entropy measure indicated that the proposed model is suitable for assessing the differences in stability for various types of spatial analysis units, e.g. cell phone towers. Therefore, the proposed model is a useful alternative approach of measuring spatiotemporal stability of aggregate human convergence and divergence patterns, which can be derived from the space–time trajectories of moving objects.",
    cite: "@article{fang2017spatiotemporal,\n\
      title={Spatiotemporal model for assessing the stability of urban human convergence and divergence patterns},\n\
      author={Fang, Zhixiang and Yang, Xiping and Xu, Yang and Shaw, Shih-Lung and Yin, Ling},\n\
      journal={International Journal of Geographical Information Science},\n\
      volume={31},\n\
      number={11},\n\
      pages={2119--2141},\n\
      year={2017},\n\
      publisher={Taylor \\& Francis}\n\
    }"
    }, 
    {id: 11,
    title: "Coupling mobile phone and social media data: a new approach to understanding urban functions and diurnal patterns.",
    authors: "Tu, W., Cao, J., Yue, Y., Shaw, S.L., Zhou, M., Wang, Z., Chang, X., Xu, Y. and Li, Q.",
    journal: "International Journal of Geographical Information Science, 31(12), 2331-2358.",
    year: 2017,
    doi: "https://www.tandfonline.com/doi/abs/10.1080/13658816.2017.1356464",
    pdf:"src/assets/pdfs/2017_IJGIS_Mobile_Social.pdf",
    abstract: "Understanding urban functions and their relationships with human activities has great implications for smart and sustainable urban development. In this study, we present a novel approach to uncovering urban functions by aggregating human activities inferred from mobile phone positioning and social media data. First, the homes and workplaces (of travelers) are estimated from mobile phone positioning data to annotate the activities conducted at these locations. The remaining activities (such as shopping, schooling, transportation, recreation and entertainment) are labeled using a hidden Markov model with social knowledge learned from social media check-in data over a lengthy period. By aggregating identified human activities, hourly urban functions are inferred, and the diurnal dynamics of those functions are revealed. An empirical analysis was conducted for the case of Shenzhen, China. The results indicate that the proposed approach can capture citywide dynamics of both human activities and urban functions. It also suggests that although many urban areas have been officially labeled with a single land-use type, they may provide different functions over time depending on the types and range of human activities. The study demonstrates that combining different data on human activities could yield an improved understanding of urban functions, which would benefit short-term urban decision-making and long-term urban policy making.",
    cite: "@article{tu2017coupling,\n\
      title={Coupling mobile phone and social media data: A new approach to understanding urban functions and diurnal patterns},\n\
      author={Tu, Wei and Cao, Jinzhou and Yue, Yang and Shaw, Shih-Lung and Zhou, Meng and Wang, Zhensheng and Chang, Xiaomeng and Xu, Yang and Li, Qingquan},\n\
      journal={International Journal of Geographical Information Science},\n\
      volume={31},\n\
      number={12},\n\
      pages={2331--2358},\n\
      year={2017},\n\
      publisher={Taylor \\& Francis}\n\
    }"
    }, 
    {id: 12,
    title: "Uncovering the Relationships Between Phone Communication Activities and Spatiotemporal Distribution of Mobile Phone Users.",
    authors: "Xu, Y., Shaw, S. L., Lu, F., Chen, J., and Li, Q.",
    journal: "In Human Dynamics Research in Smart and Connected Communities, pp. 41-65, Springer, Cham.",
    year: 2018,
    doi: "https://link.springer.com/chapter/10.1007/978-3-319-73247-3_3",
    pdf:"src/assets/pdfs/2018_Human_Dynamics.pdf",
    abstract: "In recent years, call detail records (CDRs) have been widely used to study various aspects of urban and human dynamics. One assumption implicitly made in many existing studies is that people's phone communication activities could represent spatiotemporal distribution of the population, or at least of the mobile phone users. By using a mobile phone data set which consists of CDRs plus other cellphone-related logs (e.g., cellular handover and periodic location update), we derive two cellphone usage indicators (volume of calls/messages and number of active phone users) as well as the spatiotemporal distribution of mobile phone users, and evaluate their relationships through correlation and regression analysis. We find that the correlations between the number of mobile phone users and each of the two cellphone usage indicators remain high and stable during the day time and in early evening (i.e., 07:00–21:30). However, their relationships revealed by the regression models vary greatly throughout a day. Researchers therefore should be cautious when using mobile phone communication activities to quantify certain aspects of urban dynamics. Our regression analyses suggest that the log-transformation model performs better than the simple linear regression model (in predicting phone user distribution) when the independent variable (or ) is fixed. Also, we find that serves as a better independent variable than, which is affected more by individual “burst” of phone communication activities, when explaining spatiotemporal distribution of mobile phone users. A 3-fold cross validation suggests that CDRs can be used along with other data sources (e.g., land use) to deliver more robust estimation of phone user distributions, which potentially facilitate dynamic projection of urban population distributions.",
    cite: "@incollection{xu2018uncovering,\n\
      title={Uncovering the relationships between phone communication activities and spatiotemporal distribution of mobile phone users},\n\
      author={Xu, Yang and Shaw, Shih-Lung and Lu, Feng and Chen, Jie and Li, Qingquan},\n\
      booktitle={Human Dynamics Research in Smart and Connected Communities},\n\
      pages={41--65},\n\
      year={2018},\n\
      publisher={Springer}\n\
    }"
    }, 
    {id: 13,
    title: "Human Mobility and Socioeconomic Status: Analysis of Singapore and Boston.",
    authors: "Xu, Y.*, Belyi, A., Bojic, I. and Ratti, C.",
    journal: "Computers, Environment and Urban Systems, 72, 51-67.",
    year: 2018,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0198971517304179",
    pdf:"src/assets/pdfs/2018_CEUS_Mobility_Socioeconomic.pdf",
    abstract: "Recently, some studies have shown that human movement patterns are strongly associated with regional socioeconomic indicators such as per capita income and poverty rate. These studies, however, are limited in numbers and they have not reached a consensus on what indicators or how effectively they can possibly be used to reflect the socioeconomic characteristics of the underlying populations. In this study, we propose an analytical framework — by coupling large scale mobile phone and urban socioeconomic datasets — to better understand human mobility patterns and their relationships with travelers' socioeconomic status (SES). Six mobility indicators, which include radius of gyration, number of activity locations, activity entropy, travel diversity, k-radius of gyration, and unicity, are derived to quantify important aspects of mobile phone users' mobility characteristics. A data fusion approach is proposed to approximate, at an aggregate level, the SES of mobile phone users. Using Singapore and Boston as case studies, we compare the statistical properties of the six mobility indicators in the two cities and analyze how they vary across socioeconomic classes. The results provide a multifaceted view of the relationships between mobility and SES. Specifically, it is found that phone user groups that are generally richer tend to travel shorter in Singapore but longer in Boston. One of the potential reasons, as suggested by our analysis, is that the rich neighborhoods in the two cities are respectively central and peripheral. For three other mobility indicators that reflect the diversity of individual travel and activity patterns (i.e., number of activity locations, activity entropy, and travel diversity), we find that for both cities, phone users across different socioeconomic classes exhibit very similar characteristics. This indicates that wealth level, at least in Singapore and Boston, is not a factor that restricts how people travel around in the city. In sum, our comparative analysis suggests that the relationship between mobility and SES could vary among cities, and such relationship is influenced by the spatial arrangement of housing, employment opportunities, and human activities.",
    cite: "@article{xu2018human,\n\
      title={Human mobility and socioeconomic status: Analysis of Singapore and Boston},\n\
      author={Xu, Yang and Belyi, Alexander and Bojic, Iva and Ratti, Carlo},\n\
      journal={Computers, Environment and Urban Systems},\n\
      volume={72},\n\
      pages={51--67},\n\
      year={2018},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 14,
    title: "Geographic Prevalence and Mix of Regional Cuisines in Chinese Cities.",
    authors: "Zhu, J., Xu, Y.*, Shaw, S. L., Fang, Z. and Liu, X.",
    journal: "ISPRS International Journal of Geo-Information, 7(5), 183.",
    year: 2018,
    doi: "https://www.mdpi.com/2220-9964/7/5/183",
    pdf:"src/assets/pdfs/2018_IJGI_Dianping.pdf",
    abstract: "Previous research on the geographies of food put a considerable focus on analyzing how different types of food or ingredients are consumed across different places. Little is known, however, about how food culture is manifested through various cooking traditions as well as people's perceptions over different culinary styles. Using a data set captured from one of the largest online review sites in China (www.dianping.com), this study demonstrates how geo-referenced social review data can be leveraged to better understand the geographic prevalence and mix of regional cuisines in Chinese cities. Based on information of millions of restaurants obtained in selected cities (i.e., provincial capitals and municipalities under direct supervision of the Chinese central government), we first measure by each city the diversity of restaurants that serve regional Chinese cuisines using the Shannon entropy, and analyze how cities with different characteristics are geographically distributed. A hierarchical clustering algorithm is then used to further explore the similarities of consumers' dining options among these cities. By associating each regional Chinese cuisine to its origin, we then develop a weighted distance measure to quantify the geographic prevalence of each cuisine type. Finally, a popularity index (POPU) is introduced to quantify consumers' preferences for different regional cuisines. We find that: (1) diversity of restaurants among the cities shows an “east–west” contrast that is in general agreement with the socioeconomic divide in China; (2) most of the cities have their own unique characteristics, which are mainly driven by a large market share of the corresponding local cuisine; (3) there exists great heterogeneity of the geographic prevalence of different Chinese cuisines. In particular, Chuan and Xiang, which are famous for their spicy taste, are widely distributed across the mainland China and (4) among the top-tier restaurants ranked by the consumers in a city, the local cuisine is not usually favored, while other cuisines are favored by consumers in many different cities. This study demonstrates the use of social review data as a cost-effective approach of studying urban gastronomy and its relationship with human activities.",
    cite: "@article{zhu2018geographic,\n\
      title={Geographic prevalence and mix of regional cuisines in Chinese cities},\n\
      author={Zhu, Jingwei and Xu, Yang and Fang, Zhixiang and Shaw, Shih-Lung and Liu, Xingjian},\n\
      journal={ISPRS international journal of geo-information},\n\
      volume={7},\n\
      number={5},\n\
      pages={183},\n\
      year={2018},\n\
      publisher={MDPI}\n\
    }"
    }, 
    {id: 15,
    title: "Do different datasets tell the same story about urban mobility — A comparative study of public transit and taxi usage.",
    authors: "Zhang, X., Xu, Y.*, Tu, W. and Ratti, C.",
    journal: "Journal of Transport Geography, 70, 78-90.",
    year: 2018,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0966692317307093",
    pdf:"src/assets/pdfs/2018_JTG_Taxi_Transit.pdf",
    abstract: "Understanding human movements and their interactions with the built environment has long been a research interest in transport geography. In recent years, two important types of urban mobility datasets — smart card transactions and taxi GPS trajectories — have been used extensively but often separately to quantify travel patterns as well as urban spatial structures. Despite the fruitful research outcomes, the relationships between different types of transport flows in the same geographic area remain poorly understood. In this research, we propose an analytical framework to compare urban mobility patterns extracted from these two data sources. Using Singapore as a case study, this research introduces a three-fold comparative analysis to understand: (1) the spatial distributions of public transit and taxi usages and their relative balance; (2) the distance decay of travel distance, and (3) the spatial interaction communities extracted from the two transport modes. The research findings reveal that the spatial distributions of travel demand extracted from the two transport modes exhibit high correlations. However, more in-depth analysis (based on rank-size distribution and log odds ratio) reveals a higher degree of spatial heterogeneity in public transit usage. The travel distance of trips from public transit decays faster than that of taxi trips, highlighting the importance of taxis in facilitating long-distance travels. Both types of trips decay much faster when travel distance is beyond 20 km, which corresponds to the average distance from the urban periphery to the center. The spatial interaction communities derived from public transit are different on weekdays and weekends, while those of taxis show similar patterns. Both transport modes yield communities that reveal the city's polycentric structure, but their differences indicate that each of the transport modes plays a specific role in connecting certain places in the city. The study demonstrates the importance of comparative data analytics to urban and transportation research.",
    cite: "@article{zhang2018different,\n\
      title={Do different datasets tell the same story about urban mobility—A comparative study of public transit and taxi usage},\n\
      author={Zhang, Xiaohu and Xu, Yang and Tu, Wei and Ratti, Carlo},\n\
      journal={Journal of Transport Geography},\n\
      volume={70},\n\
      pages={78--90},\n\
      year={2018},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 16,
    title: "Outlook and Next Steps: Integrating Social Network and Spatial Analyses for Urban Research in the New Data Environment.",
    authors: "Liu, X., Xu, Y. and Ye, X.",
    journal: "Cities as Spatial and Social Networks, pp. 227-238. Springer, Cham.",
    year: 2019,
    doi: "https://link.springer.com/chapter/10.1007/978-3-319-95351-9_13",
    pdf:"src/assets/pdfs/2019_Springer_Spatial-Social.pdf",
    abstract: "As illustrated by the previous chapters in this edited volume, the interactions between spatial and social dimensions of the built environment have both conceptual and practical significance. However, many previous studies have adopted social network and spatial analyses separately to understand the built environment. In this book, we hope to put forward a discussion regarding how social network and spatial analyses could be combined for a more refined understanding of the built environment.",
    cite: "@article{liu2019outlook,\n\
      title={Outlook and next steps: Integrating social network and spatial analyses for urban research in the new data environment},\n\
      author={Liu, Xingjian and Xu, Yang and Ye, Xinyue},\n\
      journal={Cities as spatial and social networks},\n\
      pages={227--238},\n\
      year={2019},\n\
      publisher={Springer}\n\
    }"
    }, 
    {id: 17,
    title: "Unravel the landscape and pulses of cycling activities from a dockless bike-sharing system.",
    authors: "Xu, Y.*, Chen, D., Zhang, X., Tu, W., Chen, Y., Shen, Y. and Ratti, C.",
    journal: "Computers, Environment and Urban Systems, 75, 184-203.",
    year: 2019,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0198971518305192?dgcid=author",
    pdf:"src/assets/pdfs/2019_CEUS_Bike_Sharing.pdf",
    abstract: "The recent boom of sharing economy along with its technological underpinnings have brought new opportunities to urban transport ecosystems. Today, a new mobility option that provides station-less bike rental services is emerging. While previous studies mainly focus on analyzing station-based systems, little is known about how this new mobility service is used in cities. This research proposes an analytical framework to unravel the landscape and pulses of cycling activities from a dockless bike-sharing system. Using a four-month GPS dataset collected from a major bike-sharing operator in Singapore, we reconstruct the temporal usage patterns of shared bikes at different places and apply an eigendecomposition approach to uncover their hidden structures. Several key built environment indicators are then derived and correlated with bicycle usage patterns. According to the analysis results, cycling activities on weekdays possess a variety of temporal profiles at both trip origins and destinations, highlighting substantial variations of bicycle usage across urban locations. Strikingly, a significant proportion of these variations is explained by the cycling activeness in the early morning. On weekends, the overall variations are much smaller, indicating a more uniform distribution of temporal patterns across the city. The correlation analysis reveals the role of shared bikes in facilitating the first- and last-mile trips, while the contribution of the latter (last-mile) is observed to a limited extent. Some built environment indicators, such as residential density, commercial density, and number of road intersections, are correlated with the temporal usage patterns. While others, such as land use mixture and length of cycling path, seem to have less impact. The study demonstrates the effectiveness of eigendecomposition for uncovering the system dynamics. The workflow developed in this research can be applied in other cities to understand this new-generation system as well as the implications for urban design and transport planning.",
    cite: "@article{xu2019unravel,\n\
      title={Unravel the landscape and pulses of cycling activities from a dockless bike-sharing system},\n\
      author={Xu, Yang and Chen, Dachi and Zhang, Xiaohu and Tu, Wei and Chen, Yuanyang and Shen, Yu and Ratti, Carlo},\n\
      journal={Computers, Environment and Urban Systems},\n\
      volume={75},\n\
      pages={184--203},\n\
      year={2019},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 18,
    title: "Conquer the Divided Cities.",
    authors: "Xu, Y.* and Ratti, C.",
    journal: "Towards a New Enlightenment: A Transcendent Decade, pp.366-380, BBVA OpenMind, Spain.",
    year: 2019,
    doi: "https://www.bbvaopenmind.com/en/articles/conquer-the-divided-cities/",
    pdf:"src/assets/pdfs/2019_BBVA OpenMind_Conquer the Divided Cities.pdf",
    abstract: "Considering the recent increase of socioeconomic segregation in cities worldwide, scholars of urban technology Carlo Ratti and Yang Xu put forward a new metric with which to study and counter such a phenomenon. While past research has focused on residential segregation, this article argues that segregation needs to be tracked more dynamically: across the urban environment and not just at home; through time and not just space; and by monitoring its presence in social space and not just physical space. These methods require more dynamic data as well: Ratti and Xu argue for the greater cost-effectiveness and possibilities presented by mobile-phone data. They conclude by speculating on some design actions cities could take to encourage greater mixing between different groups.",
    cite: "https://www.bbvaopenmind.com/en/articles/conquer-the-divided-cities"
    }, 
    {id: 19,
    title: "Spatial heterogeneity in spatial interaction of human movements—Insights from large-scale mobile positioning data.",
    authors: "Yang, X., Fang, Z., Xu, Y., Yin, L., Li, J. and Lu, S.",
    journal: "Journal of Transport Geography, 78, 29-40.",
    year: 2019,
    doi: "https://doi.org/10.1016/j.jtrangeo.2019.05.010",
    pdf:"src/assets/pdfs/2019_JTG_Spatial_Interaction.pdf",
    abstract: "Distance decay is a primary characteristic of spatial interaction in human movements, and it has been incorporated into many spatial interaction models. Existing approaches mainly rely on travel survey datasets to fit the frictional coefficient of distance decay. However, limited sample size and spatiotemporal resolution make the determination of the spatial interaction characteristic from a comprehensive view difficult. Recently, this situation has been reversed due to emerging large human trajectory datasets, which have stimulated a body of literatures to re-examine the traditional issue of distance decay. However, these studies only focused on distance decay from a global perspective and neglected the spatial non-stationarity of spatial interaction. This study aims to reveal the spatial heterogeneity of distance decay of human movements extracted from massive mobile phone location data from Shenzhen, China. The power law function is utilized to fit the distance decay coefficients for inflow and outflow of each spatial analysis unit. Then, geographically weighted regression is employed to quantify the relationship between distance decay coefficients and land use distribution and between distance decay coefficients and traffic facilities. Results show that considerable spatial non-stationarity appears in the distance decay of spatial interaction, and the regression coefficients indicate the spatial variations of the influence of land use and traffic facilities on distance decay across urban space. These findings provide an in-depth insight into the distance decay characteristics of human movements in a more microcosmic space.",
    cite: "@article{yang2019spatial,\n\
      title={Spatial heterogeneity in spatial interaction of human movements—Insights from large-scale mobile positioning data},\n\
      author={Yang, Xiping and Fang, Zhixiang and Xu, Yang and Yin, Ling and Li, Junyi and Lu, Shiwei},\n\
      journal={Journal of Transport Geography},\n\
      volume={78},\n\
      pages={29--40},\n\
      year={2019},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 20,
    title: "Detecting the regional delineation from a network of social media user interactions with spatial constraint: A case study of Shenzhen, China.",
    authors: "Jia, T., Yu, X., Shi, W., Liu, X., Li, X. and Xu, Y.",
    journal: "Physica A: Statistical Mechanics and its Applications, p.121719.",
    year: 2019,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0378437119309756",
    pdf:"src/assets/pdfs/2019_PhysicalA_Regional Delineation.pdf",
    abstract: "Regions are subdivisions of the earth's surface, and many systems of regionalization were proposed. Recently, with the availability of geotagged data, it raises the question of whether regions formed by human interactions agree with government districts. Thus, using network partitioning method with spatial constraint, we derive regional delineations at different spatial scales and examine their agreement with administrative districts. Experiments were conducted using the social media data of Shenzhen, China. Aggregately, the results show that the derived regions become inconsistent with administrative districts by increasing the spatial effect value, which can be largely attributed to the involvement of long human movements. However, the regions tend to keep stable when more long edges are included, which suggests the limitation of long movements effect. Individually, most northern administrative districts display high inconsistency with the derived regions, whereas most southern districts show high consistency. Besides, regions far from the downtown are less connected to the rest of the city, regions near the downtown are more connected, and particularly, regions in Nanshan, Futian, and Luohu are highly connected with each other, which form the backbone of total flows irrespective of spatial effect value. The results were finally validated at specific areas and compared with those using other methods, another dataset, and different spatial units, which suggest the feasibility of our regions for decision making in urban planning and management.",
    cite: "@article{jia2019detecting,\n\
      title={Detecting the regional delineation from a network of social media user interactions with spatial constraint: A case study of Shenzhen, China},\n\
      author={Jia, Tao and Yu, Xuesong and Shi, Wenzhong and Liu, Xintao and Li, Xin and Xu, Yang},\n\
      journal={Physica A: Statistical Mechanics and its Applications},\n\
      volume={531},\n\
      pages={121719},\n\
      year={2019},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 21,
    title: "Massive Automatic Identification System Sensor Trajectory Data-Based Multi-Layer Linkage Network Dynamics of Maritime Transport along 21st-Century Maritime Silk Road.",
    authors: "Yu, H., Fang, Z., Lu, F., Murray, A.T., Zhao, Z., Xu, Y. and Yang, X.",
    journal: "Sensors, 19(19), p.4197.",
    year: 2019,
    doi: "https://www.mdpi.com/1424-8220/19/19/4197",
    pdf:"src/assets/pdfs/2019_Sensors_Maritime Network Dynamics.pdf",
    abstract: "Automatic Identification System (AIS) data could support ship movement analysis, and maritime network construction and dynamic analysis. This study examines the global maritime network dynamics from multi-layers (bulk, container, and tanker) and multidimensional (e.g., point, link, and network) structure perspectives. A spatial-temporal framework is introduced to construct and analyze the global maritime transportation network dynamics by means of big trajectory data. Transport capacity and stability are exploited to infer spatial-temporal dynamics of system nodes and links. Maritime network structure changes and traffic flow dynamics grouping are then possible to extract. This enables the global maritime network between 2013 and 2016 to be investigated, and the differences between the countries along the 21st-century Maritime Silk Road and other countries, as well as the differences between before and after included by 21st-century Maritime Silk Road to be revealed. Study results indicate that certain countries, such as China, Singapore, Republic of Korea, Australia, and United Arab Emirates, build new corresponding shipping relationships with some ports of countries along the Silk Road and these new linkages carry significant traffic flow. The shipping dynamics exhibit interesting geographical and spatial variations. This study is meaningful to policy formulation, such as cooperation and reorientation among international ports, evaluating the adaptability of a changing traffic flow and navigation environment, and integration of the maritime economy and transportation systems.",
    cite: "@article{yu2019massive,\n\
      title={Massive automatic identification system sensor trajectory data-based multi-layer linkage network dynamics of maritime transport along 21st-century maritime silk road},\n\
      author={Yu, Hongchu and Fang, Zhixiang and Lu, Feng and Murray, Alan T and Zhao, Zhiyuan and Xu, Yang and Yang, Xiping},\n\
      journal={Sensors},\n\
      volume={19},\n\
      number={19},\n\
      pages={4197},\n\
      year={2019},\n\
      publisher={MDPI}\n\
    }"
    }, 
    {id: 22,
    title: "Quantifying segregation in an integrated urban physical-social space.",
    authors: "Xu, Y.*, Belyi, A., Santi, P. and Ratti, C.",
    journal: "Journal of The Royal Society Interface, 16: 20190536.",
    year: 2019,
    doi: "https://royalsocietypublishing.org/doi/10.1098/rsif.2019.0536",
    pdf:"src/assets/pdfs/2019_RSIF_Segreation.pdf",
    abstract: "Our knowledge of how cities bring together different social classes is still limited. Much effort has been devoted to investigating residential segregation, mostly over well-defined social groups (e.g. race). Little is known of how mobility and human communications affect urban social integration. The dynamics of spatial and social-network segregation and individual variations along these two dimensions are largely untapped. In this article, we put forward a computational framework based on coupling large-scale information on human mobility, social-network connections and people's socio-economic status (SES), to provide a breakthrough in our understanding of the dynamics of spatio-temporal and social-network segregation in cities. Building on top of a social similarity measure, the framework can be used to depict segregation dynamics down to the individual level, and also provide aggregate measurements at the scale of places and cities, and their evolution over time. By applying the methodology in Singapore using large-scale mobile phone and socio-economic datasets, we find a relatively higher level of segregation among relatively wealthier classes, a finding that holds for both social and physical space. We also highlight the interplay between the effect of distance decay and homophily as forces that determine communication intensity, defining a notion of characteristic ‘homophily distance' that can be used to measure social segregation across cities. The time-resolved analysis reveals the changing landscape of urban segregation and the time-varying roles of places. Segregations in physical and social space are weakly correlated at the individual level but highly correlated when grouped across at least hundreds of individuals. The methodology and analysis presented in this paper enable a deeper understanding of the dynamics of human segregation in social and physical space, which can assist social scientists, planners and city authorities in the design of more integrated cities.",
    cite: "@article{xu2019quantifying,\n\
      title={Quantifying segregation in an integrated urban physical-social space},\n\
      author={Xu, Yang and Belyi, Alexander and Santi, Paolo and Ratti, Carlo},\n\
      journal={Journal of the Royal Society Interface},\n\
      volume={16},\n\
      number={160},\n\
      pages={20190536},\n\
      year={2019},\n\
      publisher={The Royal Society}\n\
    }"
    }, 
    {id: 23,
    title: "Space-time dynamics of cab drivers' stay behaviors and their relationships with built environment characteristics.",
    authors: "Zhao, P., Xu, Y.*, Liu, X. and Kwan, M.P.",
    journal: "Cities, 101, p.102689.",
    year: 2020,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S026427511930976X",
    pdf:"src/assets/pdfs/2020_Cities_Taxi Stay.pdf",
    abstract: "Understanding cab drivers' stay activities is essential for planning and managing certain urban facilities. This study analyzes cab drivers' stay behaviors using a taxi GPS trajectory dataset collected in Wuhan, China. By extracting cab drivers' stay activities from the dataset, we measure the activity frequency at the level of traffic analysis zones (TAZs) and examine their spatiotemporal dynamics. We then derive several built environment indicators and assess their associations with these activities using ordinary least squares regression (OLS) and geographically weighted regression (GWR) models. According to the results, the stay frequency decays dramatically over the TAZs, indicating that these activities tend to be concentrated in particular areas of the city. The rates of decay, as reflected by the rank-size and power-law distributions, are similar on weekdays and weekends. Cab drivers' stay activities exhibit similar spatial patterns during the same period on weekdays and weekends. The adjusted R-squared of OLS is 0.742 for weekdays and 0.676 for weekends, which suggests a close relationship between stay activities and built environment characteristics. The GWR models further reveal the spatial variations of the activity-environment linkage across the study area. The study provides useful insights that support future urban design and transport planning.",
    cite: "@article{zhao2020space,\n\
      title={Space-time dynamics of cab drivers' stay behaviors and their relationships with built environment characteristics},\n\
      author={Zhao, Pengxiang and Xu, Yang and Liu, Xintao and Kwan, Mei-Po},\n\
      journal={Cities},\n\
      volume={101},\n\
      pages={102689},\n\
      year={2020},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 24,
    title: "Real-Time Route Recommendations for E-Taxies Leveraging GPS Trajectories.",
    authors: "Tu, W., Mai, K., Zhang, Y., Xu, Y., Huang, J., Deng, M., Chen, L. and Li, Q.",
    journal: "IEEE Transactions on Industrial Informatics, 17(5), pp.3133-3142.",
    year: 2020,
    doi: "https://ieeexplore.ieee.org/document/9079205",
    pdf:"src/assets/pdfs/2020_TII_ETaxi.pdf",
    abstract: "Electric vehicles (EVs) currently face formidable challenges in promotion, i.e., short driving ranges, long charging times, and few charging stations, thereby limiting their acceptability to taxi drivers. Leveraging massive-scale taxi GPS trajectory data, we present a novel real-time route recommendation system for electric taxi (ET) drivers. Taxi travel knowledge, including the probability of picking up passengers and the distribution of destinations, is learned from the raw GPS trajectories. Considering the cascading effect of route decision making, consecutive ET actions are modeled with an action tree. The corresponding expected net revenue is estimated based on the learned knowledge. A prototype online system is developed for providing route recommendations, e.g., when to go to a charging station or cruise on certain roads. An experiment in Shenzhen demonstrates that the average daily net revenue of ET drivers is better than those of 76.2% of gasoline taxi drivers. The presented approach not only increases the revenue of ET drivers in the short term but also improves the viability of EVs in the long run.",
    cite: "@article{tu2020real,\n\
      title={Real-time route recommendations for E-taxies leveraging GPS trajectories},\n\
      author={Tu, Wei and Mai, Ke and Zhang, Yatao and Xu, Yang and Huang, Jincai and Deng, Min and Chen, Long and Li, Qingquan},\n\
      journal={IEEE Transactions on Industrial Informatics},\n\
      volume={17},\n\
      number={5},\n\
      pages={3133--3142},\n\
      year={2020},\n\
      publisher={IEEE}\n\
    }"
    }, 
    {id: 25,
    title: "Spatial structures of tourism destinations: A trajectory data mining approach leveraging mobile big data.",
    authors: "Park, S., Xu, Y., Jiang, L., Chen, Z. and Huang, S.",
    journal: "Annals of Tourism Research, 84, p. 102973.",
    year: 2020,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0160738320301171?via%3Dihub",
    pdf:"src/assets/pdfs/2020_ATR_Spatial_Structure.pdf",
    abstract: "The advancement of mobile technology provides an opportunity to obtain the real-time information of travelers, such as their spatial and temporal behaviors, during their visits to a destination. This study analyzes a large scale mobile phone dataset that captures the cellphone trace of international travelers who visited South Korea. We apply a trajectory data mining approach to understand the spatial structures of tourist activities within three different destinations. Through spatial clustering analysis and sequential pattern mining, the study reveals multiple “hot spots” (or popular areas) in travel destinations and spatial interactions across these places. As a result, this paper provides important tourism implications integrating spatial models with destination planning, which is the foundation of tourism design.",
    cite: "@article{park2020spatial,\n\
      title={Spatial structures of tourism destinations: A trajectory data mining approach leveraging mobile big data},\n\
      author={Park, Sangwon and Xu, Yang and Jiang, Liu and Chen, Zhelin and Huang, Shuyi},\n\
      journal={Annals of Tourism Research},\n\
      volume={84},\n\
      pages={102973},\n\
      year={2020},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 26,
    title: "Effects of Data Preprocessing Methods on Addressing Location Uncertainty in Mobile Signaling Data.",
    authors: "Xu, Y.*, Li, X., Shaw, S. L., Lu, F., Yin, L. and Chen, B.",
    journal: "Annals of the American Association of Geographers, 111(2), 515-539.",
    year: 2020,
    doi: "https://www.tandfonline.com/doi/full/10.1080/24694452.2020.1773232",
    pdf:"src/assets/pdfs/2021_AAAG_Mobile_Signaling_Uncertainty.pdf",
    abstract: "Recent years have witnessed an increasing use of big data in mobility research. Such efforts have led to many insights on the travel behavior and activity patterns of people. Despite these achievements, the data veracity issue and its impact on the processes of knowledge discovery have seldom been discussed. In this research, we investigate the veracity issue of mobile signaling data (MSD) when they are used to characterize human mobility patterns. We first discuss the location uncertainty issues in MSD that would hinder accurate estimations of human mobility patterns, followed by an examination of two existing methods for addressing these issues (clustering-based method and time window–based method). We then propose a new approach that can overcome some of the limitations of these two methods. By applying all three methods to a large-scale mobile signaling data set, we find that the choice of preprocessing methods could lead to changes in the data characteristics. Such changes, which are nontrivial, will further affect the characterization and interpretation of human mobility patterns. By computing four mobility indicators (number of origin–destination trips, number of activity locations, total stay time, and activity entropy) from the outputs of the three methods, we illustrate their varying impacts on individual mobility estimations relevant to location uncertainty issues. Our analysis results call for more attention to the veracity issue in data-driven mobility research and its implications for replicability and reproducibility of geospatial research.",
    cite: "@article{xu2020effects,\n\
      title={Effects of data preprocessing methods on addressing location uncertainty in mobile signaling data},\n\
      author={Xu, Yang and Li, Xinyu and Shaw, Shih-Lung and Lu, Feng and Yin, Ling and Chen, Bi Yu},\n\
      journal={Annals of the American Association of Geographers},\n\
      volume={111},\n\
      number={2},\n\
      pages={515--539},\n\
      year={2020},\n\
      publisher={Taylor \\& Francis}\n\
    }"
    }, 
    {id: 27,
    title: "Tourism Geography through the Lens of Time Use: A Computational Framework Using Fine-Grained Mobile Phone Data.",
    authors: "Xu, Y.*, Li, J., Xue, J., Park, S. and Li, Q.",
    journal: "Annals of the American Association of Geographers, 111(5), 1420-1444.",
    year: 2020,
    doi: "https://www.tandfonline.com/doi/full/10.1080/24694452.2020.1812372",
    pdf:"src/assets/pdfs/2021_AAAG_Tourist_Time_Use.pdf",
    abstract: "Location-aware technologies and big data are transforming the ways we capture and analyze human activities. This has particularly affected tourism geography, which aims to study tourist activities within the context of space and places. In this study, we argue that the tourism geography of cities can be better understood through the time use of tourists captured by fine-grained human mobility observations. By using a large-scale mobile phone data set collected in three cities in South Korea (Gangneung, Jeonju, and Chuncheon), we develop a computational framework to enable accurate quantification of tourist time use, the visualization of their spatiotemporal activity patterns, and systematic comparisons across cities. The framework consists of several approaches for the extraction and semantic labeling of tourist activities, visual-analytic tools (time use diagram, time–activity diagram) for examining their time use, as well as quantitative measures that facilitate day-to-day comparisons. The feasibility of the framework is demonstrated by performing a comparative analysis in three cities during representative days when tourists tended to show more regular patterns. The framework is also employed to examine tourist time use during special events, using Gangneung during the 2018 Winter Olympics (WO) as an example. The findings are validated by comparing the spatiotemporal patterns with the WO calendar of events. The study provides a new perspective that connects time geography and tourism through the usage of spatiotemporal big data. The computational framework can be applied to compatible data sets to advance time geography, tourism, and urban mobility research.",
    cite: "@article{xu2021tourism,\n\
      title={Tourism geography through the lens of time use: A computational framework using fine-grained mobile phone data},\n\
      author={Xu, Yang and Li, Jingyan and Xue, Jiaying and Park, Sangwon and Li, Qingquan},\n\
      journal={Annals of the American Association of Geographers},\n\
      volume={111},\n\
      number={5},\n\
      pages={1420--1444},\n\
      year={2021},\n\
      publisher={Taylor \\& Francis}\n\
    }"
    }, 
    {id: 28,
    title: "Characterizing destination networks through mobility traces of international tourists — A case study using a nationwide mobile positioning dataset.",
    authors: "Xu, Y., Li, J., Belyi, A. and Park, S.",
    journal: "Tourism Management, 82, p.104195.",
    year: 2021,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0261517720301217",
    pdf:"src/assets/pdfs/2021_TM_Tourism Network.pdf",
    abstract: "This article demonstrates how large-scale tourist mobility data can be linked with network science approaches to better understand tourism destinations and their interactions. By analyzing a mobile positioning dataset that captures the nationality and movement patterns of foreign tourists to South Korea, we employ a few metrics to quantify the network properties of tourism destinations, aiming to reveal the collective dynamics of tourist movements and key differences across nationalities. According to the results, the number of inbound tourists to destinations follows a log-normal distribution, which indicates a notable heterogeneity of destination attractiveness. Although this finding holds across different nationalities, we find that tourists from different countries tended to visit different places in South Korea. A community detection algorithm partitions South Korea into several tourism regions, each covering a set of destinations that are closely connected by tourist flows. The implications for transportation development and regional tourism planning are discussed.",
    cite: "@article{xu2021characterizing,\n\
      title={Characterizing destination networks through mobility traces of international tourists—A case study using a nationwide mobile positioning dataset},\n\
      author={Xu, Yang and Li, Jingyan and Belyi, Alexander and Park, Sangwon},\n\
      journal={Tourism Management},\n\
      volume={82},\n\
      pages={104195},\n\
      year={2021},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 29,
    title: "Variability in individual home-work activity patterns.",
    authors: "Zhou, Y., Thill, J.C., Xu, Y. and Fang, Z.",
    journal: "Journal of Transport Geography, 90, p102901.",
    year: 2021,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0966692320309789?via%3Dihub",
    pdf:"src/assets/pdfs/2021_JTG_Home_Work.pdf",
    abstract: "The way people allocate time across home and work activities determines their commuting patterns and frames much of the activities they undertake in the urban space. While inter-personal and intra-personal variability and repetitiveness in these activities have been documented, they remain largely underexplored. This study highlights the variations in and between individual home-work activity patterns by using information from metro smart card data as a proxy. To this end, the concept of individual space time usage matrix (STUM) is proposed and an analytical framework is developed in support of its use to depict how each rider allocates time in the vicinity of metro stations spatially and temporally. With this framework, we can classify space-time activity patterns that can be traced back to behavioral variability. By using Wuhan, China as a case study, variability in the number of home/work locations in personal activity patterns, and flexibility of work timeframes are investigated inter- and intra-personally. Our results show that about 25% of the population has a sophisticated home-work activity pattern that does not confirm to the ordinary 1-home 1-workplace pattern. Furthermore, even for this latter group, we find quite differentiated home and work timeframe patterns. The STUM is proved to be an effective and efficient concept to create a personal profile in analyzing the activity variability with big geo-spatial data.",
    cite: "@article{zhou2021variability,\n\
      title={Variability in individual home-work activity patterns},\n\
      author={Zhou, Yang and Thill, Jean-Claude and Xu, Yang and Fang, Zhixiang},\n\
      journal={Journal of Transport Geography},\n\
      volume={90},\n\
      pages={102901},\n\
      year={2021},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 30,
    title: "Spatial analysis of the impact of urban geometry and socio-demographic characteristics on COVID-19, a study in Hong Kong",
    authors: "Kwok, C.Y.T., Wong, M.S., Chan, K.L., Kwan, M.P., Nichol, J.E., Liu, C.H., Wong, J.Y.H., Wai, A.K.C., Chan, L.W.C., Xu, Y. and Li, H.",
    journal: "Science of The Total Environment, 764, p.144455.",
    year: 2021,
    doi: "https://www.sciencedirect.com/science/article/pii/S0048969720379869?via%3Dihub",
    pdf:"src/assets/pdfs/2021_STE_COVID.pdf",
    abstract: "The World Health Organization considered the wide spread of COVID-19 over the world as a pandemic. There is still a lack of understanding of its origin, transmission, and treatment methods. Understanding the influencing factors of COVID-19 can help mitigate its spread, but little research on the spatial factors has been conducted. Therefore, this study explores the effects of urban geometry and socio-demographic factors on the COVID-19 cases in Hong Kong. For each patient, the places they visited during the incubation period before going to hospital were identified, and matched with corresponding attributes of urban geometry (i.e., building geometry, road network and greenspace) and socio-demographic factors (i.e., demographic, educational, economic, household and housing characteristics) based on the coordinates. The local cases were then compared with the imported cases using stepwise logistic regression, logistic regression with case-control of time, and least absolute shrinkage and selection operator regression to identify factors influencing local disease transmission. Results show that the building geometry, road network and certain socio-economic characteristics are significantly associated with COVID-19 cases. In addition, the results indicate that urban geometry is playing a more important role than socio-demographic characteristics in affecting COVID-19 incidence. These findings provide a useful reference to the government and the general public as to the spatial vulnerability of COVID-19 transmission and to take appropriate preventive measures in high-risk areas.",
    cite: "@article{kwok2021spatial,\n\
      title={Spatial analysis of the impact of urban geometry and socio-demographic characteristics on COVID-19, a study in Hong Kong},\n\
      author={Kwok, Coco Yin Tung and Wong, Man Sing and Chan, Ka Long and Kwan, Mei-Po and Nichol, Janet Elizabeth and Liu, Chun Ho and Wong, Janet Yuen Ha and Wai, Abraham Ka Chung and Chan, Lawrence Wing Chi and Xu, Yang and others},\n\
      journal={Science of the Total Environment},\n\
      volume={764},\n\
      pages={144455},\n\
      year={2021},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 31,
    title: "Towards a multidimensional view of tourist mobility patterns in cities: A mobile phone data perspective.",
    authors: "Xu, Y.* ., Xue, J., Park, S. and Yue, Y.",
    journal: "Computers, Environment and Urban Systems, 86, p101593.",
    year: 2021,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0198971520303264?via%3Dihub",
    pdf:"src/assets/pdfs/2021_CEUS_Tourist_Mobility.pdf",
    abstract: "The last decade has witnessed a wealth of studies on characterizing human mobility patterns using movement datasets. Such efforts have highlighted a few salient dimensions of individual travel behavior relevant to urban planning and policy analysis. Despite the fruitful research outcomes, most of the findings are drawn upon urban residents. The behavioral characteristics of other population groups, such as tourists, remain underexplored. In this study, we introduce an analytical framework to gain insights into tourist mobility patterns. By analyzing mobile phone trajectories of international travelers to three different cities in South Korea, we introduce nine mobility indicators to capture different facets of tourist travel behavior (e.g., duration of stay in a city, spatial extent of activities, location visited and trips conducted, and mobility diversity), and examine their statistical properties across cities. An eigendecomposition approach is then introduced to better understand the interdependency of these mobility indicators and inherent variations among individual travelers. Based on the eigendecomposition results, we further employ a dimension reduction technique to describe the key characteristics of each traveler. Since the mobile phone dataset captures the nationality of tourists, we use such information to quantify the behavioral heterogeneity of travelers across countries and regions. Finally, we select a few traveler groups with distinctive mobility patterns in each city and examine the spatial patterns of their activities. Substantial differences are observed among traveler groups in their spatial preferences. The implications for location recommendation and deployment of tourism services (e.g., transportation) are discussed. We hope the study brings a synergy between classic human mobility analysis and the emerging field of tourism big data. The framework can be applied or extended to compatible datasets to understand travel behavior of tourists, residents, and special population groups in cities.",
    cite: "@article{xu2021towards,\n\
      title={Towards a multidimensional view of tourist mobility patterns in cities: A mobile phone data perspective},\n\
      author={Xu, Yang and Xue, Jiaying and Park, Sangwon and Yue, Yang},\n\
      journal={Computers, Environment and urban systems},\n\
      volume={86},\n\
      pages={101593},\n\
      year={2021},\n\
      publisher={Elsevier}\n\
    }"
    }, 
    {id: 32,
    title: "Revealing temporal stay patterns in human mobility using large-scale mobile phone location data.",
    authors: "Yang, X., Fang, Z., Xu, Y., Yin, L. and Zhao, Z.",
    journal: "Transactions in GIS, 25(4), pp.1927-1948.",
    year: 2021,
    doi: "https://onlinelibrary.wiley.com/doi/10.1111/tgis.12750",
    pdf:"src/assets/pdfs/2021_TGIS_Temporal_Mobility.pdf",
    abstract: "The emergence of large-scale human spatiotemporal tracing data inspired researchers to investigate human mobility patterns from different perspectives with potential implications for urban planning, traffic management, and emergency response. Previous studies investigated the mechanism of human mobility by constructing spatial mobility motifs based on mobile phone datasets, but ignored their temporal characteristics. To compensate for this, this study extracted temporal stay patterns based on spatial mobility motifs. Using mobile phone location data from Shenzhen, China, we identified stop location sequences for users and constructed home-based mobility motifs according to predefined rules, and observed that approximately 97% of users can be characterized by the 10 identified home-based mobility motifs. We designed a method to quantify the similarity of temporal stay characteristics, and the primary temporal stay patterns were extracted by classifying users with similar stay rhythms. Our results enrich the knowledge of human travel behavior from both spatial and temporal perspectives.",
    cite: "@article{yang2021revealing,\n\
      title={Revealing temporal stay patterns in human mobility using large-scale mobile phone location data},\n\
      author={Yang, Xiping and Fang, Zhixiang and Xu, Yang and Yin, Ling and Li, Junyi and Zhao, Zhiyuan},\n\
      journal={Transactions in GIS},\n\
      volume={25},\n\
      number={4},\n\
      pages={1927--1948},\n\
      year={2021},\n\
      publisher={Wiley Online Library}\n\
    }"
    }, 
    {id: 33,
    title: "Reopening International Borders without Quarantine: Contact Tracing Integrated Policy against COVID-19.",
    authors: "Yu, Z., Zhu, X., Liu, X., Wei, T., Yuan, H., Xu, Y., et al.",
    journal: "International Journal of Environmental Research and Public Health, 18(14), p.7494.",
    year: 2021,
    doi: "https://www.mdpi.com/1660-4601/18/14/7494",
    pdf: "src/assets/pdfs/2021_IJERPH_Reopening_Border.pdf",
    abstract: "With the COVID-19 vaccination widely implemented in most countries, propelled by the need to revive the tourism economy, there is a growing prospect for relieving the social distancing regulation and reopening borders in tourism-oriented countries and regions. This need incentivizes stakeholders to develop border control strategies that fully evaluate health risks if mandatory quarantines are lifted. In this study, we have employed a computational approach to investigate the contact tracing integrated policy in different border-reopening scenarios in Hong Kong, China. Explicitly, by reconstructing the COVID-19 transmission from historical data, specific scenarios with joint effects of digital contact tracing and other concurrent measures (i.e., controlling arrival population and community nonpharmacological interventions) are applied to forecast the future development of the pandemic. Built on a modified SEIR epidemic model with a 30% vaccination coverage, the results suggest that scenarios with digital contact tracing and quick isolation intervention can reduce the infectious population by 92.11% compared to those without contact tracing. By further restricting the inbound population with a 10,000 daily quota and applying moderate-to-strong community nonpharmacological interventions (NPIs), the average daily confirmed cases in the forecast period of 60 days can be well controlled at around 9 per day (95% CI: 7–12). Two main policy recommendations are drawn from the study. First, digital contact tracing would be an effective countermeasure for reducing local virus spread, especially when it is applied along with a moderate level of vaccination coverage. Second, implementing a daily quota on inbound travelers and restrictive community NPIs would further keep the local infection under control. This study offers scientific evidence and prospective guidance for developing and instituting plans to lift mandatory border control policies in preparing for the global economic recovery.",
    cite: "@article{yu2021reopening,\n\
      title={Reopening international borders without quarantine: contact tracing integrated policy against COVID-19},\n\
      author={Yu, Zidong and Zhu, Xiaolin and Liu, Xintao and Wei, Tao and Yuan, Hsiang-Yu and Xu, Yang and Zhu, Rui and He, Huan and Wang, Hui and Wong, Man Sing and others},\n\
      journal={International Journal of Environmental Research and Public Health},\n\
      volume={18},\n\
      number={14},\n\
      pages={7494},\n\
      year={2021},\n\
      publisher={MDPI}\n\
    }"
    }, 
    {id: 34,
    title: "Short-Term Forecast of Bicycle Usage in Bike Sharing Systems: A Spatial-Temporal Memory Network.",
    authors: "Li, X., Xu, Y.*, Chen, Q., Wang, L., Zhang, X. and Shi, W.",
    journal: "IEEE Transactions on Intelligent Transportation Systems , 23(8), pp.10923-10934.",
    year: 2021,
    doi: "https://ieeexplore.ieee.org/document/9497869",
    pdf:"src/assets/pdfs/2021_IEEEITS_STMN_Bike_Sharing.pdf",
    abstract: "Bike-sharing systems have made notable contributions to cities by providing green and sustainable mobility service to users. Over the years, many studies have been conducted to understand or anticipate the usage of these systems, with the hope to inform their future developments. One important task is to accurately predict usage patterns of the systems. Although many deep learning algorithms have been developed in recent years to support travel demand forecast, they have mainly been used to predict traffic volume or speed on roadways. Few studies have applied them to bike-sharing systems. Moreover, these studies usually focus on one single dataset or study area. The effectiveness and robustness of the prediction algorithms are not systematically evaluated. In this study, we propose a Spatial-Temporal Memory Network (STMN) to predict short-term usage of bicycles in bike-sharing systems. The framework employs Convolutional Long Short-Term Memory models and a feature engineering technique to capture the spatial-temporal dependencies in historical data for the prediction task. Four testing sites are used to evaluate the model. These four sites include two station-based systems (Chicago and New York) and two dockless bike-sharing systems (Singapore and New Taipei City). By assessing STMN with several baseline models, we find that STMN achieves the best overall performance in all the four cities. The model also achieves superior performance in urban areas with varying levels of bicycle usage and during peak periods when demand is high. The findings suggest the reliability of STMN in predicting bicycle usage for different types of bike-sharing systems.",
    cite: "@article{li2021short,\n\
      title={Short-term forecast of bicycle usage in bike sharing systems: a spatial-temporal memory network},\n\
      author={Li, Xinyu and Xu, Yang and Chen, Qi and Wang, Lei and Zhang, Xiaohu and Shi, Wenzhong},\n\
      journal={IEEE Transactions on Intelligent Transportation Systems},\n\
      volume={23},\n\
      number={8},\n\
      pages={10923--10934},\n\
      year={2021},\n\
      publisher={IEEE}\n\
    }"
    }, 
    {id: 35,
    title: "Beyond Distance Decay: Discover Homophily in Spatially Embedded Social Networks.",
    authors: "Xu, Y.*, Santi, P. and Ratti, C.",
    journal: "Annals of the American Association of Geographers, 112(2), pp.505-521.",
    year: 2021,
    doi: "https://www.tandfonline.com/doi/full/10.1080/24694452.2021.1935208?src=",
    pdf:"src/assets/pdfs/2021_AAAG_Homophily_Spatial_Social_Network.pdf",
    abstract: "Existing studies suggest distance decay as an important geographic property of online social networks. Namely, social interactions are more likely to occur among people who are closer in physical space. Limited effort has been devoted so far, however, to quantifying the impact of homophily forces on social network structures. In this study, we provide a quantitative understanding of the joint impact of geographic distance and people's socioeconomic characteristics on their interaction patterns. By coupling large-scale mobile phone, income, and housing price data sets in Singapore, we reconstruct a spatially embedded social network that captures the cell phone communications of millions of phone users in the city. By associating phone users with their estimated residence, we introduce two indicators (communication intensity and friendship probability) to examine the cell phone interactions among places with various housing price values. Our findings suggest that, after controlling for distance, similar places tend to have relatively higher communication intensity than dissimilar ones, confirming a significant homophily effect as a determinant of communication intensity. When the analysis is focused on the formation of social ties, though, the homophily effect is more nuanced. It persists at relatively short distances, whereas at higher distances a tendency to form ties with people in the highest social classes prevails. Overall, the results reported in this study have implications for understanding social segregation in cities. In particular, the physical separation of social groups in a city (e.g., residential segregation) will have a direct impact on shaping communication or social network segregation. The study highlights the importance of incorporating socioeconomic data into the understanding of spatial social networks.",
    cite: "@article{xu2022beyond,\n\
        title={Beyond distance decay: Discover homophily in spatially embedded social networks},\n\
        author={Xu, Yang and Santi, Paolo and Ratti, Carlo},\n\
        journal={Annals of the American Association of Geographers},\n\
        volume={112},\n\
        number={2},\n\
        pages={505--521},\n\
        year={2022},\n\
        publisher={Taylor \\& Francis}\n\
      }"
    }, 
    {id: 36,
    title: "Combining individual travel behaviour and collective preferences for next location prediction.",
    authors: "Li, Q., Zou, D. and Xu, Y.",
    journal: "Transportmetrica A: Transport Science (in press).",
    year: 2021,
    doi: "https://www.tandfonline.com/doi/full/10.1080/23249935.2021.1968066",
    pdf:"src/assets/pdfs/2021_TransportmetricaA_Location_Prediction.pdf",
    abstract: "Many mobility prediction models have emerged over the past decade to predict a user's next location through the utilisation of user trajectories. However, the performance is constrained by the quantity of user trajectory data. This research introduces a new approach by combining knowledge of individual travel behaviour and collective preferences of users sharing similar daily activity patterns. First, users are clustered into different groups by their daily activity profiles. Second, each group's collective preferences (i.e. activity and travel distance preferences) are extracted. Then, individual travel behaviour and collective preferences are integrated for the next location prediction. A mobile phone dataset from Shanghai, China, is used for model validation. The results show that the proposed model achieves a prediction accuracy of over 80% during most of the day. Moreover, there is a maximum increase of 16% in prediction accuracy compared with baseline models when users are highly mobile.",
    cite: "@article{li2022combining,\n\
        title={Combining individual travel behaviour and collective preferences for next location prediction},\n\
        author={Li, Qiuping and Zou, Dan and Xu, Yang},\n\
        journal={Transportmetrica A: Transport Science},\n\
        volume={18},\n\
        number={3},\n\
        pages={1754--1776},\n\
        year={2022},\n\
        publisher={Taylor \\& Francis}\n\
      }"
    }, 
    {id: 37,
    title: "Inclusive public open space for all: Spatial justice with health considerations.",
    authors: "Jian, I.Y., Chan, E.H., Xu, Y.* and Owusu, E.K.",
    journal: "Habitat International, 118, p.102457.",
    year: 2021,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0197397521001466?via%3Dihub",
    pdf:"src/assets/pdfs/2021_HAB_Inclusive_Public_Space.pdf",
    abstract: "Public open space (POS) is often regarded as a necessity that is meant to be enjoyed by everyone, especially as we move toward a post-pandemic society. It is considered one of the most crucial public health assets that contribute tremendously to people's physical, social, and psychological wellbeing. While obliging private development projects to provide POS has become a common policy for optimizing land use, some critiques regard Public Open Space in Private Developments (POSPD) as over-controlled and exclusive spaces, which raise justice concerns about people's equal rights towards POS as health resources. However, little is known about the degree to which spatial justice can be created in POSPD. With the urban population becoming more diverse, investigating POSPD's actual spatial justice situation under a robust framework to ensure access for all is timely and vital. Through the lens of spatial justice, we first examined the current dominant critiques of POSPD based on a comprehensive literature review. Using Hong Kong as a case study, we then conducted a questionnaire survey on the spatial justice performance of three representative POSPD sites and also introduced Bayesian Network as a graphical probabilistic model to illustrate the mutual relationships among key variables. The results have identified the most sensitive issues (e.g., safety, affordability and diversity), contributing to spatial justice performance and indicated that inclusive POS requires a secure, affordable environment that supports diverse activity for everyone. The findings will guide decision-makers to put the appropriate emphasis on creating and protecting inclusive POSPD in the wake of the pandemic.",
    cite: "@article{jian2021inclusive,\n\
        title={Inclusive public open space for all: Spatial justice with health considerations},\n\
        author={Jian, Izzy Yi and Chan, Edwin HW and Xu, Yang and Owusu, Emmanuel Kingsford},\n\
        journal={Habitat International},\n\
        volume={118},\n\
        pages={102457},\n\
        year={2021},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 38,
    title: "The Feasibility of Using Zero-Emission Electric Boats to Enhance the Techno-Economic Performance of an Ocean-Energy-Supported Coastal Hotel Building.",
    authors: "Guo, X., Cao, S., Xu, Y. and Zhu, X.",
    journal: "Energies, 14(24), p.8465.",
    year: 2021,
    doi: "https://www.mdpi.com/1996-1073/14/24/8465",
    pdf:"src/assets/pdfs/2021_Energies.pdf",
    abstract: "The topics of zero-emission/energy buildings and electric mobility are increasingly being discussed as solutions to alleviate the environmental burden caused by energy consumption and CO2 emissions in both sectors. This study investigates a zero-energy hotel building supported by a hybrid ocean renewable energy system, which interacts with several zero-emission electric boats. Nine different combinations of floating photovoltaics (FPV) and wave energy converters (WEC) are investigated to compensate for their different fluctuations and the stochasticity of energy generation. Using TRNSYS 18 to perform modeling and simulation, a comprehensive techno-economic-environmental analysis of the hybrid system was conducted. The results indicate that when the total annual generation ratios of WEC and FPV are 76% and 24%, respectively, this combination can achieve the best energy weighted matching index (WMI). The WMI reached its maximum (0.703) when 16 boats were sailing at 15 km/h for a distance of 7.5 km. However, increasing the number of boats to 16 does not help improve economic returns or reduce the annual operational equivalent CO2 emission factor of the hybrid system. Depending on the maximum number of electric boats designed for this study, the non-dominated WMI would be limited to 0.654.",
    cite: "@article{guo2021feasibility,\n\
        title={The feasibility of using zero-emission electric boats to enhance the techno-economic performance of an ocean-energy-supported coastal hotel building},\n\
        author={Guo, Xinman and Cao, Sunliang and Xu, Yang and Zhu, Xiaolin},\n\
        journal={Energies},\n\
        volume={14},\n\
        number={24},\n\
        pages={8465},\n\
        year={2021},\n\
        publisher={MDPI}\n\
      }"
    }, 
    {id: 39,
    title: "Exploring metro vibrancy and its relationship with built environment: a cross-city comparison using multi-source urban data.",
    authors: "Tu, W., Zhu, T., Zhong, C., Zhang, X., Xu, Y. and Li, Q.",
    journal: "Geo-spatial Information Science, 25(2), pp.182-196.",
    year: 2021,
    doi: "https://www.tandfonline.com/doi/full/10.1080/10095020.2021.1996212",
    pdf:"src/assets/pdfs/2021_GSIS_Urban_Vibrancy.pdf",
    abstract: "Recent urban transformations have led to critical reflections on the blighted urban infrastructures and called for re-stimulating vital urban places. Especially, the metro has been recognized as the backbone infrastructure for urban mobility and the associated economy agglomeration. To date, limited research has been devoted to investigating the relationship between metro vitality and built environment in mega-cities empirically. This paper presents a multisource urban data-driven approach to quantify the metro vibrancy and its association with the underlying built environment. Massive smart card data is processed to extract metro ridership, which denotes the vibrancy around the metro station in physical space. Social media check-ins are crawled to measure the vitality of metros in virtual spaces. Both physical and virtual vibrancy are integrated into a holistic metro vibrancy metric using an entropy-based weighting method. Certain built environment characteristics, including land use, transportation and buildings are modeled as independent variables. The significant influences of built environmental factors on the metro vibrancy are unraveled using the ordinary least square regression and the spatial lag model. With experiments conducted in Shenzhen, Singapore and London, this study comes up with a conclusion that spatial distributions of metro vibrancy metrics in three cities are spatially autocorrelated. The regression analysis suggests that in all the three cities, more affluent urban areas tend to have higher metro virbrancy, while the road density, land use and buildings tend to impact metro vibrancy in only one or two cities. These results demonstrate the relationship between the metro vibrancy and built environment is affected by complex urban contexts. These findings help us to understand metro vibrancy thus make proper policy to re-stimulate the important metro infrastructure in the future.",
    cite: "@article{tu2022exploring,\n\
        title={Exploring metro vibrancy and its relationship with built environment: a cross-city comparison using multi-source urban data},\n\
        author={Tu, Wei and Zhu, Tingting and Zhong, Chen and Zhang, Xiaohu and Xu, Yang and Li, Qingquan},\n\
        journal={Geo-spatial Information Science},\n\
        volume={25},\n\
        number={2},\n\
        pages={182--196},\n\
        year={2022},\n\
        publisher={Taylor \\& Francis}\n\
      }"
    }, 
    {id: 40,
    title: "Understanding the movement predictability of international travelers using a nationwide mobile phone dataset collected in South Korea.",
    authors: "Xu, Y.*, Zou, D., Park, S., Li, Q., Zhou, S. and Li, X.",
    journal: "Computers, Environment and Urban Systems, 92, p.101753.",
    year: 2022,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0198971521001605?via%3Dihub",
    pdf:"src/assets/pdfs/2022_CEUS_Movement_Predictability.pdf",
    abstract: "The abilities to predict tourist movements are critical to many urban applications, such as travel recommendations, targeted advertising, and infrastructure planning. Despite its importance, our understanding on the movement predictability of urban tourists and visitors is still limited, partially due to difficulties in accessing large scale mobility observations. In this study, we aim to bridge this gap by analyzing a nationwide mobile phone dataset. The dataset captures movement traces of a large number of international travelers who visited South Korea in 2018. By introducing two prediction models, one being Markov chain and the other with a recurrent neural network architecture, we assess how well travelers' movements can be predicted under different model settings, and examine how predictability relates to travelers' length of stay and activeness in travel patterns. Since travelers' destination choices are quite diverse in South Korea, this enables us to further investigate the geographic variation of the models' performance. Results show that the Markov chain model achieves an overall accuracy between 33.4% (@Acc1 metric) and 64.2% (@Acc5 metric), compared to 41.9% (@Acc1) and 67.7% (@Acc5) for the recurrent neural network model. The prediction capabilities of both models are largely unequal across individuals, with active travelers being more predictable in general. There is a notable geographic variation in the models' performance, meaning that travelers' movements are more predictable in some cities, but less in others. We believe this study represents a new effort in portraying the movement predictability of urban tourists and visitors. The analytical framework can be applied to assist tourism planning and service deployment in cities.",
    cite: "@article{xu2022understanding,\n\
        title={Understanding the movement predictability of international travelers using a nationwide mobile phone dataset collected in South Korea},\n\
        author={Xu, Yang and Zou, Dan and Park, Sangwon and Li, Qiuping and Zhou, Suhong and Li, Xinyu},\n\
        journal={Computers, Environment and Urban Systems},\n\
        volume={92},\n\
        pages={101753},\n\
        year={2022},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 41,
    title: "Integration Path of Spatial and Geo-Computing and Computational Social Science.",
    authors: "Yue, Y. et al.",
    journal: "Geomatics and Information Science of Wuhan University, 47(1): 1-18.",
    year: 2022,
    doi: "http://ch.whu.edu.cn/cn/article/doi/10.13203/j.whugis20210619",
    pdf:"src/assets/pdfs/2022_GISWHU.pdf",
    abstract: "Objectives  Geospatial data and computing plays an important role in the era of big data and artificial intelligence(AI), and provides a dimension of social studies in term of ontological, methodological, and epistemologs aspects.  Methods  This interview invited some influential scholars from the fields of sociology, geo-informatics, computing science and expressed their views on how spatial and geo-computing can be intergrated in computational social science.  Results  Geospatial studies and social science share a very basic research objective which focuses on heterogeneity, and spatial big data provides an unprecedented paradigm for social studies. Also, challenges were raised on building a therotical framework, data availiablity, computing issues, and related concerns on ethics.  Conclusions  To solve the challenges, it requires the closer collaboration among social science, geo-science, and computer science. We wish this discussion could inspire the related studies and provide a blueprint for both geospatial and social computing.",
    cite: "@article{yue2022integration,\n\
        title={Integration Path of Spatial and Geo-Computing and Computational Social Science},\n\
        author={Yue, Yang and Liu, Yu and Chen, Yunsong and He, Li and Chen, Chen and Li, Wenwen and Qin, Kun and Jia, Tao and Xu, Gang and Wang, Fahui and others},\n\
        journal={Geomatics and Information Science of Wuhan University},\n\
        volume={47},\n\
        number={1},\n\
        pages={1--18},\n\
        year={2022}\n\
      }"
    }, 
    {id: 42,
    title: "Exploring the spatial disparity of home-dwelling time patterns in the USA during the COVID-19 pandemic via Bayesian inference.",
    authors: "Huang, X., Xu, Y., Liu, R., Wang, S., Wang, S., Zhang, M., Kang, Y., Zhang, Z., Gao, S., Zhao, B. and Li, Z.",
    journal: "Transactions in GIS (in press).",
    year: 2022,
    doi: "https://onlinelibrary.wiley.com/doi/10.1111/tgis.12918",
    pdf:"src/assets/pdfs/2022_TGIS_Home_Dwelling.pdf",
    abstract: "In this study, we aim to reveal hidden patterns and confounders associated with policy implementation and adherence by investigating the home-dwelling stages from a data-driven perspective via Bayesian inference with weakly informative priors and by examining how home-dwelling stages in the USA varied geographically, using fine-grained, spatial-explicit home-dwelling time records from a multi-scale perspective. At the U.S. national level, two changepoints are identified, with the former corresponding to March 22, 2020 (9 days after the White House declared the National Emergency on March 13) and the latter corresponding to May 17, 2020. Inspections at U.S. state and county level reveal notable spatial disparity in home-dwelling stage-related variables. A pilot study in the Atlanta Metropolitan area at the Census Tract level reveals that the self-quarantine duration and increase in home-dwelling time are strongly correlated with the median household income, echoing existing efforts that document the economic inequity exposed by the U.S. stay-at-home orders. To our best knowledge, our work marks a pioneering effort to explore multi-scale home-dwelling patterns in the USA from a purely data-driven perspective and in a statistically robust manner.",
    cite: "@article{huang2022exploring,\n\
        title={Exploring the spatial disparity of home-dwelling time patterns in the USA during the COVID-19 pandemic via Bayesian inference},\n\
        author={Huang, Xiao and Xu, Yang and Liu, Rui and Wang, Siqin and Wang, Sicheng and Zhang, Mengxi and Kang, Yuhao and Zhang, Zhe and Gao, Song and Zhao, Bo and others},\n\
        journal={Transactions in GIS},\n\
        volume={26},\n\
        number={4},\n\
        pages={1939--1961},\n\
        year={2022},\n\
        publisher={Wiley Online Library}\n\
      }"
    }, 
    {id: 43,
    title: "Spatial and functional organizations of industrial agglomerations in China's Greater Bay Area.",
    authors: "Yu, Z., Zu, J., Xu, Y.*, Chen, Y. and liu, X.",
    journal: "Environment and Planning B: Urban Analytics and City Science, p.23998083221075641.",
    year: 2022,
    doi: "https://journals.sagepub.com/doi/10.1177/23998083221075641",
    pdf:"src/assets/pdfs/2022_EPB_GBA.pdf",
    abstract: "Industrial agglomeration is a concentration phenomenon of economic activities in cities. In recent years, the geographic and functional structures of industries are constantly changing due to global industrialization and regional urbanization. Thus far, a scarcity of research has investigated spatial-functional organizations of sectoral industries in urbanized megaregions. By using points of interest (POIs) data collected in the Guangdong-Hong Kong-Macao Greater Bay Area (GBA), this paper seeks to portray the spatial extent of industrial agglomerations and to label their functional characteristics. A kernel density function is first applied to measure the spatial extent of industrial agglomerations. Next, we explore the industrial functions by implementing a semantic-based information retrieval to label the functional characteristics of industrial agglomerations via words that are tokenized from POI registered names. The empirical results suggest that the concentrations of industrial activities are strongly heterogeneous across different economic sectors, revealing that agglomerations across the GBA can provide a variety types of industrial products and services. Concerning manufacturing industries, the present analysis further confirms the existence of both specialization and diversification agglomerations along with far distinct spatial characteristics. This research supplements empirical evidence and provides novel insights into the geographical and functional organizations of economic activities regarding one of the largest urban megaregions in the world. The implications that are related to megaregional economic collaboration and development are discussed.",
    cite: "@article{yu2022spatial,\n\
        title={Spatial and functional organizations of industrial agglomerations in China's Greater Bay Area},\n\
        author={Yu, Zidong and Zu, Jinyan and Xu, Yang and Chen, Yimin and Liu, Xintao},\n\
        journal={Environment and Planning B: Urban Analytics and City Science},\n\
        volume={49},\n\
        number={7},\n\
        pages={1995--2010},\n\
        year={2022},\n\
        publisher={Sage Publications Sage UK: London, England}\n\
      }"
    }, 
    {id: 44,
    title: "Aggravated social segregation during the COVID-19 pandemic: Evidence from crowdsourced mobility data in twelve most populated U.S. metropolitan areas.",
    authors: "Li, X., Huang, X., Li, D. and Xu, Y.",
    journal: "Sustainable Cities and Society, p.103869.",
    year: 2022,
    doi: "https://www.sciencedirect.com/science/article/pii/S2210670722001962?via%3Dihub",
    pdf:"src/assets/pdfs/2022_SCSI_Mobility_Segregation.pdf",
    abstract: "The notion of social segregation refers to the degrees of separation between socially different population groups. Many studies have examined spatial and residential separations among different socioeconomic or racial populations. However, with the advancement of transportation and communication technologies, people's activities and social interactions are no longer limited to their residential areas. Therefore, there is a growing necessity to investigate social segregation from a mobility perspective by analyzing people's mobility patterns. Taking advantage of crowdsourced mobility data derived from 45 million mobile devices, we innovatively quantify social segregation for the twelve most populated U.S. metropolitan statistical areas (MSAs). We analyze the mobility patterns between different communities within each MSA to assess their separations for two years. Meanwhile, we particularly explore the dynamics of social segregation impacted by the COVID-19 pandemic. The results demonstrate that New York and Washington D.C. are the most and least segregated MSA respectively among the twelve MSAs. Since the COVID-19 began, six of the twelve MSAs experienced a statistically significant increase in segregation. This study also shows that, within each MSA, the most and least vulnerable groups of communities are prone to interacting with their similar communities, indicating a higher degree of social segregation.",
    cite: "@article{li2022aggravated,\n\
        title={Aggravated social segregation during the COVID-19 pandemic: Evidence from crowdsourced mobility data in twelve most populated US metropolitan areas},\n\
        author={Li, Xiao and Huang, Xiao and Li, Dongying and Xu, Yang},\n\
        journal={Sustainable cities and society},\n\
        volume={81},\n\
        pages={103869},\n\
        year={2022},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 45,
    title: "Assessing personal travel exposure to on-road PM2. 5 using cellphone positioning data and mobile sensors.",
    authors: "Li, Q., Liang, S., Xu, Y., Liu, L. and Zhou, S.",
    journal: "Health & Place, 75, p.102803.",
    year: 2022,
    doi: "https://www.sciencedirect.com/science/article/pii/S1353829222000648?via%3Dihub",
    pdf:"src/assets/pdfs/2022_JHAP_Travel_Exposure.pdf",
    abstract: "PM2.5 pollution imposes substantial health risks on urban residents. Previous studies mainly focused on assessing peoples' exposures at static locations, such as homes or workplaces. There has been a scarcity of research that quantifies the dynamic PM2.5 exposures of people when they travel in cities. To address this gap, we use cellphone positioning data and PM2.5 concentration data collected from smart sensors along roads in Guangzhou, China, to assess personal travel exposure to on-road PM2.5. First, we extract the trips of cellphone users from their trajectories and use the shortest path algorithm to calculate their travel routes on the road network. Second, the travel exposure of each user is estimated by associating their movement patterns with PM2.5 concentrations on roads. The result shows that most users' average travel exposures per hour fall within the range of 20 ug/m3 to 75 ug/m3. Travel exposure varies across users, and 54.0% of users experience low travel exposure throughout the day, 25.5% of users experience high travel exposure in the evening, and 20.5% of users experience high travel exposure in the afternoon. Furthermore, the impacts of on-road PM2.5 on urban populations are uneven across roads. More attention should be given to roads with high PM2.5 concentrations and traffic flows in each period, such as Huan Shi Middle Road in the morning, Inner Ring Road in the afternoon, and Xinjiao Middle Road in the evening. The findings in this study can contribute to a more in-depth understanding of the relationship between air pollution and the travel activities of urban populations.",
    cite: "@article{li2022assessing,\n\
        title={Assessing personal travel exposure to on-road PM2. 5 using cellphone positioning data and mobile sensors},\n\
        author={Li, Qiuping and Liang, Shen and Xu, Yang and Liu, Lin and Zhou, Suhong},\n\
        journal={Health \\& Place},\n\
        volume={75},\n\
        pages={102803},\n\
        year={2022},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 46,
    title: "Techno-economic analysis of the transition towards the large-scale hybrid wind-tidal supported coastal zero-energy communities.",
    authors: "Li, M., Cao, S., Zhu, X. and and Xu, Y.",
    journal: "Applied Energy, 316, p.119118.",
    year: 2022,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0306261922004998?via%3Dihub",
    pdf:"src/assets/pdfs/2022_APEN_Coastal.pdf",
    abstract: "In the current academic fields of zero-energy community, there is still limited knowledge on the integration of a coastal community with hybrid ocean-related energy systems. This study investigates the feasibility of a coastal community to reach zero-energy with the support of a hybrid offshore wind and tidal stream energy generation system, as well as an ocean and solar thermal energy supported district cooling and heating system. TRNSYS simulation was performed to demonstrate a proposed community that comprises 8 high-rise residential buildings and 2 mid-rise office buildings with a 9.86 MW community peak power demand. This study considered 21 hybrid renewable energy cases and investigated their performance in 2 scenarios – scenario 1 without battery and scenario 2 with battery. The system performance is assessed from the technical, economic, and emission perspectives by analysing the system load matching, net present value, discounted payback period, and equivalent CO2 emission. In scenario 1, the hybrid renewable energy case 5 with 6 offshore wind turbines (12 MW) and 117 tidal stream converters (29.25 MW) has the best annual load matching (56.68% “onsite energy matching” and 57.84% “onsite energy fraction”) mainly due to their complementary generation pattern during specific periods. In scenario 2, the community-scale electricity storage significantly increases the system technical performance by raising the “onsite energy matching” and “onsite energy fraction” of case 5 to 75.25% and 74.75%, respectively. In addition, the techno-economic analysis reveals the market competitiveness of the 21 RE cases and demonstrates the significant economic impact of the FiT policy. The comparison between scenario 1 and scenario 2 indicates that the community-scale battery diminishes the operation-cycle profits but reduces the equivalent CO2 emission. Furthermore, with the current price settings, tidal stream energy generation is considered less profitable than offshore wind energy generation. This study could provide important insights into the development of coastal zero-energy communities with hybrid offshore wind and tidal stream energy generation at other locations worldwide, especially densely populated coastal cities.",
    cite: "@article{li2022techno,\n\
        title={Techno-economic analysis of the transition towards the large-scale hybrid wind-tidal supported coastal zero-energy communities},\n\
        author={Li, Ming and Cao, Sunliang and Zhu, Xiaolin and Xu, Yang},\n\
        journal={Applied Energy},\n\
        volume={316},\n\
        pages={119118},\n\
        year={2022},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 47,
    title: "Impact of the COVID-19 pandemic on travel behavior: A case study of domestic inbound travelers in Jeju, Korea.",
    authors: "Ren, M., Park, S., Xu, Y.*, Huang, X., Zou, L., Wong, M.S. and Koh, S.Y.",
    journal: "Tourism Management, p.104533.",
    year: 2022,
    doi: "https://www.sciencedirect.com/science/article/pii/S0261517722000462?via%3Dihub",
    pdf:"src/assets/pdfs/2022_TM_Covid_Travel_Behavior.pdf",
    abstract: "This study analyzes a large-scale navigation dataset that captures travel activities of domestic inbound visitors in Jeju, Korea in the first nine months of 2020. A collection of regression models are introduced to quantify the dynamic effects of local and national COVID-19 indicators on their travel behavior. Results suggest that behavior of inbound travelers was jointly affected by pandemic severity locally and remotely. The daily number of new cases in Jeju has a greater impact on reducing travel activities than the national-level daily new cases of COVID-19. The impacts of the pandemic did not diminish over time but produced heterogeneous effects on travels with different trip purposes. Our findings reveal the persistence of COVID-19's effects on travel behavior and the variability in travelers' responses across tourism activities with different levels of perceived health risks. The implications for crisis management and recovery strategies are also discussed..",
    cite: "@article{ren2022impact,\n\
        title={Impact of the COVID-19 pandemic on travel behavior: A case study of domestic inbound travelers in Jeju, Korea},\n\
        author={Ren, Mengyao and Park, Sangwon and Xu, Yang and Huang, Xiao and Zou, Lei and Wong, Man Sing and Koh, Sun-Young},\n\
        journal={Tourism Management},\n\
        volume={92},\n\
        pages={104533},\n\
        year={2022},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 48,
    title: "Unfolding community homophily in U.S. metropolitans via human mobility.",
    authors: "Huang, X., Zhao, Y., Wang, S., Li, X., Yang, D., Feng, Y., Xu, Y., Zhu, L. and Chen, B.",
    journal: "Cities, p.104533.",
    year: 2022,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0264275122003687?via%3Dihub",
    pdf:"src/assets/pdfs/2022_Cities_Community_Homophily.pdf",
    abstract: "As described in the proverb “birds of a feather flock together”, the term homophily narrates the principle that stronger spatial interactions tend to be formed among locations with similar characteristics. Taking advantage of mobility networks derived from around 45 million mobile devices in the U.S. and targeting the top twenty most-populated U.S. Metropolitan Statistical Areas (MSAs), we extract human mobility structures by detecting communities formed by strong spatial links and unravel the homophily effect at the community level using information entropy that measures the chaoticness of societal settings within communities. The results suggest that the power-law still, to a large extent, governs the travel patterns in MSAs. However, communities featured by strong human interactions can sometimes transcend geographic proximity in modern metropolitans. The entropy varies across communities, and a community can exhibit variation of homophily levels when different sociodemographic settings are investigated. Our study proves the ubiquity of the homophily phenomenon in modern metropolitans and documents its variation from different social perspectives from a mobility-oriented setting. The conceptual and analytical knowledge, as well as the results of this study, are expected to facilitate better policymaking to promote social integration in metropolitan areas.",
    cite: "@article{huang2022unfolding,\n\
        title={Unfolding community homophily in US metropolitans via human mobility},\n\
        author={Huang, Xiao and Zhao, Yuhui and Wang, Siqin and Li, Xiao and Yang, Di and Feng, Yu and Xu, Yang and Zhu, Liao and Chen, Biyu},\n\
        journal={Cities},\n\
        volume={129},\n\
        pages={103929},\n\
        year={2022},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 49,
    title: "Understanding seasonal and diurnal variations of inter-city tourism destination network.",
    authors: "Park, S., Zhong, R. and Xu, Y.",
    journal: "Journal of Travel & Tourism Marketing, 39(4), pp.432-447.",
    year: 2022,
    doi: "https://www.tandfonline.com/doi/full/10.1080/10548408.2022.2116626",
    pdf:"src/assets/pdfs/2022_JTTM_Seasonal_Tourism_Network.pdf",
    abstract: "This study characterizes a destination network based on travel flow. Although the tourism literature has mostly discussed the static configurations of network structures, this study presents a dynamic destination network considering four seasons and daily periods. Given the advancement of connected technology, mobile sensor big data collected from international travelers visiting Korea were analyzed to explore movement behaviors across 250 cities in the country. Results demonstrate the dynamics of complex network systems in tourism destinations over time, such as seasons and diurnal variations. Its findings are crucial for developing vibrant destination management and contextual marketing.",
    cite: "@article{park2022understanding,\n\
        title={Understanding seasonal and diurnal variations of inter-city tourism destination network},\n\
        author={Park, Sangwon and Zhong, Ren and Xu, Yang},\n\
        journal={Journal of Travel \\& Tourism Marketing},\n\
        volume={39},\n\
        number={4},\n\
        pages={432--447},\n\
        year={2022},\n\
        publisher={Taylor \\& Francis}\n\
      }"
    }, 
    {id: 50,
    title: "Modeling activity spaces using big geo-data: Progress and challenges.",
    authors: "Yuan, Y. and Xu, Y.",
    journal: "Geography Compass, p.e12663.",
    year: 2022,
    doi: "https://compass.onlinelibrary.wiley.com/doi/10.1111/gec3.12663",
    pdf:"src/assets/pdfs/2022_Geography_Compass_Activity_Space_Review.pdf",
    abstract: "The growing availability of big geo-data, such as mobile phone data and location-based social media (LBSM), provides new opportunities and challenges for modeling human activity spaces in the big data era. These datasets often cover a large sample size and can be used to model activity spaces more efficiently than traditional travel surveys. However, these data also have inherent limitations, such as the lack of reliable demographic information of individuals and a low sampling rate. This paper first reviews the strengths and weaknesses of various internal and external activity space indicators. We then discuss the pros and cons of using various new data sources (e.g., georeferenced mobile phone data and LBSM data) for activity space modeling. We believe this review paper is a valuable reference not only for researchers who are interested in activity space modeling based on big geo-data, but also for planners and policy makers who are looking to incorporate new data sources into their future workflow.",
    cite: "@article{yuan2022modeling,\n\
        title={Modeling activity spaces using big geo-data: Progress and challenges},\n\
        author={Yuan, Yihong and Xu, Yang},\n\
        journal={Geography Compass},\n\
        volume={16},\n\
        number={11},\n\
        pages={e12663},\n\
        year={2022},\n\
        publisher={Wiley Online Library}\n\
      }"
    }, 
    {id: 51,
    title: "Improving short-term bike sharing demand forecast through an irregular convolutional neural network.",
    authors: "Li, X., Xu, Y*., Zhang, X., Shi, W., Yue, Y. and Li, Q.",
    journal: "Transportation Research Part C: Emerging Technologies, 147, p.103984.",
    year: 2023,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0968090X22003977?via%3Dihub",
    pdf:"src/assets/pdfs/2023_PartC_Irregular_Convolution.pdf",
    abstract: "As an important task for the management of bike sharing systems, accurate forecast of travel demand could facilitate dispatch and relocation of bicycles to improve user satisfaction. In recent years, many deep learning algorithms have been introduced to improve bicycle usage forecast. A typical practice is to integrate convolutional (CNN) and recurrent neural network (RNN) to capture spatial–temporal dependency in historical travel demand. For typical CNN, the convolution operation is conducted through a kernel that moves across a “matrix-format” city to extract features over spatially adjacent urban areas. This practice assumes that areas close to each other could provide useful information that improves prediction accuracy. However, bicycle usage in neighboring areas might not always be similar, given spatial variations in built environment characteristics and travel behavior that affect cycling activities. Yet, areas that are far apart can be relatively more similar in temporal usage patterns. To utilize the hidden linkage among these distant urban areas, the study proposes an irregular convolutional Long-Short Term Memory model (IrConv+LSTM) to improve short-term bike sharing demand forecast. The model modifies traditional CNN with irregular convolutional architecture to leverage the hidden linkage among “semantic neighbors”. The proposed model is evaluated with a set of benchmark models in five study sites, which include one dockless bike sharing system in Singapore, and four station-based systems in Chicago, Washington, D.C., New York, and London. We find that IrConv+LSTM outperforms other benchmark models in the five cities. The model also achieves superior performance in areas with varying levels of bicycle usage and during peak periods. The findings suggest that “thinking beyond spatial neighbors” can further improve short-term travel demand prediction of urban bike sharing systems.",
    cite: "@article{li2023improving,\n\
        title={Improving short-term bike sharing demand forecast through an irregular convolutional neural network},\n\
        author={Li, Xinyu and Xu, Yang and Zhang, Xiaohu and Shi, Wenzhong and Yue, Yang and Li, Qingquan},\n\
        journal={Transportation research part C: emerging technologies},\n\
        volume={147},\n\
        pages={103984},\n\
        year={2023},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 52,
    title: "Analyzing travel mobility patterns in city destinations: Implications for destination design.",
    authors: "Park, S., Zu, J., Xu, Y.*, Zhang, F., Liu, Y. and Li, J.",
    journal: "Tourism Management, 96, p.104718.",
    year: 2023,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S026151772200231X?via%3Dihub",
    pdf:"src/assets/pdfs/2023_TM_Tourist_Segmentation.pdf",
    abstract: "Understanding the features of travel activities is important in elaborating travel behaviors and segmenting travelers based on the similarity of activity patterns. This research applying mobile big data analytics suggests a novel method to classify travelers by considering the sequences of travel activity with individuals' trajectories. The result revealed five distinct travel types visiting city destinations and demonstrated dynamic travel flow among different mobility types. Recognizing that different types of travel patterns present important information in understanding destinations' roles (or functions), this study attempts to characterize the functionality dynamics of city destinations based on travel activity types. As a result, the findings of this research provide insights into the demand-driven construct (or flow-based) of destination planning, which is the foundation of smart destination design. In addition, important methodological and practical implications that could be useful for city destination planners/designers are suggested.",
    cite: "@article{park2023analyzing,\n\
        title={Analyzing travel mobility patterns in city destinations: Implications for destination design},\n\
        author={Park, Sangwon and Zu, Jinyan and Xu, Yang and Zhang, Fan and Liu, Yu and Li, Jingyan},\n\
        journal={Tourism Management},\n\
        volume={96},\n\
        pages={104718},\n\
        year={2023},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 53,
    title: "Understanding changing public transit travel patterns of urban visitors during COVID-19: A multi-stage study.",
    authors: "Lin, Y., Xu, Y.*, Zhao, Z., Park, S., Su, S. and Ren, M.",
    journal: "Travel Behaviour and Society, 32, p.100587.",
    year: 2023,
    doi: "https://www.sciencedirect.com/science/article/pii/S2214367X23000388?via%3Dihub",
    pdf:"src/assets/pdfs/2023_TBS_Public_Transit_Visitor_Covid19.pdf",
    abstract: "COVID-19 has caused huge disruptions to urban travel and mobility. As a critical transportation mode in cities, public transit was hit hardest. In this study, we analyze public transit usage of urban visitors with a nearly two-year smart card dataset collected in Jeju, South Korea – a major tourism city in the Asia Pacific. The dataset captures transit usage behavior of millions of domestic visitors who traveled to Jeju between January 1, 2019 and September 30, 2020. By identifying a few key pandemic stages based on COVID-19 timeline, we employ ridge regression models to investigate the impact of pandemic severity on transit ridership. We then derive a set of mobility indicators – from perspectives of trip frequency, spatial diversity, and travel range – to quantify how individual visitors used the transit system during their stay in Jeju. By further employing time series decomposition, we extract the trend component for each mobility indicator to study long-term dynamics of visitors' mobility behavior. According to the regression analysis, the pandemic had a dampening effect on public transit ridership. The overall ridership was jointly affected by national and local pandemic situations. The time series decomposition result reveals a long-term decay of individual transit usage, hinting that visitors in Jeju tended to use the transit system more conservatively as the pandemic endured. The study provides critical insights into urban visitors' transit usage behavior during the pandemic and sheds light on how to restore tourism, public transit usage, and overall urban vibrancy with some policy suggestions.",
    cite: "@article{lin2023understanding,\n\
        title={Understanding changing public transit travel patterns of urban visitors during COVID-19: A multi-stage study},\n\
        author={Lin, Yuqian and Xu, Yang and Zhao, Zhan and Park, Sangwon and Su, Shiliang and Ren, Mengyao},\n\
        journal={Travel Behaviour and Society},\n\
        volume={32},\n\
        pages={100587},\n\
        year={2023},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 54,
    title: "Evaluating Simulated Visible Greenness in Urban Landscapes: An Examination of A Midsize US City.",
    authors: "Yan, J., Naghedi, R., Huang, X., Wang, S., Lu, J. and Xu, Y.",
    journal: "Urban Forestry & Urban Greening, p.128060.",
    year: 2023,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S1618866723002315?via%3Dihub",
    pdf:"src/assets/pdfs/2023_UFUG_Simulated_Greenness.pdf",
    abstract: "Urban greenness is critical in evaluating urban environmental and living conditions, significantly affecting human well-being and house prices. Unfortunately, satellite imagery from a bird-eye view does not fully capture urban greenness from a human-centered perspective, while human-perceived greenness from street-view images heavily relies on road networks and vehicle accessibility. In recent years, scholars started to explore greenness measurements from a simulative perspective, among which the simulation of the Viewshed Greenness Visibility Index (VGVI) received wide attention. However, the simulated VGVI lacks a comprehensive assessment. To fill this gap, we designed a field experiment in Fayetteville, Arkansas, by collecting 360-degree panoramas in different local climate zones. Further, we segmented these panoramas via the state-of-the-art DeeplabV2 neural network to obtain the Panoramic Greenness Visibility Index (PGVI), which served as the ground-truthing human-perceived greenness. We assessed the performance of VGVI by comparing it with PGVI calculated from field-collected panoramas. The results showed that, despite the disparity of performance in different local climate zones, VGVI highly correlates to the PGVI, indicating its great potential for various domains that favor urban human-perceived greenness exposure.",
    cite: "@article{yan2023evaluating,\n\
        title={Evaluating simulated visible greenness in urban landscapes: An examination of a midsize US city},\n\
        author={Yan, Jingjing and Naghedi, Reza and Huang, Xiao and Wang, Siqin and Lu, Junyu and Xu, Yang},\n\
        journal={Urban Forestry \\& Urban Greening},\n\
        volume={87},\n\
        pages={128060},\n\
        year={2023},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 55,
    title: "A Cross-Scale Representation of Tourist Activity Space.",
    authors: "Chen, X., Xu, Y.*, Park, S., Chen, Y., Liu, X. and Zhuge, C.",
    journal: "Annals of the American Association of Geographers, 113(10), pp.2333-2358.",
    year: 2023,
    doi: "https://www.tandfonline.com/doi/full/10.1080/24694452.2023.2231533",
    pdf:"src/assets/pdfs/2023_AAAG_Cross_Scale_Tourist_Activity_Space.pdf",
    abstract: "Destination, as a key concept in tourism geography, has largely determined the scale at which tourist activity space was modeled and studied. Existing studies usually focused on investigating tourists' activities and movements either at the intradestination (e.g., within a city) or interdestination scale. Although useful in numerous research contexts, these models based on fixed spatial scales are incapable of portraying the complex spatial structure of tourist activity spaces, which sometimes exhibit hierarchical structures, and could span across different spatial scales. In this study, we propose a new representation of tourist activity space to bridge these gaps. The representation takes tourists' accommodation locations as key reference points. At the macroscale, the sequence of accommodation locations forms the backbone of tourist activity space, denoted as itinerary type. At the microscale, we introduce the concept of territory to describe how individuals organize activities around these overnight “base camps” (i.e., accommodation locations). We apply this representation over a large-scale mobile phone data set of international travelers visiting South Korea to demonstrate its capability. Results show that four generic itinerary types capture the activity space structure of 89 percent of the tourists. The interrelationships of territories and their topological structures further categorize activity spaces into subtypes, leading to a new method of tourist classification based on their spatiotemporal activity patterns. We believe the proposed representation could enrich new perspectives and debates on how tourist activities can be studied. The representation can also be extended as a generic framework to delineate complex forms of human activity space.",
    cite: "@article{chen2023cross,\n\
        title={A Cross-Scale Representation of Tourist Activity Space},\n\
        author={Chen, Xinyue and Xu, Yang and Park, Sangwon and Chen, Yimin and Liu, Xintao and Zhuge, Chengxiang},\n\
        journal={Annals of the American Association of Geographers},\
        volume={113},\n\
        number={10},\n\
        pages={2333--2358},\n\
        year={2023},\n\
        publisher={Taylor \\& Francis}\n\
      }"
    }, 
    {id: 56,
    title: "Merging transport network companies and taxis in Curitiba's BRT system.",
    authors: "Medeiros, R.M., Duarte, F., Bojic, I., Xu, Y., Santi, P. and Ratti, C.",
    journal: "Public Transport.",
    year: 2023,
    doi: "https://link.springer.com/article/10.1007/s12469-023-00342-7",
    pdf:"src/assets/pdfs/2023_PT_Public_Transport_Integration_Taxi.pdf",
    abstract: "The Brazilian city of Curitiba became known around the world for pioneering bus rapid transit (BRT) in the 1970s. Five decades later, public transport ridership is declining on the city's bus-based system. One-person car trips and car ownership are soaring, and services provided by transport network companies rapidly proliferate and then disappear as congestion worsens and expands across the road network. This was the macro-scale scenario for mobility and modal trends in Curitiba until COVID-19 brought things to a screeching halt in 2020. The widespread use of information and communication technologies has allowed taxi and car ride-hailing transport network schemes to emerge while blurring the lines between public and private and individual and collective transport, locally as well as globally. In 2016, transport network company systems, apps, private cars, services, drivers and passengers disrupted Curitiba's longstanding and well-regulated taxi system and market for licenses. In 2023, hailing a cab or a shared ride feels and costs the same for passengers (now customers). This study investigates whether these actors and technologies compete with or complement each other in this city, locating and quantifying the benefits for passengers of merging taxi and car ridesharing with the BRT system as first- and last-mile transport to and from BRT corridors. We developed mobile information and communication technologies and acquired, processed, and analyzed millions of data points for passenger location on BRT, ordinary bus, and taxi trips at the city scale. The shareability index for Curitiba's taxi or car rides was calculated, demonstrating that 60% of all taxi trips have the potential to serve as first- and last-mile transport solution to and from the BRT terminals, stations, and corridors and that nearly 40% of taxi trips both originate and end near (< 500 m) this BRT system infrastructure. By envisioning how transport network companies could merge into the built environment thanks to urban transport digitization, we have developed a model for integrating public transport with the analytic framework of transport network companies that could be deployed in other cities with similar challenges related to public transport, sociotechnical arrangements, system complexity, policymaking, and planning.",
    cite: "@article{medeiros2024merging,\n\
        title={Merging transport network companies and taxis in Curitiba's BRT system},\n\
        author={Medeiros, Rafael Milani and Duarte, F{\\'a}bio and Bojic, Iva and Xu, Yang and Santi, Paolo and Ratti, Carlo},\n\
        journal={Public Transport},\n\
        volume={16},\n\
        number={1},\n\
        pages={269--293},\n\
        year={2024},\n\
        publisher={Springer}\n\
      }"
    }, 
    {id: 57,
    title: "Rethinking the theoretical genesis, research paradigm and research agenda of Geo-computational Social Sciences.",
    authors: "Su, S., Wang, Z., He, S., Xu, Y., Chen, Y. and Lan, T.",
    journal: "Acta Geographica Sinica. 79(1): 187-205.",
    year: 2024,
    doi: "https://www.geog.com.cn/CN/Y2024/V79/I1/187",
    pdf:"src/assets/pdfs/2024_Geo-computational_Social_Sciences.pdf",
    abstract: "The geo-computational social sciences (GSS) has emerged as a new frontier in the interdisciplinary fields. However, the GSS has somehow trapped into a predicament as the field evolves, due to many fundamental theoretical issues remaining unsettled, such as the underlying theoretical legitimacy, conceptual domains, and research paradigm. Aiming to rectify these fundamental flaws, this paper first traces the evolving and intersecting trajectories of sociology, geography and geographical information science and focuses on the spatial turn and ideological trend of computationalism, based on which the theoretical legitimacy of GSS is defended. Second, we crystalize its conceptual domains with reference to Deleuze's conceptualization of Rhizome and further unfold the conceptual domains from two perspectives. Third, in reference to Kuhn's paradigm framework, we clarify the research paradigm of GSS through a systematic theoretical deduction from three aspects, i.e., epistemology, ontology and methodology. Finally, we propose the research agenda for GSS against China's context in the post-pandemic era to advance the theoretical innovations and applications of modern geography.",
    cite: "@article{苏世亮:187,\n\
        author = {苏世亮},\n\
        author = {王卓伦},\n\
        author = {何深静},\n\
        author = {徐阳},\n\
        author = {陈逸敏},\n\
        author = {兰天},\n\
        title = {社会地理计算的理论逻辑与研究范式及展望},\n\
        publisher = {地理学报},\n\
        year = {2024},\n\
        journal = {地理学报},\n\
        volume = {79},\n\
        number = {1},\n\
        eid = {187},\n\
        pages = {187-205},\n\
        keywords = {|社会地理计算|社会学|地理信息科学|理论合法性|研究范式|空间转向|计算主义},\n\
        url = {https://www.geog.com.cn/CN/10.11821/dlxb202401012},\n\
        doi = {10.11821/dlxb202401012},\n\
        }"
    }, 
    {id: 58,
    title: "Assessing effects of pandemic-related policies on individual public transit travel patterns: A Bayesian online changepoint detection based framework.",
    authors: "Lin, Y., Xu, Y.*, Zhao, Z., Tu, W., Park, S. and Li, Q.",
    journal: "Transportation Research Part A: Policy and Practice, 181, p. 104003.",
    year: 2024,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S096585642400051X?via%3Dihub",
    pdf:"src/assets/pdfs/2024_TRA_BOCD_Behavior_Change.pdf",
    abstract: "During a pandemic or natural disaster, people may alter transit usage behavior due to perception of changes in the environment. To effectively respond to these crises, it is important for governments and public transit agencies to understand when these changes occurred and how they were affected by relevant policies and responsive strategies. In this study, we develop a methodological framework based on Bayesian online changepoint detection (BOCD) to identify the occurrence time, direction, and persistency of changes in individual-level transit usage. We demonstrate the effectiveness of this framework in informing government decision-making in the context of COVID-19. Using Jeju Island, South Korea as a case study, we apply the framework over a nearly two-year smart card dataset collected from the beginning of 2019 till nine months into the pandemic. By focusing on frequent transit users, we detect when these users significantly changed their transit usage frequency during the pandemic and identify several types of users who experienced different behavior change patterns. Besides demonstrating the great heterogeneity in individual-level behavior changes, we perform a regression analysis to further understand how these changes were affected by key government policies (e.g., Risk alert, Social distancing, Public transit policy, and Eased social distancing). Our results suggest that only certain sets of policies appear to have significant effects. In particular, introducing Risk alert would cause a 277% to 317% increase in the number of users who reduced transit usage frequency. Policies that eased social distancing, though, would cause a 134% to 155% increase in the number of users with travel frequency increase. The proposed BOCD framework enables a scalable solution to identifying and understanding changes of individual transit behavior. The methodology and findings are beneficial for developing targeted policies and interventions to facilitate daily travel and public transit operations during public health crises.",
    cite: "@article{lin2024assessing,\n\
        title={Assessing effects of pandemic-related policies on individual public transit travel patterns: A Bayesian online changepoint detection based framework},\n\
        author={Lin, Yuqian and Xu, Yang and Zhao, Zhan and Tu, Wei and Park, Sangwon and Li, Qingquan},\n\
        journal={Transportation Research Part A: Policy and Practice},\n\
        volume={181},\n\
        pages={104003},\n\
        year={2024},\n\
        publisher={Elsevier}\n\
      }"
    }, 
    {id: 59,
    title: "Towards semantic enrichment for spatial interactions.",
    authors: "Liu, Y., Wang, S., Wang, X., Zheng, Y., Chen, X., Xu, Y. and Kang, C.",
    journal: "Annals of GIS.",
    year: 2024,
    doi: "https://www.tandfonline.com/doi/full/10.1080/19475683.2024.2324392",
    pdf:"src/assets/pdfs/2024_Annals_of_GIS_Spatial_Interactions.pdf",
    abstract: "Various big geo-data provide a social sensing approach to measure spatial interactions. Existing studies often aggregate individual-level movement trajectories or social ties to obtain the interaction intensity between places, neglecting the detailed meanings (i.e. the semantics) behind spatial interactions. However, such meanings help to understand the relationship between two places, and consequently, the characteristics of both places. We argue that semantics can be extracted from spatial interactions through features of space, time, symmetry, and individual-based statistics. Whereafter the calculation and applications of the features are given. Furthermore, we discuss the construction of spatial interaction networks with semantics, as well as approaches to representing places according to spatial interactions. Finally, we illustrate the potential value of spatial interaction semantics in facilitating decision-making through an example in the context of tourism planning.",
    cite: "@article{liu2024towards,\n\
        title={Towards semantic enrichment for spatial interactions},\n\
        author={Liu, Yu and Wang, Shengyin and Wang, Xuechen and Zheng, Yunhao and Chen, Xiaojian and Xu, Yang and Kang, Chaogui},\n\
        journal={Annals of GIS},\n\
        pages={1--16},\n\
        year={2024},\n\
        publisher={Taylor \\& Francis}\n\
      }"
    }, 
    {id: 60,
    title: "Carsharing in China: Impact of system and urban factors on usage and efficiency.",
    authors: "Zu, J., Kong, H., Xu, Y., and Zhang, X.",
    journal: "Journal of Transport Geography, 117, p.103897.",
    year: 2024,
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0966692324001066?via%3Dihub",
    pdf:"src/assets/pdfs/2024_JTG_Car_Sharing.pdf",
    abstract: "The carsharing service has experienced significant growth over the past few years in China, yet few studies have scrutinized the multi-city variations of this service. Using carsharing data from 61 cities in China, we analyzed the usage and efficiency of each city and investigated the impact of system and urban factors on the service performance. The study reveals vast differences in carsharing supply and demand across Chinese cities. Our results show the parking station density and the parking lot to vehicle ratio of the carsharing system are positively related to the usage. Urban factors such as public transportation availability, educational attainment levels, and vehicle restriction policies, are found to have significantly positive associations with the carsharing usage. However, no urban factors demonstrate significant associations with the efficiency measured by vehicle utilization rate. Moreover, the presence of other competing carsharing services within a city exhibits a positive impact on the performance of carsharing systems. This study also examined nonlinear effects of the factors. It provides valuable insights into the management of carsharing services in China, which can inform policy-making and operational strategies for sustainable development of carsharing.",
    cite: "@article{zu2024carsharing,\n\
           title={Carsharing in China: Impact of system and urban factors on usage and efficiency},\n\
           author={Zu, Jinyan and Kong, Hui and Xu, Yang and Zhang, Xiaohu},\n\
           journal={Journal of Transport Geography},\n\
           volume={117},\n\
           pages={103897},\n\
           year={2024},\n\
           publisher={Elsevier}\n\
      }"
    }, 
    {id: 61,
      title: "Unraveling changes of spending behavior in pandemic cities: A nationwide study of South Korea.",
      authors: "Sun, M., Xu, Y., Zhong, C., Ren, M., and Park, S.",
      journal: "Computers, Environment and Urban Systems, 114, p.102181.",
      year: 2024,
      doi: "https://doi.org/10.1016/j.compenvurbsys.2024.102181",
      pdf:"src/assets/pdfs/2024_CEUS_Consumer_Spending.pdf",
      abstract: "The COVID-19 pandemic, unprecedented in scale and impact, has significantly influenced consumer spending. This study leverages a longitudinal transaction dataset from South Korea to analyze how the pandemic, social distancing policies, and pandemic-related search interest have shaped spending within and across cities. We examine transaction volume and expenditure amount as city-level indicators of activity intensity and consumption demand across four stages of the early pandemic. The study finds that: (1) Social distancing caused reductions in both residents' and travelers' spending. The increase in search interest coincided with a rise in residents' spending but a decline in travelers' spending; (2) Resident transactions experienced a moderate and persistent decline across all stages, while expenditure rebounded after the 1st national outbreak. Traveler transactions and expenditure showed similar trends, with declines during outbreaks and recoveries during stable periods; (3) Disparities across cities were associated with proximity to outbreak centers and socioeconomic attributes. Cities with larger populations or those closer to epicenters experienced greater reductions in spending, while less densely populated cities saw increased traveler spending during the 2nd stable period; (4) Travelers' spending from distant cities significantly decreased during the 1st outbreak but gradually recovered as the pandemic continued, indicating evolving behavior and adaptation; (5) Changes across spending categories exhibited significant heterogeneity. Residents showed increased demand for essential goods and online shopping, while recreation-related industries struggled throughout. These findings highlight the characteristics and disparities among consumers, cities, and industries, providing information for policymakers to formulate tailored support programs for industries experiencing increased demand or significant impacts. This study emphasizes the need to develop robust strategies for crisis management and economic resilience to mitigate the impacts of future health crises.",
      cite: "@article{SUN2024102181, \n\
              title = {Unraveling changes of spending behavior in pandemic cities: A nationwide study of South Korea},\n\
              author = {Mengqi Sun and Yang Xu and Chen Zhong and Mengyao Ren and Sangwon Park},\n\
              journal = {Computers, Environment and Urban Systems},\n\
              volume = {114},\n\
              pages = {102181},\n\
              year = {2024},\n\
              publisher={Elsevier}\n\
              }"
      }, 
      {id: 62,
        title: "Consumer spending during COVID-19 in a tourism city.",
        authors: "Ren, M., Xu, Y., Park, S., Huang, X., Sun, M., Xia, J., and Koh, S.",
        journal: "Annals of Tourism Research, 109, p.103830.",
        year: 2024,
        doi: "https://doi.org/10.1016/j.annals.2024.103830",
        pdf:"src/assets/pdfs/2024_ATR_Covid_Consumer_Spending_Jeju.pdf",
        abstract: "Leveraging large-scale transaction data, this study quantifies the impact of COVID-19 and policy responses on the spending behavior of both residents and domestic inbound travelers in Jeju, Korea. Findings reveal that both local and national COVID-19 situations significantly affected the spending behavior of both groups. Residents were more sensitive to local cases, while travelers were equally affected by local and national cases. Social distancing minimally impacted resident spending but caused over 20 % reductions in traveler spending. Stimulus payments boosted spending by over 10 % for residents without diminishing the effects of social distancing. Despite the overall benefit of these combined policies, certain economic sectors benefited notably while others suffered, thus leaving them with varying fates during and after the pandemic.",
        cite: "@article{REN2024103830,\n\
                title = {Consumer spending during COVID-19 in a tourism city},\n\
                author = {Mengyao Ren and Yang Xu and Sangwon Park and Xiao Huang and Mengqi Sun and Jizhe Xia and Sun-Young Koh},\n\
                journal = {Annals of Tourism Research},\n\
                volume = {109},\n\
                pages = {103830},\n\
                year = {2024},\n\
                publisher={Elsevier}\n\
                }"
        }, 
      {id: 63,
        title: "Spatial concentration of intra-urban tourist activities and inter-group differences between Asian, European and North American travelers in Korean cities.",
        authors: "Cheng, J., Xu, Y., Jian, I.Y., Ren, M., and Park, S.",
        journal: "Tourism Management, 107, p.105064.",
        year: 2025,
        doi: "https://doi.org/10.1016/j.tourman.2024.105064",
        pdf:"src/assets/pdfs/2024_TM_Tourism_Concentration.pdf",
        abstract: "With increasing concerns about overtourism and its associated impacts, there remains an imperative need to understand the spatial concentration of tourist activities within destinations. This study demonstrates that mobile phone data can be leveraged to accurately quantify the spatial concentration effect and potential heterogeneity among travelers with different social backgrounds. We introduce an analytical framework and demonstrate its efficacy through a case study of international travelers in three Korean cities (Seoul, Busan and Jeju). Results show that Asian travelers exhibit the highest spatial concentration, followed by European and North Americans, a finding that is consistent across all three cities and different times of the day. The Theil's entropy index effectively portrays spatial similarity of activities among the three groups, revealing that the spatial preferences of European travelers are intermediate between those of Asians and North Americans. The findings underscore the importance of considering travelers' social backgrounds in tourist flow management.",
        cite: "@article{CHENG2025105064,\n\
                        title = {Spatial concentration of intra-urban tourist activities and inter-group differences between Asian, European and North American travelers in Korean cities},\n\
                        author = {Jingyi Cheng and Yang Xu and Izzy Yi Jian and Mengyao Ren and Sangwon Park},\n\
                        journal = {Tourism Management},\n\
                        volume = {107},\n\
                        pages = {105064},\n\
                        year = {2025},\n\
                        publisher={Elsevier}\n\
                        }"
        }, 
      {id: 64,
        title: "State-of-the-art review of smart energy management systems for supporting zero-emission electric vehicles with X2V and V2X interactions.",
        authors: "Kumar, G.M.S., Guo, X., Zhou, S., Luo, H., Wu, Q., Liu, Y., Dou, Z., Pan, K., Xu, Y., Yang, H., and Cao, S.",
        journal: "Renewable and Sustainable Energy Reviews, 208, p.115050.",
        year: 2025,
        doi: "https://www.sciencedirect.com/science/article/pii/S1364032124007767",
        pdf:"src/assets/pdfs/2024_RSER_State.pdf",
        abstract: "The accelerated penetration of electric vehicles (EVs) into the transportation market has resulted in increased stresses on the existing electric infrastructure and required charging facilities, boosting intensive research efforts in recent years for addressing energy management challenges. However, a systematic review is missing for summarising the following three academic progresses: (1) The sorting of energy management systems for supporting the zero-emission charging of EVs; (2) The classification of solutions to address the challenges of EV charging with increased automation levels, which are increasingly interacted with diversified information, typically represented by the “X2V” and “V2X” technologies; (3) The summary of diversified methodologies for seeking the multi-objective optimal decisions of charging processes and patterns, while coordinating the energy resources and impact between the generation, demand, and grid sides. Accordingly, this paper has conducted a state-of-the-art review of energy management systems for low-emission and zero-emission EVs to cover the above three unsorted review areas. Both the non-autonomous and autonomous EVs are covered in this review, with an aim to identify and classify the different features of energy supporting solutions, the role of X2V and V2X functions, and the required business models. Via this review, recent research trends have been noticed for the smart inclusion of EVs as part of future energy infrastructures, typically in the form of controllable demand and power reserves, mobile energy storage, and backup energy flexibility resources. Nevertheless, practical business models for better incentivising the smart charging of autonomous zero-emission EVs are still largely missing and limited.",
        cite: "@article{KUMAR2025115050,\n\
                title = {State-of-the-art review of smart energy management systems for supporting zero-emission electric vehicles with X2V and V2X interactions},\n\
                author = {Gokula Manikandan Senthil Kumar and Xinman Guo and Shijie Zhou and Haojie Luo and Qi Wu and Yulin Liu and Zhenyu Dou and Kai Pan and Yang Xu and Hongxing Yang and Sunliang Cao},\n\
                journal = {Renewable and Sustainable Energy Reviews},\n\
                volume = {208},\n\
                pages = {115050},\n\
                year = {2025},\n\
                publisher={Elsevier}\n\
                }"
        }, 
      {id: 65,
        title: "Profiling mobility patterns and driving behaviors of individual drivers via trajectory trait.",
        authors: "Liu, Y., Gui, Z., Xu, Y., Gao, S., Zhao, A., Meng, F., Peng, D., Li, F., Bo, L., Wu, H., and Gong, J.",
        journal: "The Innovation Geoscience, 3, p.100114.",
        year: 2025,
        doi: "https://www.the-innovation.org/article/doi/10.59717/j.xinn-geo.2024.100114",
        pdf:"src/assets/pdfs/2024_IG_Tra.pdf",
        abstract: "Driver profiling can provide a human-centered approach to portraying individual travel behavior and revealing their motivation, objectives, and needs, thereby contributing to driving safety analysis, location-based service, and intelligent transportation. However, existing trajectory-based methods are limited to measuring low-level features, such as average speed and radius of gyration. Although these features can characterize specific observable behaviors, such as driving operation and movement range, they fail to depict stable traits underlying individual travel behavior. In this study, inspired by the Big Five Personality Traits, we model the driver profile through four fundamental trajectory traits: extroversion, openness, neuroticism, and conscientiousness, and quantify these traits by developing a Trajectory Trait Scale (TTS). Experiments on more than one million trajectories from 2,051 anonymized private vehicle volunteers over eight months demonstrate that our method can provide a valid representation of individual drivers’ mobility patterns and driving behaviors. Specifically, we validate the consistency between trajectory traits and vehicle customer service records of drivers, including life rescue, navigation service, violation query, and fatigue companion. Besides, we find that trajectory integrity, seasonal changes, and traffic conditions exert small but non-negligible impacts on the stability of trajectory traits. These findings can enhance the understanding of human behavior in various spatiotemporal contexts, and illuminate the relations between trajectory traits and personality traits.",
        cite: "@article{LIU2024100114,\n\
                title = {Profiling mobility patterns and driving behaviors of individual drivers via trajectory trait},\n\
                author = {Liu, Yuhang and Gui, Zhipeng and Xu, Yang and Gao, Song and Zhao, Anqi and Meng, Fanhao and Peng, Dehua and Li, Fa and Bo, Lujia and Wu, Huayi and others},\n\
                journal = {The Innovation Geoscience},\n\
                volume = {3},\n\
                pages = {100114},\n\
                year = {2025},\n\
                publisher={The Innovation Geoscience}\n\
                }"
        }, 
      {id: 66,
        title: "How spatial fixity of individual daily activities evolves in the long-term: A life course and multi-scale behavior explanation.",
        authors: "Lu, J., Zhou, S., and Xu, Y.",
        journal: "Applied Geography, 178, p.103609.",
        year: 2025,
        doi: "https://doi.org/10.1016/j.apgeog.2025.103609",
        pdf:"src/assets/pdfs/2025_JPAG_Spatial_Fixity.pdf",
        abstract: "Spatial fixity, measuring the extent to which individual activities are confined to specific locations, is central to geographical studies on daily activities. Although recent studies have identified factors contributing to the variability of daily activity spatial fixity, there is a dearth of longitudinal observations to understand its evolution over extended timeframes. Addressing this research gap, the study introduces a framework that integrates multi-scale individual behaviors to investigate the long-term evolution of peoples daily activity spatial fixity, offering insights from a life course perspective. Using mobile phone data of 290,679 individuals across different age groups, the study assessed changes in their activity patterns from October 2019 to October 2020 and from October 2019 to May 2023. Three major findings were derived from Difference-in-Difference modeling and behavior grouping: (1) Individual daily activity spatial fixity exhibit a U-shaped distribution with age, revealing the 30–34 age group with the lowest fixity. Consistent levels of spatial fixity are observed as time progresses and individuals transition into specific age stages. (2) The multi-scale behavior framework elucidates over 40 % of the variation in daily activity spatial fixity over one and four-year intervals, and the result highlights the significance of integrating higher-scale behavioral dynamics over extended period. (3) Distinct behavioral change trends before and after the age of 35 result in the U-shaped curve of spatial fixity evolution. The study advances our comprehension of the long-term dynamics of human mobility. The findings provide valuable insights for enhancing individual behavior modeling, addressing delays in demographic data collection, and informing targeted social policies.",
        cite: "@article{lu2025spatial,\n\
                  title={How spatial fixity of individual daily activities evolves in the long-term: A life course and multi-scale behavior explanation},\n\
                  author={Lu, Junwen and Zhou, Suhong and Xu, Yang},\n\
                  journal={Applied Geography},\n\
                  volume={178},\n\
                  pages={103609},\n\
                  year={2025},\n\
                  publisher={Elsevier}\n\
}"
        }, 
      {id: 67,
        title: "Coupling mobile positioning data and discrete choice model to decode travelers’ spatial choices within urban destinations.",
        authors: "Mai, K., Xu, Y., Chen, X., Li, H., and Park, S.",
        journal: "Tourism Management, 111, p.105254.",
        year: 2025,
        doi: "https://doi.org/10.1016/j.tourman.2025.105254",
        pdf:"src/assets/pdfs/2025_TM_Coupling.pdf",
        abstract: "The growing availability of mobile positioning data offers new opportunities to understand onsite travel decisions, particularly how travelers organize activities spatially and the factors influencing these spatial choices. Coupling mobile positioning data of international travelers in three South Korean cities and extensive points-of-interest (POI) data, this study develops a discrete choice modeling framework to uncover the key factors that shape travelers’ spatial choices. By introducing area-of-interest (AOI), a novel spatial unit that captures the cumulative effects of tourism resources and urban facilities, the study finds that travel distance to and volume of POIs in an AOI, as well as number of prior visits to the AOI during the same journey, are decisive factors with universal influence across the cities. We also identify factors with city-specific effects or varying influence with respect to travelers’ nationalities and lengths of stay, providing insights for customized marketing and management strategies for the destinations.",
        cite: "@article{mai2025coupling,\n\
                  title={Coupling mobile positioning data and discrete choice model to decode travelers’ spatial choices within urban destinations},\n\
                  author={Mai, Ke and Xu, Yang and Chen, Xinyue and Li, Hengyun and Park, Sangwon},\n\
                  journal={Tourism Management},\n\
                  volume={111},\n\
                  pages={105254},\n\
                  year={2025},\n\
                  publisher={Elsevier}\n\
}"
        }, 
      {id: 68,
        title: "Exploring hot spots at tourism destination by flow-based density clustering method.",
        authors: "Yuan, Y., Park, S., Xu, Y., and Koh, S.",
        journal: "Information Technology & Tourism, 27(1).",
        year: 2025,
        doi: "https://link.springer.com/article/10.1007/s40558-025-00325-3",
        pdf:"src/assets/pdfs/2025_ITT_Tourist_Flow_Clustering.pdf",
        abstract: "Advancements in mobile technology allows tourism researchers to access fine-grained location data reflecting the travelers’ flow at destinations. While travel flow data contains inclusive information about travelers’ mobility—including origins (i.e., where they depart) and destinations (i.e., where they visited)—existing studies grounded in central place theory focus predominantly on destination to identify tourism ‘hot spots’. This approach overlooks the dynamic spatial interactions, which provides limited understanding about travel mobility. Thus, this study aims (1) to propose an origin-to-destination flow-based density clustering (OD-FDC) algorithm taking into account the directional travel movement derived from central flow theory, and (2) to demonstrate the usefulness of the method by analyzing over 150,000 car navigation records from Jeju, South Korea. This study clearly delineates how the flow-based method, OD-FDC algorithm, models directional travel movement and identifies tourism hotspots by fully utilizing flow directions, intensities and spatial distributions. Results reveal that the OD-FDC algorithm outperforms point-based analysis method—traditional hotspot analysis (Getis-Ord Gi*) by uncovering dynamic spatial interactions. As a result, this research provides theoretical contributions to the literature on travel mobility and methodological implications in spatial analytic of flow data. The findings provide destination marketers with actionable insights in developing regional planning and marketing.",
        cite: "@article{yuan2025exploring,\n\
                  title={Exploring hot spots at tourism destination by flow-based density clustering method.},\n\
                  author={Yuan, Yingqi and Park, Sangwon and Xu, Yang and Koh, Sun-Young},\n\
                  journal={Information Technology & Tourism},\n\
                  volume={27},\n\
                  year={2025},\n\
                  publisher={Springer}\n\
}"
        }, 
      {id: 69,
        title: "Striking a balance between diversity and regularity: a preference-guided transformer for individual mobility prediction.",
        authors: "Li, G., Xu, Y., Gui, Z., Guo, X., and Tang, L.",
        journal: "International Journal of Geographical Information Science.",
        year: 2025,
        doi: "https://doi.org/10.1080/13658816.2025.2534159",
        pdf:"src/assets/pdfs/2025_Striking.pdf",
        abstract: "Human mobility modeling and prediction are central research topics in GIScience. Although deep learning has led to significant advances in these fields, existing trajectory prediction models still face challenges in capturing the complexity of individual mobility behavior. Regression-based models often overestimate the diversity of human mobility, whereas classification models tend to underestimate it. This study attributes these biases to the models’ limitations in recognizing the spatial relationships among activity locations and mobility heterogeneity across individuals. To address these challenges, we propose the Spatial Preference Map-based Transformer (SPM-Former), explicitly integrating spatial proximity and mobility heterogeneity to enhance trajectory sequence prediction. To capture individual mobility characteristics, SPM-Former utilizes the Spatial Preference Map (SPM) to represent individuals’ spatial visitation preferences and adjacency relationships between locations. Then, we introduce two encoding modules to decode the information hidden within the SPM: one for encoding trajectory-level spatial-temporal information and another for embedding individual-level overall mobility features. Furthermore, we propose a novel optimization method, SPM-Loss, to assess prediction accuracy from the global spatial distribution perspective. Experimental results on a large-scale dataset from Japan demonstrate that SPM-Former outperforms state-of-the-art classification-based models, achieving approximately 3% and 20% improvements in trajectory sequence similarity and overall spatial feature similarity, respectively.",
        cite: "@article{li2025striking,\n\
                  title={Striking a balance between diversity and regularity: a preference-guided transformer for individual mobility prediction.},\n\
                  author={Li, Guangyue and Xu, Yang and Gui, Zhipeng and Guo, Xiaogang and Tang, Luliang},\n\
                  journal={International Journal of Geographical Information Science},\n\
                  volume={0},\n\
                  pages={1--32},\n\
                  year={2025},\n\
                  publisher = {Taylor & Francis},\n\
}"
        }, 
      {id: 70,
        title: "Unlock the energy flexibility resources of zero-emission vehicles to simultaneously alleviate the negative impact on grid and traffic between remote buildings with predictive controls.",
        authors: "Dou, Z., Pan, K., Xu, Y., and Cao, Sunliang.",
        journal: "Applied Energy.",
        year: 2025,
        doi: "https://doi.org/10.1016/j.apenergy.2025.126566",
        pdf:"src/assets/pdfs/2025_APEN_Zero_Emission.pdf",
        abstract: "To mitigate the climate change caused by carbon emission issues, zero-emission vehicles (ZEVs) and zero-energy buildings (ZEBs) have attracted increasing attention due to the significant proportion of energy-related carbon emissions from the transportation and building sectors. The energy-matching problem of ZEBs between demand and generation is widely noticed by academia, and the energy-sharing method using electric vehicles (EVs) has proved to be an effective approach to improve energy-matching performance. However, the stability issue of the grid-interactive performance caused by the unstable renewable energy generation and the negative impact on the road traffic of ZEVs for energy sharing receive limited attention. This paper proposes instantaneous and predictive control methods for a zero-emission system consisting of two zero-energy buildings using ZEV energy sharing to enhance the building-grid interaction stability and reduce the negative impact of ZEVs on road congestion. A genetic algorithm model is implemented in predictive control. The impacts of different ocean renewable energy types on energy matching, grid stability, and economic benefits are investigated. The results show that the instantaneous control can provide up to 71.0 % better grid-interaction stability performance than basic control. An average of 9.2 % enhancement in the stability performance can be further achieved after implementing genetic predictive control. When considering road impact in predictive control, the annual practical road impact changes from around −0.16 to around 0.13 to 0.15 under different scenarios, while the grid-interaction stability performance remains almost the same with the genetic predictive control that just considers grid stability.",
        cite: "@article{dou2025unlock,\n\
                  title={Unlock the energy flexibility resources of zero-emission vehicles to simultaneously alleviate the negative impact on grid and traffic between remote buildings with predictive controls.},\n\
                  author={Zhenyu Dou and Kai Pan and Yang Xu and Sunliang Cao},\n\
                  journal={Applied Energy},\n\
                  volume={400},\n\
                  pages={126566},\n\
                  year={2025},\n\
                  publisher = {Elsevier},\n\
}"
        }, 
      {id: 71,
        title: "Improving next location prediction with inferred activity semantics in mobile phone data.",
        authors: "Liang, S., Li, Q., Zhuo, L., Zou, D., Xu, Y., and Zhou, S.",
        journal: "International Journal of Digital Earth.",
        year: 2025,
        doi: "https://doi.org/10.1080/17538947.2025.2552880",
        pdf:"src/assets/pdfs/2025_JIDE_Loc_Prediction.pdf",
        abstract: "Accurately predicting the next location of mobile phone users is essential for various applications such as personalized location-based services and mobile marketing. While previous models have relied primarily on spatiotemporal sequences (e.g., location and time information), recent research has begun to explore the integration of activity semantics, which provides contextual insights into the motivations behind mobility. However, the use of activity semantics remains underexplored in large-scale mobile phone data, where such semantics are not explicitly recorded. This study proposes a semantics-enhanced prediction framework that infers and integrates user activities into a long short-term memory (LSTM) architecture with attention mechanisms and multimodal embeddings. Specifically, we infer six types of activities: home and work using rule-based heuristics and four non-mandatory activities (shopping, leisure, eat out, and personal affairs) using a supervised machine learning approach. These inferred activities are encoded as embeddings and fused with spatiotemporal features within the model. The experimental results on mobile phone data from Guangzhou, China, demonstrate that the proposed model improves the prediction accuracy by 4.3–101% compared with baseline models that lack activity-level contextualization. Notably, users with more stable daily activity patterns benefit most significantly from the integration of activity semantics. This work highlights the potential of integrating inferred human activity types to enhance mobility prediction in data-rich but semantically sparse environments.",
        cite: "@article{IJDE2025LPA, \n\
              author = {Shen Liang and Qiuping Li and Li Zhuo and Dan Zou and Yang Xu and Suhong Zhou}, \n\
              title = {Improving next location prediction with inferred activity semantics in mobile phone data}, \n\
              journal = {International Journal of Digital Earth},\n\
              volume = {18}, \n\
              number = {2}, \n\
              pages = {2552880}, \n\
              year = {2025}, \n\
              publisher = {Taylor \\& Francis}, \n\
              doi = {10.1080/17538947.2025.2552880},\n\
          }"
        }, 

]

export {publications, news, groupMembers, alumnis, researchAreas, awards};