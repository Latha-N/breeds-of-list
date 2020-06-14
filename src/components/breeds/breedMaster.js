import React from 'react'
import axios from 'axios'



class BreedDetailMaster extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dogs:''
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        console.log('...........',id)
        axios.get(`https://dog.ceo/api/breed/${id}/images/random`)
        .then(response=>{
            const dogs=response.data.message
            console.log('master........',dogs)
            this.setState({dogs})
        })
        
        .catch(err=>{
            alert(err)
        })
    }
     


    render(){
    return (
        <div>
            <h1>hello</h1>
            <img src={this.state.dogs}  alt="no image found" />
        </div>
    )
}
}

export default BreedDetailMaster