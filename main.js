const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function getTime(){
	const time = new Date();

	const seconds = time.getSeconds();
	const sDegree = ((seconds / 60) * 360) + 90;
	second.style.transform = 'rotate('+sDegree+'deg)';

	const minutes = time.getMinutes();
	const mDegree = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
	minute.style.transform = 'rotate('+mDegree+'deg)';

	const hours = time.getHours();
	const hDegree = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
	hour.style.transform = 'rotate('+hDegree+'deg)';
}

setInterval(getTime, 1000);
getTime();