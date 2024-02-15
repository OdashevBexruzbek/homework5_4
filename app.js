// class Foydalanuvchi {
//     constructor(ismi, familiyasi, yoshi, email) {
//         this.ismi = ismi;
//         this.familiyasi = familiyasi;
//         this.yoshi = yoshi;
//         this.email = email;
//     }

//     sahifadaChiqar() {
//         const malumotlarDiv = document.createElement('div');
//         malumotlarDiv.innerHTML = `<p>Ism: ${this.ismi}</p>
//                                     <p>Familiya: ${this.familiyasi}</p>
//                                     <p>Yosh: ${this.yoshi}</p>
//                                     <p>Email: ${this.email}</p>`;
//         document.body.appendChild(malumotlarDiv);
//     }

//     malumotlarniSaqlash() {
//         localStorage.setItem('foyMalumotlari', JSON.stringify(this));
//         alert('Malumotlar saqlandi!');
//     }

//     static olinganMalumotlarniKorsat() {
//        const savedMalumotlar = localStorage.getItem('foyMalumotlari');
//         if (savedMalumotlar) {
//             const parsedMalumotlar = JSON.parse(savedMalumotlar);
//             const foydalanuvchi = new Foydalanuvchi(parsedMalumotlar.ismi, parsedMalumotlar.familiyasi, parsedMalumotlar.yoshi, parsedMalumotlar.email);
//             foydalanuvchi.sahifadaChiqar();
//         }
//     }
// }

// const ismi = prompt("Ismingizni kiriting:");
// const familiyasi = prompt("Familiyangizni kiriting:");
// const yoshi = prompt("Yoshingizni kiriting:");
// const email = prompt("Elektron pochtangizni kiriting:");

// const foydalanuvchi = new Foydalanuvchi(ismi, familiyasi, yoshi, email);
// foydalanuvchi.sahifadaChiqar();

// const saqlashBtn = document.getElementById('saqlash-btn');
// saqlashBtn.addEventListener('click', () => {
//     foydalanuvchi.malumotlarniSaqlash();
// });

// Foydalanuvchi.olinganMalumotlarniKorsat();

////////////////////////////////////////////////////////////////////////////////////////////

function validateEmail(email) { //Validates the email address
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) { //Validates the phone number
    var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
    return phoneRegex.test(phone);
}

class Foydalanuvchi {
    constructor(ismi, familiyasi, yoshi, email) {
        this.ismi = ismi;
        this.familiyasi = familiyasi;
        this.yoshi = yoshi;
        this.email = email;
    }

    sahifadaChiqar() {
        const malumotlarDiv = document.createElement('div');
        malumotlarDiv.innerHTML = `<p>Ism: ${this.ismi}</p>
                                    <p>Familiya: ${this.familiyasi}</p>
                                    <p>Yosh: ${this.yoshi}</p>
                                    <p>Email: ${this.email}</p>`;
        document.body.appendChild(malumotlarDiv);
    }

    malumotlarniSaqlash() {
        localStorage.setItem('foyMalumotlari', JSON.stringify(this));
        alert('Malumotlar saqlandi!');
    }

    static olinganMalumotlarniKorsat() {
       const savedMalumotlar = localStorage.getItem('foyMalumotlari');
        if (savedMalumotlar) {
            const parsedMalumotlar = JSON.parse(savedMalumotlar);
            const foydalanuvchi = new Foydalanuvchi(parsedMalumotlar.ismi, parsedMalumotlar.familiyasi, parsedMalumotlar.yoshi, parsedMalumotlar.email);
            foydalanuvchi.sahifadaChiqar();
        }
    }
}

function doValidate() {
    if (!validateEmail(document.appointment.requiredphone.value) || !validatePhone(document.appointment.requiredphone.value)) {
        alert("Invalid Email");
        return false;
    }
}

const ismi = prompt("Ismingizni kiriting:");
const familiyasi = prompt("Familiyangizni kiriting:");
const yoshi = prompt("Yoshingizni kiriting:");
const email = prompt("Elektron pochtangizni kiriting:");

const foydalanuvchi = new Foydalanuvchi(ismi, familiyasi, yoshi, email);
foydalanuvchi.sahifadaChiqar();

const saqlashBtn = document.getElementById('saqlash-btn');
saqlashBtn.addEventListener('click', () => {
    foydalanuvchi.malumotlarniSaqlash();
});

Foydalanuvchi.olinganMalumotlarniKorsat();
