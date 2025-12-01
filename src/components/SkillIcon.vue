<script>

export default {
	name: "SkillIcon",
	props: {
		iconClass: {
			type: String,
			required: true
		}
	}
}

</script>

<template>
	<i :class="iconClass"></i>
</template>

<style scoped>

i {
	margin: 5px;
	font-size: 20px;
}

</style>
