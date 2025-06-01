package com.thinkboard.backend.controller;

import com.thinkboard.backend.model.Note;
import com.thinkboard.backend.service.NoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*") // Allow all origins for simplicity, adjust as needed
public class NoteController {

    private final NoteService service;

    public NoteController(NoteService service) {
        this.service = service;
    }
    @GetMapping
    public ResponseEntity<List<Note>> getAllNotes() {
        List<Note> notes = service.getAllNotes();
        return ResponseEntity.ok(notes);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable  String id) {
        return service.getNoteById(id).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note) {
        Note createdNote = service.createNote(note);
        return ResponseEntity.status(201).body(createdNote);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable String id, @RequestBody Note updatedNote) {
        return service.updateNote(id, updatedNote)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable String id) {
        service.deleteNote(id);
        return ResponseEntity.noContent().build();
    }
}
