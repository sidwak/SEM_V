import os

try:
    cmd = "WMIC /OUTPUT:\\HTML\\process_log.html PROCESS get name,processid,creationdate /FORMAT:hform"
    filepath = "C:\\Users\\Vaishanvi\\Desktop\\Siddhesh\\SEM V\\SEM_V\\Codes\\EH\\P3\\Logs\\mycmd_py.bat"
    with open(filepath, 'w') as f:
        f.write(cmd)
    os.system("start "+filepath)
    print("File created. Run log.")
except Exception as err:
    print(err)
