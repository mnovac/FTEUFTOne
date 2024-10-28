Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\SnapshotReportMode"
WshShell.RegWrite myKey, Parameter("save_image"),"REG_DWORD"
Set WshShell = Nothing
