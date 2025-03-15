import React from 'react';
import './Home.css';
import SoftSkillTree from "./SoftSkillTree";
import HardSkillTree from "./HardSkillTree";
import CompPerfil from './CompPerfil';
import TextBanner from './TextBanner';
import BoardModal from './BoardModal';


const Home = () => {
   return (
     <div className="container">
       <div className="row">
   
   
         <SoftSkillTree />
         <CompPerfil />
         <HardSkillTree />

          
   </div>
   <div className="colunm">
   
   <BoardModal/> 
   
   {/* Coloque seus outros elementos aqui */}
   
   <TextBanner/>
       </div>
       
     </div>
   );
}

export default Home;