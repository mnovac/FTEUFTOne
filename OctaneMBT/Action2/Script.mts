Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").Link("MBT Repository").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Add item").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebEdit("Name").Set Parameter("folder_name") @@ script infofile_;_ZIP::ssf2.xml_;_
wait(1)
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Add      Add").Click
wait(2)
If Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").Link("model_folder folder").Exist(2) Then
    Reporter.ReportEvent micPass, "Passed Test", "created Folder succefull"
Else
    Reporter.ReportEvent micFail, "Failed", "Fail to created Folder " + "expectad folder name 'folder' " + "but the name is " + Parameter("folder_name")
End If @@ script infofile_;_ZIP::ssf4.xml_;_
