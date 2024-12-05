var id;
function displayId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    else {
        return id * 10;
    }
}
id = "Alice";
console.log(displayId(id));
id = 777;
console.log(displayId(id));
