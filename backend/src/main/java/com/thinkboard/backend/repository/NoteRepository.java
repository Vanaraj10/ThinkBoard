package com.thinkboard.backend.repository;

import com.thinkboard.backend.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NoteRepository extends MongoRepository<Note,String> {
}