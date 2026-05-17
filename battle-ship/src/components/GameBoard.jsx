/* eslint-disable no-unused-vars */
import {useAppDispatch, useAppSelector} from '../store/index.js';
import {playerAttack, clearError, computerAttack, addError} from '../store/gameSlice';
import {DELAY_MS, PHASES} from '../constants/gameConstants';
import Grid from './Grid.jsx';
import {useEffect, useState} from "react";
import {selectAttackCell} from "../utils/computerLogic.js";
import ShipList from "./ShipList.jsx";
import '../styles/game-board.css';
import '../styles/error.css';

export default function GameBoard() {
    const [errorMsg, setErrorMsg] = useState(null);
    const dispatch = useAppDispatch();

    // 4.2.1b Return updated state
    const {phase, playerBoard, playerFleet, computerBoard, computerFleet, lastAttackResult} =
        useAppSelector((state) => state.game);

    // 4.1.0 UC-03 hoàn tất mà không kết thúc ván chơi → hệ thống cập nhật trạng thái lượt sang Máy tính
    // 4.1.1 → (phase = CPU_TURN) → Nhận lượt từ hệ thống; bắt đầu xử lý lượt tấn công.
    useEffect(() => {
        if (phase !== PHASES.CPU_TURN) return;

        const timer = setTimeout(() => {
            let cell = null;
            try {
                // 4.1.2a Chọn một ô chưa bị tấn công trên bảng `Player` theo logic cơ bản
                cell = selectAttackCell(playerBoard);
            } catch (error) {
                // 4.3.2a setErrorMsg = "Kết quả lượt chơi gặp lỗi. Vui lòng tải lại trang."
                setErrorMsg("Kết quả lượt chơi gặp lỗi. Vui lòng tải lại trang.");
            }

            // 4.1.3 Xác định kết quả tấn công (Hit/ Miss/ Sunk)
            if (cell) dispatch(computerAttack({row: cell.row, col: cell.col}));
        }, DELAY_MS);

        return () => clearTimeout(timer);
    }, [phase, playerBoard, dispatch]);

    const isClickable = phase === PHASES.PLAYER_TURN;

    function handleCellClick(row, col) {
        if (!isClickable) return;
        dispatch(clearError());
        dispatch(playerAttack({row, col}));
    }

    return (
        <div className="board-wrapper">

            {/* 4.3.2b Hiển thị thông báo lỗi "Kết quả lượt chơi gặp lỗi.
            Vui lòng tải lại trang." → toast(errorMsg) */}
            {errorMsg &&
                <div className="error-screen">
                    <div className="error-message">
                        <p>{errorMsg}</p>
                        <button className="error-reload-btn"
                                onClick={() => window.location.reload()}>
                            Tải lại trang
                        </button>
                    </div>
                </div>
            }

            <div className="game-board">
                {/* ── Your grid ── */}
                <div className="game-section">
                    <ShipList fleet={playerFleet} />
                    <div className="game-board-area">
                        {/* 4.2.2 Đánh dấu ô vừa bị tấn công và toàn bộ ô của tàu bị nhấn chìm bằng ký hiệu Sunk trên bảng `Player`.*/}
                        <Grid board={playerBoard} disabled />
                        <p className="game-board-label">Bảng Của Bạn</p>
                    </div>
                </div>

                {/* ── Opponent's grid ── */}
                <div className="game-section">
                    <div className="game-board-area">
                        <Grid
                            board={computerBoard}
                            onCellClick={handleCellClick}
                            disabled={!isClickable}
                            hideShips
                        />
                        <p className="game-board-label">
                            Bảng Đối Thủ
                            <span className="game-board-label-sub"> (Máy Tính)</span>
                        </p>
                    </div>
                    <ShipList fleet={computerFleet} align="right" />
                </div>
            </div>
        </div>
    );
}