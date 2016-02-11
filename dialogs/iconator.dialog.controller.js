//used for the icon picker dialog
angular.module("umbraco")
	.controller("Iconator.Dialog.Controller", function ($scope) {
		$scope.icons = $scope.dialogData.icons;
		$scope.renderIconPattern = $scope.dialogData.renderIconPattern;

		// When the user clicks on an icon.
		$scope.selectIcon = function(icon) {
			// Send the data back to the callback.
			$scope.submit(icon);
		};
	});
