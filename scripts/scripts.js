$(() => {


  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(3));
  }
  
  const quotes = [
    { author: 'Author 1', quote: 'Quote 1' },
    { author: 'Author 2', quote: 'Quote 2' },
    { author: 'Author 3', quote: 'Quote 3' },
  ];

  $('button').on('click', () => {
    event.preventDefault();
    $('.message').html(quotes[getRandomInt()].quote)
  })

 
});