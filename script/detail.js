$(document).ready(function(){
	var slideNumber;
	var loopSwitch;
	var hideControl;
	var liLentgh = $("#slider1 li").length;
	if (liLentgh >= 6) {
		slideNumber = 6;
		if (liLentgh == 6) {
			loopSwitch = false;
			hideControl = true;
		} else {
			loopSwitch = true;
			hideControl = false;
		}
	} else {
		slideNumber = liLentgh;
		loopSwitch = false;
		hideControl = true;
	}
		

	$('#slider1').bxSlider({
		infiniteLoop: loopSwitch,
		speed: 1000,
		pause: 5000, 
		displaySlideQty: slideNumber,
		moveSlideQty: slideNumber,
		controls: loopSwitch,

/* �C�� 110217 TAM ���i�n�C���R�R���� */
/* �C�� 110326 TAM ���i�n�C���R�R���� */
		nextImage: '/pc/for_app/img/brs_img/detail_ic_next.gif',
		prevImage: '/pc/for_app/img/brs_img/detail_ic_prev.gif',
/* �C�� 110326 TAM ���i�n�C���R�R�܂� */
/* �C�� 110217 TAM ���i�n�C���R�R�܂� */
		auto: false
	});


/* �C�� 110328 TAM ���i�n�C���R�R���� */
	$("#sale").after("<br>");
/* �C�� 110328 TAM ���i�n�C���R�R�܂� */
});

function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");
		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_st."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_st.", "_mo."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_mo.", "_st."));
				}
			}
		}
	}
}
if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}