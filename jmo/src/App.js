import React, { useEffect } from 'react';
import { BrowserRouter as Router,useLocation, Link , Route, Routes } from 'react-router-dom';


import { Header } from './Components/Hedear';
import { MainPortafolios } from './Components/Portafolios';
import { MainAboutMe } from './Components/AboutMe';
import { Footer } from './Components/Footer';


import {
  ArchivosPythos,
  ArchivosMetodosAgiles,
  ArchivosIA,
} from './Components/SideBar'


import {
  PostPython4,
  PostPython3,
  PostPython1,
  PostPython2,
  PostScrum,
  PostMidjourney,
  PostRevolucionIA,
} from './Components/Posts'

import './App.css';

import   {
  MainBlog,
} from './Components/HeroBanner'
import { Sidebar } from './Components/SideBar';




/*
TO DO:
- LINKS TO ARCHIVOS 
- LINKS TO SEGUIR LEYENDO

- ADD ANIMATION TO THE LOGO
- ADD ESTUDIOS IN ABOUT ME
- ADD PROYECTS TO PORTFOLIOS
- IMPLEMENT BACKEND TO SERCHBAR 
- DO BUILD ON GITHUB 
- DO DEPLOY ON AZURE
- FIX BUG OF HEADER BOLD WHEN THE USER CLIC ON THE LOGO
*/

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {

  
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop /> 
        <Routes>

          {/* INDEX */}
          <Route path="/" element={<MainBlog />} />

          {/* BLOG  */}
          <Route path="/blog" element={<MainBlog />} />
+
          {/* PORTAFOLIOS */}
          <Route path="/portfolio" element={<MainPortafolios/>} />
          
          {/* ABOUT ME */}
          <Route path="/about" element={<MainAboutMe/>} />

          {/* POSTS ROUTES */}
          <Route path="/PostRevolucionIA" element={<PostRevolucionIA/>} />
          <Route path="/PostScrum" element={<PostScrum/>} />
          <Route path="/PostMidjourney" element={<PostMidjourney/>} />
          <Route path="/PostPython1" element={<PostPython1/>} />
          <Route path="/PostPython2" element={<PostPython2/>} />
          <Route path="/PostPython3" element={<PostPython3/>} />
          <Route path="/PostPython4" element={<PostPython4/>} />





          {/* SIDEBAR ROUTES */}
          <Route path="/ArchivosIA" element={<ArchivosIA />} />
          <Route path="/ArchivosMetodosAgiles" element={<ArchivosMetodosAgiles />} />
          <Route path="/ArchivosPythos" element={<ArchivosPythos />} />

          

        </Routes>
        <Footer />
      </div>
    </Router>



  );
}

export default App;
