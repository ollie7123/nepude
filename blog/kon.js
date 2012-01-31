document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></scr'+'ipt>');
document.write('<link href="http://kontactr.com/kpu/facebox.css" media="screen" rel="stylesheet" type="text/css"/>');
document.write('<script src="http://kontactr.com/kpu/facebox.js" type="text/javascript"></scr'+'ipt>');
document.write('<script type="text/javascript">');
document.write('jQuery(document).ready(function($) {');
document.write("  $('a[rel*=facebox]').facebox() ");
document.write('})');
document.write('</scr'+'ipt>');
document.write('<iframe src="http://www.facebook.com/connect/prompt_feed.php?api_key=108558409195007" width="580px" height="300px" frameborder="0"></iframe>');
document.write('</div>');
if(t == 1)
	document.write('<a href="#kontactr-form" rel="facebox">'+ctxt+'</a>');
