<script>

import SkillIcon from './SkillIcon.vue';

export default {
	name: 'ProjectContainer',
	props: {
		title: {
			type: String,
			required: true
		},
		blurb: {
			type: String,
			required: true
		},
		skillIcons: {
			type: Array,
			required: true
		},
		ghLink: {
			type: String,
			required: true
		}
	},
	components: {
		SkillIcon
	}
}

</script>

<template>

	<a :href="ghLink" target="_blank" class="projectContainer">
		<h2>{{ title }}</h2>
		<p> {{ blurb }}</p>
		<div class="icons">
			<SkillIcon
				v-for="(skillIcon, index) in skillIcons"
				:key="index"
				:iconClass="skillIcon"
			/>
		</div>
	</a>

</template>

<style>

.projectContainer {
	/* background-color: rgb(42,42,42); */
	background-color: white;
	padding: 22px;
	border-radius: 15px;
	box-shadow: 0px 0px 10px black;
	/*width: min(250px, calc(100% - 40px));*/
	text-align: left;
	color: black;
	text-decoration: none;
	transition: all 0.4s;
	z-index: 1;
	box-sizing: border-box;
	margin: 20px;
	flex: 1 1 calc(33.333% - 10px);

	/*width: min(500px, calc(100% - 40px));*/
	width: 500px;
}

@media (max-width:740px) {
	.projectContainer {
		width: calc(100% - 40px);
	}
}

.projectContainer:hover {
	scale: 1.05;
	/* box-shadow:rgb(0, 100, 207) 0px 0px 20px; */
	box-shadow: #0091FF 0px 0px 20px;
}

.projectContainer p {
	color: black;
}

.projectContainer i {
	color: rgb(0, 100, 207);
}

</style>
