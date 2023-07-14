// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOff = document.getElementById("takeoff");
    let land = document.getElementById("landing");
    let abandonShip = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");
    let flightStatus = document.getElementById("flightStatus");
    let newColor = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight")
    takeOff.addEventListener("click", function() {
        let isTakeoffConfirmed = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (isTakeoffConfirmed) {
            flightStatus.innerHTML = "Shuttle in flight.";
            newColor.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
        };
    });
    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        newColor.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });
    abandonShip.addEventListener("click", function() {
        let isAbortConfirmed = window.confirm("Confirm that you want to abort the mission.");
        if (isAbortConfirmed) {
            flightStatus.innerHTML = "Mission aborted";
            newColor.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }
    });
    upButton.addEventListener("click", function() {
        shuttleHeight.innerHTML += 10000;
    })
});