import logging
logging.basicConfig(filename="C:\\Users\\Vaishanvi\\Desktop\\Siddhesh\\SEM V\\SEM_V\\Codes\\EH\\P3\\Logs\\sid_error_logs.txt",
                    level=logging.DEBUG,format='%(asctime)s %(levelname)s %(name)s %(message)s')
logger = logging.getLogger(__name__)
try:
    1/0
except ZeroDivisionError as err:
    logger.error(err)

try:
    a,b = "hello",10
    c = a + b
except TypeError as err:
    logger.error(err)

try:
    llist = [1, 3]
    print(llist[5])
except IndexError as err:
    logger.error(err)

try:
    nn = "hello"
    nn.reverse()
except AttributeError as err:
    logger.error(err)

try:
    x = (1,2,3)
    x[0] = 8
except Exception as err:
    logger.error(err)