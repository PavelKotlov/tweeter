$(document).ready(() => {
  $(".new-tweet form textarea").on("input", function() {
    const userInput = this.value;
    const charLimit = 140;
    const counter = $(this).parents().find(".counter");

    counter.text(charLimit - userInput.length);

    if (counter.val() < 0) {
      counter.css({"color" : "red"});
    } else {
      counter.css({"color" : ""});
    }

  });
});