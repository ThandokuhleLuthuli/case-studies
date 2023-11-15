import React ,{useState,useEffect} from 'react';
import { getAllData } from '../../api/casestudydata'; //importing all the data from the API service
import Image from '../image/image'; // importing image component
import Preloader from '../preloader/preloader';
import { Swiper, SwiperSlide } from 'swiper/react'; // import Swiper & SwiperSlide from Swiper/react
import 'swiper/swiper-bundle.css'; // import styles bundle
import { slideOptions } from '../../data/datafile'; //import slide options for carousel slide


function Carousel() {

    //state variable to hold the data. initialised with an empty array
    const [data,setData] = useState([]);
    //preloader 
    const [isLoading,setIsLoading] = useState(true)


      //fetch all the data from API service
      const getAllSlides = async () => {
        try {
            //get all data[] from api service assign to variable 
          const responseData = await getAllData();
          //update state with API service payload;
          setData(responseData);
          //disable preloader when state has been updated with API service payload
          setIsLoading(false);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    //getting all the data on initial load
    useEffect(() => {
        //get all the slide(s) data when the document first loads.
        getAllSlides();
      }, []);

    
  //duplicated the slides for loop functionality in SwiperJS
  const duplicateSlides = data.concat(data);  
  

  //conditional rendering: show preloader until fetch is resolve
  if(isLoading) {
    return(<Preloader/>)
  }
 
  //Here we are looping through the duplicate slides using array.map() and displaying them
    return (
    <div className="carousel">
    <Swiper
      direction={slideOptions.direction}
      slidesPerView={slideOptions.slidesPerView} 
      loop={data.length >= slideOptions.slidesPerView}
      breakpoints={{
        200: {
          slidesPerView: slideOptions.breakpoints.mobile.slidesPerView,
        },
        531: {
          slidesPerView: slideOptions.breakpoints.tablet.slidesPerView,
        },
        992: {
          slidesPerView: slideOptions.slidesPerView,
        },
      }}
    >
      {duplicateSlides.map((slide,index) => (
        <SwiperSlide key={index} className='carousel-slide'>
      <div className='carousel-slide-inner-wrapper' >
          <div className='carousel-slide-link'>
              <Image src={duplicateSlides ? slide.imageUrl:"/"} alt={duplicateSlides  ? slide.title:"No image data"} mediaSet={duplicateSlides ? slide.imageUrl:"/"}/>
              <div className='carousel-slide-copy'>
                {duplicateSlides ? (<p className='carousel-slide-title'>{slide.title}</p>):(<p>No title data</p>)}
                {duplicateSlides ? (<p className='carousel-slide-description'>{slide.description}</p>):(<p className='carousel-slide-description'>No description data</p>)}
              </div>
          </div>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
    )
}

export default Carousel;