//quotes link: https://type.fit/api/quotes, source from freecodecamp forum
$(document).ready(() => {
   // get quotes
  const quoteMachine = () => {
    $.get("https://type.fit/api/quotes", (data) => {
      const quote = JSON.parse(data);
      const num = Math.ceil(Math.random() * (quote.length - 1));
      $("#text").html(quote[num]["text"]);
      $("#author").html(quote[num]["author"]);
    });
  };

  //Load quotes....
  const quoteSet = setInterval(quoteMachine, 5000);
  quoteSet;

  //stop showing quotes in small screen
  $(window).on("resize", () => {
    if ($(window).width() <= 767) {
      clearInterval(quoteSet);
    } else {
      quoteSet;
    }
  });
  // stop quotes by click close button
  $("#close-quote").on("click", () => {
    $("#quote-box").css("visibility", "hidden");
    clearInterval(quoteSet);
  });

});
