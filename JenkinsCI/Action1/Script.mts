x = Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.uiLocation_2").getROProperty("value")

If x=Parameter("Location") Then
	Reporter.ReportEvent micWarning, "Octane URL already exist", "Octane URL with the same Tenant already exist in Jenkins configure"
	else 
Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("Add ALM Octane server").Click
Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.uiLocation").Set Parameter("Location")
wait(2)
If Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.username").Exist Then
Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.username").Set Parameter("Client_ID")
End If
wait(2)
If Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.password_2").Exist Then
Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.password_2").SetSecure Parameter("Client_secret")
End If @@ script infofile_;_ZIP::ssf4.xml_;_
wait(2) @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("Test Connection").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("Apply").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("Save").Click
End If  @@ script infofile_;_ZIP::ssf34.xml_;_

