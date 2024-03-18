const TOKEN_GITHUB = import.meta.env.VITE_GITHUB_TOKEN;
export const fetchPopularRepos = async () => {

    const response = await fetch(`https://api.github.com/search/repositories?q=org:No-Country&sort=stars&order=desc&per_page=5`, {
        headers: {
            Authorization: `token ${TOKEN_GITHUB}`,
        },
    });
    const data = await response.json();
    return data.items
}