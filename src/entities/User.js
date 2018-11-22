
class User {

    constructor(name, picture, email, date) {

        this.name = name;
        this.image = picture;
        this.email = email;
        this.birthday = date;

    }
    hideEmail = () => {

        const splitedEmail = this.email.split("");
        splitedEmail.splice(3, (splitedEmail.indexOf("@") - 3), "...");
        const hiddenEmail = splitedEmail.join("");
        return hiddenEmail;
    }
}

export { User }