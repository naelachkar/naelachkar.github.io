const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const theMap = document.getElementById("map");
const cityMaps = [
    /* Paris */"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9542811994!2d2.2768240056087397!3d48.85883353546433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1661422087897!5m2!1sfr!2sfr",
    /* Bnei Brak */"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27042.24063454327!2d34.81783145315696!3d32.08871523993485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a235bcc7279%3A0xa32fca178c423987!2sBnei%20Brak%2C%20Isra%C3%ABl!5e0!3m2!1sfr!2sfr!4v1661433618116!5m2!1sfr!2sfr",
    /* Jerusalem */"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.70319833301!2d35.1051475515186!3d31.79629933478563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2zSsOpcnVzYWxlbSwgSXNyYcOrbA!5e0!3m2!1sfr!2sfr!4v1661426953411!5m2!1sfr!2sfr",
    /* Buenos Aires  */"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26495782177!2d-58.503509834518475!3d-34.615803638049975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Ville%20Autonome%20de%20Buenos%20Aires%2C%20Argentine!5e0!3m2!1sfr!2sfr!4v1661426883969!5m2!1sfr!2sfr",
    /* Brussels */"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80598.63587129083!2d4.305206168285414!3d50.85510293834869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed73c76867%3A0xc18b3a66787302a7!2sBruxelles%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1661427053239!5m2!1sfr!2sfr",
    /* Funchal */"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107478.0270023067!2d-16.960877267947367!3d32.667736701982165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc605fc3501f8bab%3A0xffd84d2c15cda139!2sFunchal%2C%20Portugal!5e0!3m2!1sfr!2sfr!4v1661427113664!5m2!1sfr!2sfr",
    /* Lisbon */"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49790.00643114329!2d-9.195308446804068!3d38.74362135047146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbonne%2C%20Portugal!5e0!3m2!1sfr!2sfr!4v1661427186462!5m2!1sfr!2sfr"
]

function changeMap(){
    let currentlySelected=0;
    const legend = document.getElementById("legend");

    theMap.setAttribute("src", cityMaps[0])
    legend.innerHTML = "Where I’am from"

    function changeLegend(){
        if (currentlySelected === 0) {
            legend.innerHTML = "Where I’am from";
        } else if (currentlySelected === 1){
            legend.innerHTML = "Where I live";
        } else {
            legend.innerHTML = "Cities I’ve visited";
        }
    }

    prevButton.addEventListener("click",  function () {
        currentlySelected--;
        theMap.setAttribute("src", cityMaps[currentlySelected]);
        nextButton.disabled = false;
        changeLegend();
        if (currentlySelected === 0) {
            prevButton.disabled = true;
        }
    });

    nextButton.addEventListener("click",  function () {
        currentlySelected++;
        theMap.setAttribute("src", cityMaps[currentlySelected]);
        prevButton.disabled = false;
        changeLegend();
        if (cityMaps.length === currentlySelected + 1){
            nextButton.disabled = true;
        }
    });
}

changeMap();