import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TweenMax, Back } from "gsap"

import colors from '../../styles/colors'
import {breakpoints} from '../../styles/breakpoints'

//component:
import Burger from './burgerIcon.js'

import Wrapper from "../grid/wrapper"
import Row from "../grid/row"
import Column from "../grid/column"

//images:
import logoCocinas from "../../images/logo-cocinas.svg"
import logoGlobe from "../../images/earth-globe.svg"
// import burgerMenu from "../../images/hamburger.svg"

//utils:
import useWindowSize from "../../utils/useWindowSize"


const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    background-color: ${colors.primaryDark};
    color: ${colors.tertiary};

    top: 0;
    width: 100vw;
    height: 60px;
    box-sizing: border-box;
    z-index: 100;

    a {
        text-decoration: none;
        color: ${colors.tertiary};
        line-height: 21px;
        font-size: 14px;
        font-weight: bold;
    }

    @media screen and (min-width: ${breakpoints.large}px) {
        justify-content: space-evenly;
    }
`

const Bar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

// const Burgerr = styled.div`
//     cursor: pointer;
// `


const Navigator = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const RocaLogo = styled(Link)`
    display: flex;
    color: ${colors.tertiary};
    opacity: 1;
    /* transition: all .4s ease; */

    ::after {
        content: '';
        width: 150px;
        height: 25px;
        background-repeat: no-repeat;
        background-image: url(${logoCocinas});
        color: ${colors.tertiary};
    }
`

const SectionsLinksBar = styled.div`
    display: flex;
    margin: auto 2%;
    width: 100%;
    justify-content: space-between;

    @media screen and (min-width: ${breakpoints.large}px) {
        justify-content: space-evenly;
        width: 75%;
    }
    
    a {
        text-decoration: none;
        color: ${colors.tertiary};

        transition: all .4s ease;

        &:hover { 
            color: ${colors.tertiaryLight};
        }
    }

    .whiteLink {
        background: ${colors.tertiary};
        border-radius: 15px;
        color: ${colors.primaryDark};
        padding: 5px 15px;
        margin: -5px -15px;

        transition: all .4s ease;

        &:hover { 
            color: ${colors.tertiaryLight};
        }
    }
`


const RocaLink = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: ${colors.tertiary};
        line-height: 1;
        font-size: 14px;
        font-weight: bold;

        transition: all .4s ease;

        &:hover { 
            color: ${colors.tertiaryLight};
        }
    }

    img{
        width: 10px;
        margin-right: 5px;
    }
`

const CollapsedMenu = styled.div`
    display: flex;
    margin: auto 0;
    flex-direction: column;
    color: ${colors.tertiary};
    background-color: ${colors.primaryDark};    
    padding: 0;
    position: fixed;
    width: 100%;
    top: 60px;
    height: calc(100vh - 60px);
    box-sizing: border-box;
    z-index: 100;

    opacity: 0;
    visibility: hidden;
    
    a {
        text-decoration: none;
        color: ${colors.tertiary};
        cursor: pointer;

        display: flex;
        justify-content: flex-center;
        align-items: center;
        height: 60px;
        padding: 0;
        line-height: 24px;
        font-size: 16px;
        font-weight: bold;

        position: relative;

        opacity: 1;
        transition: all .4s ease;
    }
`

const CollapsedItemsContainer = styled.div`
    width: 100%;
    max-width: calc(100% - 60px);
    margin: 60px auto;
`

const CollapsedWhite = styled.span`
    background: ${colors.tertiary};
    border-radius: 20px;
    color: ${colors.primaryDark};
    padding: 8px 25px;
    width: fit-content;
    height: fit-content;
`

//data:
const sections = [
    {
      name: "¿Por qué Roca Cocinas?",
      anchor: "/#porque"
    },
    {
      name: "Estilos",
      anchor: "/#estilos"
    },
    {
      name: "Personalización",
      anchor: "/#personalizacion"
    },
    {
      name: "Catálogo",
      anchor: "/#catalogo"
    },
    {
      name: "Dónde comprar",
      anchor: "/#donde"
    },
    {
      name: "Pide presupuesto",
      anchor: "/#pidepresupuesto"
    }
];


//component:
const NavBar = () => {

    const size = useWindowSize();

    const [width, setWidth] = useState(null)
    const [viewNavItems, setViewNavItems] = useState(false)

    useEffect(() => {
        
        if(viewNavItems) {
           TweenMax.to("#menu", 0.3, {
                autoAlpha: 1
            });
            TweenMax.staggerTo(
                `#navItem`,
                0.5,
                { autoAlpha: 1, delay: 0.1, ease: Back.easeOut },
                0.1
            );
        } else {
            TweenMax.to("#menu, #navItem", 0.3, {
                autoAlpha: 0
            });
        }

        setWidth(size.width)

    }, [viewNavItems, size]);
    
    //collapsed menu:
    if(width < breakpoints.large)
    return (
        <Navigator>
            <NavBarContainer>
                <Wrapper>
                    <Row>

                        <Column xs={12}>

                            <Bar>
                                <RocaLogo to={"#hero"} onClick={() => setViewNavItems(false)} />
                                <Burger isOpen={viewNavItems} handleClick={setViewNavItems}/>
                            </Bar>

                        </Column>
                    </Row>
                </Wrapper>
            </NavBarContainer>
            <CollapsedMenu id="menu">
                <CollapsedItemsContainer>
                    {sections.map((section, i) => (
                        <Link key={i} to={section.anchor} onClick={() => setViewNavItems(!viewNavItems)} id="navItem">{section.name === "Pide presupuesto" ? <CollapsedWhite>{section.name}</CollapsedWhite> : section.name}</Link>
                    ))}
                </CollapsedItemsContainer> 
            </CollapsedMenu>
        </Navigator>
    )
    
    //items on navbar:
    return (
        <NavBarContainer>
            <Wrapper>
                <Row>
                    <Column xs={12}>
                        <RocaLogo to={"#hero"}/>
                        <SectionsLinksBar>
                            {sections.map((section, i) => (
                                <Link className={section.name === "Pide presupuesto" ? "whiteLink" : ""} key={i} to={section.anchor}>{section.name}</Link>
                            ))}
                        </SectionsLinksBar>

                        <RocaLink>
                            <img alt="globe" src={logoGlobe} />
                            <a href="https://www.roca.es" rel="noopener noreferrer" target="_blank">roca.es</a>
                        </RocaLink>
                    </Column>
                </Row>
                
            </Wrapper>
        </NavBarContainer>
    )
}

export default NavBar