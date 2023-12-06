import user from "@/models/user";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;
    
    if (method === "GET") {
        try {
            const users = await user.find();
            res.status(200).json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
    if (method === "POST") {
        try {
            const newUser = await user.create(req.body);
            res.status(200).json(newUser);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

export default handler;
