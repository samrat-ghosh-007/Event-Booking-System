const pool = require("../config/db");

exports.getEvents = async (req, res) => {
    try{
        const [events] = await pool.execute(
            "SELECT * FROM events WHERE event_date > NOW()"
         );
        res.json(events);
    } catch (err) {
    res.status(500).json({ message: err.message });
  };
};

exports.createEvent = async (req, res) => {
    try{
        const { title, description, date, capacity } = req.body;

        if (!title || !date || !capacity) {
             return res.status(400).json({ message: "Missing fields" });
        }

        await pool.execute(
            `INSERT INTO events (title, description, event_date, total_capacity, remaining_tickets)
             VALUES (?, ?, ?, ?, ?)`,
            [title, description, date, capacity, capacity]
        );

        res.status(201).json({ message: "Event created" });
    }catch (err) {
    res.status(500).json({ message: err.message });
    }
};
