const baseUrl = 'http://localhost:3030';

export async function create(image, caption) {
    const response = await fetch(`${baseUrl}/data/catalog/create`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify({image, caption})
    });

    const result = await response.json();

    return result;
}