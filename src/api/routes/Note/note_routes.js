import express from 'express'
import { NoteCreate, NoteDelete, NoteRead, NoteReadById, NoteUpdate } from '../../controllers/Note'

const note_routes = express.Router()

note_routes.post('/note/create', NoteCreate)
note_routes.post('/note/read', NoteRead)
note_routes.get('/note/read-by-id/:id', NoteReadById)
note_routes.put('/note/update', NoteUpdate)
note_routes.delete('/note/delete', NoteDelete)


export default note_routes