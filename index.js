let todoArr= [];
const inputEl=document.querySelector(".input_el")
const addBtn=document.querySelector("#btn_add")
const deleteBtn=document.querySelector("#btn_delete")
let list=document.querySelector("#list_el")
let todoLocalstorage=JSON.parse(localStorage.getItem('todoArr'));
if(todoLocalstorage){
	todoArr=todoLocalstorage
	render(todoArr);
}
addBtn.addEventListener('click', function addBtn() {
	// body...
	if (inputEl.value === "") {
		alert('empty');
	}else{
	todoArr.push(inputEl.value);
	localStorage.setItem('todoArr', JSON.stringify(todoArr));
	render(todoArr)
	inputEl.value=""		
	}
});

function render(listArray) {
	// body...
	let display=''
	for (var i = 0; i < listArray.length; i++) {
		display += `
		<li>
			${i + 1})   ${listArray[i]}
		</li>`
	}
	list.innerHTML = display;
}

deleteBtn.addEventListener('click', function deleteBtn() {
	// body...
	let deletearr=localStorage.clear("todoArr");
	todoArr=[]
	render(todoArr);
})