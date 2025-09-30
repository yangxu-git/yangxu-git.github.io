import Cards from '@/components/Cards'
import VideoCards from '@/components/VideoCards'
import CoverCard from '../CoverCard';


type CardItem = {
    title: string;
    journal:string;
    imageFront:string;
    imageBack:string;
    link: string;
    isESI: boolean;
}

type VideoItem = {
  year:number;
  title: string;
  imageFront:string;
  youTubeLink:string;
  bilibiliLink:string;
  tencentLink:string;
  type:string;
  text:string;
}

type CoverItem = {
  coverImage:string;
  link:string;
}

type ProjectProps = {
    subSectionTitle: string;
    subSectionText: string;
    subSectionAnno:string | null;
    subSectionImg: string;
    cardList: CardItem[];
    videoList: VideoItem[];
    coverCard: CoverItem | null;    
    year:string;
}

type ProjectCardProps = {
  cardList: CardItem[];
  coverCard: CoverItem | null;   
}

type ProjectVideoProps = {
  videoList: VideoItem[];
  type:string;
}

const ProjectCard = ({cardList, coverCard}:ProjectCardProps) => {
  return (
    <div id="featured-articles" className="mb-12 sm:mb-0 sm:flex sm:flex-col sm:items-center md:block">
      <h4 className='text-xl font-bold text-gray-50 bg-polyu-primary w-[280px] md:w-[250px] text-center rounded-lg mb-4'>FEATURED ARTICLES</h4>
      <div className="flex flex-col sm:flex-row justify-center md:justify-start items-start gap-6 flex-wrap">    
          {cardList.map((card) => {
            return (
              <Cards 
                    key={card.title}
                    title={card.title}
                    journal={card.journal}
                    imageFront={card.imageFront}
                    imageBack={card.imageBack}
                    link={card.link}
                    isESI={card.isESI}
                    />
            ) 
          })}
          {/* Only one cards, we need add a cover */}
          {coverCard ? (<CoverCard coverImage={coverCard.coverImage} link={coverCard.link}/>) : null}
      </div>
    </div>
  )
}

const ProjectVideo = ({videoList, type}: ProjectVideoProps) => {
  return (
    <div id="project-video" className="mb-12 sm:mb-0 sm:flex sm:flex-col sm:items-center md:block">
      <h4 className='text-xl 
                     font-bold text-gray-50 bg-polyu-primary text-center w-[280px] md:max-w-[220px] rounded-lg mb-4'>
        {`${(type === "video") ? "PROJECT VIDEO " : (type === "media") ? "MEDIA COVERAGE" : "PROJECT WEBSITE"}`}
      </h4>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-start gap-6">         
      {videoList.map((video) => {
            return (
              <VideoCards 
                    key={video.title}
                    year={video.year}
                    title={video.title}
                    imageFront={video.imageFront}
                    youTubeLink={video.youTubeLink}
                    bilibiliLink={video.bilibiliLink}
                    tencentLink={video.tencentLink}
                    type={video.type}
                    text={video.text}
                    />
            ) 
          })}     
      </div>
  </div>
  )
}


const ResearchProject = ({subSectionTitle, 
                          subSectionText, 
                          subSectionAnno,
                          subSectionImg, 
                          cardList, 
                          videoList,
                          coverCard,
                          year}:ProjectProps) => {
  const widthClass = subSectionImg === 'src/assets/images/ResearchArea/behavior/spatial_fixity.webp' ? 'w-[65%]' : 'w-[80%]';
  const prClass = subSectionImg === 'src/assets/images/ResearchArea/behavior/spatial_fixity.webp' ? 'pr-0' : 'pr-0';
  return (
    <>

      {/* Large Screen */}
      <div className="hidden sm:hidden md:hidden lg:block lg:max-w-7xl lg:mx-auto"> 
        <div className="mb-32 flex flex-col items-start">
          {/* Sub section title */}
          <div id="project-head" className='flex flex-row justify-between items-center w-full mb-4'>
            <h3 className="border-b-4 border-polyu-primary pr-1 text-3xl font-bold text-left" >{subSectionTitle}</h3>
            <p className="text-2xl font-bold">{year}</p>
          </div>

          {/* Layout: Number of Cards is over 2 */}
          {(cardList.length + videoList.length > 2) ? (cardList.length > 5 && videoList.length >= 1 ) ? (       
          <div className="p-8 pl-0 border-b-4 border-polyu-primary border-dashed">
            {/* Text and Image */}
            <div className='flex flex-row justify-start items-start gap-6 text-lg pl-0 mb-16'>
              <p className="flex-1 text-xl">{subSectionText}

              {subSectionAnno ? <p className="mt-4 font-thin text-base">{subSectionAnno}</p> : null}
              </p>
              
              <div className="flex-1 rounded-lg overflow-hidden"><img src={new URL(`/${subSectionImg}`, import.meta.url).href} alt="PredictionImg01" className="w-full"/></div>
            </div>
            {/* Cards */}
            {/* CARD CONTAINER TOO BUG */}
            <div className="flex justify-around items-cneter gap-6 pl-4 pr-[38.5px]">
              <ProjectCard cardList={cardList} coverCard={coverCard}/>
              {/* If video cards exist */}
              <div className="ml-['
              -6px']">
              {videoList.length > 0 ? (
                <>
                  {videoList.filter((v) => (v.type === "video")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "video"))} type="video"/> : null}
                  {videoList.filter((v) => (v.type === "website")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "website"))} type="website"/> : null}
                  {videoList.filter((v) => (v.type === "media")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "media"))} type="media"/> : null}
                  
                </>
              ) : null}
              </div>
            </div>
          </div>  ) : (       
          <div className="p-8 pl-0 border-b-4 border-polyu-primary border-dashed">
            {/* Text and Image */}
            <div className='flex flex-row justify-center items-start gap-6 text-lg pl-0 mb-16 '>
              <p className="flex-1 text-xl">{subSectionText}

              {subSectionAnno ? <p className="mt-4 font-thin text-base">{subSectionAnno}</p> : null}
              </p>
              
              <div className="flex-1 rounded-lg overflow-hidden"><img src={new URL(`/${subSectionImg}`, import.meta.url).href} alt="PredictionImg01" className="w-full"/></div>
            </div>
            {/* Cards */}
            <div className="flex flex-row justify-start items-start gap-6 pl-4 flex-wrap">
              <ProjectCard cardList={cardList} coverCard={coverCard}/>
                {/* If video cards exist */}
                {videoList.length > 0 ? (
                  <>
                    {videoList.filter((v) => (v.type === "video")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "video"))} type="video"/> : null}
                    {videoList.filter((v) => (v.type === "website")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "website"))} type="website"/> : null}
                    {videoList.filter((v) => (v.type === "media")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "media"))} type="media"/> : null}
                    
                  </>
                )
                : null}
            </div>
          </div>  ) : (
            <div className="flex flex-col justify-center items-center p-8 pl-0 border-b-4 border-polyu-primary border-dashed">
              {/* Layout: Number of Cards is 1 or 2 */}
              {/* Text and Image */}
              <div className='flex flex-row justify-center items-start gap-6 text-lg pl-0 mb-16'>
                <p className="flex-1 text-xl leading-8">
                  {subSectionText}
                  {subSectionAnno ? <p className="mt-4 font-thin text-base">{subSectionAnno}</p> : null}
                </p>
                {/* Cards */}
                <div className="flex-1 flex flex-row justify-normal items-start gap-6 pl-4">
                    <ProjectCard cardList={cardList} coverCard={coverCard}/>
                    {/* Render Video */}
                    {videoList.length > 0 ? (
                      <>
                      {videoList.filter((v) => (v.type === "video")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "video"))} type="video"/> : null}
                      {videoList.filter((v) => (v.type === "website")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "website"))} type="website"/> : null}
                      {videoList.filter((v) => (v.type === "media")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "media"))} type="media"/> : null}
                      
                      </>
                  )
                  : null}
                </div>
              </div>
              {/* Bottom Image */}
              <div className={`${widthClass} ${prClass} flex justify-center items-center rounded-lg overflow-hidden`}><img src={new URL(`/${subSectionImg}`, import.meta.url).href} alt="PredictionImg01" className=""/></div>
            </div>
          )}

        </div>
      </div>

      {/* In Ipad */}
      <div className="hidden sm:hidden md:block md:max-w-5xl md:mx-auto lg:hidden"> 
        <div className="mb-32 flex flex-col items-start">
          {/* Sub section title */}
          <div id="project-head" className='flex flex-row justify-between items-center w-full mb-4'>
            <h3 className="border-b-4 border-polyu-primary pr-1 text-2xl font-bold text-left" >{subSectionTitle}</h3>
            <p className="text-2xl font-bold">{year}</p>
          </div>


             
          <div className="p-8 pl-0 border-b-4 border-polyu-primary border-dashed">
            {/* Text and Image */}
            <div className='flex flex-col justify-center items-center gap-6 text-lg pl-0 mb-16 '>
              <p className="text-xl">{subSectionText}

              {subSectionAnno ? <p className="mt-4 font-thin text-base">{subSectionAnno}</p> : null}
              </p>
              
              <div className="rounded-lg overflow-hidden w-[80%]"><img src={new URL(`/${subSectionImg}`, import.meta.url).href} alt="PredictionImg01" className="w-full"/></div>
            </div>
            {/* Cards */}
            <div className="flex flex-row justify-start items-start gap-6 pl-4 flex-wrap">
              <ProjectCard cardList={cardList} coverCard={coverCard}/>
                {/* If video cards exist */}
                {videoList.length > 0 ? (
                  <>
                    {videoList.filter((v) => (v.type === "video")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "video"))} type="video"/> : null}
                    {videoList.filter((v) => (v.type === "website")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "website"))} type="website"/> : null}
                    {videoList.filter((v) => (v.type === "media")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "media"))} type="media"/> : null}
                    
                  </>
                )
                : null}
            </div>
          </div> 
              

        </div>
      </div>

      {/* In Big Smartphone */}
      <div className="hidden sm:block md:hidden lg:hidden">
        <div className="mb-32 flex flex-col justify-center items-center max-w-3xl mx-auto">
          {/* Sub section title */}
          <div id="project-head" className='flex flex-col justify-between items-center w-full mb-4'>
            <p className="text-lg font-bold">{year}</p>
            <h3 className="border-b-4 border-polyu-primary text-lg font-bold text-left" >{subSectionTitle}</h3>
          </div>

             
          <div className="border-b-4 pb-12 border-polyu-primary border-dashed">
            {/* Text and Image */}
            <div className='flex flex-col justify-center items-center gap-6 pl-0 mb-16'>
              <p className="flex-1 text-sm">{subSectionText}

              {subSectionAnno ? <p className="mt-4 font-thin text-sm">{subSectionAnno}</p> : null}
              </p>
              
              <div className="flex-1 rounded-lg overflow-hidden"><img src={new URL(`/${subSectionImg}`, import.meta.url).href} alt="PredictionImg01" className="w-full"/></div>
            </div>
            {/* Cards */}
            <div className="flex flex-col justify-center items-center gap-6 px-4">
              <ProjectCard cardList={cardList} coverCard={coverCard}/>
                {/* If video cards exist */}
                {videoList.length > 0 ? (
                  <>
                    {videoList.filter((v) => (v.type === "video")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "video"))} type="video"/> : null}
                    {videoList.filter((v) => (v.type === "website")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "website"))} type="website"/> : null}
                    {videoList.filter((v) => (v.type === "media")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "media"))} type="media"/> : null}
                    
                  </>
                )
                : null}
            </div>
          </div> 

        </div>
      </div>

      {/* In Smartphone */}
      <div className="block sm:hidden">
        <div className="mb-32 flex flex-col justify-center items-center max-w-xs mx-auto">
          {/* Sub section title */}
          <div id="project-head" className='flex flex-col justify-between items-center w-full mb-4'>
            <p className="text-lg font-bold">{year}</p>
            <h3 className="border-b-4 border-polyu-primary text-lg font-bold text-left" >{subSectionTitle}</h3>
          </div>

             
          <div className="border-b-4 border-polyu-primary border-dashed">
            {/* Text and Image */}
            <div className='flex flex-col justify-center items-center gap-6 pl-0 mb-16'>
              <p className="flex-1 text-sm">{subSectionText}

              {subSectionAnno ? <p className="mt-4 font-thin text-sm">{subSectionAnno}</p> : null}
              </p>
              
              <div className="flex-1 rounded-lg overflow-hidden"><img src={new URL(`/${subSectionImg}`, import.meta.url).href} alt="PredictionImg01" className="w-full"/></div>
            </div>
            {/* Cards */}
            <div className="flex flex-col justify-center items-center gap-6 px-4">
              <ProjectCard cardList={cardList} coverCard={coverCard}/>
                {/* If video cards exist */}
                {videoList.length > 0 ? (
                  <>
                    {videoList.filter((v) => (v.type === "video")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "video"))} type="video"/> : null}
                    {videoList.filter((v) => (v.type === "website")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "website"))} type="website"/> : null}
                    {videoList.filter((v) => (v.type === "media")).length > 0 ? <ProjectVideo videoList={videoList.filter((v) => (v.type === "media"))} type="media"/> : null}
                    
                  </>
                )
                : null}
            </div>
          </div> 

        </div>
      </div>
    </>
  )
}

export default ResearchProject;
