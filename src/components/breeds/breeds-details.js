import React from 'react'
import axios from 'axios'

class BreedDetail extends React.Component{
    constructor(){
        super()
        this.state={
            message:''
            }
    }
    componentDidMount(){
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response=>{
            const message=response.data.message
            console.log('message.........',message)
            this.setState({message:message})
        })
    }
    render(){
        return(
            <div className="container">
                <h1>Random Image</h1>
                 {this.state.message?<img src={this.state.message} alt="no image found"/>:<h6>NO IMAGE TO DISPLAY</h6>} 
            </div>
        )
    }
}
export default BreedDetail

