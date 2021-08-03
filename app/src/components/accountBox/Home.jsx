import { motion } from "framer-motion";
import styled from 'styled-components';
import './Home.css';

const BackDrop = styled(motion.div)`
    width: 100%;
    height:550px;
    position: absolute; 
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top:-290px;
    left:-70px;
    background-image: url("Pink.jpg");




`

export function Home() {
    
    return (
   
      
        <div>
            HOME
        </div>
        
   
        
        
    )
}