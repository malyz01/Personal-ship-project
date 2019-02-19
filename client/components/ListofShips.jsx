import React from 'react'
import {Link} from 'react-router-dom'
import {getAllShips} from '../api/api'

class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        shipList: []  
      }
      this.setUpShips = this.setUpShips.bind(this)
    }
    
    componentDidMount(){
      console.log('cdm')
      this.setUpShips()
    }
  
    setUpShips() {
      console.log('getallships')
      getAllShips()  
      .then(res =>{
        
        this.setState({
          shipList: res  

        })
      })
    }

    buildShipName(ship) {
      return ship.cruise_line ? (ship.cruise_line + ': ' + ship.ship_name) : ship.ship_name
    }

    // giveShipName()  {
    //   return ship.cruise_line
    // }
  
  render()  {
    return  (
    
     <React.Fragment>
        
        {/* this.state.shipList.map((cruiseline, ship) =>  { */}
          {/* console.log(ship.ship_name) */}

        {this.state.shipList.map(ship => {
          
          //return  <li key={ship.cruise_line + '-' + ship.ship_name}><link to={`/ship/${ship.id}`}> {cruise_line.id}</link></li>
          
          //return  <li key={ship.cruise_line + '-' + ship.ship_name}><link to={`/ship/${ship.id}`} >{ship.cruise_line}: {ship.ship_name}</link></li> 
          //return  <li key={ship.ship_name + '-' + ship.ship_name}><link to={`/ship/${ship.id}`} >{ship.cruise_line}: {ship.ship_name}</link></li> 
        
          return  <li className="shipsList" key={ship.cruise_line + '-' + ship.ship_name}><Link to={`/ship/${ship.id}`} >{this.buildShipName(ship)}</Link></li>  

                // <div>
                //   <p>Cruise Line</p>
                  // <table>
                    //<tr>    */}
      
      
                      
                    // </tr>
                  //</table> 
      
                  // (Comment this for now 21st Jan 19) cruise_line
                  // (Comment this for now 21st Jan 19) ship_name
      
                    // <p><b>Reviews</b> <br/>
                    // <b>Royal caribbean</b> 
                    // <br/>Symphony of the Seas -   Gross Tonnage: 228,081    Passengers: 5518 Normal capacity      Crew:     Length:     Width:     Draft:    </p>
                //     {/* <img src={"/images/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F487c86a2-4a3d-11e8-ad0c-add3a1f6e1f4"}/> */}
                // </div>
              })}
              {/* (Comment this for now 21st Jan 19) 
              <br/><br/>Cruise Line: Fred Olsen<br/>
              Ship Name: Boudicca         Gross Tonnage: 28372     Passengers: 880       Crew: 329     Length: 205.47      Width: 25.20      Draft: 7.55
              <br/><br/>
              Ship Name: Blackwatch       Gross Tonnage: 28613     Passengers: 804       Crew: 330     Length: 205.47      Width: 25.22      Draft: 7.55
              Commented 21st Jan 19 down to here */}

       </React.Fragment>
      // </div>
    )
  } 

  
  }


export default ListofShips