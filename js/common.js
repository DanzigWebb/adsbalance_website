let vertSlider = {
	step: screen.height,
	count: 0,
	content: document.querySelector('.main-wrap'),
	fix: true,

	init() {
		window.addEventListener('wheel', (e) => {
			console.log(e.deltaY)
			if (e.deltaY > 0 & this.fix) {
				this.fix = false;
				this.scrollBot();
				setTimeout(() => this.fix = true, 200);
			}
			if (e.deltaY < 0) {
				this.scrollTop()
				console.log(this.count)
			}
		})
	},
	scrollBot() {
		this.count += this.step;
		this.content.style.transform = `translateY(-${this.count}px)`;
	},
	scrollTop() {
		this.count -= this.step;
		this.content.style.transform = `translateY(-${this.count}px)`;
	}
}
vertSlider.init()