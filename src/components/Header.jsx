import React,{useState} from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';
function Header() {
  const [burgerState, setBurgerState] = useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a href="Home">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car, index)=>(
          <a key={index} href="#">{car} </a>
        ))}

      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
      </RightMenu> 
      <CustomMenu onClick={()=>setBurgerState(true)}>
            <p >Menu</p>
        </CustomMenu>
        <BurgerNav show={burgerState}>
           <CloseWrapper >
             <CustomClose onClick={()=>setBurgerState(false)} />
           </CloseWrapper>
           <CloseMenuItems>
             {cars && cars.map((car, index)=>(
              <li key={index} href="#">{car} </li>
            ))}
           </CloseMenuItems>
           <li><a href="#">Exisiting Inventory</a></li>
           <li><a href="#">Used Inventory</a></li>
           <li><a href="#">Trade-In</a></li>
           <li><a href="#">Test Drive</a></li>
           <li><a href="#">Cybertruck</a></li>
           <li><a href="#">Semi</a></li>
           <li><a href="#">Charging</a></li>
           <li><a href="#">Powerwall</a></li>
           <li><a href="#">Commericial Energy</a></li>
           <li><a href="#">Utiliteis</a></li>
           <li><a href="#">Find Us</a></li>
           <li><a href="#">Suppor</a></li>
           <li><a href="#">Investor Relations</a></li>
           <li><a href="#">Roadster</a></li>
        </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  /* @media(min-width:900px){
    a:hover{
      background-color: #e6e7e9;
      padding: 5px 12px;
      border-radius: 30px;
    }
    
  } */

`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 540;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width:900px){
    display: none;
  }
`;
const RightMenu = styled.div`
display: flex;
align-items: center;
    a {
    font-weight: 540;
    margin-right: 10px;
    flex-wrap: nowrap;
  } 
  @media(max-width:900px){
    display: none;
  }
`;
const CustomMenu = styled.div`
  p{
    font-weight: 540;  
    cursor: pointer;
  }
  @media(max-width:900px){
    background-color: #e6e7e9;
    padding: 5px 12px;
    border-radius: 30px;
  }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  width: 300px;
  z-index:10;
  list-style: none;
  padding: 30px 20px 20px 25px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.2s;
  li{
    padding:9px 15px;
    transition: ease all .4s;
  }
  li:hover{
    background: #e6e7e9;
    border-radius: 20px;
  }
`

const CustomClose =styled(CloseIcon)`
  
`
const CloseWrapper = styled.div` 
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  padding-bottom: 25px;
`
const CloseMenuItems = styled.div` 
  @media(min-width:900px){
    display: none;
  }
`
