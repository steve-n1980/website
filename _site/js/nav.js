var navActive = false,
    navOpen = document.querySelector('.nav__btn'),
    navListOpen = document.querySelector('.nav__list');

navOpen.addEventListener("click", function(event){
	event.preventDefault();

    if (navActive === false) {
	    navActive = true;
	    navListOpen.classList.add("active");
	} else {
		 navActive = false;
		 navListOpen.classList.remove("active");
	}
});
