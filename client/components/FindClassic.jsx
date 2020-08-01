import React from 'react'
import MakeClassic from './MakeClassic'
import { getClassic } from '../api/api'

class FindClassic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classicship: false
    }
    this.setUpClassic = this.setUpClassic.bind(this)
  }

  componentDidMount() {
    const { state } = this.props.location
    if (state) {
      this.setState({ classicship: state })
    } else {
      this.setUpClassic(state.ship_name)
        .then(res => {
          this.setState({ classicship: res })
        })
    }
  }

  setUpClassic(shipName) {
    getClassic(shipName)
      .then(res => {
        this.setState({
          classicship: res
        })
      })
  }

  render() {
    if (!this.state.classicship) return <div>Loading...</div>
    return <MakeClassic {...this.props.location.state} />
  }
}

export default FindClassic
