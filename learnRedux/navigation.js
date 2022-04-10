import MainMenu from './pages/mainMenu';
import PrimalityCheckPage from './pages/primalityCheckPage';
import RandomColor from './pages/randomColor';

const pages = [
  {
    name: 'Main Menu',
    component: MainMenu,
  },
  {
    name: 'Primality Check',
    component: PrimalityCheckPage,
  },
  {
    name: 'Random Color',
    component: RandomColor,
  }
];

export default pages;
