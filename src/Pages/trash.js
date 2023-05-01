import React,{useEffect,useContext,Button} from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner copy/Banner';


// import Posts from '../Components/Posts/Posts';
// import Footer from '../Components/Footer/Footer';
import { Firebase } from '../firebase/config';
import { AuthContext } from '../contextStore/AuthContext';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../Components/Banner copy 2/Banner';

function Trash(props) {
 const {setUser}=useContext(AuthContext)
  useEffect(()=>{
    
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      
    })
    
 
  },[setUser])
  
  return (
    <div className="homeParentDiv">
      <Header />
     
      <Banner />
      <Banner1 />
      
      {/* <Posts />
      <Footer /> */}
    </div>
  );
}

export default Trash;
 
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// });

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));