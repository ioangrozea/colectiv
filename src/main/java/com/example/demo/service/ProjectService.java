package com.example.demo.service;


import com.example.demo.entity.Project;
import com.example.demo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public void addProject(Project project) {
        projectRepository.save(project);
    }


    public Project getProject(Long projectId) {
        return projectRepository.findById(projectId).orElse(null);
    }

    public Set<Project> getAllProjects() {
        Set<Project> projects = new HashSet<>();
        projectRepository.findAll().forEach(projects::add);
        return projects;
    }
}
