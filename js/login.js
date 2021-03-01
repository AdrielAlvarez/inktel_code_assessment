$(document).ready(() => {
  $(".loginSubmitBtn").on("click", (e) => {
    e.preventDefault();
    console.log("ready");

    let user = $("#user").val();
    let pwd = $("#pwd").val();
    if (user == "admin" && pwd == "KeepPrivate0225") {
      document.location.href = `/userGroup.html?user=${user}`;
    } else {
      $("#loginDiv").append(
        "<p style='color:red;'>Please enter valid username and password!</p>"
      );
    }
  });
  $("#logOut").on("click", (e) => {
    e.preventDefault();
    document.location.href = "index.html";
  });
});
