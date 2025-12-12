import projectsJSON from "@/json/projects.json";

export default function strMatchesRegex(pStr, aRegex) {
	for (let x = 0; x < aRegex.length; x++) {
		if (aRegex[x].test(pStr)) {
			return true;
		}
	}
	return false;
}

export class Project {
	constructor(
		title = "",
		subtitle = "",
		description = "",
		academyProject = false,
		awards = [],
		credits = [],
		medias = []
	) {
		this.title = title;
		this.subtitle = subtitle;
		this.description = description;
		this.academyProject = academyProject;
		this.awards = awards;
		this.credits = credits;
		this.medias = medias;
	}
}

export class Award {
	constructor(title = "", event = "") {
		this.title = title;
		this.event = event;
	}
}

export class Credit {
	constructor(title = "", name = "") {
		this.title = title;
		this.name = name;
	}
}

export class Media {
	constructor(type = "", src = "") {
		this.type = type;
		this.src = src;
	}
}

export function getProjectByID(pID) {
	let lProjAux = projectsJSON[pID];
	var lProject = new Project();

	if (lProjAux) {
		lProject.title = lProjAux.title;
		lProject.subtitle = lProjAux.subtitle;
		lProject.description = lProjAux.description;
		lProject.academyProject = lProjAux.academyProject;

		if (lProjAux.awards) {
			for (let lAward of lProjAux.awards) {
				lProject.awards.push(new Award(lAward.title, lAward.event));
			}
		}

		if (lProjAux.credits) {
			for (let lCredit of lProjAux.credits) {
				lProject.credits.push(new Credit(lCredit.title, lCredit.name));
			}
		}

		if (lProjAux.medias) {
			for (let lMedia of lProjAux.medias) {
				lProject.medias.push(new Media(lMedia.type, lMedia.url));
			}
		}
	}

	console.log(lProject)

	return lProject;
}

export async function getIcon(pID) {
	const lSrc = `/svg/ic-${pID}.svg?raw`;
	return await fetch(lSrc)
		.then((response) => response.blob())
		.then((data) => {
			return data.text();
		})
		.catch((error) => {
			console.error(error);
		});
}
