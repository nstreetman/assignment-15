var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

// GO!

// TASK 1 -- Show/Hide Nav
//Add a button into the answer-box that, when clicked, will toggle the visibility of the nav menu.
//Hint: The easiest way is probably to add/remove the class nav-menu-hidden on the nav element.//


document.querySelector("#hide-nav button").addEventListener('click',function(){
  var navEl = document.querySelector('nav');
	navEl.classList.toggle('nav-menu-hidden');
  })


// TASK 2 -- Select an Icon
//When you click on an element it should add or remove a class of 'selected' to the element that was clicked.
//Hint:You will likely want to use evt.currentTarget rather than evt.target

var selectEls = document.querySelectorAll('.option')
forEach(selectEls, function(optionEl, i, Array){
	optionEl.addEventListener('click', function(evt){
		var targetEl = evt.currentTarget;
		if (targetEl.className !== 'selected'){
			targetEl.classList.toggle('selected')
		}
	})
})



// TASK 3 --//When you click on a button with a number, it should increase the total by that amount.

var circleElements = document.querySelectorAll('.point')
var pointsTotalDiv = document.querySelector('.total-points')
var pointsTotal = parseInt(pointsTotalDiv.textContent)
	forEach(circleElements, function(buttonEls, i, Array){
		buttonEls.addEventListener('click', function(evt){
			var targetedCircle = evt.target
				if(targetedCircle.className === 'point'){
					var numOfPoints = parseInt(targetedCircle.textContent)
					pointsTotal += numOfPoints;
					// console.log(pointsTotal)
					pointsTotalDiv.innerHTML = '<h4 class="total-points">' + pointsTotal + '</h4>'
					// console.log(pointsTotalDiv)
				}
		})
	})




// TASK 4 -- Move Item From List to List
//When you click on an element it should be put on the other list

//Hint To solve this you will need to select all of the <li> elements, iterate over them
//and put an event listener (.addEventListener) on each element.
//Some properties/methods you may want to consider: .parentNode and .appendChild.







// TASK 5 -- When you click on the appropriate <span class='bg-«color»'> element,
//you should take the value for that element's bg-«color» class and
//add it as another class on the <p class='msg'>' element to change its background.

//Hint: To get started, you will need to select all of the <span> elements,
//iterate over them and put an event listener (.addEventListener) on each element.
//When an element is clicked, you will first need to remove whatever bg-«color»
//class that exists on the <p class='msg'>' before adding
//the new bg-«color» class from the clicked element.
