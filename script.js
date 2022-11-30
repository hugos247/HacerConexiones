var yourConnectionsCounter = document.querySelector(".badge-your-conn")


function changeName() {
    let mainUser = document.querySelector(".main-user");
    mainUser.innerText = "Random user";
}

function AcceptOne() {
    let userOne = document.querySelector(".user-one");
    let acceptIconOne = document.querySelector(".accept-icon-1");
    let denyIconOne = document.querySelector(".deny-icon-1");
    let connectionRequests = document.querySelector(".badge-conn-req");

    yourConnectionsCounter.innerText++;
    connectionRequests.innerText--;
    userOne.remove();
    acceptIconOne.remove();
    denyIconOne.remove();
}

function DenyOne() {
        let userOne = document.querySelector(".user-one");
        let acceptIconOne = document.querySelector(".accept-icon-1");
        let denyIconOne = document.querySelector(".deny-icon-1");
        let connectionRequests = document.querySelector(".badge-conn-req");
    
        connectionRequests.innerText--;
        userOne.remove();
        acceptIconOne.remove();
        denyIconOne.remove();
        

}

function AcceptTwo () {
    let userTwo = document.querySelector(".user-two");
    let acceptIconTwo = document.querySelector(".accept-icon-2");
    let denyIconTwo = document.querySelector(".deny-icon-2");
    let connectionRequests = document.querySelector(".badge-conn-req");

    yourConnectionsCounter.innerText++;
    connectionRequests.innerText--;
    userTwo.remove();
    acceptIconTwo.remove();
    denyIconTwo.remove();
}

function DenyTwo () {
    let userTwo = document.querySelector(".user-two");
    let acceptIconTwo = document.querySelector(".accept-icon-2");
    let denyIconTwo = document.querySelector(".deny-icon-2");
    let connectionRequests = document.querySelector(".badge-conn-req");

    connectionRequests.innerText--;
    userTwo.remove();
    acceptIconTwo.remove();
    denyIconTwo.remove();
}