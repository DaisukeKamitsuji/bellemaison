(function() {

	var CrossDomainStorage = (function() {
		function CrossDomainStorage(arg) {
/* 修正 150520brs1 TAM ココから */
			this.param = {
				origin: location.protocol + '//www.bellemaison.jp',
				path: '/pc/for_app/data/server.html'
			};
/* 修正 150520brs1 TAM ココまで */
			this.$iframe = null;
			this._iframeReady = false;
			this._queue = [];
			this._requests = {};
			this._id = 0;

			$.extend(this.param, arg);

//			this.initialize();
		}

		CrossDomainStorage.prototype.initialize = function() {
			var self = this;

			if (!self.$iframe) {
				if (window.postMessage && window.JSON) {
					self.$iframe = $('<iframe id="bell-cd-server" src="/">').css({
						'position': 'absolute',
						'width': '1px',
						'height': '1px',
						'visibility': 'hidden'
					});
					$('body').append(self.$iframe);

					self.$iframe.bind('load', function() {
						self._iframeLoaded();
					});

					$(window).bind('message', function(event) {
						self._receiveMessage(event.originalEvent);
					});
				} else {
					console.log('NOT CONDITION!!');
				}
			}
			self.$iframe.attr('src', self.param.origin + self.param.path);
		};

		CrossDomainStorage.prototype._sendRequest = function(data) {

			this._requests[data.request.id] = data;
			this.$iframe.get(0).contentWindow.postMessage(JSON.stringify(data.request), this.param.origin);
		};

		CrossDomainStorage.prototype._iframeLoaded = function() {
			this._iframeReady = true;

			if (this._queue.length) {
				for (var i = 0, len = this._queue.length; i < len; i++) {
					this._sendRequest(this._queue[i]);
				}
				this._queue = [];
			}
		};

		CrossDomainStorage.prototype._receiveMessage = function(event) {

			if (event.origin == this.param.origin){
				var data = JSON.parse(event.data);
/* 修正 150604brs1 TAM ココから */
				if (data.action == null) {
					this._requests[data.id].callback(data.key, data.value);
					delete this._requests[data.id];
				}
/* 修正 150604brs1 TAM ココまで */
			}
		};

		CrossDomainStorage.prototype.setItem = function(key, value, callback) {
			var request = {
				type: 'set',
				key: key,
				value: value,
				id: ++this._id
			},
			data = {
				request: request,
				callback: callback
			};

			if (this._iframeReady){
				this._sendRequest(data);
			} else {
				this._queue.push(data);
			} 

			if (!this.$iframe){
				this.initialize();
			}
		};

		CrossDomainStorage.prototype.addItem = function(key, value, callback) {
			var request = {
				type: 'add',
				key: key,
				value: value,
				id: ++this._id
			},
			data = {
				request: request,
				callback: callback
			};

			if (this._iframeReady){
				this._sendRequest(data);
			} else {
				this._queue.push(data);
			} 

			if (!this.$iframe){
				this.initialize();
			}
		};

		CrossDomainStorage.prototype.getItem = function(key, callback) {
			var request = {
				type: 'get',
				key: key,
				id: ++this._id
			},
			data = {
				request: request,
				callback: callback
			};

			if (this._iframeReady){
				this._sendRequest(data);
			} else {
				this._queue.push(data);
			}

			if (!this.$iframe){
				this.initialize();
			}
		};

		CrossDomainStorage.prototype.clearItem = function(key, callback){
			var request = {
				type: 'clear',
				key: key,
				id: ++this._id
			},
			data = {
				request: request,
				callback: callback
			};

			if (this._iframeReady){
				this._sendRequest(data);
			} else {
				this._queue.push(data);
			}

			if (!this.$iframe){
				this.initialize();
			}
		};

		return CrossDomainStorage;
	})();

	window.CrossDomainStorage = CrossDomainStorage;

	window.onpagehide = function() {
		var iframe = $('#bell-cd-server');
		if (0 < iframe.size()) {
			// 20141017 add Chrome等でエラーが発生するための対応
			try {
				iframe.get(0).reload();
			} catch(e) {
			}
		}
	}

}).call(this);
