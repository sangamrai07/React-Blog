import React, { useEffect, useState } from 'react'
import './Home.scss'
import bg1 from '../../images/homeBg1.png'
import bg2 from '../../images/homeBg3.png'
import bg3 from '../../images/homeBg2.png'
import bg4 from '../../images/homeBg4.png'
import bg5 from '../../images/homeBg5.png'
import bg6 from '../../images/homeBg6.png'
import bg7 from '../../images/homeBg7.png'
import contentImg from  '../../images/contentImg.png'
import GridImages from './GridImages'


function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgrounds = [bg3, bg7, bg6, bg5, bg4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex(prevIndex =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='home'>
      <div className="container">
      <div className="left">
        <div className="textContainer">
          <br />
          <p> Discover the latest trends, tips, and stories.</p>
          <button className='explore'>Explore More &rarr;</button>
        </div>
         <div className="imgContainer">
               <div className="imgItems" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
             <p>Parisian Dreams: Exploring the City of Lights</p>
          </div>
          <div className="imgItems" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
 <p>The Everest Experience: A Photographer's Perspective</p>
</div>

        </div>
        
      </div>

          <div className="rightImage" style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 0.5s ease-in-out' }}>
          </div>
      </div>
         <div className="contents">
        <div className="img">
          <img src={contentImg} alt="" />
        </div>
          <h2>Dream. Explore. Inspire.</h2>
        <div className="text">
          <h1>Sustainable Solutions</h1>
          <p>Dive into a sea of ideas with Bislerium, where the currents of imagination flow freely and every article is a pearl of wisdom. Join our community of readers and writers at Bislerium, where every post is a window into a world of wonder and possibility.</p>
          <button>Join Now &rArr; </button>
        </div>
      </div>
          <div className="gridImages">
        <h2>Our Community</h2>
        <GridImages/>

      </div>
   
  
    </div>
  )
}

export default Home
