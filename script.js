function calculateAge(){

const dob=document.getElementById("dob").value;

if(!dob){
alert("Please select your birth date");
return;
}

const birthDate=new Date(dob);
const today=new Date();

let years=today.getFullYear()-birthDate.getFullYear();
let months=today.getMonth()-birthDate.getMonth();
let days=today.getDate()-birthDate.getDate();

if(days<0){
months--;

const previousMonth=
new Date(
today.getFullYear(),
today.getMonth(),
0
);

days+=previousMonth.getDate();
}

if(months<0){
years--;
months+=12;
}

const totalDays=Math.floor(
(today-birthDate)/(1000*60*60*24)
);

let nextBirthday=new Date(
today.getFullYear(),
birthDate.getMonth(),
birthDate.getDate()
);

if(nextBirthday<today){
nextBirthday.setFullYear(
today.getFullYear()+1
);
}

const daysLeft=Math.ceil(
(nextBirthday-today)/
(1000*60*60*24)
);

document.getElementById("result").innerHTML=`
<div class="result-box">
<h3>${years} Years ${months} Months ${days} Days</h3>
<br>
<p>Total Days Lived: ${totalDays}</p>
<p>Next Birthday In: ${daysLeft} Days 🎂</p>
</div>
`;

}