;(function($, doc, win) {
    "use strict";

    function Loader(element, options) 
    {
        this.$element = $(element);
        this.options  = options;
        
        this.defaults = {
            container: 'body',
            opacity: 0.2,
            container_id: 'jq-loader',
            callback: null
        };
        
        var meta = this.$element.data('loader-options');
        this.options = $.extend(this.defaults, options, meta);

        this.init();
    }

    Loader.prototype.init = function() {
        
        var self      = this;
        
        var container = {
            height: $(this.options.container).height(),
            width: $(this.options.container).width(),
            position: $(this.options.container).offset(),
            padding: $(this.options.container).css('padding')
        }
        
        // create loader
        $('body').append('<div id="' + this.options.container_id + '">');
        var loader    = $('#' + this.options.container_id);
        
        loader.css('width', container.width + 'px');
        loader.css('height', container.height + 'px');
        loader.css('position', 'absolute');
        loader.css('left', container.position.left + 'px');
        loader.css('top', container.position.top + 'px');
        loader.css('z-index', 100000);
        loader.css('background-color', 'red');
        loader.hide();
        
        
        console.log(container);
        
        
        this.$element.on('click', function(e)
        {
            e.preventDefault();
            
            self.show();
        });
        
    };
    
    Loader.prototype.show = function()
    {
        
        $(this.options.container).css('opacity', this.options.opacity);
        $('#' + this.options.container_id).show();
    };

    $.fn.loader = function(options) 
    {
        return this.each(function() 
        {
            new Loader(this, options);
        });
    };

})(jQuery, document, window);