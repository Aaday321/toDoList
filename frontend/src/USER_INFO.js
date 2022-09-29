import axios from "axios"

class User{
    constructor(name){
        this.name = name
    }
}

var responsable

export const MakeNewUser = () =>{


    axios.get("http://localhost:4001/users/6334ee7c199dbe76b0e814c1")
    .then((reponse) => {
        responsable = reponse
    })
    .catch((error)=>{
      console.log(error);
    })

    if (responsable === null){
        const myUser = new User("THIS ALSO WORKS!")

        axios({
            method: 'post',
            url: 'http://localhost:4001/users',
            data: {
              name: myUser.name
            }
          });
    }
        console.log(responsable);

    


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