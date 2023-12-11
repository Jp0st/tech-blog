const delLink = document.getElementById("delete-link");
const upLink = document.getElementById("update-link");

const updatePost = async (event) => {
  event.preventDefault();

  const title = document.getElementById("edit-title").value;
  const content = document.getElementById("edit-content").value;
  const id = event.target.getAttribute("data-id");

  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        content: content,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Your post was successfully updated");
      document.location.replace("/dashboard");
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while updating the post");
  }
};

const deletePost = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute("data-id");

  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Your post was successfully deleted");
      document.location.replace("/dashboard");
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while deleting the post");
  }
};

upLink.addEventListener("click", updatePost);
delLink.addEventListener("click", deletePost);