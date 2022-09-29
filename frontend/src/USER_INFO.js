import axios from "axios"

class User{
    constructor(name){
        this.name = name
    }
}



export const MakeNewUser = () =>{

    const myUser = new User("THIS WORKS!")

    axios({
        method: 'post',
        url: 'http://localhost:4001/users',
        data: {
          name: myUser.name
        }
      });


/*
    axios.post("http://localhost:4001/users",{
        name: myUser.name
    })
    .then((response) =>{
        console.log(response);
    })
    .catch((error) =>{
        console.log(error);
    })
    */
}