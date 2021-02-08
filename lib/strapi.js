const { API_BASE_URL } = process.env;

export const getPosts = async () => {
    const res = await fetch(`${API_BASE_URL}/articles`);
    const data = await res.json();

    return data;
};
