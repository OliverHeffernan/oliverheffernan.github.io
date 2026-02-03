<script>

import ProjectContainer from './ProjectContainer.vue';

export default {
	name: 'ProjectSection',
	components: {
		ProjectContainer
	}
}

</script>

<template>
	<div id="projectsSection">
		<h1>My Projects</h1>
		<h3>Click on the container to view the project.</h3>

		<div id="projectsContainer">
			<ProjectContainer
				title="PaperWeight"
				blurb="An app to upload written workout logs, and digitise them using openAI API, and a supabase backend."
				ghLink="https://github.com/OliverHeffernan/PaperWeight"
				:skillIcons="['fa-brands fa-vuejs', 'fa-brands fa-square-js', 'devicon-supabase-plain']"
			/>
			<ProjectContainer
				title="DataFlow"
				blurb="A spreadsheet app with vim-like motions. Built in Tauri, with Vue front-end and Rust back-end."
				ghLink="https://github.com/OliverHeffernan/DataFlow"
				:skillIcons="['fa-brands fa-vuejs', 'fa-brands fa-square-js', 'fa-brands fa-rust']"
			/>
			<ProjectContainer
				title="Lone Wolf: World War 2"
				blurb="It is the dawn of World War 2 and you just joined the Royal Air Force! Fly over Europe and Northern Africa fighting against the enemy forces from above. Can you defeat the enemy and win the war?"
				ghLink="https://store.steampowered.com/app/1399180/Lone_Wolf_World_War_2/"
				:skillIcons="['fa-brands fa-unity', 'fa-brands fa-steam']"
			/>
			<ProjectContainer
				title="movieGame"
				blurb="A simple guess the movie game. Makes requests to a Rust backend to get data from the TMDb API."
				ghLink="https://github.com/OliverHeffernan/movieGame"
				:skillIcons="['fa-brands fa-vuejs', 'fa-brands fa-square-js', 'fa-brands fa-rust']"
			/>
			<ProjectContainer
				title="RaceTracker"
				blurb="A free to use running race organiser. Fully editable results, exportable pdf results. All data is handled through JavaScript on the client-side, so your information is safe."
				ghLink="https://oliverheffernan.github.io/Racetracker/"
				:skillIcons="['fa-brands fa-square-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']"
			/>
			<ProjectContainer
				title="mdPreview"
				blurb="A native macOS application built using the Cocoa API in Objective-C. It allows users to quickly view markdown files as rendered HTML, with support for light and dark modes. The app can be set as the default application for opening markdown files."
				ghLink="https://github.com/OliverHeffernan/mdPreview"
				:skillIcons="['devicon-apple-original', 'devicon-objectivec-plain']"
			/>
			<ProjectContainer
				title="Comments.nvim"
				blurb="A plugin for neovim that allows you to comment any line of code in a wide range of languages, with a simple command."
				ghLink="https://github.com/OliverHeffernan/comments.nvim"
				:skillIcons="['devicon-vim-plain', 'devicon-lua-plain']"
			/>
			<ProjectContainer
				title="Block.js Library"
				blurb="Block.js is an open-source, lightweight, simple-to-use JavaScript front-end framework. It makes it extremely simple to have multiple similar elements, without extremely repetitive code."
				ghLink="https://github.com/OliverHeffernan/block-js-library"
				:skillIcons="['fa-brands fa-square-js']"
			/>
			<ProjectContainer
				title="Flash Flip"
				blurb="A flashcard web-app targetted toward students. Users can download their flashcard sets in JSON format to reupload later, or as pdfs, to view offline or print."
				ghLink="https://github.com/OliverHeffernan/flash-flip"
				:skillIcons="['fa-brands fa-vuejs', 'fa-brands fa-square-js', 'devicon-supabase-plain']"
			/>
			<ProjectContainer
				title="Markdown To HTML Converter"
				blurb="A simple tool that converts markdown code to html, and vice versa."
				ghLink="https://oliverheffernan.github.io/markdown-to-html-translator/"
				:skillIcons="['fa-brands fa-square-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']"
			/>
			<ProjectContainer
				title="Calc"
				blurb="A keyboard based calculator built in Vue. Utilises the math.js library. Includes features like syntax highlighting, bracket pair highlighting, super script, multi-line calculations, and a wide range of mathematical functions."
				ghLink="https://oliverheffernan.github.io/vue-calculator/"
				:skillIcons="['fa-brands fa-vuejs', 'fa-brands fa-square-js']"
			/>
			<ProjectContainer
				title="Ice Cold VS Code theme"
				blurb="A dark theme for Visual Studio Code, a dark deep slate blue background, and blue tones on the text. It creates a blue vibe without sacrificing readability of code."
				ghLink="https://github.com/OliverHeffernan/ice-cold-VSCode-theme"
				:skillIcons="['fa-brands fa-square-js']"
			/>
			<ProjectContainer
				title="Ice Cold Neovim theme"
				blurb="An improved version of 'Ice Cold VS Code theme' for Neovim. Written in lua."
				ghLink="https://github.com/OliverHeffernan/ice-cold.nvim"
				:skillIcons="['devicon-vim-plain', 'devicon-lua-plain']"
			/>
		</div>
	</div>

</template>

<style scoped>

#projectsContainer {
	/* background: linear-gradient(#00ffa2, #0094a8); */
	background: none;
	/* width: 100%; */
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	justify-content: center;
	gap: 10px;
	width: min(1095px, calc(100vw - 80px));
	/*width: calc(1095px);*/
}

@media (max-width: 740px) {
	#projectsContainer {
		flex-direction: column;
	}
}

h1 {
	margin-top: 50px;
}

h3 {
	margin-bottom: 50px;
}

#projectsSection {
	padding-top: 35px;
	background: linear-gradient(#212121, black);
	text-align: center;
    background-color: #212121;
}

</style>
