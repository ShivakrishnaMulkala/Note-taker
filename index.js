 
var arr = [];



console.log(document.querySelector('#submitBtn'))

let submitBtn= document.querySelector('#submitBtn');
 
submitBtn.addEventListener('click', e =>{
    e.preventDefault();
    
    
    
  const text = document.querySelector('#text-input').value
	console.log(text);
	
    const newTime = document.querySelector('#text-time').value

    
   const checkBox = document.querySelector('#checkbox').checked
   
   
 
    const newLi = document.createElement('li')
    newLi.setAttribute('class', ' d-flex justify-content-around h1 list-group-item mb-2')
    const newGettime = document.createElement('span')
    newGettime.setAttribute('class','h3 color-grey')
    const delBtn = document.createElement('button')
    delBtn.setAttribute('class','ml-6 btn btn-danger')
    delBtn.setAttribute('id','delBtn1')
    newGettime.textContent = newTime
    newLi.textContent = text;
     newLi.appendChild(newGettime)
     delBtn.innerText = ('Delete');
     newLi.appendChild(delBtn)
     setTimeout(()=>{colorCh(newLi,checkBox)},0)
     document.querySelector('ul').appendChild(newLi)
 
     function deleteBtn(){
		 newLi.parentNode.removeChild(newLi)
	 }
	 delBtn.addEventListener('click', deleteBtn)
  
	 function colorCh(newLI, checkBox){
		 if(checkBox){
			 newLi.classList.add('plus')
		 }else{
			 newLi.classList.add('minus')

		 }}
     
 })
   
 
   
 const btn = document.getElementById('submitBtn');
 btn.addEventListener('click', function handleClick(event) {
   // 👇️ if you are submitting a form (prevents page reload)
   event.preventDefault()
    const textinput = document.getElementById('text-input');
 console.log();(textinput.value);
 
 textinput.value = '';

 const timeInput = document.getElementById('text-time');

 console.log;(timeInput.value);

 timeInput.value = '';


 const checkBoxInput = document.getElementById('checkbox');

 console.log(checkBoxInput.value);

 checkBoxInput.checked = '';
    

 });