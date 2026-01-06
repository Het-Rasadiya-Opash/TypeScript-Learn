var fetchGreeting = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var success = Math.random() > 0.5;
            if (success) {
                resolve("Hello, TypeScript!");
            }
            else {
                reject(new Error("Failed to fetch greeting"));
            }
        }, 1000);
    });
};
fetchGreeting()
    .then(function (greeting) {
    console.log(greeting.toUpperCase());
})
    .catch(function (error) {
    console.error("Error:", error.message);
});
