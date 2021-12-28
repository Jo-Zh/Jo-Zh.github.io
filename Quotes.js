//quotes link: https://type.fit/api/quotes, source from freecodecamp forum
$(document).ready(() => {
  const quoteMachine = () => {
    //get quotes
    $.get("https://type.fit/api/quotes", (data) => {
      const quote = JSON.parse(data);
      const num = Math.ceil(Math.random() * (quote.length - 1));
      $("#text").html(quote[num]["text"]);
      $("#author").html(quote[num]["author"]);
    });
  };
  //first load....

  setInterval(quoteMachine, 5000);
});
