let blog2Data = JSON.parse(localStorage.getItem("blog2Data")) || {};

function openblog2(blog2Id) {
  let blog2Url = `${blog2Id}.html`;
  window.open(blog2Url, "_blank");
}

function updateLikes(blog2Id) {
  if (blog2Data[blog2Id]) {
    if (blog2Data[blog2Id].likes != 0) blog2Data[blog2Id].likes = 0;
    else blog2Data[blog2Id].likes = 1;
    localStorage.setItem("blog2Data", JSON.stringify(blog2Data));
    document.getElementById(`${blog2Id}-likes`).textContent =
      blog2Data[blog2Id].likes;
  }
}
function addComment(blog2Id) {
  let commentInput = document.getElementById(`${blog2Id}-comment`);
  let comment = commentInput.value.trim();
  if (comment !== "") {
    let blog2 = blog2Data[blog2Id] || { likes: 0, comments: [] };
    let comments = blog2.comments || [];
    comments.push(comment);
    blog2.comments = comments;
    blog2Data[blog2Id] = blog2;
    localStorage.setItem("blog2Data", JSON.stringify(blog2Data));

    let commentsSection = document.getElementById(`${blog2Id}-comments`);
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
  Object.keys(blog2Data).forEach((blog2Id) => {
    document.getElementById(`${blog2Id}-likes`).textContent =
      blog2Data[blog2Id].likes;
    let commentsSection = document.getElementById(`${blog2Id}-comments`);
    blog2Data[blog2Id].comments.forEach((comment) => {
      let newComment = document.createElement("div");
      newComment.textContent = comment;
      commentsSection.appendChild(newComment);
    });
  });
};
