const baseUrl = 'http://localhost:3030';

// export async function createRealEstate(image, caption) {
//     const response = await fetch(`${baseUrl}/api/catalog/createRealEstate`, {
//         method: 'POST',
//         headers: {
//             // 'Content-Type': 'multipart/form-data'
//         },
//         body: JSON.stringify({image, caption})
//     });

//     const result = await response.json();

//     return result;
// }


export async function getRealEstates() {
    const response = await fetch(`${baseUrl}/api/catalog/realestate`);

    const result =  await response.json();

    return result;
}

export async function deleteRealEstate(photoId) {
    const response = await fetch(`${baseUrl}/api/catalog/delete/${photoId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': getToken()
        }
    });
}

export async function getPortrait() {
    const response = await fetch(`${baseUrl}/api/catalog/portrait`);

    const result =  await response.json();

    return result;
}

export async function deletePortrait(photoId) {
    const response = await fetch(`${baseUrl}/api/catalog/deletePortrait/${photoId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': getToken()
        }
    });
}

export async function getProduct() {
    const response = await fetch(`${baseUrl}/api/catalog/product`);

    const result =  await response.json();

    return result;
}

export async function deleteProduct(photoId) {
    const response = await fetch(`${baseUrl}/api/catalog/deleteProduct/${photoId}`, {
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