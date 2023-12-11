const postHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const body = document.querySelector("#post-body").value.trim();
  
    if (!title || !body) {
      alert("Please enter a title and body for the post.");
    }
  
    if (title && body) {
      try {
        const response = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({ title: title, content: body }),
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          document.location.replace("/");
        } else {
          alert("Failed to create the post. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while creating the post. Please try again.");
      }
    }
  };
  
document.querySelector(".new-post").addEventListener("submit", postHandler);