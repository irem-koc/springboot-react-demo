package com.iremkoc.springboot_react_demo.service;

import java.util.List;

import com.iremkoc.springboot_react_demo.model.Student;

public interface IStudentService {
    Student addStudent(Student student);

    List<Student> getStudents();

    Student updateStudent(Student student, Long id);

    Student getStudent(Long id);

    void deleteStudent(Long id);

}
