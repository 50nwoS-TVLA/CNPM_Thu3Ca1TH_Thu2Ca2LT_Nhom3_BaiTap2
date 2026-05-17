/* eslint-disable */
import {CELL_STATE} from '../constants/gameConstants.js';

/**
 * Chọn một ô ngẫu nhiên trên Player Board
 *
 * @param {Cell[][]} playerBoard
 * @returns {{ row: number, col: number }}
 */
export function selectAttackCell(playerBoard) {
    try {
        const available = [];
        playerBoard.forEach((rowArr) =>
            rowArr.forEach((cell) => {
                if (cell.state !== CELL_STATE.HIT
                    && cell.state !== CELL_STATE.MISS
                    && cell.state !== CELL_STATE.SUNK) {
                    available.push({row: cell.row, col: cell.col});
                }
            })
        );
        const index = Math.floor(Math.random() * available.length);

        // 4.1.2b Trả về ô hợp lệ (chưa bị tấn công)
        return available[index];

    } catch (error) {
        // 4.3.1 Phát hiện lỗi khi kiểm tra tính hợp lệ của ô tại bước 4.1.2
        throw error;
    }
}