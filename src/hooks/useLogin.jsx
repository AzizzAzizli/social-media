import { useState, useEffect } from 'react';
import { db } from '../helper/firebase/index';
import { ref, onValue } from 'firebase/database';
import { getDatas } from '../services';

const users=ref(db,"Users");




export  function useLogin(user_data){
const [usersData,setUsersData]=useState([])
const [isUser,setIsUser]=useState(false)

let data =   getDatas()


setIsUser(data.find((item)=>item.email===user_data.email)) 
    
console.log(isUser);
console.log(data);




return data
}
