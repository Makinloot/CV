import { skillsData } from './js/data.js';

displaySkills(skillsData);
function displaySkills(data) {
	data.forEach(item => {
		const { skill, icon_class } = item;
		const HTML = `
			<li>
				<div class="flex-row">
					<i class="${icon_class}"></i>
					<h4>${skill}</h4>
				</div>
			</li>
		`;
		document.getElementById('skills-list').innerHTML += HTML;
	})
}