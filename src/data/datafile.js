//icons
import webDevIocn from '../assets/images/web-dev-icon.svg';
import uxIcon from '../assets/images/ux-icon.svg';
import addDevIcon from '../assets/images/app-dev-icon.svg';
import icon from '../assets/images/icon.svg';
import heroIcon from '../assets/images/hero-image.png';
//brands
import visaImage from '../assets/images/visa-black.svg';
import tymeImage from '../assets/images/tyme-bank-black.svg';
import distellImage from '../assets/images/distell-black.svg';
import spotifyImage from '../assets/images/spotify-black.svg';
import microsoftImage from '../assets/images/microsoft-black.svg';
import engenImage from '../assets/images/engen-black.svg';
import nikeImage from '../assets/images/nike-black.svg';
import wesgroImage from '../assets/images/wesgrow-black.svg';
import multichoiceImage from '../assets/images/multichoice-black.svg';
import pnpImage from '../assets/images/pnp-black.svg';
import liquidImage from '../assets/images/liquid-black.svg';
import tfgImage from '../assets/images/tfg-black.svg';
import sanlamImage from '../assets/images/sanlam-black.svg';
import santamImage from '../assets/images/santam-black.svg';
import bbcImage from '../assets/images/bbc-black.svg';



//hero section 
export const heroOptions =   {
     heroImage: heroIcon,
     heroHeadline:'Live with Confidence',
     heroCopy:'José Mourinho brings confidence to pan-African Sanlam campaign.',
     heroCta: 'View Project'
}

//what we do section
export const tileOptions = [
     {
          tileImage: webDevIocn,
          tileTitle:'Web development',
          titleCopy:'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
     },
     {
          tileImage: uxIcon,
          tileTitle:'User experience & design',
          titleCopy:'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'
     },
     {
          tileImage: addDevIcon,
          tileTitle:'Mobile app development',
          titleCopy:'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
     },
     {
          tileImage: icon,
          tileTitle:'Blockchain solutions',
          titleCopy:'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
     }
     
]

//options for carousel slider
export const slideOptions = {
        direction: 'horizontal',
        slidesPerView: 3,
        breakpoints : {
             mobile:{slidesPerView: 1},
             tablet:{slidesPerView:2}
        }
      }
//Brands
  export const brandImages = {
     visa:visaImage,
     tymBank:tymeImage,
     distell:distellImage,
     spotify: spotifyImage,
     microsoft:microsoftImage,
     engen: engenImage,
     nike:nikeImage,
     wegro:wesgroImage,
     multichoice:multichoiceImage,
     picknPay:pnpImage,
     liquid:liquidImage,
     tfg:tfgImage,
     sanlam:sanlamImage,
     Santam: santamImage,
     bbc:bbcImage
  }
    