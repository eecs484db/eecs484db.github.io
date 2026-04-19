/**
 * halloween.js
 * Displays a halloween mode toggle around halloween.
 *
 * This script makes the following assumptions about
 * the main home page:
 *   - The sidebar toggle button has ID "left-sidebar-toggle"
 *   - Section headings are wrapped in h1/h2 tags
 *   - Images are wrapped in img tags
 *   - Raised cards (for tutorials, etc.) have a “header”
 *     class element directly wrapped inside a “content”
 *     class element.
 * 
 * Requires:
 *   - JQuery
 *   - MomentJS
 */

(function () {

  /** HELPERS */

  var halloween_mode = false;
  function toggleHalloweenMode() {
    halloween_mode = !halloween_mode;
    toggleButtonText(halloween_mode);
    toggleHalloweenIcons(halloween_mode);
    toggleAnimatedEmoji(halloween_mode);
    invertScreenColors(halloween_mode);
  }


  function insertToggleButton() {
    var halloween_toggle_button_code = `
      <button class="ui right floated inverted orange icon button" id="halloween-toggle">
        <i class="wizard icon"></i> <span id="halloween-button-text">Halloween</span> Mode
      </button>
    `;
    $(halloween_toggle_button_code)
      .on('click', toggleHalloweenMode)
      .insertAfter('#left-sidebar-toggle');
  }


  function toggleButtonText(halloween_mode) {
    text = halloween_mode ? 'Normal' : 'Halloween'
    $('#halloween-button-text').html(text);
  }


  function toggleHalloweenIcons(halloween_mode) {
    if (halloween_mode) {
      $('.content > .header').append("<span class='halloween-icon'>🎃</span>");
      $('h1').append("<span class='halloween-icon'> 👻</span>");
      $('h2').append("<span class='halloween-icon'> 👺</span>");
    }
    else {
      $('.halloween-icon').remove();
    }
  }


  function toggleAnimatedEmoji(halloween_mode) {
    // This animation is based on: https://support.cargo.site/Make-an-Image-Fly-Across-the-Screen
    if (halloween_mode) {
      // Insert the emojis and the stylesheet
      var stylesheet_code = `
        <style class="halloween-flier-style">
          .halloween-flier {
            pointer-events: none;
            font-size: 3em;
            pointer-events: none !important;
            top: 0;
            left: 0;
            transform: translateX(-120%) translateY(-120%);
            position: fixed;
            animation-delay: 1s;
            z-index: 999999;
          }

          .halloween-flier-1 {
            /* Adjust animation duration to change the element’s speed */
            animation: fly1 50s alternate infinite;
          }
          .halloween-flier-2 {
            /* Adjust animation duration to change the element’s speed */
            animation: fly2 30s alternate infinite;
          }

          /* Keyframe values control where the element will begin
          and end its trajectory across the screen. Each rule
          represents a path the element follows across the screen. */

          @keyframes fly1 {
            98.001%, 0% {
              display: block;
              transform: translateX(-200%) translateY(100vh)
            }
            15% {
              transform: translateX(100vw) translateY(-100%)
            }
            15.001%, 18% {
              transform: translateX(100vw) translateY(-30%)
            }
            40% {
              transform: translateX(-200%) translateY(3vh)
            }
            40.001%, 43% {
              transform: translateX(-200%) translateY(-100%)
            }
            65% {
              transform: translateX(100vw) translateY(50vh)
            }
            65.001%, 68% {
              transform: translateX(20vw) translateY(-200%)
            }
            95% {
              transform: translateX(10vw) translateY(100vh)
            }
          }

          @keyframes fly2 {
            95.001%, 0% {
              display: block;
              transform: translateX(-200%) translateY(-70%)
            }
            30% {
              transform: translateX(100vw) translateY(45vh)
            }
            30.001%, 50% {
              transform: translateX(80vw) translateY(-200%)
            }
            75% {
              transform: translateX(-200%) translateY(80vh)
            }
            75.001%, 80% {
              transform: translateX(-200%) translateY(-200%)
            }
          }
        </style>
      `
      $('body').append(stylesheet_code);
      $('body').append('<div class="halloween-flier halloween-flier-1">👻</div>');
      $('body').append('<div class="halloween-flier halloween-flier-2">🎃</div>');
    }
    else {
      // Remove the emoji and the stylesheet
      $('.halloween-flier, .hallowee-flier-style').remove();
    }
  }


  function invertScreenColors(halloween_mode) {
    filter_property = halloween_mode ? 'invert(1)' : '';
    // First invert everything on the page.
    $('body').css('filter', filter_property);
    // Then undo inversions for these:
    $('img').css('filter', filter_property);
    $('.halloween-icon, .halloween-flier').css('filter', filter_property);
  }


  /** MAIN */

  var current_date = moment();
  if (
    (current_date.month() === 9 && current_date.date() > 28) ||
    (current_date.month() === 10 && current_date.date() < 3)
  ) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
      // Note that month numbers are zero-indexed, so 9 actually indicates October.
      insertToggleButton();
  }

})();
