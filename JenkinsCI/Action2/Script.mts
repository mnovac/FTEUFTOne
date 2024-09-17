'x = Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.uiLocation").getROProperty("value")
''msgbox x
'
'Dim userExt
'userExt = 1
'Do until Not Parameter("Location").exist
'  Browser("Some_browser").Page("Some_page").WebEdit("WebEdit").Set "registertester" & userExt+1
'  userExt = userExt+1
'  Browser("Some_browser").Page("Some_page").WebElement("Save & Continue").Click
'Loop
'userExt = Parameter("Location")
'If Parameter("Location") = True Then
	'Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.uiLocation").Click
	
'Browser("System [Jenkins]").Page("System [Jenkins]").WebElement("Location?Location of the_2").Click @@ script infofile_;_ZIP::ssf7.xml_;_
'Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.uiLocation_2").Set "https://qa3.almoctane.com/ui/?admin&p=2001" @@ script infofile_;_ZIP::ssf8.xml_;_
'Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("Apply").Click @@ script infofile_;_ZIP::ssf9.xml_;_
'Browser("System [Jenkins]").Page("System [Jenkins]").Link("Close").Click @@ script infofile_;_ZIP::ssf10.xml_;_
'Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("WebButton_2").Click @@ script infofile_;_ZIP::ssf11.xml_;_
'Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("Apply").Click @@ script infofile_;_ZIP::ssf12.xml_;_
'Browser("System [Jenkins]").Page("System [Jenkins]").Link("Close").Click @@ script infofile_;_ZIP::ssf13.xml_;_
	x = Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.uiLocation_2").getROProperty("value")
	If x=Parameter("Location") Then
	Browser("System [Jenkins]").Page("System [Jenkins]").Link("Close").Click
	Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("Apply").Click
	else 
	Reporter.ReportEvent micWarning, "Octane URL already exist", "Octane URL with the same Tenant already exist in Jenkins configure"
	End If
'End If
'If x=Parameter("Location") Then
' @@ script infofile_;_ZIP::ssf1.xml_;_
'Browser("System [Jenkins]").Page("System [Jenkins]").WebEdit("_.uiLocation").Click @@ script infofile_;_ZIP::ssf2.xml_;_
' @@ script infofile_;_ZIP::ssf5.xml_;_
'	
'Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf6.xml_;_
'	
'	else 
'	Reporter.ReportEvent micWarning, "Cannot dot deleted Octane URL", "Octane " + Parameter("Location") +" does not exist in Jenkins configure"
'End If
'
'Set oDesc = Description.Create()
'oDesc("class").Value = "jenkins-input validated  "
'oDesc("name").Value = "_.uiLocation"
'oDesc("type").Value = "text"
'oDesc("value").Value = Parameter("Location")
'Set myColl = Desktop.ChildObjects(oDesc)
'If Not IsEmpty(myColl) Then
'For i = 0 To myColl.Count -1
'msgbox myColl
'Browser("System [Jenkins]").Page("System [Jenkins]").WebButton("WebButton").Click
'Next
'End If
'Set myColl = Nothing
'Set oDesc = Nothing

'msgbox oDesc
