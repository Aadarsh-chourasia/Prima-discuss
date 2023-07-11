import './Home.css'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()

  const addChannel = () => {
    history.push('/add/channel')
  }

  return (
    <div className="home">
      <div className="home__container">
        <img src="/primalogo.jpg" alt="PrimaThink Logo" />
        <h1>Welcome to PrimaDiscuss</h1>
        <p>
          PrimaDiscuss brings all your team communication into one place, makes it all
          instantly searchable and available wherever you go.
        </p>

        <p>
          Our aim is to make your working life simpler, more pleasant and more
          productive.
        </p>

        <Button onClick={addChannel}>Create Channel</Button>
      </div>
    </div>
  )
}

export default Home