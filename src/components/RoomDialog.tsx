export default function RoomDialog() {
  return (
    <div>
      <form className="space-y-2 m-2">
        <legend>Join Room</legend>
        <fieldset>
          <label htmlFor="name" className="hidden">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nickname"
            className="rounded-md overflow-hidden px-2 py-1 focus:ring-0 focus:outline-none"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="roomCode" className="hidden">
            Room Code
          </label>
          <input
            type="text"
            id="roomCode"
            name="roomCode"
            placeholder="Room Code"
            className="rounded-md overflow-hidden px-2 py-1 focus:ring-0 focus:outline-none"
          />
        </fieldset>
        <button type="submit">Join</button>
      </form>
    </div>
  );
}
