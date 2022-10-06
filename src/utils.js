import axios from "axios";

const fin = [];

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


const getAllUsers = async () => {
    const url = "http://78.249.128.56:8001/API/Show-Comptes-Utilisateur";


    const response = await axios.get(url).then(
        (response) => {
            const data = response.data;
            data.forEach((element) => {
                if (!fin.includes(element.Email)) {
                    fin.push(element.Email);
                }
            });
        }
    )

    console.log(fin);
};


const checkDuplicate = (mail) => {
    if (fin.includes(mail)) {
        return true;
    }
    return false;
}


export {checkEmail, checkWordLength, getAllUsers, checkDuplicate};