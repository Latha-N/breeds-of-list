import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact'


const imageStyle = {
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxWKMO6AAvfDw8NE_TWH0VK87PM577CehY11wKcrhSUJ7oTnFI")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height : "95vh"
    
    }

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
           password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value

        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        // let email=this.state.email
        // let password=this.state.password

        const userRegister=JSON.stringify(formData)
        localStorage.setItem('registerData',userRegister)
        //localStorage.setItem('password',password)

        this.props.history.push('/login')

    }
    render(){
        return(
            <div  style = {imageStyle}>
            <MDBContainer >
                <br></br>
                <br></br>
            <h1 className="display-4 text-center"><strong style={{color:"white"}}>Registration Form</strong></h1><br/>
      <MDBRow>
      <MDBCol md="3">
          </MDBCol>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
             <MDBInput label=" enter username" value = {this.state.username} type="text"name = "username" onChange = {this.handleChange} /><br/>


            <MDBInput  label="enter email" value = {this.state.email} type="email" name = "email" onChange = {this.handleChange} /><br></br>

           <MDBInput label="enter password"type="password" name = "password" value = {this.state.password} onChange = {this.handleChange} /> <br/>

                <div className="text-center mb-3">
                <MDBBtn type="button" gradient="blue"rounded className="btn-block z-depth-1a" onClick = {this.handleSubmit}>
                    <button type="button" class="btn btn-info">submit</button></MDBBtn>
                </div>
                </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p style={{color:"red"}} >
                Already Registered?
                <Link to = "/login" >Login</Link>
                </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol md="3">
          </MDBCol>
      </MDBRow>
    </MDBContainer>
        </div>

        )
    }
}

export default Register