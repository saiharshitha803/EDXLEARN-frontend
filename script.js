
// Function to filter courses based on the selected category
function filterByCategory() {
    const selectedCategory = document.getElementById('categoryFilter').value; // Get the selected category
    const courseCards = document.querySelectorAll('.course-card'); // Get all course cards

    // Loop through each course card and check its category
    courseCards.forEach(function(card) {
        const cardCategory = card.getAttribute('data-category'); // Get the category of the card

        // If the selected category matches the course category, show the card; otherwise, hide it
        if (selectedCategory === '' || selectedCategory === cardCategory) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}

document.getElementById('categoryFilter').addEventListener('change', filterCourses);
document.getElementById('typeFilter').addEventListener('change', filterCourses);

function filterCourses() {
    // Get selected values from filters
    const category = document.getElementById('categoryFilter').value;
    const type = document.getElementById('typeFilter').value;

    // Get all course cards
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(function(card) {
        const cardCategory = card.getAttribute('data-category');
        const cardType = card.getAttribute('data-type');

        // Show or hide course cards based on filter selections
        if ((category === '' || cardCategory === category) && (type === '' || cardType === type)) {
            card.style.display = 'block';  // Show the course
        } else {
            card.style.display = 'none';   // Hide the course
        }
    });
}



    // Get the filter elements
    document.getElementById('categoryFilter').addEventListener('change', filterCourses);
    document.getElementById('typeFilter').addEventListener('change', filterCourses);

    function filterCourses() {
        // Get the selected category and type from the filters
        const category = document.getElementById('categoryFilter').value;
        const type = document.getElementById('typeFilter').value;
        
        // Get all course cards
        const courseCards = document.querySelectorAll('.course-card');

        courseCards.forEach(function(card) {
            // Get the category and type of the current card
            const cardCategory = card.getAttribute('data-category');
            const cardType = card.getAttribute('data-type');

            // Check if the course card matches the selected filters
            // If no filter is selected for category or type, show the card
            if ((category === '' || cardCategory === category) && (type === '' || cardType === type)) {
                card.style.display = 'block';  // Show the course card
            } else {
                card.style.display = 'none';   // Hide the course card
            }
        });
    }


// Add event listener to the filter dropdown for course type
document.getElementById('typeFilter').addEventListener('change', filterByType);

// Call the filter function when the page loads to ensure the right courses are displayed
window.onload = filterByType;








// Handle Login Page Logic
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation for username and password
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        // Normally here, you'd send a request to the server for validation
        alert("Login successful!");
        // Redirect to home page on successful login (You can adjust the page as needed)
        window.location.href = "index.html"; // Change to desired page after login
    }
}



  document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // stop form from refreshing the page

    // Get values from form
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Optional: simple validation
    if (!username || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch("https://edxlearn-backend.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "User registered successfully ✅");
        // Optionally redirect to login page:
        // window.location.href = "login.html";
      } else {
        alert(data.error || "Something went wrong ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    }
  });


  

// Add event listeners for the forms
document.addEventListener("DOMContentLoaded", function() {
    // Home Page
    var loginLink = document.querySelector('.login-link');
    var registerLink = document.querySelector('.register-link');

    if (loginLink) {
        loginLink.addEventListener('click', function() {
            window.location.href = 'login.html'; // Redirect to login page
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', function() {
            window.location.href = 'register.html'; // Redirect to register page
        });
    }

    // Login Form Event Listener
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', handleLogin);
    }

    // Register Form Event Listener
    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', handleRegister);
    }
});


// profile.js

document.getElementById("profile-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    // You can later add an AJAX request to send the data to your back-end
    console.log("Profile updated:", { username, password });

    // Assuming the data is sent successfully, show a success message
    alert("Profile updated successfully!");
});

// logout.js

// Clear the user's authentication token (e.g., JWT token) from localStorage or sessionStorage
localStorage.removeItem('authToken');  // If you're storing the token in localStorage
// OR
// sessionStorage.removeItem('authToken');  // If you're storing the token in sessionStorage

// Redirect the user to the home page or login page after logout
window.location.href = "home.html";  // Or you can redirect to login page: "login.html"
  


function getCourseFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('course');
}

// Function to display the websites for the specific course
function displayCourseDetails(course) {
    const courseDetails = document.getElementById('courseDetails');
    let websites = [];

    if (course === 'html-basics') {
        websites = [
            { name: 'Udemy', url: 'https://www.udemy.com/course/html-basics/' },
            { name: 'Coursera', url: 'https://www.coursera.org/courses/html' },
            { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/learn/' }
        ];
    } else if (course === 'css-flexbox') {
        websites = [
            { name: 'Udemy', url: 'https://www.udemy.com/course/css-flexbox-mastery/' },
            { name: 'Coursera', url: 'https://www.coursera.org/courses/css-flexbox' },
            { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/learn/css-flexbox' }
        ];
    }

    // Render the list of websites
    let listHtml = '<ul>';
    websites.forEach(website => {
        listHtml += `<li><a href="${website.url}" target="_blank">${website.name}</a></li>`;
    });
    listHtml += '</ul>';
    courseDetails.innerHTML = listHtml;
}
          // Get the course parameter and display the course details
          const course = getCourseFromUrl();
          if (course) {
              displayCourseDetails(course);
          } else {
              document.getElementById('courseDetails').innerHTML = '<p>Course not found!</p>';
          }


     // Simple JavaScript interaction
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("alertBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        alert("You clicked the button on the Home page!");
      });
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const profileImage = document.getElementById("profileImage");
    const logoutBtn = document.getElementById("logoutBtn");
  
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const image = localStorage.getItem("userImage");
  
    if (name && email && image) {
      profileName.textContent = name;
      profileEmail.textContent = email;
      profileImage.src = image;
    } else {
      // If not logged in, redirect to login
      window.location.href = "login.html";
    }
  
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "login.html";
    });
  });

 


 