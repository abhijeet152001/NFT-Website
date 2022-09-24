import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import React, {useLayoutEffect, useRef} from "react"
import styled, { keyframes } from "styled-components"
import Vector from '../Icons/Vector'

const VideoContainer = styled.div`
position: absolute;
top: 0.5rem;
left:50%;
width: 100%;
height: 100%;
overflow:hidden;
transform: translateX(-50%);

svg{
    width: 100%;
height: 100%;
}
    `

    const Bounce = keyframes`
    from{transform: translateX(-50%) scale(0.5);}
    to{transform: translateX(-50%) scale(1);}
    `


    const Ball = styled.div`
    position: absolute;
    top: 0;
    left:50%;
    transform: translateX(-50%);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.text};
    animation: ${Bounce} 0.5s linear infinite alternate;
    `

const DrawSvg = () =>{
    const ref = useRef(null)
    const ballref = useRef(null)
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() =>{
        let element =ref.current;
        console.log(element, 'here')
        let svg = document.getElementsByClassName("svg-path")[0];
        const length = svg.getTotalLength();
        // console.log(length)
        svg.style.strokeDasharray = length;
        svg.style.strokeDashoffset = length;
        console.log(svg.style.strokeDashoffset)
        let t1 = gsap.timeline({
            scrollTrigger: {
            trigger: element,
            start: 'top center',
            end: 'bottom bottom',
            onUpdate: (self) => {
                // console.log(self)
                // console.log(self.progress, 'self')
                const draw = length * self.progress;
                svg.style.strokeDashoffset = length - draw;
            },
            onToggle: (self) => {
                if(self.isActive){
                    console.log("Active")
                    ballref.current.style.display = 'none';
                }
                else{
                    
                    ballref.current.style.display = 'inline-block';
                    console.log("!Active")
                }
            }
        }
        })
        return () => {
            if (t1) {
                t1.kill();
            }
        }
        console.log(svg.style.strokeDasharray)
    },[])

return(
    <>
    <Ball ref = {ballref} />
    <VideoContainer ref = {ref}>
    <Vector />
    </VideoContainer>
    </>
)
}


export default DrawSvg;