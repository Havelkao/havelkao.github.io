import { marked } from "marked";
import hljs from "highlight.js";

const renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
    return '<a target="_blank" href="' + href + '" title="' + title + '">' + text + "</a>";
};

marked.setOptions({
    highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
    },
    renderer: renderer,
});

export { marked };
