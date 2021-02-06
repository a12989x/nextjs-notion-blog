const { API_BASE_URL } = process.env;

export const getPosts = async () => await fetch(`${API_BASE_URL}/articles`);
