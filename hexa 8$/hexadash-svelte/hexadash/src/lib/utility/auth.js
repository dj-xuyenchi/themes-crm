
export const validateUserToken = async() => {
    try {

        // eslint-disable-next-line no-undef
        if(response) {
            // Valid user found
            // eslint-disable-next-line no-undef
            user.set(response);
        } else {
            // Unset the user store
            // eslint-disable-next-line no-undef
            user.set({});

            // Invalid user found. Grab their current location to match against the publicRoutes list
            let currentLocation = window.location.pathname;

            // This will redirect if the unauthenticated user is on a private route
            // eslint-disable-next-line no-undef
            if(!publicRoutes.includes(currentLocation)) {
                // eslint-disable-next-line no-undef
                await goto("/login?error=expired-token");
                return false;
            }
        }
    } catch(error) {
        // User has invalid token, so log them out
        // eslint-disable-next-line no-undef
        await Backendless.UserService.logout();
        // eslint-disable-next-line no-undef
        await goto("/?error=expired-token");
        return false;
    }
}


