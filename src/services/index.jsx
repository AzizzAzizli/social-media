import { db } from '../helper/firebase/index'
import { ref , push  } from 'firebase/database'

const users = ref(db,"Users")

export const register = (data) => {
  try{
      const response = push(users,data)
      return response._path.pieces_
  }catch (err){
    console.error(err);
  }
}

// export const login = (user_info) => {
//   try{
//       onValue(users, (snapshot) => {
//         const data = snapshot.val();
//         const dataToArr = Object.entries(data)
//         dataToArr.forEach((item) => {
//              if(item[1].email === user_info.email && item[1].password === user_info.password){
//               localStorage.setItem("user_info",JSON.stringify(item[1])) 
//               return true 
//             }else{
//               return false
//             }
//         })
//       })
//       console.log(user_info);
//   }catch (err){
//     console.error(err);
//   }
// }