import axios from "axios"
import { useState, useEffect } from "react"



class User{
    constructor(name){
        this.name = name
    }
}



export const MakeNewUser = () =>{

    const [responsable, setResponsable] = useState(null)
    

    axios.get("http://localhost:4001/users/63358d06f5c89f45147acef6")
    .then((reponse) => {
        setResponsable(reponse.data)
        console.log(reponse.data);
    })
    .catch((error)=>{
      console.log(error);
    })

    
    useEffect(()=>{
        console.log(responsable);
        postUser(responsable)
    }, [responsable])

    

return(
    <h1>MAKE NEW USER</h1>
)
}

const postUser = (arg) =>{
    if (arg.name != "New User"){
        const myUser = new User("I'ma user")

        axios({
            method: 'post',
            url: 'http://localhost:4001/users',
            data: {
              name: myUser.name
            }
          });
    }
}