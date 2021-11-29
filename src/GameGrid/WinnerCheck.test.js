import {WINNER_X,WINNER_O,TIE} from '../Status/Statuses';
import {VALUE_O, VALUE_X} from './Square/Square';

import {checkForWinner, createMaskForValue} from './WinnerCheck';

describe('WinnerCheck', () => {
    it('should be able to translate a board into a mask', function () {
        expect(createMaskForValue([
            VALUE_X, undefined, VALUE_O,
            VALUE_X, VALUE_O, undefined,
            VALUE_X, undefined, VALUE_O
        ], VALUE_O)).toEqual(0b100010100);
    });

    const flipBoard = board => board.map(square => square === VALUE_X ? VALUE_O : (square === VALUE_O ? VALUE_X : undefined));
    const rotateBoardRow = board => board.slice(3).concat(board.slice(0,3));
    const rotateBoardCol = board => [
        board[2],board[0],board[1],
        board[5],board[3],board[4],
        board[8],board[6],board[7],
    ];

    const testPattern = (board, mutator) => {
        for (let i = 0; i < 3; i++) {
            expect(checkForWinner(board)).toEqual(WINNER_X);
            board = flipBoard(board);
            expect(checkForWinner(board)).toEqual(WINNER_O);
            board = mutator(board);
            board = flipBoard(board);
        }
    }

    it('should return winner for X in row', () => {
        let board = [
            VALUE_X, VALUE_X, VALUE_X,
            undefined, VALUE_O, undefined,
            VALUE_O, undefined, VALUE_O
        ];
        testPattern(board, rotateBoardRow);
    });

    it('should return winner for X in col', () => {
        let board = [
            VALUE_X, undefined, VALUE_O,
            VALUE_X, VALUE_O, undefined,
            VALUE_X, undefined, VALUE_O
        ]
        testPattern(board, rotateBoardCol);
    });

    const rotateBoardDiag = board => [
        board[2], board[1], board[0],
        board[3], board[4], board[5],
        board[8], board[7], board[6]
    ];

    it('should return winner for X in diag', () => {
        let board = [
            VALUE_X, undefined, VALUE_O,
            VALUE_O, VALUE_X, undefined,
            VALUE_O, undefined, VALUE_X
        ]
        testPattern(board, rotateBoardDiag);
    });

    it('should return tie for a tie', function () {
        let board = [
            VALUE_X, VALUE_X, VALUE_O,
            VALUE_O, VALUE_X, VALUE_X,
            VALUE_X, VALUE_O, VALUE_O
        ]
        expect(checkForWinner(board)).toEqual(TIE);
    });

    it('should return undefined for no result', function () {
        let board = [
            VALUE_X, undefined, VALUE_O,
            undefined, VALUE_O, undefined,
            VALUE_X, undefined, VALUE_X
        ]
        expect(checkForWinner(board)).toEqual(undefined);
    });
});