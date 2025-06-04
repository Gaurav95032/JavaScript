function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Gaurav Waghmare", branch: "Computer science and engineering" });
        }, 4000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching the user data..........................................");
        let userData = await fetchUserData();
        console.log(`data : ${JSON.stringify(userData)}`);
        console.log("User data is fetched successfully");
    } catch (error) {
        console.log(`Error in fetching data : ${error}`)
    }
}

getUserData()