import Image from 'next/image';
import CrimeSceneImg  from '../../../../public/assets/HomePage/crimeScene.png';
import soundIcon from '../../../../public/assets/HomePage/sound_icon.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
const Blogs = () => {
  return (
    <div className='Blogs_main'>
          <div className="row">
      <div className="col-md-7 align-self-center">
        <div className="blog_card ">
          <h2>Stay updated with latest blogs and articles</h2>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
            <div className='d-flex justify-content-start'>
            <div>
                <Image src={soundIcon} alt="soundIcon"  className='Image-fluid'/>
            </div>
               <div className='blogs_drops_content'>
                    <h5>Recent Drop in Crimes</h5>
                    <p>Unpacking the Decline in Crime: Trends and Implications</p>
                    <a href="#" className="read_more">Read More <TrendingFlatIcon/> </a>
               </div>
            </div>
        </div>
      </div>
       <div className="col-md-5">
        <Image src={CrimeSceneImg} alt="Crime Scene Image" className="crime-image img-fluid"/>
      </div>
    </div>
    </div>
  )
}

export default Blogs;