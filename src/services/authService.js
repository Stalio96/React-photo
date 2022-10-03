const baseUrl = 'https://guarded-inlet-03061.herokuapp.com';

export async function login(username, password) {
    const response = await fetch(`${baseUrl}/admin/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });

    const result = await response.json();

    if(response.ok) {
        localStorage.setItem('admin', username);

        return result;
    }else {
        throw result.message;
    }

}

export async function logout(token) {
    const response = await fetch(`${baseUrl}/admin/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    });
}

export function getUSer() {
    return localStorage.getItem('admin');
}