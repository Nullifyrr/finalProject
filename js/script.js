alert("hey this website uses cookies")
// Save the cookies
// 1. Get the variable (from our previous step)
const params = new URLSearchParams(window.location.search);
const myText = params.get('text');

// 2. Save it to a cookie if it exists
if (myText) {
    // We set the name 'user_message', the value, and an expiration
    document.cookie = "text=" + encodeURIComponent(myText) + "; max-age=864000; path=/; SameSite=Lax";
    
    console.log("Cookie has been set!");
}

// Call back the cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
}

// Usage:
const savedText = getCookie('text');
console.log("The saved cookie is: " + savedText);