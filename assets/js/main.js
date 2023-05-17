/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});

	// Polyfill: Object fit.
		if (!browser.canUse('object-fit')) {

			$('.image[data-position]').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', $this.data('position'))
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

			$('.gallery > a').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', 'center')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

		}

	// Gallery.
		$('.gallery')
			.on('click', 'a', function(event) {

				var $a = $(this),
					$gallery = $a.parents('.gallery'),
					$modal = $gallery.children('.modal'),
					$modalImg = $modal.find('img'),
					href = $a.attr('href');

				// Not an image? Bail.
					if (!href.match(/\.(jpg|gif|png|mp4)$/))
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Lock.
					$modal[0]._locked = true;

				// Set src.
					$modalImg.attr('src', href);

				// Set visible.
					$modal.addClass('visible');

				// Focus.
					$modal.focus();

				// Delay.
					setTimeout(function() {

						// Unlock.
							$modal[0]._locked = false;

					}, 600);

			})
			.on('click', '.modal', function(event) {

				var $modal = $(this),
					$modalImg = $modal.find('img');

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Already hidden? Bail.
					if (!$modal.hasClass('visible'))
						return;

				// Stop propagation.
					event.stopPropagation();

				// Lock.
					$modal[0]._locked = true;

				// Clear visible, loaded.
					$modal
						.removeClass('loaded')

				// Delay.
					setTimeout(function() {

						$modal
							.removeClass('visible')

						setTimeout(function() {

							// Clear src.
								$modalImg.attr('src', '');

							// Unlock.
								$modal[0]._locked = false;

							// Focus.
								$body.focus();

						}, 475);

					}, 125);

			})
			.on('keypress', '.modal', function(event) {

				var $modal = $(this);

				// Escape? Hide modal.
					if (event.keyCode == 27)
						$modal.trigger('click');

			})
			.on('mouseup mousedown mousemove', '.modal', function(event) {

				// Stop propagation.
					event.stopPropagation();

			})
			.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
				.find('img')
					.on('load', function(event) {

						var $modalImg = $(this),
							$modal = $modalImg.parents('.modal');

						setTimeout(function() {

							// No longer visible? Bail.
								if (!$modal.hasClass('visible'))
									return;

							// Set loaded.
								$modal.addClass('loaded');

						}, 275);

					});

})(jQuery);



function showCitation() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function hideCitation() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function showCitation2() {
  var popup = document.getElementById("popup2");
  popup.style.display = "block";
}

function hideCitation2() {
  var popup = document.getElementById("popup2");
  popup.style.display = "none";
}

// Contact Form

document.addEventListener("DOMContentLoaded", function() {
      var form = document.getElementById("contact-form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        if(areRequiredFieldsFilled()){
        showSuccessMessage();
        resetForm();
    }
      });

      resetForm();
    });

function showSuccessMessage() {
      var messageElement = document.getElementById("success-message");
      messageElement.style.display = "block";
 }

function areRequiredFieldsFilled() {
      var requiredFields = document.querySelectorAll("#contact-form [required]");
      for (var i = 0; i < requiredFields.length; i++) {
        if (!requiredFields[i].value) {
          return false;
        }
      }
      return true;
    }
 function resetForm() {
      var form = document.getElementById("contact-form");
      form.reset();
    }

// Navigation Menu

// Get all the nav links
var navLinks = document.getElementsByClassName("nav-link");

// Add a "click" event listener to each nav link
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(event) {
        // Prevent the default action (jumping to the section immediately)
        event.preventDefault();

        // Smoothly scroll to the corresponding section
        document.querySelector(this.hash).scrollIntoView({ behavior: "smooth" });

        // Remove the "active" class from all nav links
        for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("active");
        }

        // Add the "active" class to the clicked nav link
        this.classList.add("active");
    });
}


window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var section1 = document.getElementById("about-me");
    var navLinks = document.getElementsByClassName("nav-link");

    if (window.pageYOffset > section1.offsetHeight) {
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }

    // Loop over each nav link
    for (var i = 0; i < navLinks.length; i++) {
        // Get the section that this nav link points to
        var section = document.querySelector(navLinks[i].hash);

        // Check if this section is in the viewport
        if (
            section.offsetTop <= window.pageYOffset &&
            section.offsetTop + section.offsetHeight > window.pageYOffset
        ) {
            // This section is in the viewport, so add the "active" class to the nav link
            navLinks[i].classList.add("active");
        } else {
            // This section is not in the viewport, so remove the "active" class from the nav link
            navLinks[i].classList.remove("active");
        }
    }
});
