module.exports.getDate = function(){
    let options = {
        weekday : "long",
        month : "long",
        day : "numeric",
        year : "numeric"
    } 
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

module.exports.getDay = function(){
    let options = {
        weekday : "long"
    } 
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

// console.log(module);