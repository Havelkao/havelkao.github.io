import { addArticleName } from "./content";

export function getURL() {
    let url = "/content";
    if (location.hostname === "https://havelkao.github.io") {
        url = "https://havelkao.github.io/portfolio-content";
    }
    return url;
}

const URL = getURL();

export async function getContent(path) {
    const response = await fetch(URL + path);
    const data = await response.text();
    return data;
}

export async function getArticles(path) {
    const response = await fetch(URL + path);
    const data = await response.json();
    const result = addArticleName(data);
    return result;
}

export async function getProjects(path) {
    const response = await fetch(URL + path);
    const data = await response.json();
    return data;
}
