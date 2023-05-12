import './styles/main.css';
import vk from './img/icons/vk.svg';
import instagram from './img/icons/instagram.svg';
import twitter from './img/icons/twitter.svg';
import linkedIn from './img/icons/linkedIn.svg';
import gitHub from './img/icons/gitHub.svg';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';



function App() {
  return (
    <div className='App'>

      <Navbar />

      {/*} <Home/>*/}

      {/*<Contacts/> */}

     {/*<Projects />*/}

      <Project/>

      <Footer />

    </div>
  );
}

export default App;
