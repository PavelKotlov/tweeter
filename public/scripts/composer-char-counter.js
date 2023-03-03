$(document).ready(() => {
  /* Character counter */
  $("#tweet-text").on("input", function() {
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
  
  /* Return to top button*/
  const scrollFunction = () => {
    const $scrollPosition = $(document)[0].scrollingElement.scrollTop;
    const $pageWidth = Number($(document).width());
    const $nav = $("nav")[0]
    let $buttonStyleDisplay = $("#return-to-top")[0];

    let scollBreak = 400;

    if ($pageWidth >= 1024) {
      scollBreak = 120;
    }

    if ($scrollPosition > scollBreak) {
      $buttonStyleDisplay.style.display = "block";
      $nav.style.display = "none";
    } else {
      $buttonStyleDisplay.style.display = "none";
      $nav.style.display = "flex";
    }
  }

  $("#return-to-top").on("click", () => {
    $(document).scrollTop(0);
    const $newTweetSection = $(".new-tweet");
    if ($newTweetSection.is(":hidden")) {
      $newTweetSection.slideDown();
      $("#tweet-text").focus();
      return
    }
  })

  $(window).scroll(() => {scrollFunction()});
});