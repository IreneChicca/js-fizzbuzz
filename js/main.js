
const myContainer = document.querySelector(".my-container")




for (let i = 1; i <= 100; i++) {


    if (i % 3 == 0 && i % 5 == 0) {

        const myBox = document.createElement('div');
        myBox.innerHTML += "FIZZ BUZZ";
        myBox.className = 'p-4 border m-3 rounded col-2 text-center fw-bold'
        myBox.style.backgroundColor = '#66ffff'

        myContainer.appendChild(myBox)
    }


    else if (i % 3 == 0) {
        const myBox = document.createElement('div');
        myBox.innerHTML += "FIZZ";
        myBox.className = 'p-4 border m-3 rounded col-2 text-center fw-bold'
        myBox.style.backgroundColor = '#ff99cc'

        myContainer.appendChild(myBox)
    }

    else if (i % 5 == 0) {

        const myBox = document.createElement('div');
        myBox.innerHTML += "BUZZ";
        myBox.className = 'p-4 border m-3 rounded col-2 text-center fw-bold'
        myBox.style.backgroundColor = '#6600ff'

        myContainer.appendChild(myBox)





    }


    else {

        const myBox = document.createElement('div');
        myBox.innerHTML += i;
        myBox.className = 'p-4 border m-3 rounded col-2 text-center fw-bold'
        myBox.style.backgroundColor = '#99ccff'

        myContainer.appendChild(myBox)

    }

}








