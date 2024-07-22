from pynput.mouse import Listener
import logging
logging.basicConfig(filename="C:\\Users\\Vaishanvi\\Desktop\\Siddhesh\\SEM V\\SEM_V\\Codes\\EH\\P3\\Logs\\mouse_log.txt", level=logging.DEBUG, format='%(asctime)s:%(message)s')

def mouse_move(x,y):
    logging.info("Mouse moved to: ({0},{1})".format(x,y))

def mouse_click(x,y,button,pressed):
    if pressed:
        logging.info("Mouse clicked at ({0}{1}) at {2}".format(x,y,button))

def mouse_scroll(x,y,dx,dy):
    logging.info("Mouse scorlled from ({0},{1}) to ({2}{3})".format(x,y,dx,dy))

with Listener(on_move=mouse_move, on_click=mouse_click, on_scroll=mouse_scroll) as listener:
    listener.join()