$(() => {
  let getQuote = () => {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", (a) => {
      $(".message").html(a[0].content);
      $(".author").html(a[0].title)
    });
  };
  
  getQuote();

  $('button').on('click', () => {
    event.preventDefault();
    getQuote();
  });
});
