class nQueens:
    sz = 1
    board = []

    def initInput(self):
        self.sz = int(input("Enter the size of the chessboard: "))
        self.board = [[" " for i in range(self.sz)] for j in range(self.sz)]
    
    def printBoard(self):
        for i in range(self.sz):
            for j in range(self.sz):
                print(self.board[i][j]+" |",end=" ")
            print("\n")
        print("\n")
        #for i in self.board:
        #    print(i)

    def checkIsValid(self, board, row, col):
        for i in range(col):
            if board[row][i] == "q":
                return False

        for i, j in zip(range(row, -1, -1),range(col, -1, -1)):
            if board[i][j] == "q":
                return False

        for i, j in zip(range(row, self.sz, 1),range(col, -1, -1)):
            if board[i][j] == "q":
                return False
    
        return True

    def doAlgo(self, col, brd):
        if (col >= self.sz):
            return True

        isAllTrue = True
        for i in range(self.sz):
            if (self.checkIsValid(brd, i, col) == True):
                brd[i][col] = "q"
                if (self.doAlgo(col+1, brd) == True):
                    return True
                brd[i][col] = " "

        return False

nQueensSol = nQueens()
nQueensSol.initInput()
nQueensSol.doAlgo(0, nQueensSol.board)
nQueensSol.printBoard()