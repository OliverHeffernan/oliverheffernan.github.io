<script>

export default {
	name: 'ScrollAnimator'
}

</script>

<template>
	<div id="progress"></div>
</template>

<style scoped>

@keyframes grow-progress {
	0% { width: 0; }
	99% {
		border-radius: 0 5px 5px 0;
	}
	100% {
		width: 100%;
		border-radius: 0px;
	}
}

#progress {
	z-index: 20;
	position: fixed;
	height: 10px;
	top: 0;
	left: 0;
	background-color: rgb(236, 249, 255);
	box-shadow: 0px 0px 20px rgb(43, 188, 255);
	border-radius: 0 5px 5px 0;

	transform-origin: 0 50%;
	animation: grow-progress auto linear;
	animation-timeline: scroll();
}

</style>
