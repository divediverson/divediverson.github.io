<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>TIGER BLOG</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="http://www.apple.com/theme/css/normalize.css">
        <link rel="stylesheet" href="http://www.apple.com/theme/css/main.css">
        <link rel="shortcut icon" href="http://www.apple.com/theme/favicon.ico" type="image/x-icon"/>
        <script src="http://www.apple.com/theme/js/vendor/modernizr-2.6.2.min.js"></script>
        <script src="http://www.apple.com/theme/js/jquery.min.js"></script>

       <style>
        a
        {
          color: #08088A;
          text-decoration: none;
        }
        #accordian li {
          list-style-type: none;
        }

        #accordian ul ul {
          display: none;
        }
       </style>

       <script>
       $(document).ready(function(){
          $("#accordian span").click(function()
          {
            $("#accordian ul ul").slideUp();
            $("#accordian span").attr('class', 'icon-right-dir');

            if(!$(this).next().is(":visible"))
            {
              $(this).next().slideDown();
              $(this).attr('class','icon-down-dir');
    
            }
            else
            {
              $(this).attr('class','icon-right-dir');
            }
          })
        })
       </script>

    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
            <link rel="stylesheet" href="css/fontello-ie7.css">
        <![endif]-->
        
    <header class="clearfix">
        <section class="container">
        <a href="">
          <div width="256" height="94">
            <h2> TIGER BLOG </h2>
            <h4> MOOF </h4>
          </div>
        </a>
        <nav>
        <ul>
        <li><a href="http://www.apple.com/index.html"> <i class="icon-home-1"></i></a></li>
        <li><a href="http://www.apple.com/about.html"><i class="icon-info-circled"></i></a></li>
        <li><a href="http://www.apple.com/atom.xml"><i class="icon-rss"></i></a></li>
        </ul>
        </nav>
      </section>
    
        </header>
        
<div class="main clearfix">
	<section class="container" id="posts">
		<div class="left-container">
	  		<article class="list clearfix">
	  			<h3></h3>
				<p><p>Here goes the about content.</p>
</p>    
	  		</article>
		</div>
			

<div class="right-container">
          <div class="right-col">
          <h3>ABOUT</h3>
          <p>Hello this is my first Statiked Blog. To change the contents of this short introduction, change short_introduction.html file in _includes</p>
          </div>
          
          <div class="right-col">
          <h3>ARCHIVES</h3>
          <div id="accordian">
          <ul>
            
            
                
                <li>
                  <span class="icon-right-dir"><i>2014</i></span>
                <ul>
                <li><a href="http://www.apple.com/2014/04/04/.html"></a></li>

          </ul>
         </div>
          </div>
          
     <div class="right-col">
          <h3>CATEGORIES</h3>
          <div id="accordian">
            <ul>
            <li>
                    <span class="icon-right-dir"><i>tiger</i></span>
                  <ul>
                  <li><a href="http://www.apple.com/2014/04/04/.html"></a></li>
                </ul>
                  </li>


          </ul>
         
          </div>     
          
        </div>
        
        </section>
        </div>
        
        <footer class="clearfix">
        <div class="container">
        <div class="left-container"><a href="#">Snowhite</a> | <a href="#">All Rights Reserved.</a></div>
         <div class="right-container">Blog theme by : <a href="http://statiked.com" target ="_blank">Statiked</a></div>
        </div>
        </footer>





        <script src="http://www.apple.com/theme/js/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="http://www.apple.com/theme/js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="http://www.apple.com/theme/js/plugins.js"></script>
        <script src="http://www.apple.com/theme/js/main.js"></script>


        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
          <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', '']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>
        

          <script type="text/javascript">
    (function() {
      var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true;
      script.src = 'https://apis.google.com/js/plusone.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
    })();
  </script>

        <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
    </body>
</html>
