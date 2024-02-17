// perlin blobs by caleb moore
// based on olivia jack's sketch

let mouseX = () => mouse.x * .005
let mouseY = () => mouse.y * .0000005

osc(1, 0.01, 1.1)
	.color(.9,0.91,0.39)
	.rotate(mouseX, .2)
	.diff(o1)
  	.out(o0)

noise(.6, .2)
	.shift(.1)
	.out(o1)

render(o0)