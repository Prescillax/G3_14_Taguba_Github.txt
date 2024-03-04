function displayDateTime() {
    var mydate = new Date();
    var mytime = "Date and Time: " + mydate.toLocaleString();
    document.getElementById("dt").innerText = mytime;
}
window.onload = function() {
    displayDateTime();
};
