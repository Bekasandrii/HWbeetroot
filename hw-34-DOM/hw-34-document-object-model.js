/*=================== Завдання 1 ===================*/

/*Створити сторінку, що показує нумерований список пісень:*/

//Version 1

/*let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"

    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

let listForHtml = ``;

for ( i = 0; i < playList.length; i++ ){
    listForHtml = listForHtml + ` </p> ${ i + 1 } ${playList[i].author} ${playList[i].song} </p> `
}

document.write(listForHtml);

document.querySelector('.styleP').innerHTML = 'songsList';*/



//Version 2

/*let playList = [
    {
        author: 'LED ZEPPELIN',
        song:'STAIRWAY TO HEAVEN'
    },
    {
        author: 'QUEEN',
        song:'BOHEMIAN RHAPSODY'
    },
    {
        author: 'LYNYRD SKYNYRD',
        song:'FREE BIRD'
    },
    {
        author: 'DEEP PURPLE',
        song:'SMOKE ON THE WATER'
    },
    {
        author: 'JIMI HENDRIX',
        song:'ALL ALONG THE WATCHTOWER'
    },
    {
        author: 'AC/DC',
        song:'BACK IN BLACK'
    },
    {
        author: 'QUEEN',
        song:'WE WILL ROCK YOU'
    },
    {
        author: 'METALLICA',
        song:'ENTER SANDMAN'
    }
    ];
const ul = document.createElement("ul");
const mainDiv = document.getElementById("content");
mainDiv.append(ul);
for (let i in playList) {
    const li = document.createElement("li");
    const playBtn = document.createElement("p");
    playBtn.append(playList[i].author);
    playBtn.append(" : ");
    playBtn.append(playList[i].song);
    li.append(playBtn);
    ul.append(li);
}*/




/*=================== Завдання 2 ===================*/
/*Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном.
На модальном вікні повинен бути текст і кнопка "Закрити".
Спочатку модальне вікно не відображається.
При кліку на кнопку "Відкрити" з'являється модальне вікно,
на кнопку "Закрити" — зникає.
 */

//Version 1

/*let btnEx = document.getElementById('closeModal');

btnEx.onclick = function () {
    document.querySelector('.modal-window').style = 'display: none;'
}

let btnOpn = document.getElementById('openModal');

btnOpn.onclick = function (){
    document.querySelector('.modal-window').style = `display: block;`
}
*/
//Version 2

/*const btn = document.createElement("button");
const p = document.createElement("p");
p.textContent = "Open";
btn.append(p);
mainDiv.append(btn);
btn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.setAttribute("id", "modal__div");
    const p = document.createElement("p");
    p.textContent = "Noting to read here, just close it";
    div.append(p);
    const innerBtn = document.createElement("button");
    const innerBtnP = document.createElement("p");
    innerBtnP.textContent = "Close";
    innerBtn.append(innerBtnP);
    div.append(innerBtn);
    mainDiv.append(div);
    btn.disabled = true;
    innerBtn.addEventListener("click", () => {
        div.remove();
        btn.disabled = false;
    });
});*/

/*=================== Завдання 3 ===================*/
/*Створити HTML-сторінку зі світлофором і кнопкою,
яка перемикає світлофор на наступний колір.*/

//Version 1

document.getElementById('switch').onclick = function () {
    // находим все элементы с классом .lamp и добалвяем в коллекцию lamps
    let lamps = document.querySelectorAll('.lamp');

    // объявляем вспомогательную переменную;
    // присваиваем по-умолчанию значение меньше нуля чтобы программа
    // срабатывала даже если ни у одного элемента нет класса active;
    let j = -1;

    // перебираем коллекцию lamps
    for (let i = 0; i < lamps.length; i++) {
        if (lamps[i].classList.contains('active')) {
            lamps[i].classList.remove('active');
            j = i + 1;
        }
    }
    // условие которое проверяет есть ли элемент с индексом j в коллекции
    // если нет - то j = 0
    if (j >= lamps.length || j < 0) {
        j = 0;
    }
    // присваиваем следующему элементу класс active
    lamps[j].classList.add('active');
}


//Version 2

/*const trafficLights = document.querySelector("div.traffic__light");

const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    if (redLight.classList.contains("traffic__red")) {
        redLight.classList.remove("traffic__red");
        yellowLight.classList.add("traffic__yellow");
    } else if (yellowLight.classList.contains("traffic__yellow")) {
        yellowLight.classList.remove("traffic__yellow");
        greenLight.classList.add("traffic__green");
    } else if (greenLight.classList.contains("traffic__green")) {
        greenLight.classList.remove("traffic__green");
        redLight.classList.add("traffic__red");
    }
});*/