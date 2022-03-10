import { addArticleName } from "./content";

export function getURL() {
    let url = "https://havelkao.github.io/portfolio-content";
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        url = "/content";
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
