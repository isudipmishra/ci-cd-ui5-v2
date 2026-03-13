/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["cicdui5/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
