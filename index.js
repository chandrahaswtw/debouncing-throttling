var debouncing = document.querySelector("#debouncing");
var throttling = document.querySelector("#throttling");

function debouncingHandler(delay) {
    let myTimer;
    return function () {
        clearTimeout(myTimer);
        myTimer = setTimeout(() => {
            console.log("API CALLED")
        }, delay);
    }
}

let superDebouncer = debouncingHandler(300);

function throttingHandler(delay) {
    let flag = true;
    return function () {
        if (flag) {
            flag = false;
            setTimeout(() => {
                console.log("API CALLED");
                flag = true;
            }, delay);
        }
    }
}

let superThrottler = throttingHandler(1000);