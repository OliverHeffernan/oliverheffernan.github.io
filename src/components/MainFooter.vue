<script>
export default {
	methods: {
		copyEmail() {
			navigator.clipboard.writeText("oliverheffernan@icloud.com");
		}
	}
}

</script>

<template>
	<footer>
		<div id="centered">
			<div id="contacts" class="column">
				<h3>Oliver Heffernan</h3>
				<div id="socialLinks">
					<a href="https://github.com/OliverHeffernan" target="_blank"><i class="fa-brands fa-github"></i></a>
					<a href="https://www.instagram.com/o.heff/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
					<a href="https://www.linkedin.com/in/oliver-heffernan-b22527357/" target="_blank">
						<i class="fa-brands fa-linkedin"></i>
					</a>
				</div>
				<button @click="copyEmail">
					<h3>
						<i id="envelope" class="fa-solid fa-envelope"></i>
						<i id="clipboard" class="fa-solid fa-clipboard first-hidden"></i>
						<i id="clipboard-check" class="fa-solid fa-clipboard-check first-hidden"></i>
						oliverheffernan@icloud.com
					</h3>
				</button>
			</div>
			<!--
			<div id="projectLinks" class="column">
				<h4>Project Links</h4>
				<ul>
					<li><a href="https://github.com/OliverHeffernan/Racetracker">RaceTracker</a></li>
					<li><a href="https://github.com/OliverHeffernan/block-js-library">Block.js Library</a></li>
					<li><a href="https://github.com/OliverHeffernan/markdown-to-html-translator">Markdown To HTML Converter</a></li>
					<li><a href="https://github.com/OliverHeffernan/vue-calculator">Vue Calculator</a></li>
				</ul>
			</div>
			-->
		</div>
	</footer>
</template>

<style>



footer {
	background-color: black;
	color: white;
	padding: 50px 20px;
	/*
	display: flex;
	flex-wrap: wrap;
	*/

	z-index:10;
}

footer #centered {
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	z-index: 10;
}

.column {
	padding: 20px 20px;
	/*width: max(40vw, 220px);*/
	width: 100%;
}

#projectLinks {
	display: block;
}

#projectLinks ul {
	list-style: none;
}

#projectLinks a {
	text-decoration: none;
	color: white;
}

footer #socialLinks a {
	font-size: 20px;
	margin: 5px;
	color: white;
}

footer h3 i {
	margin: 5px;
	width: 10px;
}

footer button {
	background-color: rgb(0, 100, 207);
	border: none;
	border-radius: 3px;
	color: white;
	padding: 5px;
	margin: 5px 0;
	display: flex;
	cursor: pointer;
	width: 255px
}

footer button .first-hidden {
	display: none;
}

footer button:hover #envelope {
	display: none;
}

footer button:hover #clipboard {
	display: inline-block;
}

footer button:focus #clipboard {
	display: none;
}

footer button:focus #clipboard-check {
	display: inline-block;
}

footer button:focus #envelope {
	display: none;
}

#projectLinks ul li a:hover {
	font-weight: bold;
}

</style>
