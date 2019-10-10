import React, {Component} from 'react'
import './App.scss'
import SmallerDiv from './Components/SmallerDiv'
import Plus from './Pictures/plus.png'



class App extends Component{
    state={
      clicked:false,
      endeth:'no',
      turn:false,
      transDur:undefined
    }
    changeThings=()=>{
      if(this.state.clicked){
        setTimeout(this.close,200)
        /*It gives the component a .2 second notice that it's
        going to be removed*/
        this.setState({
          endeth:'yes',
          turn:false,
          transDur:'.5s'
        })  
      }
      //Change everything back, but turn the button slower
      //The transitionDuration becomes undefined so that it goes back to the one
      //defined in the scss file
      else{
        this.setState({
          clicked:true,
          endeth:'no',
          turn:true,
          transDur:undefined
        })
        
      }
    }
    close=()=>{
      this.setState({
        clicked:false
      })
    }
  render(){
    return(
  <div>
    <div onClick={this.changeThings}id='bigButton'>
      {this.state.clicked
        ?<SmallerDiv endeth={this.state.endeth}/>
        :undefined}
      <img style={{
        marginTop:'24px',
        transitionDuration:this.state.transDur,
        transform:this.state.turn
          ?'rotate(-45deg)'
          :undefined}} 
          src={Plus} id='letters'>     
          </img>
      </div>
  </div>
    )
  }
}

export default App
