
'AIUtil.SetContext Window("text:=Home - Advantage Bank - Google Chrome", "regexpwndtitle:=Google Chrome", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
'AIUtil.SetContext Window("text:=Home - Advantage Bank - Google Chrome", "regexpwndtitle:=Google Chrome", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")


'AIUtil.SetContext Window("text:=Home - Advantage Bank - Google Chrome", "regexpwndtitle:=Google Chrome", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
'AIUtil.SetContext Window("text:=Home - Advantage Bank - Google Chrome", "regexpwndtitle:=Google Chrome", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
AIUtil.SetContext Browser("creationtime:=21")

'AIUtil.SetContext Window("text:=Home - Advantage Bank - Google Chrome", "regexpwndtitle:=Google Chrome", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
' Load the required AI testing libraries
Dim AIUtil
Set AIUtil = CreateObject("AIUtil.AIUtil")

' Start the UFT test
Dim BrowserObj
Set BrowserObj = AIUtil.LaunchBrowser("https://advantageonlinebanking.com/dashboard", "Chrome")

' Interact with elements using AI
Dim LoginButton, EmailField, PasswordField, SubmitButton

' Locate Email input field
Set EmailField = BrowserObj.AIUtil("text", "username")
EmailField.Set "admin"

' Locate Password input field
Set PasswordField = BrowserObj.AIUtil("password", "password")
PasswordField.Set "demo"

' Locate and click Submit button
Set SubmitButton = BrowserObj.AIUtil("submit", "Sign-In")
SubmitButton.Click

' Validate if the login was successful
If BrowserObj.AIUtil("label", "Welcome TestUser").Exist(5) Then
    Reporter.ReportEvent micPass, "Login Test", "Login was successful."
Else
    Reporter.ReportEvent micFail, "Login Test", "Login failed."
End If

' Close the browser
BrowserObj.Close

