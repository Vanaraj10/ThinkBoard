package com.thinkboard.backend.service;

import com.thinkboard.backend.model.Note;
import com.thinkboard.backend.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class NoteService {

    private final NoteRepository repo;

    public NoteService(NoteRepository repo) {
        this.repo = repo;
    }
    public List<Note> getAllNotes(){
        return repo.findAll();
    }
    public Optional<Note> getNoteById(String id) {
        return repo.findById(id);
    }
    public Note createNote(Note note){
        note.setCreatedAt(new Date());
        note.setUpdatedAt(new Date());
        return repo.save(note);
    }
    public Optional<Note> updateNote(String id,Note updatedNote){
        return repo.findById(id).map(note -> {
            note.setTitle(updatedNote.getTitle());
            note.setContent(updatedNote.getContent());
            note.setUpdatedAt(new Date());
            return repo.save(note);
        });
    }
    public void deleteNote(String id){
        repo.deleteById(id);
    }
}
