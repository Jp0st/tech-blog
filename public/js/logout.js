const logout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log out! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while attempting to log out.");
    }
  };
  
document.querySelector("#logout-link").addEventListener("click", logout);