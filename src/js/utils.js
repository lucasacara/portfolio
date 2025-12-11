import projectsJSON from '@/json/projects.json';

export default function strMatchesRegex(pStr, aRegex) {
	for (let x = 0; x < aRegex.length; x++) {
		if (aRegex[x].test(pStr)) {
			return true;
		}
	}
	return false;
}

export class Project {
	constructor(title = "", subtitle = "", description = "", academyProject = false) {
		this.title = title;
		this.subtitle = subtitle;
		this.description = description;
		this.academyProject = academyProject;
	}
}