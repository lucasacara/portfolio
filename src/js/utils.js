import projectsJSON from '@/json/projects.json';

export default function strMatchesRegex(pStr, aRegex) {
  for (let x = 0; x < aRegex.length; x++) {
    if (aRegex[x].test(pStr)) {
      return true;
    }
  }
  return false;
}

