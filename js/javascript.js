    var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });
  
    var layer1 = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });

    // Choropleth
    var layerUrl1 = 'https://jz1894.cartodb.com/api/v2/viz/6c203db2-2161-11e6-9320-0e5db1731f59/viz.json';
    
    var map1 = new L.Map('zipmap', { 
      center: [40.7127,-74.0059],
      zoom: 10
    });

    L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map1);
    
    cartodb.createLayer(map1, layerUrl1)
      .addTo(map1)
      .on('done', function(layer) {
      }).on('error', function() {
        //log the error
    });


    // Times Series
    var layerUrl2 = 'https://jz1894.cartodb.com/api/v2/viz/7d2b7b82-215f-11e6-96fd-0e674067d321/viz.json';

    var map2 = new L.Map('TimeSeriesMap', { 
      center: [40.7127,-74.0059],
      zoom: 10
    });

    L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map2);

    cartodb.createLayer(map2, layerUrl2)
      .addTo(map2)
      .on('done', function(layer) {
      }).on('error', function() {
        //log the error
    });

   

    function scroll_if_anchor(href) {
        href = typeof(href) == "string" ? href : $(this).attr("href");      
        // You could easily calculate this dynamically if you prefer
        var fromTop = 50;
        // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
        // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
        if(href.indexOf("#") == 0) {
            var $target = $(href);
            // Older browser without pushState might flicker here, as they momentarily
            // jump to the wrong position (IE < 10)
            if($target.length) {
                $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
                if(history && "pushState" in history) {
                    history.pushState({}, document.title, window.location.pathname + href);
                    return false;
                }
            }
        }
    }    
    // When our page loads, check to see if it contains and anchor
    scroll_if_anchor(window.location.hash);
    // Intercept all anchor clicks
    $("body").on("click", "a", scroll_if_anchor);


