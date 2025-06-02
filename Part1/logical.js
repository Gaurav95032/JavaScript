let isLoggedIn = false;
let isPaid = true;
if (isLoggedIn && isPaid) {
    console.log("User is logged in and paid");
}
else if (isLoggedIn && !isPaid) {
    console.log("User is logged in but not paid");
}
else if (!isLoggedIn && isPaid) {
    console.log("User is not logged in but paid");
}
else {
    console.log("User is not logged in and not paid");
}