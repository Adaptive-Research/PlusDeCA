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
    if (word.length < 8) {
        return false;
    }
    return true;
}


const getAllUsersEmail = async () => {
    const url = process.env.REACT_APP_API_GET_USERS_URL;

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

const storedToken = JSON.parse(localStorage.getItem('token'));


export {checkEmail, checkWordLength, getAllUsersEmail, checkDuplicate, storedToken};
