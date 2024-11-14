Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\Packages\AIPackage\Settings\CloudAIService"
WshShell.RegWrite myKey, Parameter("AccessKey"),"REG_SZ"
Set WshShell = Nothing
