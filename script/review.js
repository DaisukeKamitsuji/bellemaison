$(function() {
	var count = 0;
	var timer = setInterval(function(){
		if(count <= 10){
			// レコメンドID変更 2013/8/30 start
			if($('#recommender_102 .dv_rc_items').length != 0){
				$('#recommender_102 .dv_rc_items').each(function(index) {
		  			var str_dv_rc_description = $('.dv_rc_description',this).html();
		  			$('.dv_rc_description',this).remove();
		  			$(this).append('<div class="dv_rc_description" style="display: block;">' + str_dv_rc_description + '</div>')
		  			$(this).append($(this).find(".dv_rc_description"));
		  			$("#recommender_102 .dv_rc_name").css("margin-top", "3px");
		  		});
		 		clearInterval(timer);		  		
	 		} else {
	 			count ++;
	 		}
	 	} else {
	 		clearInterval(timer);
	 	}
	}, 300)

	var timer01 = setInterval(function(){
		if(count <= 10){
			if($('#recommender_2 .dv_rc_items').length != 0){
				$('#recommender_2 .dv_rc_items').each(function(index) {
					var str_dv_rc_description = $('.dv_rc_description',this).html();
		  			$('.dv_rc_description',this).remove();
		  			$(this).append('<div class="dv_rc_description" style="display: block;">' + str_dv_rc_description + '</div>')
		  			$(this).append($(this).find(".dv_rc_description"));
		  			$("#recommender_2 .dv_rc_name").css("margin-top", "3px");
					// レコメンドID変更 2013/8/30 end
		 		});
		 		clearInterval(timer01);		  		
	 		} else {
	 			count ++;
	 		}
	 	} else {
	 		clearInterval(timer01);
	 	}
	}, 300)
});
