Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").Link("MBT Repository").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Add item").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebEdit("Name").Set "folder" @@ script infofile_;_ZIP::ssf2.xml_;_
wait(1)
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").Link("model_folder folder").Click @@ script infofile_;_ZIP::ssf4.xml_;_
