const TOKEN_GITHUB = import.meta.env.VITE_GITHUB_TOKEN;
export const fetchUser = async (id) => {
    const response = await fetch(`https://api.github.com/users/${id}`, {
        headers: {
            Authorization: `token ${TOKEN_GITHUB}`,
        },
    });
    const data = await response.json();
    return data
};

