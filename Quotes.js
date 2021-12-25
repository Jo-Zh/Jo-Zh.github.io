//quotes link: https://type.fit/api/quotes, source from freecodecamp forum
$(document).ready(() => {
  const quoteMachine = () => {
    //get quotes
    $.get("https://type.fit/api/quotes", (data) => {
      const quote = JSON.parse(data);
      const num = Math.ceil(Math.random() * (quote.length - 1));
      $("p").html(quote[num]["text"]);
      $("h5").html(quote[num]["author"]);
    });
  };
  //first load....

  setInterval(quoteMachine, 5000);
});
