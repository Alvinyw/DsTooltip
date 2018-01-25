// easy tooltip
(function($) {
    $.fn.easyTooltip = function(options){
        // default configuration properties
        var defaults = {   
            xOffset: 10,/*tooltip 在 X 轴离鼠标的距离*/       
            yOffset: 25,/*tooltip 在 Y 轴离鼠标的距离*/
			tooltipDir: "top",
			tooltipId: "easyTooltip",/*tooltip 最外层元素的 ID*/
			tooltipClass: "easyTooltip",/*tooltip 最外层元素的 Class*/
            clickRemove: false,/*是否点击隐藏 tooltip*/
            content: "",/*设置 tooltip 的内容，可以包含 html 标签元素*/
            useElement: ""/*将已有元素的内容作为 tooltip 的内容，若不为空，则将替换 content 所设置的内容*/
        };
             
        var options = $.extend(defaults, options); 
        var content;
		function updatePosition(e){
			switch(options.tooltipDir)
				{
				case "top":
				  $("#" + options.tooltipId)
					.css("top",(e.pageY - $("#" + options.tooltipId).height() - options.yOffset) + "px")
					.css("left",(e.pageX + options.xOffset) + "px");
				  break;
				case "bottom":
				  $("#" + options.tooltipId)
					.css("top",(e.pageY + options.yOffset) + "px")
					.css("left",(e.pageX + options.xOffset) + "px");
				  break;
				case "left":
				  $("#" + options.tooltipId)
					.css("top",(e.pageY - $("#" + options.tooltipId).height()) + "px")
					.css("left",(e.pageX - $("#" + options.tooltipId).width() - 50) + "px");
				  break;
				case "right":
				  $("#" + options.tooltipId)
					.css("top",(e.pageY - $("#" + options.tooltipId).height()) + "px")
					.css("left",(e.pageX + 30) + "px");
				  break;
				default:
				  $("#" + options.tooltipId)
					.css("bottom",(e.pageY - $("#" + options.tooltipId).height() - options.yOffset) + "px")
					.css("left",(e.pageX + options.xOffset) + "px");
				}
		}
		
        this.each(function() {                 
            var title = $(this).attr("title");             
            $(this).hover(function(e){                                                                        
                content = (options.content != "") ? options.content : title;
                content = (options.useElement != "") ? $("#" + options.useElement).html() : content;
                $(this).attr("title","");                                                  
                if (content != "" && content != undefined){        
                    $("body").append("<div id='"+ options.tooltipId +"' class='" + options.tooltipClass + "'>"+ content +"</div>");    
                    $("#" + options.tooltipId)
                        .css({"position":"absolute","display":"none","padding":"10px 15px","background-color":"#aaa","font-size":"14px","line-height":"24px","color":"#000","opacity":"0.9","border-radius":"4px"})
                        //.css("top",(e.pageY - options.yOffset) + "px")
                        //.css("left",(e.pageX + options.xOffset) + "px")                    
                        .fadeIn("fast");
					updatePosition(e);
                }
            },
            function(){
                $("#" + options.tooltipId).remove();
                $(this).attr("title",title);
            });
			
            $(this).mousemove(function(e){
                $("#" + options.tooltipId)
                    //.css("top",(e.pageY - options.yOffset) + "px")
                    //.css("left",(e.pageX + options.xOffset) + "px")  
					updatePosition(e);              
            });
            if(options.clickRemove){
                $(this).mousedown(function(e){
                    $("#" + options.tooltipId).remove();
                    $(this).attr("title",title);
                });            
            }
        });  
    };     
})(jQuery);