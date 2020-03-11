import React from 'react'

const imageStyle = {
    backgroundImage: `url("https://www.teacupdogdaily.com/wp-content/uploads/2016/10/List-of-Poodle-Breeds-Mix.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height : "95vh"
    
    }


function Home(props){
    return(
        <div style={imageStyle}>

        <h1 className="text-xl-center text-primary">Welcome to the breeds app</h1>

        </div>
    )
}
export default Home