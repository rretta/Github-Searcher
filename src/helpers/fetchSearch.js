const TOKEN_GITHUB = import.meta.env.VITE_GITHUB_TOKEN;
export const fetchSearch = async (searchTerm) => {
    const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}+in%3Afullname`, {
        headers: {
            Authorization: `token ${TOKEN_GITHUB}`,
        },
    });
    const data = await response.json();
    return data



};

