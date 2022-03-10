export function addArticleName(articles) {
    return articles.map((article) => {
        return {
            ...article,
            name: article.title.replace(/\s+/g, "-").toLowerCase(),
        };
    });
}
