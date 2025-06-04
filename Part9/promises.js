function FetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve ("Data is fetched successfully.");
            } else {
                reject("Error fetching data.");
            }
        }, 4000)
    })
}

FetchData()
    .then((data) => {
        return console.log(data);
    })
    .catch((error) => {
        return console.log(error);
    })