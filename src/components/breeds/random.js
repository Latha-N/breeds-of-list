import React from 'react'
import axios from 'axios'

class Random extends React.Component{
    constructor(){
        super()
        this.state={
            details:[],
            num:''
            }
    }
    componentDidMount(){
        axios.get('https://dog.ceo/api/breed/hound/images')
        .then(response=>{
            const details=response.data.message
            console.log('.........',details)
            this.setState({details:details})
        })
    }
    handleClick=()=>{
        let rand=Math.round(Math.random()*this.state.details.length)
        this.setState({num:rand})

    }
    render(){
        let rand=Math.round(Math.random()*this.state.details.length)
        console.log("th erandom url is",this.state.details[rand])
        console.log('vfghdv',this.state.details)
        return(
            <div className="container">
            
            <img src={this.state.details[this.state.num]} alt="no image found"/><button onClick={this.handleClick}>fetch</button>
                <h1>Random Image</h1>
            </div>
        )
    }
}
export default Random

