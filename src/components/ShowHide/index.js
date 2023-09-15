// Write your code here

import {Component} from 'react'
import './index.css'

class Hide extends Component {
  // state = {fname: false, lname: false}
  state = {fname: false, lname: false}

  fnameb = () => {
    this.setState(prevstate => ({fname: !prevstate.fname}))
  }

  lnameb = () => {
    this.setState(prevstate => ({lname: !prevstate.lname}))
  }

  render() {
    const {fname, lname} = this.state

    return (
      <div className="main">
        <h1 className="head">Show/Hide</h1>
        <div className="sub">
          <div className="btncont">
            <button type="button" className="btn" onClick={this.fnameb}>
              Show/Hide Firstname
            </button>
            {fname && (
              <div className="namecont">
                <p>Joe</p>
              </div>
            )}
          </div>
          <div className="btncont">
            <button type="button" className="btn" onClick={this.lnameb}>
              Show/Hide Lastname
            </button>
            {lname && (
              <div className="namecont">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Hide
