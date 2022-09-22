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


export async function getWork() {
    const response = await fetch(`${baseUrl}/data/catalog/work`);

    const result =  await response.json();

    return result;
}

export async function deleteWork(photoId) {
    const response = await fetch(`${baseUrl}/data/catalog/delete/${photoId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': getToken()
        }
    });
}


function getToken() {
    try {
        let userItem = localStorage.getItem('admin');

        if(!userItem){
            throw {message: 'You must be authenticated'}
        }

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch (err) {
        console.log(err);
    }
}