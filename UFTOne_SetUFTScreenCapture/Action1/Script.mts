Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\SnapshotReportMode"
WshShell.RegWrite myKey, Parameter("save_image"),"REG_DWORD"
Set WshShell = Nothing

'Set WshShell = CreateObject("WScript.Shell")
'myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\SaveMobileGif"
'WshShell.RegWrite myKey, Parameter("save_mobile_gif"),"REG_DWORD"
'Set WshShell = Nothing

Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\SOFTWARE\Mercury Interactive\QuickTest Professional\MicTest\MovieReportMode"
WshShell.RegWrite myKey, Parameter("save_movie"),"REG_DWORD"
Set WshShell = Nothing
