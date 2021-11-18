package com.example.demo.controller;

import com.example.demo.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/teachers")

public class TeacherController {
    @Autowired
    private TeacherService tearcherservice;
    @GetMapping("")
    public ResponseEntity<?> getlistTeachers() {
        return null;
    }

    @PostMapping("")
    public ResponseEntity<?> createinfoTeachers() {
        return null;
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTeachers() {
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delTeachers(){
        return null;
    }

}
