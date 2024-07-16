const windowEventListeners = [
	'DOMContentLoaded',
	'orientationchange',
	'onresize',
];

const equalHeightDivs = (larger, smaller) => {
	smaller.style.height = `${larger.offsetHeight}px`;
};

const toggleMap = () => {
	document.getElementById('map-p-div').classList.toggle('map-p-toggle-on');
	document.getElementById('map-p-div').classList.toggle('map-p-toggle-off');
	document
		.getElementById('info-div-map')
		.classList.toggle('info-div-map-toggle-off');
	document
		.getElementById('map-poster')
		.classList.toggle('map-poster-toggle-off');
};

windowEventListeners.forEach((item) =>
	window.addEventListener(item, (event) => {
		if (document.getElementById('video-title-larger')) {
			equalHeightDivs(
				document.getElementById('video-title-larger'),
				document.getElementById('video-title-smaller')
			);
		}

		if (
			document.getElementById('map-p') &&
			window.matchMedia('(min-width: 992px)').matches
		) {
			equalHeightDivs(
				document.getElementById('map-p'),
				document.getElementById('map-poster')
			);
			equalHeightDivs(
				document.getElementById('col-of-mac'),
				document.getElementById('art-whispers-video')
			);
		}

		if (document.getElementById('burger-lines')) {
			document.getElementById('burger-lines').onclick = function () {
				document
					.getElementById('mac-logo')
					.classList.toggle('mac-logo-div');
				document
					.getElementById('menu2-2v')
					.classList.toggle('nav-section-pad');
			};
		}

		if (
			document.getElementById('map-title') &&
			window.matchMedia('(max-width: 991.98px)').matches
		) {
			document
				.getElementById('map-p-div')
				.classList.add('map-p-toggle-off');
		}

		if (document.getElementById('map-title')) {
			document.getElementById('info-button-map').onclick = toggleMap;
			document.getElementById('close-button-map').onclick = toggleMap;
		}

		let mybutton = document.getElementById('back-top-button');
		let elementTarget = document.getElementById('features3-3w');

		const scrollFunction = () =>
			window.scrollY >
			elementTarget.offsetTop + elementTarget.offsetHeight
				? (mybutton.style.display = 'block')
				: (mybutton.style.display = 'none');

		const topFunction = () =>
			document.getElementById('features3-37').scrollIntoView();

		if (elementTarget) {
			window.onscroll = scrollFunction;
			mybutton.onclick = topFunction;
		}
	})
);
