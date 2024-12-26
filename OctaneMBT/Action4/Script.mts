Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebTabStrip("Details Models Units").Select "Units" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebEdit("Name").Set Parameter("unit_name") @@ script infofile_;_ZIP::ssf3.xml_;_
wait(1)
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait(2)
If Browser("Functional Testing Model-Based_2").Page("Functional Testing Model-Based").WebElement("unit").Exist(2) Then @@ script infofile_;_ZIP::ssf3.xml_;_
 	 Reporter.ReportEvent micPass, "Passed Test", "created Unit succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to created Unit " + "expectad unit name 'unit' " + "but the name is " + Parameter("unit_name")
 End If
 
' Dim objText, regExp
'objText =  Browser("Functional Testing Model-Based_2").Page("Functional Testing Model-Based").WebElement("unit").GetROProperty("innertext")
'
'Set regExp = New RegExp
'regExp.Pattern = "Order\s*\d+" ' Matches "Order" followed by one or more digits
'regExp.IgnoreCase = True
'
'If regExp.Test(objText) Then
' 	 Reporter.ReportEvent micPass, "Passed Test", "created Unit succefull"
' 	else
' 	Reporter.ReportEvent micFail, "Failed", "Fail to created Unit " + "expectad unit name 'unit' " + "but the name is " + Parameter("unit_name")
'End If
'
'Set regExp = Nothing
 @@ script infofile_;_ZIP::ssf2.xml_;_
