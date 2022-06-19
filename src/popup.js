//

document.addEventListener("DOMContentLoaded", function () {
  console.log("dom content loaded");
  // bind handleSubmit to form onSubmit with event listener
  var form = document.getElementById("form");
  form.addEventListener("onSubmit", function () {
    handleSubmit();
  });
});

function handleSubmit() {
  console.log("handleSubmit");
  // authenticate to Notion
}
