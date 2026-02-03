<script>
import SkillContainer from "./SkillContainer.vue";

export default {
	name: "NavBar",
	components: {
		SkillContainer,
	},
};
</script>

<template>
	<div id="section">
		<h1>My Skills</h1>
		<SkillContainer
			icon="javascript"
			title="JavaScript/TypeScript"
			blurb="I have a lot of experience with JavaScript. A project that I created using JavaScript was 'RaceTracker', this is in a public repository on my github profile.
			<br><br>
			I have also created a very basic javaScript front-end framework called 'block.js', also a public repository on my github profile.
			<br></br>
			I have also used TypeScript extensively in my projects, including PaperWeight."
		/>

		<SkillContainer
			icon="unity"
			title="Unity"
			blurb="I have created several games using Unity. One of these was 'Lone Wolf: World War 2', which I created with my brother, and published on Steam.
			<br><br>
			I have also developed a mobile game in Unity."
		/>

		<SkillContainer
			icon="vuejs"
			title="Vue"
			blurb="I have built a wide range of projects using the Vue front-end framework. Including this website, a spreadsheet app (DataFlow), a calculator app, a weight training app (PaperWeight), and a guess-the-movie game, which interacts with a rust back end."
		/>

		<SkillContainer
			icon="rust"
			title="Rust"
			blurb="I have used rust for the backend of two of my projects. It's type safety was really useful, as it meant there are very few runtime errors in the code."
		/>

		<SkillContainer
			icon="java"
			title="Java"
			blurb="Using Java for University projects in COMP102. Gained understanding of data-structures like stacks and 2D arrays."
		/>

		<SkillContainer
			icon="cplusplus"
			title="C++"
			blurb="Using C++ for University projects in ENGR101, including a autonomous burglar alarm and a line following robot project. Learned about solving problems in ways that don't use as much memory, as we were limited by an old Raspberry Pi for the project."
		/>

		<SkillContainer
			icon="supabase"
			title="Supabase"
			blurb="I have used Supabase as a backend for two of my projects - 'PaperWeight' and 'DataFlow'. I used it to store user data, authenticate users, and handle backend functions like communicating with external APIs, without exposing API keys to the front-end."
		/>

        <SkillContainer
            icon="python"
            title="Python"
            blurb="I have used Python for various personal projects, including data analysis and automation scripts. I have used it to webscrape data and automate repetitive tasks. Including extracting house prices from homes.co.nz"
        />
	</div>
</template>

<style scoped>
h1 {
	margin-bottom: 50px;
	width: 100%;
	text-align: center;
	color: white;
	margin-top: 45px;
}

#section {
	margin: 0;
	/*background-color: rgb(0, 157, 255);*/
	/* background: linear-gradient(rgb(0, 157, 255), rgb(0, 120, 255)); */
	/* background: linear-gradient(white, rgb(174, 174, 174)); */
	/*background-color: white;*/
    background-color: #212121;
	padding-bottom: 50px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;
	z-index: 5;
}
</style>
