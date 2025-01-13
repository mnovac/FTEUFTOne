Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\Packages\AIPackage\Settings\CloudAIService"
WshShell.RegWrite myKey, "incurrectAccessKey","REG_SZ"
Set WshShell = Nothing
