/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsapui5/zpurchasemd09/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
