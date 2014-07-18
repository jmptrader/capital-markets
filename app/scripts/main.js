function getBrowserWidth(){
	return $(window).width();
}

function getBrowserHeight(){
	return $(window).height();
}

function setWidthMobileOpt(id){

	var w = ( getBrowserWidth() > '768' ) ? 350 : ( getBrowserWidth() * .70 ),
		id = $(id),
		trigger = id.find('div[data-trigger]'),
		options = id.find('ul'),
		icon = trigger.find('i.fa');


		id.css({
			'width' : w
		});

		if( trigger.data('trigger') == false )
		{
			trigger
				.css({
					'left': 'auto',
					'right': '10px',
					'top': '11px'
				})
				.data('trigger', true);
			icon.removeClass('fa-bars').addClass('fa-times');
			options.show();
		}
		else
		{
			trigger
				.css({
					'left': '5px',
					'right': 'auto',
					'top': '5px'
				})
				.data('trigger', false);
			icon.removeClass('fa-times').addClass('fa-bars');	
			options.hide();
		}

}

function setBoxWidth(box){
	
	var w = box.width(),
		h = getBrowserHeight() / 3,
		setHeight = ( getBrowserWidth() > '768' ) ? w : h,
		metaThumbnails = box.find('.meta-thumbnail'),
		image = box.find('.image');

		box.css({ 'height' : setHeight });
		metaThumbnails.css({ 'height' : setHeight });
		image.css({ 'height' : setHeight });	

}


function animation(wrapId, selectorItem){

    wrapId.on({
        mouseenter: function () {    
            $(this)
                .stop()
                .transition({ scale: 1.05 })
                .css({
                	"border-right": "1px solid #C2C2C2",
                	"border-bottom": "1px solid #C2C2C2",
                	"z-index": "999"
                });

        },
        mouseleave: function () {                
            $(this)
                .stop()
                .transition({ scale: 1 })
                .css({
                	"border-right": "none",
                	"border-bottom": "none",
                	"z-index": "1"
                });
        }
    }, selectorItem);
}



$(document).ready(function(){

	var wrapId = $("#boxDisplay"),
		selectorItem = ".box";

		animation( wrapId, selectorItem);



	var mobTrigOpts = $('#show-listTrigger'),
		box = $('.box');

		mobTrigOpts.on('click', function(e){
			e.preventDefault();
			setWidthMobileOpt('#mobile-sideOption');
		})

		setBoxWidth(box);



});