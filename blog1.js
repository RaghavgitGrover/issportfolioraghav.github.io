let blog1Data = JSON.parse(localStorage.getItem("blog1Data")) || {};

function openblog1(blog1Id) {
  let blog1Url = `${blog1Id}.html`;
  window.open(blog1Url, "_blank");
}

function updateLikes(blog1Id) {
  if (blog1Data[blog1Id]) {
    blog1Data[blog1Id].likes++;
    localStorage.setItem("blog1Data", JSON.stringify(blog1Data));
    document.getElementById(`${blog1Id}-likes`).textContent =
      blog1Data[blog1Id].likes;
  }
}

function addComment(blog1Id) {
  let commentInput = document.getElementById(`${blog1Id}-comment`);
  let comment = commentInput.value.trim();
  if (comment !== "") {
    let blog1 = blog1Data[blog1Id] || { likes: 0, comments: [] };
    let comments = blog1.comments || [];
    comments.push(comment);
    blog1.comments = comments;
    blog1Data[blog1Id] = blog1;
    localStorage.setItem("blog1Data", JSON.stringify(blog1Data));

    let commentsSection = document.getElementById(`${blog1Id}-comments`);
    let newComment = document.createElement("div");
    newComment.textContent = comment;
    newComment.classList.add("new-comment");
    commentsSection.appendChild(newComment);

    commentInput.value = "";
  } else {
    alert("Please enter a valid comment.");
  }
}

// Delete comments for blog1 1 or blog1 2
// function deleteComments(blog1Id) {
//   if (blog1Data[blog1Id]) {
//     blog1Data[blog1Id].comments = [];
//     localStorage.setItem("blog1Data", JSON.stringify(blog1Data));

//     let commentsSection = document.getElementById(`${blog1Id}-comments`);
//     commentsSection.innerHTML = "";
//   }
// }

window.onload = function () {
  Object.keys(blog1Data).forEach((blog1Id) => {
    document.getElementById(`${blog1Id}-likes`).textContent =
      blog1Data[blog1Id].likes;

    let commentsSection = document.getElementById(`${blog1Id}-comments`);
    blog1Data[blog1Id].comments.forEach((comment) => {
      let newComment = document.createElement("div");
      newComment.textContent = comment;
      commentsSection.appendChild(newComment);
    });
  });
};
