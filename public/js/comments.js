const commentHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector("#comment-content").value.trim();
    const post_id = event.target.getAttribute("data-id");
  
    if (!content) {
      alert("Please enter a new comment");
      return; 
    }
  
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment: content, post_id: post_id }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert("Failed to create a comment");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the comment");
    }
  };
  
  document
    .querySelector("#submit-comment")
    .addEventListener("click", commentHandler);