import axios from "axios";


const checkEmail = (mail) => {
    // Check if email is valid or not
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(mail)) {
        return false;
    }
    return true;
}

const checkWordLength = (word) => {
    // Check if password has a sufficient length and is strong
    //  password :
    // Should contain at least a capital letter
    // Should contain at least a small letter
    // Should contain at least a number
    // Should contain at least a special character
    if (word.length < 8) {
        return false;
    }
    return true;
}


const getAllUsersEmail = async () => {
    const url =process.env.REACT_APP_API_GET_USERS_URL;
    console.log(url);


    const usersEmail = [];

    const response = await axios.get(url).then(
        (response) => {
            const data = response.data;
            data.forEach((element) => {
                if (!usersEmail.includes(element.Email)) {
                    usersEmail.push(element.Email);
                }
            });
        }
    )
    localStorage.fin = JSON.stringify(usersEmail);
    return usersEmail;
};


const checkDuplicate = (mail) => {

    const newEmails = JSON.parse(localStorage.fin);

    if (newEmails.includes(mail)) {
        return true;
    } else {
        return false;
    }
}


export {checkEmail, checkWordLength, getAllUsersEmail, checkDuplicate};
