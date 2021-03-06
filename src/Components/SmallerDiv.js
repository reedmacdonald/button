import React, {Component} from 'react'
import AdobeLogo from '../Pictures/adobeLogo.png'
import FolderLogo from '../Pictures/folderLogo.png'
import '../App.scss'




class SmallerDiv extends Component{
    state={
      clicked:false,
      height:'10px',
      width:'10px',
      folderTop:'40%',
      pdfTop:'40%',
      marginLeft:'-10px'
    }
    componentDidMount(){
//I had to mess with this for a little while to get the 'bounce' effect
        setTimeout(this.makeBig,0)
        setTimeout(this.giveHeight,200)
        setTimeout(this.moveUp,200)
        setTimeout(this.moveAgain,400)
    }
    makeBig=()=>{
        this.setState({
            width:'80px',
            folderTop:'28%',
            pdfTop:'15%',
            marginLeft:undefined
        })
    }

    moveUp=()=>{
        this.setState({
            folderTop:'31%',
            pdfTop:'18%'
        })
    }
    giveHeight=()=>{
        this.setState({
            height:'80px',
        })
    }
    moveAgain=()=>{
        this.setState({
            folderTop:'30%',
            pdfTop:'17%'
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.endeth!==prevProps.endeth){
            //.2 second warning that it'll unmount, so has to do the effects
            this.setState({
                height:'10px',
                width:'10px',
                folderTop:'43%',
                pdfTop:'43%',
                marginLeft:'-10px'
            })
        }
    }
  render(){
    return(
  <div>
      <div style={{
        marginLeft:this.state.marginLeft, 
        height:this.state.height,
        width:this.state.width, 
        top:this.state.folderTop, 
        transitionDuration:'.2s',
        }} 
        id='fileDiv' class='smallerDiv'>
        <img id='folder' src={FolderLogo}/>
        </div>
      
      <div style={{
          marginLeft:this.state.marginLeft, 
          height:this.state.height,
          width:this.state.width, 
          top:this.state.pdfTop, 
          transitionDuration:'.2s',
          }} 
          id='pdfDiv' class='smallerDiv'>
        <img id='pdf' src={AdobeLogo}/>
        </div>
      
  </div>
    )
  }
}

export default SmallerDiv