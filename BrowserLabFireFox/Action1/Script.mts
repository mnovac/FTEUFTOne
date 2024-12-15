If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Exist Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "admin"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "675edf0994d2a55e30d22cb23a02" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click
End If @@ script infofile_;_ZIP::ssf11.xml_;_

wait(3)
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Exist Then
       Reporter.ReportEvent micFail, "Failed", "Fail to Login incurrect user or password"
 	else
 	Reporter.ReportEvent micPass, "Passed Test", "Login succefull"
End If

