function submitForm(event) {
  event.preventDefault();

  const search = document.querySelector('.form__search input').value;
  const articles = document.querySelectorAll('article');

  articles.forEach((article) => {
    let title = article.querySelector('.post__title').innerText;
    let text = article.querySelector('.post__text').innerText;

    title = title.replaceAll(search, `<mark>${search}</mark>`);
    text = text.replaceAll(search, `<mark>${search}</mark>`);

    article.querySelector('.post__title').innerHTML = title;
    article.querySelector('.post__text').innerHTML = text;
  });
}

function buttonHeart(event) {
  const button = event.target;

  button.classList.toggle('fa-regular');
  button.classList.toggle('fa-solid');
}
