Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").Link("model_folder folder").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebTabStrip("Details Models Units").Select "Models" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Model").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebEdit("Name").Set "model" @@ script infofile_;_ZIP::ssf4.xml_;_
wait(1)
Browser("Functional Testing Model-Based").Page("Functional Testing Model-Based").WebButton("Add      Add").Click @@ script infofile_;_ZIP::ssf5.xml_;_
