export function addArticleName(articles) {
    return articles.map((article) => {
        return {
            ...article,
            name: formatURI(article.title),
        };
    });
}

function formatURI(str) {
    return str
        .replace(/[^\w\s-_]+/g, "") // remove non alphanumeric
        .replace(/\s+/g, "-") // replace spaces with dashes
        .replace(/-+/g, "-") // remove any extra dashes
        .toLowerCase();
}
