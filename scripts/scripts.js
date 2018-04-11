$(() => {

  let randomInt = undefined;
  function getRandomInt() {
    randomInt = Math.floor(Math.random() * Math.floor(3));
    return randomInt;
  }
  
  const quotes = [
    { context: 'On domestic policy', quote: 'We\'re rounding \'em up in a very humane way, in a very nice way. And they\'re going to be happy because they want to be legalized. And, by the way, I know it doesn\'t sound nice. But not everything is nice.' },
    { context: 'On helping women', quote: 'I will be phenomenal to the women. I mean, I want to help women.' },
    { context: 'On global warming', quote: 'The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.'},
    { context: 'On race', quote: 'I have a great relationship with African Americans, as you possibly have heard. I just have great respect for them. And they like me. I like them.' },
  ];

  $('button').on('click', () => {
    event.preventDefault();
    getRandomInt();
    $('.message, .context').animate({ opacity: 0 }, 1000, () => {
      $('.message').html(quotes[randomInt].quote);
      $('.context').html(quotes[randomInt].context);
    }).animate({ opacity: 1 }, 1000);

    // $('.message').html(quotes[randomInt].quote);
    // $('.context').html(quotes[randomInt].context);
  });


});
