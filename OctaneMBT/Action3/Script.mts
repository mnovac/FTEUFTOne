Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").Link("model_folder folder").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebTabStrip("Details Models Units").Select "Models" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Model").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebEdit("Name").Set Parameter("model_name") @@ script infofile_;_ZIP::ssf4.xml_;_
wait(1)
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait(2)
Dim objText
objText = Browser("Functional Testing Model-Based_2").Page("Functional Testing Model-Based").WebElement("Mmodel").GetROProperty("innertext")
If InStr(1, objText, "Mmodel", vbTextCompare) > 0 Then
 	 Reporter.ReportEvent micPass, "Passed Test", "created Model succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to created Model " + "expectad model name 'model' " + "but the name is " + Parameter("model_name")
 End If

