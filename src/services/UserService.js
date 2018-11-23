import { User } from "../entities/User"
// import { peopleData } from "../data/data-user"
import { URL_DATA } from "../shared/constants"


// function getLocalData() {

//     const listOfUser = peopleData.results;
//     const finalUser = listOfUser.map((user) => {
//         const { name, dob, picture, email } = user;

//         const { first } = name;
//         const { date } = dob;

//         return new User(first, picture, email, date);
//     }
//     );
//     return finalUser;
// }

const fetchUserData = () => {

    return fetch(URL_DATA)
        .then((response) => {
            return response.json();
        })
        .then((people) => {
            console.log(people)
            const listOfUser = people.results;

            const myUser = listOfUser.map((user) => {
                return new User(user.name.first, user.picture, user.email, user.dob.date);
            });

            return myUser;
        })
}

export { fetchUserData }