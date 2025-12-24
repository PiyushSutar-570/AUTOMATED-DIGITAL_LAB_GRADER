export const initSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`);

    //When a student updates code in the live editor ok 
    socket.on("code_update", (data) => {
      console.log("💻 Code Update:", data);
      // Broadcast code updates to other clients (real-time collaboration)
      socket.broadcast.emit("code_update_broadcast", data);
    });

    //When a student submits code for grading
    socket.on("submission_result", (result) => {
      console.log("📩 Submission received:", result);
      // Notify all connected instructors / dashboards in real-time
      io.emit("submission_result", result);
    });

    //On disconnect
    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};