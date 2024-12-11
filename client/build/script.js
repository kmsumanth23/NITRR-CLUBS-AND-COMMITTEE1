// JavaScript to handle modals

// Get the modals
var loginModal = document.getElementById("loginModal");
var signUpModal = document.getElementById("signUpModal");
var authorisedModal = document.getElementById("authorisedModal");

// Get the "Log in" link in the sign-up modal
var loginLink = document.getElementById("loginLink");

// When the user clicks the "Log in" link, open the login modal
loginLink.onclick = function() {
    signUpModal.style.display = "none";
    loginModal.style.display = "block";
}

// Get the button that opens the login modal
var loginBtn = document.querySelector(".login-icon-container");

// Get the <span> elements that close the modals
var closeLogin = document.querySelector(".close");
var closeSignUp = document.querySelector(".close-signup");
var closeAuthorised = document.querySelector(".close-authorised");

// Get the "Sign Up" link
var signUpLink = document.getElementById("sign Up");

// When the user clicks the login button, open the login modal
// loginBtn.onclick = function() {
//     loginModal.style.display = "block";
// }

// Wait for the element to be loaded
// document.addEventListener('DOMContentLoaded', function() {
//     var loginBtn = document.getElementById("loginBtn");
//     if (loginBtn) {
//         loginBtn.onclick = function(event) {
//             event.preventDefault(); 
//             loginModal.style.display = "block";
//         }
//     }
// });
loginBtn.onclick = function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the login modal
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// When the user clicks on <span> (x), close the sign-up modal
closeSignUp.onclick = function() {
    signUpModal.style.display = "none";
}

// When the user clicks on <span> (x), close the authorised user modal
closeAuthorised.onclick = function() {
    authorisedModal.style.display = "none";
}

// When the user clicks the "Sign Up" link, close the login modal and open the sign-up modal
// signUpLink.onclick = function(event) {
//     event.preventDefault(); // Prevent default link behavior
//     loginModal.style.display = "none";
//     signUpModal.style.display = "block";
// }

// When the user clicks anywhere outside of the modals, close them
// window.onclick = function(event) {
//     console.log('Window clicked', event.target);
//     if (event.target == loginModal) {
//         console.log('Clicked outside loginModal');
//         loginModal.style.display = "none";
//     } else if (event.target == signUpModal) {
//         console.log('Clicked outside signUpModal');
//         signUpModal.style.display = "none";
//     } else if (event.target == authorisedModal) {
//         console.log('Clicked outside authorisedModal');
//         authorisedModal.style.display = "none";
//     }
// }




// Authorized user modal
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function openStudentModal() {
    document.getElementById('loginModal').style.display = 'block';
    signUpLink.onclick = function(event) {
        event.preventDefault(); // Prevent default link behavior
        loginModal.style.display = "none";
        signUpModal.style.display = "block";
    }
}

function openAuthorisedModal() {
    document.getElementById('authorisedModal').style.display = 'block';
}

function closeModal(modalId) {
    console.log('Close modal function called', modalId);
    document.getElementById(modalId).style.display = 'none';
    window.onclick = function(event) {
        console.log('Window clicked', event.target);
        if (event.target == loginModal) {
            console.log('Clicked outside loginModal');
            loginModal.style.display = "none";
        } else if (event.target == signUpModal) {
            console.log('Clicked outside signUpModal');
            signUpModal.style.display = "none";
        } else if (event.target == authorisedModal) {
            console.log('Clicked outside authorisedModal');
            authorisedModal.style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const authLoginForm = document.getElementById('authLoginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            try {
                const response = await fetch('http://localhost:5501/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Login successful');
                    localStorage.setItem('token', data.token); // Store the token
                    // Redirect to a protected page
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    if (authLoginForm) {
        authLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('authLoginEmail').value;
            const password = document.getElementById('authLoginPassword').value;

            try {
                const response = await fetch('http://localhost:5501/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Authorized login successful');
                    localStorage.setItem('token', data.token); // Store the token
                    // Redirect to the authorized user dashboard
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
});
//////////////////////////////////////////////

// Login form submission handler
document.querySelector('#loginModal form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert('Login successful!');
            closeModal('loginModal');
            // You can redirect or update the UI as needed here
        } else {
            alert('Login failed: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while trying to log in.');
    }
});

// changes logout

function showUserProfileIcon() {
    document.getElementById('loginIcon').style.display = 'none';
    document.getElementById('userIcon').style.display = 'block';
}
async function fetchUserData() {
    const response = await fetch('/api/user/profile'); // Endpoint to fetch user data
    const userData = await response.json();

    document.getElementById('profilePhoto').innerText = userData.name.charAt(0).toUpperCase(); // First letter of name
    document.getElementById('userName').innerText = userData.name;
    document.getElementById('userRole').innerText = userData.role;
}
// Call fetchUserData when the user profile modal is shown

function logout() {
    // Perform logout action, remove session, and redirect if necessary
    document.getElementById('userIcon').style.display = 'none';
    document.getElementById('loginIcon').style.display = 'block';
}

