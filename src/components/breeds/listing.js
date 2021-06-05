import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class BreedsList extends React.Component{
    constructor(){
        super()
        this.state={
            dogs:{},
            
        }
    }
    componentDidMount(){
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response=>{
            const dogs=response.data.message
            console.log('dogs........',dogs)
            this.setState({dogs})
        })
        
        .catch(err=>{
            alert(err)
        })
    }

    
    render(){
        console.log(this.state.dogs)
        return(
            <div className="container">
                

                <h1 className="text-center text-danger">BREEDS OF DOGS LIST</h1>
                <ul className="list-group" >
                {
                Object.keys(this.state.dogs).map((ele,i)=>{
                    return <li key={i} className="list-group-item list-group-item-primary"> { ele } 
                    <Link to={`/list/dogShowMaster/${ele}`}><button>show</button></Link> 
                        { this.state.dogs[ele].length != 0 && (
                            <ul className="list-group">
                                { this.state.dogs[ele].map((ele, i) => {
                                    return <li key={i} className="list-group-item list-group-item-danger"> { ele } 
                                    <Link to="/list/dogshow"><button type="button" class="">Details</button></Link></li>
                                })}
                            </ul>
                        )}
                     </li> 
                     
                    })
                }
                </ul>
            </div>
        )
    }
}

export default BreedsList