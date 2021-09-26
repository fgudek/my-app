
import React, { useEffect } from "react"
import axios from "axios";




function Profile(){


const user = JSON.parse(localStorage.getItem("currentUser"))

useEffect(() => {
if (!user){
window.location.href='/login'

}

},[])


    return(
        <div class="profil">
    <h1 class= "prof"> Moj profil</h1>
    <br/>

   <h1>Ime :{user.name}   </h1> 
   <h1>Email :{user.email}   </h1> 
   <h1>Admin: :{user.isAdmin ? 'da': 'ne'}   </h1> 





        </div>
    );
    
    }
    export default Profile;
