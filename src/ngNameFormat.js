(function(angular) {

	'use strict';

	angular
		.module('ngNameFormat', [])
		.directive('ngNameFormat', ngNameFormat);

	function ngNameFormat() {
		return {
			require: 'ngModel',
			restrict: 'A',
			link: function(scope, el, attrs, ngModel) {

				el.bind('keyup', function(e) {

					if(e.keyCode >= 65 && e.keyCode <= 90 && !e.altKey && !e.ctrlKey) {
						var value = ngModel.$viewValue;

						ngModel.$setViewValue(capitalizeFirstLetter(value));
						ngModel.$render();
			        }

				})

			}
		}
	}

	function capitalizeFirstLetter(str) {
	    str = str.replace(/\s\s+/, ' ');
	    
		return str
				.toLowerCase()
				.split(' ')
				.map(function(word) {
				var ignore = ['da', 'de', 'das', 'do', 'dos'];

				if(ignore.indexOf(word) === -1) {

					return word[0].toUpperCase() + word.substr(1);

				} else {

					return word;

				}

			})
			.join(' ');
	}

})(window.angular);