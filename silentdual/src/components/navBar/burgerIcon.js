import React from "react"
import styled from "styled-components"
import colors from '../../styles/colors'


const BurgerContainer = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  div {
    height: 2px;
    width: 20px;
    background: ${colors.tertiary};
    transition: all 0.2s ease;
  }
`

const TopLine = styled.div`
  transform: ${({isOpen}) => isOpen ? "rotate(45deg)" : "none"};
  transform-origin: top left;
  margin-bottom: 5px;
`

const MiddleLine = styled.div`
  opacity: ${({isOpen}) => isOpen ? 0: 1};
  transform: ${({isOpen}) => isOpen ? "translateX(-16px)" : "none"};
`

const BottomLine = styled.div`
  transform: ${({isOpen}) => isOpen ? "translateX(-1px) rotate(-45deg)" : "none"};
  transform-origin: top left;
  margin-top: 5px;
`
  

const Burger = ({isOpen, handleClick}) => (

    <BurgerContainer onClick={() => handleClick(!isOpen)}>
      <TopLine isOpen={isOpen} />
      <MiddleLine isOpen={isOpen} />
      <BottomLine isOpen={isOpen} />
    </BurgerContainer>

);

export default Burger;
