// import {checkDuplicate, checkEmail, getAllUsersEmail} from "../../utils";
// import axios from "axios";
// import {useState} from "react";
// import {useNavigate} from "react-router";
//
// let [token, setToken] = useState([]);
// const [redStyle, setRedStyle] = useState("");
// const [UsrMsg, setUsrMsg] = useState("We'll never share your email with anyone else.");
// const [passMsg, setPassMsg] = useState("We'll never share your password with anyone else.");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const navigate = useNavigate();
//
// getAllUsersEmail();
//
//
//
// const changeValue = (setter) => (e) => {
//     setter(e.target.value);
// }
//
//
// const checkLoginReq = async (mail, pass) => {
//     // Launch a post request to check if user inputs are correects and store the given token to create user
//     const url = "http://78.249.128.56:8001/API/Login";
//
//     if (checkEmail(mail)) {
//         const response = await axios.post(url, {
//             Submit: 1,
//             Email: mail,
//             Password: pass
//         }, {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             }
//         })
//
//         if (response.data.includes("ERROR:")) {
//             console.log(`Error found: ${response.data}`);
//             setRedStyle("red");
//             setUsrMsg("Wrong email or password");
//             setPassMsg("Wrong email or password");
//         } else {
//             console.log("User authenticated");
//
//             try {
//                 let temp = response.data
//                 setToken(elem => [token.push(temp)]);
//                 localStorage.setItem('token', JSON.stringify(temp));
//             } catch (e) {
//                 console.log(e);
//             } finally {
//                 navigate('/dashboard');
//             }
//         }
//     }
//
//
// }
//
// const handleLoginReq = () => {
//     // Check if email and password are valid then launch request
//     try {
//         console.log(email, password);
//
//         if (email.length === 0) {
//             setUsrMsg("Email is required");
//         } else if (!checkEmail(email)) {
//             setUsrMsg("Email is not valid");
//         } else if (email.length !== 0) {
//             const test = checkDuplicate(email);
//             if (test === false) {
//                 setUsrMsg("Bad email address");
//             } else {
//                 setUsrMsg("We'll never share your email with anyone else.");
//             }
//         }
//         if (password.length < 8) {
//             setPassMsg("Password is required and must be at least 8 characters");
//         } else {
//             setPassMsg("");
//         }
//
//         checkLoginReq(email, password);
//
//     } catch (e) {
//         console.log(e);
//     } finally {
//         console.log(email, password);
//     }
// }
//
// export {checkLoginReq, handleLoginReq, changeValue};