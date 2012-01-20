document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></scr'+'ipt>');
document.write('<link href="https://nepude.googlecode.com/svn/blog/facebox.css" media="screen" rel="stylesheet" type="text/css"/>');
document.write('<script src="https://nepude.googlecode.com/svn/blog/facebox.js" type="text/javascript"></scr'+'ipt>');
document.write('<script type="text/javascript">');
document.write('jQuery(document).ready(function($) {');
document.write("  $('a[rel*=facebox]').facebox() ");
document.write('})');
document.write('</scr'+'ipt>');
document.write('<div id="kontactr-form" style="display:none;">');
document.write('<iframe src="http://www.emailmeform.com/builder/form/t9Xl4bh9n2dfa0skQib6yeJfb'+'" width="550px" height="800px" frameborder="0"></iframe>');
document.write('</div>');
if(t == 1)
	document.write('<a href="#kontactr-form" rel="facebox">'+ctxt+'</a>');
