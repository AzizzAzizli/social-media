import { toast } from 'react-toastify'
import { db } from '../helper/firebase/index'
import { ref , push , onValue } from 'firebase/database'
import { useEffect } from 'react'

const users = ref(db,"Users")

export const register = (data) => {
  try{
      const response = push(users,data)
      return response._path.pieces_
  }catch (err){
    console.error(err);
  }
}



export const login = (user_info) => {
  try{
      onValue(users, (snapshot) => {
        const data = snapshot.val();
        const dataToArr = Object.entries(data)   
        console.log(dataToArr); 

const currentUser=dataToArr.find((item)=> item[1].email===user_info.email)
console.log(currentUser);

if(!currentUser){
toast.error("Email not found!")

return 
}

if(currentUser[1].password===user_info.password){
  localStorage.setItem("user_info",JSON.stringify(currentUser))
  toast.success("Welcome")

}else{
  toast.error("Wrong password!")
}

      })
  }
  catch (err){
    console.error(err);
  }
}


export  function getDatas(){

let dataToArr= []

   onValue(users,  (snapshot)  => {
    const data =   snapshot.val();
  
 dataToArr= Object.values(data)
//  console.log(dataToArr);

  });
  return dataToArr
}