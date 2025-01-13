Dim iURL
Dim objShell
iURL = Parameter("url")
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
edgeExist = "C:\Program Files\Mozilla Firefox\firefox.exe"
If fileSystemObj.FileExists(edgeExist) then
objShell.ShellExecute "C:\Program Files\Mozilla Firefox\firefox.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files (x86)\Mozilla Firefox\firefox.exe", iURL, "", ""
End If

Browser("System [Jenkins]").Navigate Parameter("Jenkins_URL") @@ hightlight id_;_1840930_;_script infofile_;_ZIP::ssf42.xml_;_
wait(3)
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
End If 
