import { useState } from "react";
import { Loader2Icon, LockIcon } from "lucide-react";

function RoomCodeModal({ sessionId, onSubmit, isLoading }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) {
      setError("Please enter a room code");
      return;
    }
    if (code.length !== 4) {
      setError("Room code must be exactly 4 characters");
      return;
    }
    onSubmit(code);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 4) {
      setCode(value);
      setError("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Modal - click outside closes it */}
      <div
        className="bg-base-100 rounded-xl shadow-2xl max-w-md w-full border border-base-300 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/20 rounded-lg">
            <LockIcon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-base-content">Enter Room Code</h2>
            <p className="text-base-content/60 text-sm">Verify your access to this session</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-semibold text-base-content">Room Code</span>
            </label>
            <input
              type="text"
              placeholder="Enter 4-character code"
              value={code}
              onChange={handleInputChange}
              disabled={isLoading}
              maxLength="4"
              className="input input-bordered input-lg w-full font-mono text-center text-2xl tracking-widest focus:outline-none focus:input-primary"
              autoFocus
            />
            {error && <p className="text-error text-sm mt-2">{error}</p>}
            <p className="text-base-content/50 text-xs mt-2">
              You'll find this code in your session details
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading || code.length !== 4}
            className="btn btn-primary w-full gap-2"
          >
            {isLoading && <Loader2Icon className="w-4 h-4 animate-spin" />}
            {isLoading ? "Verifying..." : "Join Session"}
          </button>
        </form>

        <p className="text-base-content/50 text-xs text-center mt-4">
          Click outside to cancel
        </p>
      </div>
    </div>
  );
}

export default RoomCodeModal;
