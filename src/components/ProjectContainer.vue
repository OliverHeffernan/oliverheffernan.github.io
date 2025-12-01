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
        <div class="icons" v-if="skillIcons.length > 0">
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
	background-color: rgb(42, 42, 42);
    position: relative;
	/*background-color: white;*/
	padding: 22px;
	border-radius: 15px;
    border: 1px solid rgb(120,120,120);
    box-shadow: 0px 2px 2px rgb(120,120,120);
	/*width: min(250px, calc(100% - 40px));*/
	text-align: left;
	color: white;
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
	color: white;
    padding-bottom: 40px;
}

.projectContainer i {
	/*color: rgb(0, 100, 207);*/
    /*color: rgb(0, 145, 255);*/
    /*color: #06BFF4;*/
    color: rgb(30,30,30);
    margin: 0;
    padding: 0;
}

.icons {
    position: absolute;
    bottom: 5px;
    right: 6px;
    padding: 10px;
    background-color: #06BFF4;
    border-radius: 17px;
    display: flex;
    gap: 8px;
}

h2 {
    /*color: rgb(0, 145, 255);*/
    /*color: #06BFF4;*/
    color: white;
}

</style>
