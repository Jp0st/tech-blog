const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (!username || !password) {
      alert("Please enter both a username and password.");
    }
  
    if (username && password) {
      try {
        const response = await fetch("/api/users/signup", {
          method: "POST",
          body: JSON.stringify({ username: username, password: password }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          document.location.replace("/");
        } else {
          alert("Failed to sign up. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while signing up. Please try again.");
      }
    }
  };
  
  document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);