(function( $ ) {
    var settings = $.extend( {
        'img_loading' : 'top',
    });
    
    var container;
        
    var methods = {
            
        init: function(options)
        {
            container = {
                height: this.height(),
                width: this.width(),
                position: this.offset(),
                padding: this.css('padding')
            };
        },
            
        show: function()
        {
                
        },
            
        hide: function()
        {
                
        },
            
        destroy: function()
        {
                
        }
    }
    
    $.fn.loading = function(method) 
    {
        if ( methods[method] ) 
        {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } 
        else if ( typeof method === 'object' || ! method ) 
        {
            return methods.init.apply( this, arguments );
        } 
        else 
        {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }
    }
       
    $('.box-product-list > .row').css('opacity', '0.2');
    $('#box-product-loading').show();
       
    $('#box-product-loading').css('height', container.height + 'px');
    $('#box-product-loading').css('width', container.width + 'px');
    $('#box-product-loading').css('top', container.position.top); 
    $('#box-product-loading').css('padding', container.padding);
    
})( jQuery );