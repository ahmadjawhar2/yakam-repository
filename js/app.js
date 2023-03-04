/* now JS: lerada JS datwane wa law page bka awanda
ziraki bka, ka aw Datas ema daynusin hamuy
kobkatawa ba shewayak la shewakan bo chand 
sanyak halibgre, dwatr har hamyuyn har yakek
laxanay xoy kobkatawa. 
bam shewaya JS datwane websitekaman ziraktra bka
wa feri bka ch law Datas bka wa chon bkari bene */

//How to write a JS Code

const submitBtn = document.getElementById('button')

// genderaka be Let dakay: chunka gorani basar dade

let genders = document.querySelectorAll('.gender')

const studentName = document.getElementById('student-name')
const studentAge = document.getElementById('student-age')
const studentGender = document.getElementById('student-gender')
const isStudent= document.getElementById('is-student')
const studentCity = document.getElementById('student-city')

// lanaw Function Attribuetmna haya pey dareyn 

function showInfo(e){
    e.preventDefault()
    const fName = document.getElementById('f-name').value
    const sName = document.getElementById('s-name').value
    const age = document.getElementById('age').value 
    const city = document.getElementById('city').value
    const student = document.getElementById('student')


    let gender = ""
    for(let i=0; i < genders.length; i++) {
        if(genders[i].checked){
            gender = genders[i].value
        }
    }
    studentName.innerText =    `${fName} ${sName}`
    studentAge.innerText = age
    studentGender.innerText = gender 

    if(student.checked){
        isStudent.innerText = `Yes`
    }
    else{
        isStudent.innerText = `No`
    }

    studentCity.innerText = city
}


// When i.ll click in the button shtek rudada pey daleyn Event wata 7alateka ka rudada
// katak ka clickman krd hamu aw datas ka lanaw formaka daya hamuy kokayna bashewayak bakari bininu binusinawa

submitBtn.addEventListener('click', showInfo)