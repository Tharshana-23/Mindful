import React, {Component} from 'react';
//import cardUI from './cardUI';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
//import img4 from '../images/img4.jpg';
import Card1 from './cardUI';

class Cards extends Component{
    
    render(){
        return(

         <React.Fragment>
             <div class="card text-white bg-info mb-3 " >
  
  
    <h1 class="card-title text-center">POPULAR GROUPS</h1> </div>
    <h3 class="card-title text-center">UP COMING EVENTS</h3>
  


            <div className="container-flu d-flex justify-content-center">
                   
                <div className="row">
                    <div className="col-md-4">
                        <Card1 imgsrc={img1} title="Boxing event with club organized by Habitat friends" date="12 Dec 2020" time="02.21 pm" seat="12 people" price="2000"/>
                    </div>
                    <div className="col-md-4">
                    <Card1 imgsrc={img2} title="Cycling event with club organized by Habitat friends" date="30 Jan 2021" time="12.00 pm " seat="10 people" price=" 3000"/>
                    
                    </div>
                    <div className="col-md-4">
                    <Card1 imgsrc={img3} title="swimming event with club organized by Habitat friends" date="20 feb" time="10.00 am" seat="5 people" price=" 5000"/>
                    

                   
                    </div>
                    
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Cards;