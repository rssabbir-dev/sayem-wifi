const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close');
const closeBtn2 = document.getElementById('close2');
const popupTitle = document.getElementById('popup-title');
const popupContent = document.getElementById('popup-content');

//এলার্ট দেখাবে নাকি দেখাবে নাহ।
//যদি দেখাতে চান তাহলে visible এবং 1
//যদি দেখাতে না চান তাহলে hidden এবং 0
popup.style.visibility = 'visible';
popup.style.opacity = '1';

//এলার্ট এর টাইটেল এবং ভিতরে লেখা।
popupTitle.innerText = 'Notice!';
popupContent.innerText = 'We are upgrading our system now. Please try again few hour later. Sorry for this situation';

closeBtn.addEventListener('click', () => {
	popup.style.visibility = 'hidden';
	popup.style.opacity = '0';
});
closeBtn2.addEventListener('click', () => {
	popup.style.visibility = 'hidden';
	popup.style.opacity = '0';
});

const menuBtnCollection = document.getElementsByClassName('menu-btn');
let active;
for (let i = 0; i < menuBtnCollection.length; i++) {
	menuBtnCollection[i].addEventListener('click', function() {
		const current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
}
