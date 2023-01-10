const baseUrl = 'https://guarded-inlet-03061.herokuapp.com';
// const baseUrl = 'http://localhost:3030';

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

export async function getRealEstatesCarousel() {
    const response = await fetch(`${baseUrl}/api/catalog/realestateCarousel`);

    const result =  await response.json();

    return result;
}

export async function deleteRealEstate(photoId) {
    const response = await fetch(`${baseUrl}/api/catalog/deleteRealEstate/${photoId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': getToken()
        }
    });
}

export async function deleteRealEstateCarousel(photoId) {
    const response = await fetch(`${baseUrl}/api/catalog/deleteRealEstateCarousel/${photoId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': getToken()
        }
    });
}

export async function getFamily() {
    const response = await fetch(`${baseUrl}/api/catalog/family`);

    const result =  await response.json();

    return result;
}

export async function deleteFamily(photoId) {
    const response = await fetch(`${baseUrl}/api/catalog/deleteFamily/${photoId}`, {
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

export async function getPortraitCarousel() {
    const response = await fetch(`${baseUrl}/api/catalog/portraitCarousel`);

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

export async function deletePortraitCarousel(photoId) {
    const response = await fetch(`${baseUrl}/api/catalog/deletePortraitCarousel/${photoId}`, {
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

export async function getProductCarousel() {
    const response = await fetch(`${baseUrl}/api/catalog/productCarousel`);

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

export async function deleteProductCarousel(photoId) {
    const response = await fetch(`${baseUrl}/api/catalog/deleteProductCarousel/${photoId}`, {
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