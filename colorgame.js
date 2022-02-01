let num = 15;
let k = 1;
let color = generateColor(num);
let square = document.querySelectorAll(".bo");
let colorW = document.querySelector(".wC");
let pickedColor = color[index(num)];
let tR = document.querySelector("span");
let hD = document.querySelector(".head");
let sT = document.querySelector(".sT");
let easy = document.querySelector(".easy");
let hard = document.querySelector(".hard");


colorW.textContent = pickedColor;

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
		num = 15;
		 k=0;
	color = generateColor(num);
				pickedColor = color[indexe(num)];
				colorW.textContent = color[indexe(num)];

				for(var i=0;i<num;i++){
					//if(color[i])
					
				if(i===0||i===4||i===5||i===7||i===9||i===10||i===14)
						square[i].style.display= "none";
				else 

					square[i].style.backgroundColor = color[i];

	// square[i].style.backgroundColor = color[i];}

	// 		for(var i=3;i<6;i++)
	// 		{
	// 			square[i].style.display= "none";
	// 		}



}
})

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
		num = 15;
		 k=1;
	color = generateColor(num);
				pickedColor = color[index(num)];
				colorW.textContent = color[index(num)];

				for(var i=0;i<num;i++){
	square[i].style.backgroundColor = color[i];
		square[i].style.display= "block";}

})



for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor = color[i];

	square[i].addEventListener("click", function(){
		
	 clickColor = this.style.backgroundColor;
		
		if(clickColor === pickedColor)
		{
			tR.textContent="CORRECT!!";
			tR.classList.add("correct");
			tR.classList.remove("wrong");
			hD.style.backgroundColor=pickedColor;
			for(var j=0;j<square.length;j++){
				square[j].style.backgroundColor = pickedColor;	
			}
			//sT.textContent="PLAY AGAIN"

		}
		else{
			this.style.backgroundColor = "black";
			tR.textContent = "WRONG!!";
			tR.classList.add("wrong");
			sT.textContent="PLAY AGAIN";
		}


	})
	}




sT.addEventListener("click",function(){
				
			//var num = 6;
				sT.textContent="NEW COLOR";

				color = generateColor(num);
				if(k===1){
					pickedColor = color[index(num)];
				colorW.textContent = color[index(num)];
				}
				else{
						pickedColor = color[indexe(num)];
				colorW.textContent = color[indexe(num)];
				}
				

				for(var i=0;i<num;i++){
	square[i].style.backgroundColor = color[i];}

				tR.textContent="";
			hD.style.backgroundColor="lightblue";

				
				})

				
	// 		easy.addEventListener("click",function(){
			
	// 				num = "3";

	// 		color = generateColor(num);
	// 			pickedColor = color[index(num)];
	// 			colorW.textContent = color[index(num)];

	// 			for(var i=0;i<3;i++){
	// square[i].style.backgroundColor = color[i];}


	// 		hD.style.backgroundColor="lightblue";

	// 		alert("yed");
	// 	})

					

				


			


function generateColor(num){
	var arr = []
	//var num;
	for(var i=0;i<num ;i++){
		arr.push(colorG());
	}
	return arr;
}



function index(num){
	

	var n=Math.floor(Math.random()*num);
	
	return n;

	// for(i=0;i<15;i++){
	// var n=Math.floor(Math.random()*num);
	// if(n===0||n===4||n===5||n===7||n===9||n===10||n===14)
	// {
	// 	index(num);
	// }
	// else{
	// 		return n;
	// }
	// }
}


function indexe(num){
	
	
	for(i=0;i<15;i++){
	var n=Math.floor(Math.random()*num);
	if(n===0||n===4||n===5||n===7||n===9||n===10||n===14)
	{
		index(15);
	}
	else{
			return n;
	}
	}

	// var n=Math.floor(Math.random()*num);
	
	// return n;

	}





function colorG(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	 return "rgb("+r+", "+g+", "+b+")";
}
