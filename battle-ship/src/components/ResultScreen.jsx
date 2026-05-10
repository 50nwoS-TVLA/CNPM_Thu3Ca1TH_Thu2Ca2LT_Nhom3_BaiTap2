import { useAppSelector, useAppDispatch } from '../store/index.js';
import { startGame } from '../store/gameSlice.js';
import { WINNER } from '../constants/gameConstants.js';
import '../styles/game-over.css';

/**
 * UC-05: KẾT THÚC VÁN CHƠI
 * Component này hiển thị màn hình kết quả khi hệ thống phát hiện điều kiện kết thúc.
 */
export default function ResultScreen() {
    const dispatch = useAppDispatch();

    /* TRUY XUẤT DỮ LIỆU TỪ HỆ THỐNG
       Sau khi UC-03 hoặc UC-04 xác định kết quả (Bước 5.2 hoặc 5.A1.2 trong flow),
       dữ liệu sẽ được lấy từ store để hiển thị.
    */
    const { winner, stats } = useAppSelector((state) => state.game);
    const isPlayerWinner = winner === WINNER.PLAYER;

    /* XỬ LÝ LỰA CHỌN: CHƠI LẠI (Bước 5.6 & 5.6.1 trong Luồng chính)
       Kích hoạt lại UC-01 để khởi tạo một ván chơi hoàn toàn mới.
    */
    const handleRestart = () => dispatch(startGame());

    /* XỬ LÝ LỰA CHỌN: QUAY VỀ MENU (Bước 5.6.2 trong Activity Diagram)
       Đưa người chơi trở lại màn hình chính của ứng dụng.
    */
    const handleBackToMenu = () => window.location.reload();

    return (
        /* GIAO DIỆN KẾT THÚC (Hậu điều kiện 1 - Đặc tả §5)
           Thông báo kết quả hiển thị trên cùng một màn hình (Non-Functional Req §11).
        */
        <div className="result-overlay">
            <div className="result-modal" role="dialog" aria-modal="true">

                {/* PHẦN 1: THÔNG BÁO KẾT QUẢ & LÝ DO (Bước 5.3 hoặc 5.A1.3)
                    Hiển thị text label THẮNG/THUA rõ ràng và lý do tương ứng.
                */}
                <div className="result-header">
                    <div className={`result-icon ${isPlayerWinner ? 'icon-win' : 'icon-lose'}`}>
                        {isPlayerWinner ? '🏆' : '💀'}
                    </div>
                    <h1 className={`result-title ${isPlayerWinner ? 'title-win' : 'title-lose'}`}>
                        {isPlayerWinner ? 'Bạn đã thắng!' : 'Bạn đã thua!'}
                    </h1>
                    <p className="result-reason">
                        {/* Hiển thị lý do kết thúc dựa trên quy tắc RUL-03 */}
                        {isPlayerWinner
                            ? 'Toàn bộ tàu đối thủ đã bị nhấn chìm.'
                            : 'Toàn bộ tàu của bạn đã bị nhấn chìm.'}
                    </p>
                </div>

                <hr className="result-divider" />

                {/* PHẦN 2: TÓM TẮT VÁN CHƠI (Bước 5.4 trong Activity Diagram)
                    Hiển thị các thông số thống kê cơ bản của ván đấu vừa kết thúc.
                */}
                <p className="stats-label">Tóm tắt ván chơi</p>
                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-card-label">
                            <span className="dot dot-player" />
                            Lượt bắn của bạn
                        </span>
                        <strong className="stat-card-value">{stats?.playerShots ?? 0}</strong>
                    </div>
                    <div className="stat-card">
                        <span className="stat-card-label">
                            <span className="dot dot-cpu" />
                            Lượt bắn của máy
                        </span>
                        <strong className="stat-card-value">{stats?.cpuShots ?? 0}</strong>
                    </div>
                </div>

                {/* PHẦN 3: CÁC NÚT LỰA CHỌN ĐIỀU HƯỚNG (Bước 5.5 trong Activity Diagram)
                    Cung cấp các tùy chọn sau khi ván chơi kết thúc (Chơi lại / Menu / Thoát).
                */}
                <div className="result-actions">
                    {/* Nút "Chơi lại": Quay lại UC-01 (Yêu cầu phi chức năng §11) */}
                    <button className="btn btn-primary" onClick={handleRestart}>
                        🔄 Chơi lại (ván mới)
                    </button>
                    {/* Nút "Menu": Quay về màn hình chính (Bước 5.6.2) */}
                    <button className="btn" onClick={handleBackToMenu}>
                        🏠 Quay về menu chính
                    </button>
                </div>
            </div>
        </div>
    );
}