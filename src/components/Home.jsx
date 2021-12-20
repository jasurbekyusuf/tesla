import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true






function Home() { 
    return (
       <Container>
     
           <Section 
               title="Model S"
               description="Order Online for Touchless Delivery"
               backgroundImg="model-s.jpg"
               leftBtnTxt="Custom order"
               rightBtnTxt="Existing inventory"
               scroll="/images/down-arrow.svg"
            />
            
            
            <Section 
               title="Model Y"
               description="Order Online for Touchless Delivery"
               backgroundImg="model-y.jpg"
               leftBtnTxt="Custom order"
               rightBtnTxt="Existing inventory"
            />
            
            <Section 
               title="Model 3"
               description="Order Online for Touchless Delivery"
               backgroundImg="model-3.jpg"
               leftBtnTxt="Custom order"
               rightBtnTxt="Existing inventory"
            />
         
            <Section 
               title="Model X"
               description="Order Online for Touchless Delivery"
               backgroundImg="model-x.jpg"
               leftBtnTxt="Custom order"
               rightBtnTxt="Existing inventory"
            />
            
         
            <Section 
               title="Solar Panels"
               description="Lowest Cost Solar Panels in America"
               backgroundImg="solar-panel.jpg"
               leftBtnTxt="ORDER NOW"
               rightBtnTxt="LEARN MORE"
            />
            
            <Section 
               title="Solar Roof"
               description="Produce Clean Energy From Your Roof"
               backgroundImg="solar-roof.jpg"
               leftBtnTxt="ORDER NOW"
               rightBtnTxt="LEARN MORE"
            />
         
            <Section 
               title="Accessories"
               description=""
               backgroundImg="accessories.jpg"
               leftBtnTxt="Shop now"
            />
            
          
       </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh; 
`
