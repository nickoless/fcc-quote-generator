$(() => {

  let randomInt = undefined;
  function getRandomInt() {
    randomInt = Math.floor(Math.random() * Math.floor(3));
    return randomInt;
  }
  

  $('button').on('click', () => {
    event.preventDefault();
    getRandomInt();
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $(".message").html(a[0].content + "<p>— " + a[0].title + "</p>");
    });
  });
    // $('.message, .context').animate({ opacity: 0 }, 1000, () => {
    //   $('.message').html(quotes[randomInt].quote);
    //   $('.context').html('TRUMP' + quotes[randomInt].context);
    // }).animate({ opacity: 1 }, 1000);

    // $('.message').html(quotes[randomInt].quote);
    // $('.context').html(quotes[randomInt].context);



});
