function printHelloWorld(elemID) {
    header = document.getElementById(elemID);
    header.innerHTML = "Hello World";
    console.log("RAN");
}

printHelloWorld("firstHeader");