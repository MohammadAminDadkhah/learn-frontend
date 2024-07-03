const userInputId = document.getElementById('user-id-input');
const searchButton = document.getElementById('user-id-btn');
const cardDiv = document.getElementById('card');
const deleteAllButton = document.getElementById('delete-all');

let data = [];
let userForDelete = [];
let userData = [];

const searchHandler = () => {

    const inputId = +userInputId.value;
    userInputId.value = '';
    let userData = []
    data.forEach(user => {
        if (user.userId === inputId) {
            userData.push(user)
        }
    });
    userForDelete = userData;
    showCard(userData);
}


const showCard = (userCard) => {

    let html = '';
    cardDiv.innerHTML = '';
    userCard.forEach((user) => {
        html +=
            `<div class="  card col-md-6 col-lg-4 mt-4">
                    <div class="d-flex flex-column">
                    
                        <h6>${user.title}</h6>
                    
                        <p>${user.body}</p>
                    
                        <div class="mb-2 d-flex justify-content-between">
                            <button class="btn btn-outline-secondary col-md-3" onclick="deleteHandler(${user.id})">Delete</button>
                            <sapn class="my-auto">${user.id}</sapn>
                        </div>
                    
                    </div>
                </div>`
    });
    cardDiv.innerHTML = html;
}
const deleteHandler = (id) => {

    let removeIndex = undefined;
    userForDelete.forEach((user, index) => {
        if (user.id === id) {
            removeIndex = index;
        }
    });
    userForDelete.splice(removeIndex, 1);
    showCard(userForDelete);
}

const checkLocalStorage = () => {
    if(!loadFromLocalStorage().length)
        load();
    else showUser();
}

const fetchUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

const load = async () => {
    userData = await fetchUser();
    saveToLocalStorage();
    console.log(userData)
    showUser();
}
const saveToLocalStorage = () => {
    localStorage.setItem('userData', JSON.stringify(userData));
}

const loadFromLocalStorage = (key) => {
    userData = JSON.parse(localStorage.getItem(key));
    return userData ?? [];
}

const showUser = () => {
    deleteAllButton.style.display = 'block';
    userData.forEach(user => {
        let clone = document.getElementById('tmp_row').content.cloneNode(true);
        let tds=clone.querySelectorAll('td');

        tds[0].innerText=user.id;
        tds[1].innerText=user.name;
        tds[2].innerText=user.username;
        tds[3].innerText=user.website;

        clone.querySelector('tr').addEventListener('click', (e) => {
            e.target.parentNode.remove();
            const removeIndex = userData.findIndex(currentUser => currentUser.id === user.id);
            userData.splice(removeIndex, 1);
            saveToLocalStorage();
            if(!userData.length){
                deleteAllButton.style.display = 'none';
            }
        });
        document.getElementById('tbody').appendChild(clone);
    })
}
checkLocalStorage('userData');

// document.addEventListener('DOMContentLoaded', async () => {
//     data = await fetchData();
// })
searchButton.addEventListener('click', searchHandler);
deleteAllButton.addEventListener('click', () => {
    localStorage.removeItem('userData');
    userData = [];
    document.getElementById("tbody").innerHTML = '';
    deleteAllButton.style.display = 'none';
});

