angular.module("umbraco").controller("Iconator.Controller", function ($scope, $http, assetsService, /*dialogService,*/ notificationsService) {
	////////////////
	// Setup
	////////////////
	
	$scope.icons = [];
	$scope.icon = '';
	$scope.iconPattern = '<i class="{0}"></i>';
	$scope.overlay = {
		view: '/app_plugins/iconator/dialogs/iconator.dialog.html',
		width: 500,
		show: false,
		title: 'Select an icon',
		selectIcon: function(icon) {
			$scope.overlay.show = false;

			$scope.model.value = icon;
		},
		close: function() {
			$scope.overlay.show = false;
		}
	};

	if ($scope.model.config.iconPattern != null && $scope.model.config.iconPattern != '') {
		$scope.iconPattern = $scope.model.config.iconPattern;
	};

	//////////////////////
	// Scope functions
	//////////////////////
	
	$scope.openIconPickerDialog = function() {
		$scope.overlay.show = true;
		$scope.overlay.icons = $scope.icons;
		$scope.overlay.renderIconPattern = $scope.renderIconPattern;
		$scope.overlay.iconPattern = $scope.iconPattern;
	};

	// Write out the HTML for the current element class name using the icon pattern.
	$scope.renderIconPattern = function (currentClassName) {
		return $scope.iconPattern.replace("{0}", currentClassName);
	};

	// Get the matching class names from the stylesheet
	var getClassNames = function () {
		var cssPath = $scope.model.config.cssPath;
		var cssRegexPattern = $scope.model.config.cssRegex;
		var excludeList = $scope.model.config.excludeList;
		var iconPattern = $scope.model.config.iconPattern;
		var cssRegex = new RegExp(cssRegexPattern, 'g');
		var matches = [];
		var isError = false;

		if (excludeList == null) {
			excludeList = "";
		}

		// Get the class names from the specified stylesheet,
		// use angular http request to make a cached request for the stylesheet content.
		$http({
			method: 'GET', 
			url: cssPath,
			cache: true
		})
		.success(function (data, status, headers, config) {
			var cssText = data;
			var hasMatches = cssRegex.test(cssText);

			//reset regex
			cssRegex.compile(cssRegexPattern, "g");

			if (hasMatches) {
				var match = cssRegex.exec(cssText);

				while (match != null) {
					match = cssRegex.exec(cssText);

					// check if match has populated array
					if (match != null && match.length > 1) {
						//check if array already contains match and not on exclude list
						if (!(matches.indexOf(match[1]) > 0) && !(excludeList.split(',').indexOf(match[1]) > 0)) {
							matches.push(match[1]);
							hasMatches = true;
						}
					}
				}
			}

			matches.sort();

			if (!hasMatches && !isError) {
				isError = true;

				notificationsService.error('An error has occured.', 'No matches in stylesheet for regex: ' + cssRegexPattern);
			}
		})
		.error(function (data, status, headers, config) {
			notificationsService.error('An error has occured.', 'Stylesheet or file ' + cssPath + ' not found on server.');
			isError = true;
		});

		if (!/css$/.test(cssPath)) {
			cssPath = cssPath.split('.')[0] + '.css';
		}

		// Load the supplied css stylesheet using the umbraco assetsService
		assetsService.loadCss(cssPath);

		return matches;
	};

	//////////////
	// Load
	//////////////

	$scope.icons = getClassNames();
});
