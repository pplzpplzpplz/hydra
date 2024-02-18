// HOT NIGHTZ
// by caleb moore



osc(5, .2, 2)
	.diff(o1)
	.color(({time}) => Math.sin(time), .2, .2)
	.out(o0)

osc(45, .01)
	.rotate(1.5)
	.out(o1)

render(o0)