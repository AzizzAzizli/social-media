import { useState } from 'react'
import { db } from '../helper/firebase/index'
import { ref , onValue } from 'firebase/database'

const users = ref(db,"Users")

const [isUser,setIsUser] = useState(false)

export const login = (user_info) => {
  try{
      onValue(users, (snapshot) => {
        const data = snapshot.val();
        const dataToArr = Object.entries(data)
        dataToArr.forEach((item) => {
            if(item[1].email === user_info.email && item[1].password === user_info.password){
            localStorage.setItem("user_info",JSON.stringify(item[1])) 
            setIsUser(true)
            }else{
              setIsUser(false)
            }
        })
      })
      return isUser
  }catch (err){
    console.error(err);
  }
}