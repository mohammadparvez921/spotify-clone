export const ACCESS_TOKEN="ACCESS_TOKEN";
export const TOKEN_TYPE="TOKEN_TYPE";
export const EXPIRES_IN="EXPIRES_IN";

const APP_URL="http://localhost:3000";

export const ENDPOINT={
    userInfo:"me"
}

export const logout=()=>{
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(EXPIRES_IN);
    localStorage.removeItem(TOKEN_TYPE);
    window.location.href=APP_URL;
}