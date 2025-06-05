<template>
	<div
		:style="`height: ${transHeight}; background: linear-gradient(${startColor}, ${endColor})`"
	></div>
</template>

<style scoped>
div {
	width: 100%;
}
</style>

<script>
export default {
	name: "GradientTransition",
	props: {
		transHeight: {
			type: String,
			required: true,
		},
		startColor: {
			type: String,
			required: true,
		},
		endColor: {
			type: String,
			required: true,
		},
	},
};
</script>
