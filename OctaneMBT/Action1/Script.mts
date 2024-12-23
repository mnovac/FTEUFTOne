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
wait(3)

If Browser("Login -").Page("Login - MyAccount").WebEdit("federateLoginName").Exist Then
Browser("Login -").Page("Login - MyAccount").WebEdit("federateLoginName").Set Parameter("user")
Browser("Login -").Page("Login -").WebButton("CONTINUE").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Login -").Page("Login -").WebEdit("password").SetSecure Parameter("pass") @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Login -").Page("Login -").WebButton("SIGN IN").Click @@ script infofile_;_ZIP::ssf40.xml_;_
End If

wait(3)
If Browser("Login -").Page("Sign out - Core Software").WebButton("Core Software Delivery").Exist Then
	Reporter.ReportEvent micPass, "Passed Test", "Login succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to Login incurrect user or password"
End If
 @@ script infofile_;_ZIP::ssf16.xml_;_
 @@ hightlight id_;_6167658_;_script infofile_;_ZIP::ssf29.xml_;_
