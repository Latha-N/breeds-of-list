import React from 'react'
import { BrowserRouter,Link,Route,Switch } from 'react-router-dom'
import { Button } from 'reactstrap';


import Login from '../src/components/users/Login'
import Register from '../src/components/users/Register'
import Home from '../src/components/users/Home'
import BreedsList from '../src/components/breeds/listing'
import BreedDetail from '../src/components/breeds/breeds-details'
import BreedDetailMaster from '../src/components/breeds/breedMaster'
import Random from '../src/components/breeds/random'

function App(props){
  const  handleLogout=()=>{
        localStorage.removeItem('registerData')
        window.location.href='/login'
    }
    return(
        <BrowserRouter>
             <div>
                {
                localStorage.getItem('registerData')?(
                    <div>
                        
                <nav class="navbar navbar-expand-lg navbar-red bg-red">
                <a class="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREviww-W9DrNekuyPr06nvzp0uTRtzkLgJUmeuSloWeDst63gs" 
                width="80" height="80" class="d-inline-block align-top" alt=""/><Link to="/home">Home</Link> <Link to="/list">BreedsList</Link> <Link to="#" onClick={handleLogout}><Button outline color="danger">Logout</Button></Link>
              <Link to="/random">random</Link> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                 </button>
                 </nav>
                 
                </div>
                ):(
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-red bg-red">
                <a class="navbar-brand" href="#"> <Link to="/login">Login</Link> <Link to="/register">Register</Link> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                 </button>
                 </nav>
                </div>
                )
            }
            

            <Switch>
                <Route path="/login" component={Login} exact={true}/>
                <Route path="/register" component={Register} exact={true}/>
                <Route path="/home" component={Home} exact={true}/>
                <Route path="/list" component={BreedsList} exact={true}/>
                <Route path="/list/dogshow" component={BreedDetail} exact={true}/>
                <Route path="/list/dogShowMaster/:id" component={BreedDetailMaster} exact={true} />
                <Route path="/random" component={Random} exact={true}/>
                
            </Switch>
            </div>
        </BrowserRouter>
        
    )
}
export default App