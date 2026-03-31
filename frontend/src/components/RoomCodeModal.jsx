import { useState } from "react";

const RoomCodeModal = ({ isOpen, onClose, onSubmit, error }) => {
  const [roomCode, setRoomCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomCode.length === 4 && /^\d{4}$/.test(roomCode)) {
      onSubmit(roomCode);
    }
  };

  const handleClose = () => {
    setRoomCode("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#081412] border border-[#1b4f2a] rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
        <h2 className="text-2xl font-bold mb-3 text-white">Enter Room Code</h2>
        <p className="text-[#98f2a5] mb-4">
          Please enter the 4-digit room code to join this session.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="0000"
            className="w-full p-3 border border-[#1b4f2a] bg-black text-white rounded-lg text-center text-3xl font-mono tracking-widest outline-none focus:ring-2 focus:ring-[#39d574]"
            maxLength={4}
            autoFocus
          />
          {error && <p className="text-[#ff6b6b] text-sm mt-2">{error}</p>}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-[#1b4f2a] text-white rounded-lg hover:bg-[#28a745] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={roomCode.length !== 4}
              className="flex-1 px-4 py-2 bg-[#28a745] text-black rounded-lg hover:bg-[#22c14b] disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Join
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomCodeModal;