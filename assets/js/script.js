$( document ).ready( function()
  {
    function filterPath( string )
    {
      return string.replace( /^\//, '' ).replace( /(index|default).[a-zA-Z]{3,4}$/, '' ).replace( /\/$/, '' );
    }
    
    var locationPath = filterPath(location.pathname);
    
    $('a[href*=#]').each( function()
    {
      var thisPath = filterPath(this.pathname ) || locationPath;
      if( locationPath == thisPath && ( location.hostname == this.hostname || !this.hostname ) && this.hash.replace( /#/, '' ) )
      {
        $( this ).smoothScroll();
      }
    } );
    
    $( '.carousel' ).carousel();
  } );
  
function contact_send()
{
  contact_data = new Object();
  contact_data.name = $( '#contact-form input[name="name"]' ).val();
  contact_data.email = $( '#contact-form input[name="email"]' ).val();
  contact_data.message = $( '#contact-form textarea[name="message"]' ).val();
  
  // validation
  if( contact_data.name == '' )
  {
    $( '#contact-form input[name="name"]' ).addClass( 'error' );
    return false;
  }
  else
  {
    $( '#contact-form input[name="name"]' ).removeClass( 'error' );
  }
  
  if( contact_data.email == '' || !/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/.test( contact_data.email ) )
  {
    $( '#contact-form input[name="email"]' ).addClass( 'error' );
    return false;
  }
  else
  {
    $( '#contact-form input[name="email"]' ).removeClass( 'error' );
  }
  
  if( contact_data.message == '' )
  {
    $( '#contact-form textarea[name="message"]' ).addClass( 'error' );
    return false;
  }
  else
  {
    $( '#contact-form textarea[name="message"]' ).removeClass( 'error' );
  }
  
  // e-mail send via AJAX
  $.ajax(
  {
    type: 'POST',
    url: 'ajax_contact.php',
    data: 'name=' + contact_data.name + '&email=' + contact_data.email + '&message=' + contact_data.message,
    success: function()
    {
      $( '#contact-form input[name="name"]' ).val( '' );
      $( '#contact-form input[name="email"]' ).val( '' );
      $( '#contact-form textarea[name="message"]' ).val( '' );
      $( '#contact-form input[type="submit"]' ).fadeOut( 'slow', function()
      {
        $( '#contact-form input[type="submit"]' ).val( 'Sent!' );
        $( '#contact-form input[type="submit"]' ).fadeIn();
      } );
      
      setTimeout( function()
      {
        $( '#contact-form input[type="submit"]' ).fadeOut( 'slow', function()
        {
          $( '#contact-form input[type="submit"]' ).val( 'Send message' );
          $( '#contact-form input[type="submit"]' ).fadeIn();
        } );
      }, 3000 );
    }
  } );
}