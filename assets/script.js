async function Users(){
    const response = await axios ("https://jsonplaceholder.typicode.com/users")
    console.log(response.data);
    response.forEach(element => {
        const user = document.createElement('tr')
        const userName = document.createElement('td')
        const userUserName = document.createElement('td')
        const userEmail = document.createElement('td')
        const userNumber = document.createElement('td')


    const userNameValue = userName.value
    const userEmailValue = userEmail.value
    const userUserNameValue = userUserName.value
    const userNumberValue = userNumber.value
    const userValue = user.value


    userNumber.textContent = element

    user.appendChild(userName);
    user.appendChild(userEmail);
    user.appendChild(userNumber);
    user.appendChild(user);
    table.appendChild



    });
}