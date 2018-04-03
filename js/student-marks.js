function calculate() {

    var total = parseInt(marks['lenguaje-marks'].value) + parseInt(marks['quimica-marks'].value) + parseInt(marks['sociales-marks'].value) + parseInt(marks['matematicas-marks'].value) + parseInt(marks['ciencia-marks'].value) + parseInt(marks['filosofia-marks'].value);

    document.querySelector('#total-marks').innerHTML = total + '';
    document.querySelector('#percentage').innerHTML = total / 5.99 + '';
}

function populateContent(){
    var currentStudentIndex = parseInt(localStorage.getItem('currentStudentIndex'));
    var currentStudent = JSON.parse(localStorage.getItem('student'+currentStudentIndex));
    document.querySelector('#name').innerHTML = currentStudent.name;
    document.querySelector('#class').innerHTML = currentStudent.class;
    document.querySelector('#roll-number').innerHTML = currentStudent.rollNumber;
    document.querySelector('#gender').innerHTML = currentStudent.gender;
    console.log(currentStudent.gender);
}

onload = populateContent;
