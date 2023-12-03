export const RegexEmail=(email)=>{
    const emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
    let boolean=emailPattern.test(email);
    return boolean
}