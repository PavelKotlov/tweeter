/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  /* Helper fuctions */
  const createTweetElement = (tweetData) => {
    const user = tweetData.user;
    const content = tweetData.content;
    const timeStamp = tweetData.created_at;
  
    const tweetElement = $(`
      <article class="tweet">  
        <header class="tweet-header">
          <div>  
            <img src="${user.avatars}"/>
            <p>${user.name}</p>
          </div>
          <p>${user.handle}</p>
        </header>
        <p>${content.text}</p>
        <footer class="tweet-footer">
          <p>${timeago.format(timeStamp)}</p>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `);
  
    return tweetElement;
  };

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  }

  /* AJAX HTTP requests and event listeners */
  const loadTweets = () => {
    $.ajax({
      method: "GET",
      url: "/tweets",
      dataType: "JSON",
      success: (response) => {
        renderTweets(response);
      },
    });
  };
  
  loadTweets();

  const $form = $("form");

  $form.on("submit", (event) => {
    event.preventDefault();

    const userInput = event.currentTarget[0].value;

    if (!userInput) {
      alert("Oh oh! No humming recorded! Please tell us what are you humming about?");
    } else if (userInput.length > 140) {
      alert("That's some nice humming, but please keep it shorter. Thanks.");
    } else {
      const urlencoded = $form.serialize();
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: urlencoded,
        success:  (response) => {
          loadTweets();
        }, 
      });
    }

  });
  
});