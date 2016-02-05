// generates a random string of numbers
function randomString(length){
    return Math.random().toString(36).substring(2, length + 2);
}