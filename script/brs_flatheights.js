$(function(){
    var sets = [], temp = [];
    $('#brs .coordinate-item-line01 .coordinate-item01').each(function(i) {
        temp.push(this);
        if (i % 2 == 1) {
            sets.push(temp);
            temp = [];
        }
    });
    if (temp.length) sets.push(temp);

     /*Še‘g‚²‚Æ‚É‚‚³‘µ‚¦ */
    $.each(sets, function() {
        $(this).flatHeights();
    });
});

$(function(){
    $('#brs #recommender_bm_j1 .rec-name').flatHeights();
    $('#brs #recommender_bm_j1 .rec-price').flatHeights();
    $('#brs .check01 .check-name').flatHeights();
    $('#brs .check01 .check-price').flatHeights();
    $('#shopping-guide2 .sg-line02 .sg-copy').flatHeights();
});

$(function(){
	$('#dtl-info-nav02>a').click(function(){
		var element = document.getElementById('dtl-info-area02');
		var style = element.style.display;
		if (style == 'none') {
			$('.review-table01 .title').css('height','');
			$('.review-table01 .text').css('height','');
			$('#dtl-info-area02').css('display','block');
			$('.review-table01 .title').flatHeights();
			$('.review-table01 .text').flatHeights();
		}
	});
});