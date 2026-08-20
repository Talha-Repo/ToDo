
let btnGreet = document.getElementsByClassName("btnGreet")
let cards = document.getElementsByClassName("card")
let mesg = (name,role)=>`Hi I'm ${name}, and I am a ${role}`;

for (let btn of btnGreet) {
    let count = 0 ;

            btn.addEventListener("click", function () {
                let card = this.parentElement;
                    let name = card.querySelector(".name");
                    let role = card.querySelector(".role");
                    let message = card.querySelector(".message");
                    let counter = card.querySelector(".counter");
                    name = name.textContent;
                    role = role.textContent;
                    message.textContent = mesg(name,role);
                    count++
                    let countMsg = `clicked ${count} times`
                    counter.textContent = countMsg;
                    
        });

    }

