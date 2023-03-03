const $document = $(document);

$document.ready(() => {
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
    const $scrollPosition = $document[0].scrollingElement.scrollTop;
    const $pageWidth = Number($document.width());
    const $nav = $("nav")[0];
    const $buttonStyleDisplay = $("#return-to-top")[0];
    let scollLimit = 400;

    /* Set scroll limit based on page width */
    if ($pageWidth >= 1024) {
      scollLimit = 120;
    }

    /* Display or hide return-to-top button */
    if ($scrollPosition > scollLimit) {
      $buttonStyleDisplay.style.display = "block";
      $nav.style.display = "none";
    } else {
      $buttonStyleDisplay.style.display = "none";
      $nav.style.display = "flex";
    }
  };

  /* Event listeners */
  $("#return-to-top").on("click", () => {
    $document.scrollTop(0);
    const $newTweetSection = $(".new-tweet");
    if ($newTweetSection.is(":hidden")) {
      $newTweetSection.slideDown();
      $("#tweet-text").focus();
      return;
    }
  });

  /* Run script */
  $(window).scroll(() => {
    scrollFunction();
  });
});