import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skill from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
const App: React.FC = () => {
  return (
    // Navbarコンポーネントを追記
    <>
    <Navbar />
    <MyAvatar />
    <About />
    <Skill />
    <Works />
    <Contact/>
    </>
  );
}

export default App;
