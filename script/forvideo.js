/* sitecatalyst */
var scMediaPlay = function(evt){
	// console.log("“®‰æID:[" +evt.media.id+ "], “®‰æ–¼:[" +evt.media.displayName+ "]");
	var s=s_gi(s_account);
	s.linkTrackVars='prop40,eVar40';
	s.prop40 = s.pageName + ':' + String(evt.media.id);
    s.eVar40 = "D=c40";
	s.tl(true, 'o', 'Brightcove Movie');
};
/* sitecatalyst */

function onPlayerLoadedHandlerSub(experienceID){
	// console.log('onPlayerLoadedHandler');
	var bcExp = brightcove.api.getExperience(experienceID);
	var modVP = bcExp.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
	
	/* sitecatalyst */
	modVP.addEventListener(brightcove.api.events.MediaEvent.BEGIN, scMediaPlay);
	/* sitecatalyst */
}
