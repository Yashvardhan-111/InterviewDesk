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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4">Enter Room Code</h2>
        <p className="text-gray-600 mb-4">
          Please enter the 4-digit room code to join this session.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="0000"
            className="w-full p-3 border border-gray-300 rounded-lg text-center text-2xl font-mono tracking-widest"
            maxLength={4}
            autoFocus
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={roomCode.length !== 4}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
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