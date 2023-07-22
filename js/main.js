


// Imposto un ciclo secondo un indice che va da 0 a 100, Ad ogni giro del ciclo stamperò nella console un numero che si incrementerà di volta in volta

const myContainer = document.querySelector(".my-container")


for (let i = 1; i <= 100; i++) {


    if (i % 3 == 0 && i % 5 == 0) {

        myContainer.innerHTML += "FIZZ BUZZ<br>"

    }


    else if (i % 3 == 0) {
        myContainer.innerHTML += "FIZZ <br>"
    }

    else if (i % 5 == 0)

        myContainer.innerHTML += "BUZZ <br>"




    else {


        myContainer.innerHTML += "giro" + i + "<br>"
    }

}








