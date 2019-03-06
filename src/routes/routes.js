import Navbar from '../components/Navbar.vue';
import App from '../App.vue';
import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import DarkHome from '../components/DarkHome.vue';


export default [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dark',
    name: 'DarkHome',
    component: DarkHome
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]
