import raphaLogo from './assets/eu.jpeg'
import { SocialIcon } from 'react-social-icons';
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
	  <h1>Raphael Lelis</h1>
	  <h3>Software Engineer</h3>
        <a href="https://github.com/RaphaLelis" target="_blank">
          <img src={raphaLogo} className="logo" alt="Rapha logo" />
        </a>
      </div>
      <p className="read-the-docs">
	  Sempre buscando trazer e aproveitar o melhor do meu colaborador, da comunidade e de mim, nos preparativos para o futuro avanço da alta tecnologia. #GoStepBeyond 🚀
      </p>
      <div>
			<SocialIcon url="https://www.linkedin.com/in/raphael-lelis-249ab3161/"/>
			<SocialIcon url="https://github.com/RaphaLelis" network="github"/>
			<SocialIcon url="mailto:raphalelis@outlook.com" />
			<SocialIcon url="https://open.spotify.com/user/faelesco?si=03ff16f595bb4414" />
      </div>
    </div>
  )
}

export default App
