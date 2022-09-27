import React from "react";
import {Link} from "react-router-dom"
import Test from "./components/test";
//import {PetForm} from "./componets/newPetForm"

export function Home(){
    return(
        <div>
            <Test/>
            <nav>
                <Link to="Home">Home</Link>
                <Link to="Supermarket">Supermarket</Link>
                <Link to="newPetForm">Make a new pet</Link>
            </nav>
            
            
        </div>
    )
}