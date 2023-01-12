import { fail } from '@sveltejs/kit';
import { LOGIN_EMAIL, LOGIN_PASSW } from '$env/static/private';

// Form Actions
export const actions = {
    // Named Action
    login: async ({ request }) => {
        let user;
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        // Basic server-side form data validation
        if (email == '' && password == '') {
            return fail(400, { email_missing: true, email_message: 'The email field is required.', pass_missing: true, pass_message: 'The password field is required.' });
        }

        if (email == '') {
            return fail(400, { password, email_missing: true, email_message: 'The email field is required.'});
        }

        if (password == '') {
            return fail(400, { email, pass_missing: true, pass_message: 'The password field is required.' });
        }

        if ((email !== '' && email !== LOGIN_EMAIL) && (password !== '' && password !== LOGIN_PASSW)) {
            return fail(400, { email, password, email_incorrect: true, email_message: 'No user found with that email.', pass_incorrect: true, pass_message: 'Password is incorrect.' });
        }

        if (password !== '' && password !== LOGIN_PASSW) {
            return fail(400, { email, password, pass_incorrect: true, pass_message: 'Password is incorrect.' });
        }

        // If form data valid, fetch the User data 
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`);
        user = await res.json();        

        return {
            data: user
        }
    }
}