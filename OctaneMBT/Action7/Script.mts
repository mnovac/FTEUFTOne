'''15. Click on Models tab 
''Browser("opentext").Page("folder").WebElement("Model tab").Click
''
'''16. Select the model
''Browser("opentext").Page("folder").WebElement("model list").Click
''
''Browser("opentext").Page("model").WaitProperty "class","content",2000
'
''17. Drag Unit from left to canvas
'Browser("opentext").Page("model").WebElement("unit").Drag 249,151 ' you have to specify locations dynamically based on your project
'
''18. Draw Path from Start to End and connected with Unit  
'Browser("opentext").Page("model").WebElement("start").Drag 249,151  ' you have to specify locations dynamically based on your project
'Browser("opentext").Page("model").WebElement("end").Drag 249,151  ' you have to specify locations dynamically based on your project
'
''19. Save the model
'Browser("opentext").Page("model").WebElement("save").Click
'
'
'
'
'
'' =============================================================
'' UFT One Script to Drag and Drop an Element on a Canvas
'' =============================================================
'
'' --------------------------------------------------
'' 1.  Define Objects (Object Repository or Hardcoded)
'' --------------------------------------------------
'' *** ASSUMPTION: You have your objects defined in the repository ***
'' *** Here are examples using hardcoded identifiers ***
'Dim dragSourceElement, canvasElement
'' Get web element by xpath: (You would usually get this from object repository)
'Set dragSourceElement = Browser("yourBrowser").Page("yourPage").WebElement("Unit")
'Set canvasElement = Browser("yourBrowser").Page("yourPage").WebElement("Canvas") ' Use appropriate object
'
' @@ hightlight id_;_65912_;_script infofile_;_ZIP::ssf1.xml_;_
'Browser("model - Core Software").Page("model - Core Software").WebElement("This text is displayed").Click @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("model - Core Software").Page("model - Core Software").WebElement("This text is displayed_2").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'
'' --------------------------------------------------
'' 2. Define Target Drop Location (Coordinates on Canvas)
'' --------------------------------------------------
'' Get the coordinates of the canvas
'Dim canvas_X, canvas_Y, canvasWidth, canvasHeight
'canvas_X = canvasElement.GetROProperty("abs_x")
'canvas_Y = canvasElement.GetROProperty("abs_y")
'canvasWidth= canvasElement.GetROProperty("width")
'canvasHeight= canvasElement.GetROProperty("height")
'
'' Example: Drop in the center of the canvas
'Dim dropX, dropY
'dropX = canvas_X + (canvasWidth / 2)  ' center X position of canvas
'dropY = canvas_Y + (canvasHeight / 2)  ' center Y position of canvas
'
'' or you can specify any relative drop coordinates on the canvas
''dropX = canvas_X + 100   
''dropY = canvas_Y + 50
'
'' --------------------------------------------------
'' 3.  Drag and Drop the Element
'' --------------------------------------------------
'' Drag and drop using the drag method (This can be used if you are dragging on a specified location)
'dragSourceElement.Drag dropX, dropY
'
'' --------------------------------------------------
'' Optional: Alternative Mouse Actions (For some specific application behaviours)
'' --------------------------------------------------
'' This block is an alternative example
''Use mouse actions if drag method is not working
''Mouse.Down dragSourceElement.X + 5, dragSourceElement.Y + 5  ' + offsets if needed
''Mouse.Move dropX, dropY
''Mouse.Up dropX, dropY
'
'' =============================================================
'' END OF SCRIPT
'' =============================================================
