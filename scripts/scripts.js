$(() => {
  let getQuote = () => {
    $.getJSON('https://thesimpsonsquoteapi.glitch.me/quotes', (a) => {
      $(".message").html(a[0].quote);
      $(".author").html(a[0].character)
    });
  };

  getQuote();

  $('button').on('click', () => {
    event.preventDefault();
    getQuote();
  });
});
