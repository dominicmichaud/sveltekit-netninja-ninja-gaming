//import { LOGIN_EMAIL, LOGIN_PASSW } from '$env/static/private';

export const GET = async ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    let data;
    let status;
    
    if (authHeader !== 'MyAuthHeader') {
        return new Response(JSON.stringify({ message: 'Invalid Credentials'}), { status: '401' });
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz`);
    
    if (res.ok) {
        data = await res.json();
        status = '200';
    } else {
        data = { message: 'User Not Found'};
        status = '500';
    }        

    return new Response(JSON.stringify(data), { status: status });
}

export const POST = async ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    const body = await request.json();

    if (authHeader !== 'MyAuthHeader') {
        return new Response(JSON.stringify({ message: 'Invalid Credentials'}), { status: '401' });
    }

    let data;
    let status;
        
    if (body && Object.keys(body).length > 0) {
        console.log('body', body)
        data = { message: 'Success', body: body};
        status = '200';
    } else {
        data = { message: 'Invalid Request'};
        status = '500';
    }        

    return new Response(JSON.stringify(data), { status: status });
}