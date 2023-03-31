import { useState } from 'react';
import avatarPic from './assets/avatar.png';
import './App.css';

const LIGHT = 'LIGHT';
const DARK = 'DARK';

const LINKS = [
  { title: 'Website', url: 'https://www.bugsnyu.com' },
  { title: 'Instagram', url: 'https://www.instagram.com' },
  { title: 'Discord', url: 'https://www.discord.com' },
];

const Avatar = ({ imageSrc, name }) => (
  <>
    <img src={imageSrc} alt='' className='avatar' />
    <h1>{name}</h1>
  </>
);

const LinkButton = ({ title, url }) => (
  <a target='_blank' href={url} className='link'>
    {title}
  </a>
);

const ThemeTogglerButton = ({ currentTheme, toggleTheme }) => (
  <button className='theme-toggler' onClick={toggleTheme}>
    Toggle theme
  </button>
);

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(DARK);

  const mapLinks = LINKS.map(({ title, url }) => <LinkButton key={title} title={title} url={url} />);

  const containerClassName = currentTheme === LIGHT ? 'container light' : 'container';

  const toggleTheme = () => setCurrentTheme((prev) => (prev === LIGHT ? DARK : LIGHT));

  return (
    <div className={containerClassName}>
      <ThemeTogglerButton currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Avatar imageSrc={avatarPic} name='@bugs-nyu' />
      {mapLinks}
    </div>
  );
};

export default App;
