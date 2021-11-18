package com.example.demo.service;

import com.example.demo.Entity.Teacher;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class TeacherServiceImpl implements TeacherService {
    private static ArrayList<Teacher> teachers = new ArrayList<Teacher>();

    static
    {
        teachers.add(new Teacher(1, "Nguyễn Thị Mơ", "mongmo@gmail.com","0987654321","avatar.img"));

    }
}
