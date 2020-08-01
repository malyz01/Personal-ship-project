import React from 'react'

//I will change to BrowserRouter because I think that this only works with Hash Link
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
// Evolution pages (Part1)
import EvolutionPart1 from './EvolutionPart1'
import FindClassic from './FindClassic'

// Evolution pages (Part2)
import EvolutionPart2 from './EvolutionPart2'
import Michelangelo from './Michelangelo'
import Qe2 from './Qe2'
import Fairstar from './Fairstar'
import SongofNorway from './SongofNorway'
import RoyalVikingSky from './RoyalVikingSky'
import AllureoftheSeas from './AllureoftheSeas'

import CruiseLines from './CruiseLines'
import Review from './Review'
import ShipTerms from './ShipTerms'

class App extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Nav} />
          <Route exact path='/' component={Home} />
          <Route exact path='/evolutionpart1' component={EvolutionPart1} />
          <Route exact path='/evolutionpart1/:shipname' component={FindClassic} />
          <Route exact path='/evolutionpart2' component={EvolutionPart2} />
          <Route exact path='/evolutionpart2/michelangelo' component={Michelangelo} />
          <Route exact path='/evolutionpart2/qe2' component={Qe2} />
          <Route exact path='/evolutionpart2/fairstar' component={Fairstar} />
          <Route exact path='/evolutionpart2/songofnorway' component={SongofNorway} />
          <Route exact path='/evolutionpart2/royalvikingsky' component={RoyalVikingSky} />
          <Route exact path='/evolutionpart2/allureoftheseas' component={AllureoftheSeas} />
          <Route exact path='/cruiselines' component={CruiseLines} />
          <Route exact path='/cruiselines/:cruise_line' component={Review} />
          <Route exact path='/cruiselines/:cruise_line/shipterms' component={ShipTerms} />
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App