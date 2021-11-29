import {WINNER_X,WINNER_O,TIE} from '../Status/Statuses';
import {SquareValue, VALUE_O, VALUE_X} from './Square/Square';

export const createMaskForValue = (board, value) => board.reduce((prev,cur,idx) => prev | (cur === value ? Math.pow(2, idx) : 0), 0b0);

const checkMasksAgainstBoard = (masks, board) => masks.some(mask => (mask & board) === mask);
const checkBoardForIncompleteSquare = board => board.some(square => square === undefined);

export const checkForWinner = (board: SquareValue[]): string => {
    const winningMasks = [
        0b111000000, 0b000111000, 0b000000111,
        0b100100100, 0b010010010, 0b001001001,
        0b100010001, 0b001010100
    ];
    const xBoard = createMaskForValue(board, VALUE_X);
    const oBoard = createMaskForValue(board, VALUE_O);
    if(checkMasksAgainstBoard(winningMasks, xBoard)) {
        return WINNER_X;
    } else if (checkMasksAgainstBoard(winningMasks, oBoard)) {
        return WINNER_O;
    } else if(checkBoardForIncompleteSquare(board)) {
        return undefined;
    } else {
        return TIE;
    }
}