
/*sticky header*/

function handleScroll() {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
}

window.addEventListener("scroll", handleScroll);




/*api  */

function fetchQuote() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(responseText);
        document.getElementById("quote-text").textContent = `"${data.content}"`;
        document.getElementById("quote-author").textContent = `– ${data.author}`;
      } else {
        document.getElementById("quote-text").textContent = "Couldn't load quote.";
        console.error("Quote API error:", xhr.statusText);
      }
    }
  };

  xhr.open("GET", "http://quotes-api-self.vercel.app/quote", true);
  xhr.send();
}

// Call on page load
/*document.addEventListener("DOMContentLoaded", function () {
  fetchQuote();

  // Add click event listener for refresh button
  document.getElementById("refresh-quote-btn").addEventListener("click", function() {
    fetchQuote();
  });
});*/

$(document).ready(function () {
  fetchQuote();
  $('#refresh-quote-btn').click(fetchQuote);
});


/*using jquery */


/*  sticky header */


/*  logo*/ 

$(document).ready(function() {
  $('.logo').mouseenter(function() {
    $(this).animate({ 
      opacity: 0.5, 
      marginLeft: '20px' 
    }, 300);
  });

  $('.logo').mouseleave(function() {
    $(this).animate({ 
      opacity: 1, 
      marginLeft: '0px' 
    }, 300);
  });

  $('.logo').click(function() {
    $(this).fadeOut(300).fadeIn(300); 
  });
});

/* nav */

$(document).ready(function () {
  $(".navbar-link").on("mouseenter", function () {
    $(this).css("color", "#ff4081"); 
  });

  $(".navbar-link").on("mouseleave", function () {
    $(this).css("color", ""); 
  });
});


/*hero */
/*hero-title */

   $(document).ready(function () {
  $(".hero-title").on("mouseenter", function () {
    $(this).css({
      transform: "scale(1.8)",
      transition: "transform 0.3s ease"
    });
  });

  $(".hero-title").on("mouseleave", function () {
    $(this).css("transform", "scale(1)");
  });
});

/*about*/


$(document).ready(function() {
    $('.about').hide().fadeIn(1000);

    
    $('.about-banner img').hover(
      function() {
        $(this).css('transform', 'scale(1.05)');
      },
      function() {
        $(this).css('transform', 'scale(1)');
      }
    );

    
    $('.btn-primary').click(function() {
      $(this).animate({ marginTop: '-5px' }, 100)
             .animate({ marginTop: '0px' }, 100);
    });
  });

  /*h3-section title */
 $(document).ready(function() {
  $('.section-title').css({ opacity: 1, position: 'relative', left: '0px' }); 

  $('.section-title').mouseenter(function() {
   
    $(this).css({ opacity: 0, left: '200px' })  
           .animate({ opacity: 1, left: '0px' }, 1000); 
  });
});
/*par */
$(document).ready(function() {
  $('.section-text').css({
    color: '#000',          
    transition: 'all 0.3s ease',
    fontSize: '16px',       
    position: 'relative'
  });

  $('.section-text').mouseenter(function() {
    $(this).animate({
      fontSize: '22px'      
    }, 300).css('color', 'white'); 
  });

  $('.section-text').mouseleave(function() {
    $(this).animate({
      fontSize: '16px'      
    }, 300).css('color', '#000'); 
  });
});