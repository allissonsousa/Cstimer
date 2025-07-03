function handleCredentialResponse(response) {
  const payload = JSON.parse(atob(response.credential.split(".")[1]));
  alert(`Google login: ${payload.name} (${payload.email})`);
}

window.fbAsyncInit = function () {
  FB.init({
    appId: "SEU_APP_ID_FACEBOOK",
    cookie: true,
    xfbml: true,
    version: "v19.0",
  });
};

function loginComFacebook() {
  FB.login(
    function (response) {
      if (response.authResponse) {
        FB.api("/me", { fields: "name,email" }, function (user) {
          alert(`Facebook login: ${user.name} (${user.email})`);
        });
      }
    },
    { scope: "email" }
  );
}
