
var REGCheckDuplicateMember,
	REGCheckDuplicateMailAddress,
	REGCheckDuplicateLogonID,
	REGGetZipcode2Address;
(function($) {
	var __hasProp = Object.prototype.hasOwnProperty,
	__extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

	/**
	 * validate common methods
	 */
	$.validate = $.validate || {};
	$.validate.isEmpty = function(o) {
		var val = o instanceof String ? o : $(o).val();
		return val == undefined || val == '';
	};
	$.validate.isNumeric = function(o) {
		var val = o instanceof String ? o : $(o).val();
		return !$.validate.isEmpty(o) && !val.match(/[^0-9]+/);
	};
	$.validate.isNumericHyphen = function(o) {
		var val = o instanceof String ? o : $(o).val();
		val = val.split('-').join('');
		return !$.validate.isEmpty(o) && !val.match(/[^0-9]+/);
	};
	$.validate.isAlphaNumeric = function(o) {
		var val = o instanceof String ? o : $(o).val();
		return !$.validate.isEmpty(o) && !val.match(/[^a-zA-Z0-9]+/);
	};

	$(function() {
		var REGRequest = function(options) {
			this.options = $.extend({}, REGRequest.DEFAULT, options);
		};
		REGRequest.DEFAULT = {
			url: null,
			method: 'POST',
			timeout: 5000,
			isCallSC: true,
			linkTrackVars: null,
			resultPropertyName: 'result',
			success: function() {},
			error: function() {},
			httpError: function() {},
			loadStart: function() {},
			loadComplete: function() {}
		};
		REGRequest.DATATYPE = 'xml';
		REGRequest.prototype.load = function(data, options) {
			this.options = $.extend(this.options, options);
			this.options.loadStart.apply(null);
			/* 追加 130605 timeスタンプ追加 */
			var d = new Date();
			$.ajax({
				url: this.options.url + '?_=' + d.getTime(),
				data: data,
				dataType: REGRequest.DATATYPE,
				type: this.options.method,
				timeout: this.options.timeout,
//				beforeSend: function(data){ data.overrideMimeType("text/html;charset=Shift_JIS"); },
				success: this.__onSuccess(this.options.success, this.options.error),
				error: this.__onHTTPError(this.options.httpError)
			});
		};
		/* override method */
		REGRequest.prototype._onSuccess = function(data) {};
		REGRequest.prototype._onError = function(data) {};
		REGRequest.prototype._onHTTPError = function(XMLHttpRequest, textStatus, errorThrown) {};
		/* private method */
		REGRequest.prototype.__onSuccess = function(successCallback, errorCallback) {
			var _self = this;
			return function(xml) {
				_self.options.loadComplete.apply(null);
				var device = $(xml).find('device').text();
				var result = parseInt($(xml).find(_self.options.resultPropertyName).text());
				if(result > 0) {
					_self._onSuccess(xml);
					successCallback.apply(null, [xml]);
				}
				else {
					var msgid = $(xml).find('msgid').text() || 0;
					if(_self.options.isCallSC) {
						_self.callSC(device, msgid);
					}
					_self._onError(xml);
					errorCallback.apply(null, [xml]);
				}
			};
		};
		REGRequest.prototype.__onHTTPError = function(errorCallback) {
			var _self = this;
			return function(XMLHttpRequest, textStatus, errorThrown) {
				_self.options.loadComplete.apply(null);
				errorCallback.apply(null, arguments);
				_self._onHTTPError.apply(this, arguments);
			};
		};
		REGRequest.prototype.callSC = function(device, msgid) {
			if(window.s_sc != undefined) {
				window.s_sc.linkTrackVars = 'prop15';
				window.s_sc.prop15 = device+':'+msgid;
				window.s_sc.tl(true, 'o', '非同期通信エラー');
			}
		};

		var REGCheckDuplicateMember = (function(_super) {
			__extends(REGCheckDuplicateMember, _super);
			function REGCheckDuplicateMember(options) {
				REGCheckDuplicateMember.__super__.constructor.apply(this, [options]);
			}
			return REGCheckDuplicateMember;
		})(REGRequest);
		REGCheckDuplicateMember.prototype._onSuccess = function() {};
		/* 修正 20130530 会員重複チェックのSiteCatalyst計測を1回に制限 ココから */
		REGCheckDuplicateMember.prototype._onError = function() {
			this.options.isCallSC = false;
		};
		/* 修正 20130530 会員重複チェックのSiteCatalyst計測を1回に制限 ココまで */
		window.REGCheckDuplicateMember = REGCheckDuplicateMember;


		var REGCheckDuplicateMailAddress = (function(_super) {
			__extends(REGCheckDuplicateMailAddress, _super);
			function REGCheckDuplicateMailAddress(options) {
				options = $.extend({}, options, {isCallSC: false});
				REGCheckDuplicateMailAddress.__super__.constructor.apply(this, [options]);
			}
			return REGCheckDuplicateMailAddress;
		})(REGRequest);
		REGCheckDuplicateMailAddress.prototype._onSuccess = function() {};
		REGCheckDuplicateMailAddress.prototype._onError = function() {};
		window.REGCheckDuplicateMailAddress = REGCheckDuplicateMailAddress;


		var REGCheckDuplicateLogonID = (function(_super) {
			__extends(REGCheckDuplicateLogonID, _super);
			function REGCheckDuplicateLogonID(options) {
				REGCheckDuplicateLogonID.__super__.constructor.apply(this, [options]);
			}
			return REGCheckDuplicateLogonID;
		})(REGRequest);
		REGCheckDuplicateLogonID.prototype._onSuccess = function() {};
		REGCheckDuplicateLogonID.prototype._onError = function() {};
		window.REGCheckDuplicateLogonID = REGCheckDuplicateLogonID;


		var REGGetZipcode2Address = (function(_super) {
			__extends(REGGetZipcode2Address, _super);
			function REGGetZipcode2Address(options) {
				options.resultPropertyName = 'count';
				REGGetZipcode2Address.__super__.constructor.apply(this, [options]);
			}
			return REGGetZipcode2Address;
		})(REGRequest);
		REGGetZipcode2Address.prototype._onSuccess = function() {};
		REGGetZipcode2Address.prototype._onError = function() {};
		window.REGGetZipcode2Address = REGGetZipcode2Address;
	});

})(jQuery);