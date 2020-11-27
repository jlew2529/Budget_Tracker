let db;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore("pending", {autoIncrement: true});
};

request.onsuccess = function(event) {
    db = event.target.result;

    //  Check to see if the app is online before reading fron db
    if (navigator.onLine) {
        checkDatabase();
    }
};

// if there is an error, show what the error is
request.onerror = function(event) {
    console.log("Uh Oh!" + event.target.errorCode);
};