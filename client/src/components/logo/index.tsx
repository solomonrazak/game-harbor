import gameLogo from '../assets/images/game-logo.png';

const Logo: React.FC = () => {
  return (
    <div>
        <img src={gameLogo} alt="Game Logo" />
        <h1>Game Harbour</h1>
    </div>
  )
}

export default Logo;
