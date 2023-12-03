sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App",
	"./pages/Main"
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("Should see the initial page of the app", function (Given, When, Then) {
		Given.iStartMyApp();

		Then.onTheAppPage.iShouldSeeTheApp();
      	Then.onTheViewPage.iShouldSeeThePageView();

		Then.iTeardownMyApp();
	});
});
