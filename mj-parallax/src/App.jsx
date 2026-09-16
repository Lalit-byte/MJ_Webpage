import "./App.css"
import Landing from "./components/Landing_Page/Landing.jsx"
import Intro from "./components/Intro/Intro.jsx"
import Group from "./components/Group/Group.jsx"
import Solo from "./components/Solo/Solo.jsx"
import SpltReveal_1 from "./components/SpltReveal_1/SpltReveal_1.jsx"
import Horizontal_Scroll from "./components/Horizontal_Scroll/Horizontal_Scroll.jsx"
import SpltReveal_2 from "./components/SpltReveal_2/SpltReveal_2.jsx"
import Footer from "./components/Footer/Footer.jsx"



function App() {

  return (
    <>
      <Landing />
      <Intro />
      <Group/>
      <Solo/>
      <SpltReveal_1/>
      <Horizontal_Scroll/>
      <SpltReveal_2/>
      <Footer/>
    </>
  )
}

export default App
