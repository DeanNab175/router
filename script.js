const tabs = document.querySelectorAll(".tab");

const pageSetting = document.querySelector(".page-setting");
const pageSettingContents = document.querySelectorAll(".page-setting__content");

const navbar = document.querySelector(".navbar");
const navs = document.querySelectorAll(".nav");


tabs.forEach(tab => {

	const tabButton = tab.querySelectorAll(".tab__button");
	const contents = tab.querySelectorAll(".tab__content");
	const tabButtonLen = tabButton.length
	tabButton[0].classList.add("first")

	if(tabButtonLen > 1)
		tabButton[tabButtonLen - 1].classList.add("last")

	tab.addEventListener('click', e => {

		const id = e.target.dataset.id;
		console.log(tabButton, contents)
		
		if(contents.length > 1 && id) {

			const tabContent = document.getElementById(id);

			toggleTargetElClass(tabButton, e.target)
	
			if(tabContent !== null) {
				toggleTargetElClass(contents, tabContent)
			}
		}
	})
})

navs.forEach(nav => {
	nav.addEventListener('click', e => {
		const id = e.target.dataset.id;
		const navLink = nav.querySelectorAll(".nav__link");

		/* Show / Hide page setting */
		if(id) {

			const pageContentEl = document.getElementById(id);

			toggleTargetElClass(navLink, e.target)

			if(pageContentEl !== null) {
				toggleTargetElClass(pageSettingContents, pageContentEl)
			}
		}
	})
})

navbar.addEventListener('click', e => {

	/* Set active menu setting */
	if (e.target.hasAttribute("data-title") || e.target.parentElement.hasAttribute("data-title")) {
		toggleTargetElClass(navs, e.target.closest(".nav"))
	}

})


/* Toggle target element active class and remove sibling active class */
function toggleTargetElClass(els, targetEl, clName = 'active') {
	els.forEach(el => {
		el.classList.remove(clName);
	});

	targetEl.classList.add(clName)
}