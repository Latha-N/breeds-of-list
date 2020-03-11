import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact'
import {Link} from 'react-router-dom'


const imageStyle = {
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxWKMO6AAvfDw8NE_TWH0VK87PM577CehY11wKcrhSUJ7oTnFI")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height : "95vh"
    
    }

class Login extends  React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    //  ValidateEmail = (e) => (inputText){
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if(inputText.value.match(mailformat))
    // {
    // document.form1.text1.focus();
    // return true;
    // }
    // else
    // {
    // alert("You have entered an invalid email address!");
    // document.form1.text1.focus();
    // return false;
    // }
    // }
    handleSubmit=(e)=>{
        e.preventDefault()
      const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if(this.state.email === '' || !this.state.email.match(mailformat) ){
        alert("enter the email/password")
        return false
       }
       if(JSON.parse(localStorage.getItem('registerData')).email !==  this.state.email){
        alert('mismatch')
        return false
       }
        const formData={
            email:this.state.email,
            password:this.state.password
        }
    
        //let email=this.state.email
        //localStorage.setItem('loginData',formData)
        // if(localStorage.getItem('email')==localStorage.getItem('email')){
        //     window.location.href='/home'
        // }else{
        //     alert('login with proper email')
            window.location.href='/home'

        // }
        // this.props.history.push('/home')

    }
    render(){
        
        return(
            <div style={imageStyle}>
            <MDBContainer><br/><br/>
                <h1 className="display-4 text-center"  style={{color:"white"}}>Login Form</h1><br/>
                <MDBRow>
                    <MDBCol md="3">
                            </MDBCol>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody className="mx-4">
                                <MDBInput label="enter your email" type="email"   name="email"  value={this.state.email} onChange={this.handleChange} ></MDBInput><br/>
                                <MDBInput label="enter your password" type="password" name ="password" value = {this.state.password} onChange = {this.handleChange}/>
                                <br/>
                            <div className="text-center mb-3">

                            <MDBBtn type="button" gradient="blue"   rounded className="btn-block z-depth-1a" onClick = {this.handleSubmit} >
                            <button type="button" class="btn btn-info">Login</button></MDBBtn>
                            </div>
                            </MDBCardBody>
                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end" style={{color:"red"}}>
                                Not a Registered?
                    
                    <Link to = "/register" >Register</Link>
                    
                    </p>
                </MDBModalFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
    
        </div>
        )
    }
}
export default Login