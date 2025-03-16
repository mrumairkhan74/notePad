const noteModel = require('../model/noteModel');

const createNode = async (req, res) => {
    try {
        let { title, content } = req.body;
        const note = await noteModel.create({ title, content });
        res.status(201).redirect('/');
    } catch (error) {
        console.error(error); // log the error
        res.status(500).json({ message: 'Error creating note', error: error.message });
    }
};

const editNode = async (req, res) => {
    try {
        const { content } = req.body;
        const { id } = req.params;
        const note = await noteModel.findByIdAndUpdate(id, { content }, { new: true });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.redirect('/');
    } catch (error) {
        console.error(error); // log the error
        res.status(500).json({ message: 'Error updating note', error: error.message });
    }
};

const deleteNode = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await noteModel.findByIdAndDelete(id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.redirect('/');
    } catch (error) {
        console.error(error); // log the error
        res.status(500).json({ message: 'Error deleting note', error: error.message });
    }
};

module.exports = {
    createNode,
    deleteNode,
    editNode
};
