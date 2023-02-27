function fetchChuckJokes() {
  const url = "https://api.chucknorris.io/jokes/random";

  axios
    .get(url)
    .then(function (response) {
      return response.data.value;
    })
    .then(function (joke) {
      console.log("Chuck Norris joke:", joke);
      const jokeHtml = `<p>${joke}</p>`;
      document.querySelector(".content").innerHTML = jokeHtml;
    })
    .catch(function (error) {
      console.log("error");
    });
}
fetchChuckJokes();
