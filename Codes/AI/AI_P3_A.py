import random
class TickTacToe:
    mat= []
    def printAfterTurn(self):
        print("Game after you turn:")
        self.printKeymat()

    def printKeymat(self):
        for i in range(3):
            for j in range(3):
                print(self.mat[i][j],"|",end="")
            print("\n")

    def initMat(self):
        self.mat = [[" " for i in range(3)] for j in range(3)]

    def startGame(self):
        turnNum = 0
        whichTurn = 0
        while (turnNum < 9):
            if whichTurn == 0:
                whichTurn = 1
                turnNum += 1
                self.player1Input()
                if (self.checkWin("O")):
                    print("Player 1 win")
                    break
            else:
                whichTurn = 0
                turnNum += 1
                self.player2Play()
                if (self.checkWin("X")):
                    print("Player Bot win")
                    break

    def player1Input(self):
        print("Player 1 Turn:")
        pos = self.takeInput()
        self.fillMat(pos, 0)
        self.printAfterTurn()

    def player2Play(self):
        print("Bot turn:")
        pos = self.getEmptyPos()
        self.fillMat(pos, 1)
        self.printAfterTurn()

    def getEmptyPos(self):
        rnList = []
        for i in range(3):
            for j in range(3):
                if (self.mat[i][j] == " "):
                    rnList.append((i, j))
        random.shuffle(rnList)
        return rnList[0]

    def fillMat(self, pos, whichTurn):
        row, col = pos
        if (whichTurn == 0):
            self.mat[row][col] = "O"
        else:
            self.mat[row][col] = "X"
    
    def takeInput(self):
        valid = False
        numRow, numCol = 0, 0
        while (valid == False):
            numRow = int(input("Enter the row (0-2): "))
            numCol = int(input("Enter the col (0-2): "))
            if (self.mat[numRow][numCol] == " "):
                valid = True
            else:
                print("Invalid input, try again!")
        return (numRow, numCol)
    
    def checkWin(self, whichTurn):
        isWin = False
        if (self.mat[0][0] == whichTurn and self.mat[0][1] == whichTurn and self.mat[0][2] == whichTurn):
            isWin = True
        elif (self.mat[1][0] == whichTurn and self.mat[1][1] == whichTurn and self.mat[1][2] == whichTurn):
            isWin = True
        elif (self.mat[2][0] == whichTurn and self.mat[2][1] == whichTurn and self.mat[2][2] == whichTurn):
            isWin = True
        elif (self.mat[0][0] == whichTurn and self.mat[1][0] == whichTurn and self.mat[2][0] == whichTurn):
            isWin = True
        elif (self.mat[0][1] == whichTurn and self.mat[1][1] == whichTurn and self.mat[2][1] == whichTurn):
            isWin = True
        elif (self.mat[0][2] == whichTurn and self.mat[1][2] == whichTurn and self.mat[2][2] == whichTurn):
            isWin = True
        elif (self.mat[0][0] == whichTurn and self.mat[1][1] == whichTurn and self.mat[2][2] == whichTurn):
            isWin = True
        elif (self.mat[0][2] == whichTurn and self.mat[1][1] == whichTurn and self.mat[2][0] == whichTurn):
            isWin = True
        return isWin

Game = TickTacToe()
Game.initMat()
Game.startGame()