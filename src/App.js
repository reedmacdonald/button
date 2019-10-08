import React, {Component} from 'react'
import './App.css'
import SmallerDiv from './Components/SmallerDiv'



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
        this.setState({
          endeth:'yes',
          turn:false,
          transDur:'.5s'
        })
        console.log('Closing in five seconds')
      }
      else{
        this.setState({
          clicked:true,
          endeth:'no',
          turn:true,
          transDur:undefined
        })
        console.log('Clicked')
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
      {this.state.clicked?<SmallerDiv endeth={this.state.endeth}/>:undefined}

      <div style={{transitionDuration:this.state.transDur,transform:this.state.turn?'rotate(-45deg)':undefined}} id='letters'>+</div>
      </div>
  </div>
    )
  }
}

export default App
