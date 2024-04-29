import New from "../models/New.js";

const getNews = async (req, res) => {
    try {
        const findNews = await New.find()
        res.status(200).json({ message: 'All News', findNews })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error to get the News" })
    }
}

const createNew = async (req, res) => {}

export {
    getNews,
    createNew
}