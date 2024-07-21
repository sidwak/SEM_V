def is_winner(board, player):
    # Function to check if the given player has won the game
    # Check rows
    for row in board:
        if all(cell == player for cell in row):
            return True
    # Check columns
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True
    # Check diagonals
    if all(board[i][i] == player for i in range(3)) or all(board[i][2-i] == player for i in range(3)):
        return True
    return False

def is_board_full(board):
    # Function to check if the board is full (no empty spaces)
    return all(board[row][col] != ' ' for row in range(3) for col in range(3))

def evaluate(board):
    # Evaluation function for the current board state
    if is_winner(board, 'X'):
        return 1  # X wins
    elif is_winner(board, 'O'):
        return -1  # O wins
    elif is_board_full(board):
        return 0  # Draw
    else:
        return None  # Game is not over

def minimax(board, depth, maximizing_player):
    # Minimax algorithm function
    if depth == 0 or evaluate(board) is not None:
        # If depth is 0 or game is over, return evaluation of current board state
        return evaluate(board)

    if maximizing_player:
        max_eval = -float('inf')
        best_move = None
        for i in range(3):
            for j in range(3):
                if board[i][j] == ' ':
                    board[i][j] = 'X'
                    eval = minimax(board, depth - 1, False)
                    board[i][j] = ' '  # Undo move
                    if eval > max_eval:
                        max_eval = eval
                        best_move = (i, j)
        return max_eval if depth == 3 else best_move
    else:
        min_eval = float('inf')
        for i in range(3):
            for j in range(3):
                if board[i][j] == ' ':
                    board[i][j] = 'O'
                    eval = minimax(board, depth - 1, True)
                    board[i][j] = ' '  # Undo move
                    min_eval = min(min_eval, eval)
        return min_eval

# Example usage:
board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]
depth = 1  # Depth can be adjusted based on how far ahead you want to look

best_move = minimax(board, depth, True)
print(f"Best move for 'X' is to play at position {best_move}")
