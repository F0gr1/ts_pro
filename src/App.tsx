import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
const App: React.FC = () => {
  return (
    // Navbarコンポーネントを追記
    <>
    <Navbar />
    <MyAvatar />
    </>
  );
}

export default App;
