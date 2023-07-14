import { token } from '@store/store';

export const validateUserToken = async() => {
    try {
        let accessToken = token;

        if(response) {
            // Valid user found
            user.set(response);
        } else {
            // Unset the user store
            user.set({});

            // Invalid user found. Grab their current location to match against the publicRoutes list
            let currentLocation = window.location.pathname;

            // This will redirect if the unauthenticated user is on a private route
            if(!publicRoutes.includes(currentLocation)) {
                await goto("/login?error=expired-token");
                return false;
            }
        }
    } catch(error) {
        // User has invalid token, so log them out
        await Backendless.UserService.logout();
        await goto("/?error=expired-token");
        return false;
    }
}


