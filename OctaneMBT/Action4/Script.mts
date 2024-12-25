Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebTabStrip("Details Models Units").Select "Units" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Unit").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebEdit("Name").Set Parameter("unit_name") @@ script infofile_;_ZIP::ssf3.xml_;_
wait(1)
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait(2) @@ script infofile_;_ZIP::ssf1.xml_;_
 If Browser("Functional Testing Model-Based_2").Page("Functional Testing Model-Based").WebElement("unit").Exist Then @@ script infofile_;_ZIP::ssf3.xml_;_
 	 Reporter.ReportEvent micPass, "Passed Test", "created Unit succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to created Unit " + "expectad unit name 'unit' " + "but the name is " + Parameter("unit_name")
 End If
 @@ script infofile_;_ZIP::ssf2.xml_;_
