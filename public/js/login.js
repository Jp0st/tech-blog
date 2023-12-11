const loginHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    try {
      if (!username || !password) {
        alert("Please enter your username and password");
        return;
      }
  
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log in! Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while attempting to log in.");
    }
  };
  
  document.querySelector(".login-form").addEventListener("submit", loginHandler);