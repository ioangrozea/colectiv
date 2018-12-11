package com.example.demo.repository;

import com.example.demo.entity.Project;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ProjectRepository extends CrudRepository<Project, Long> {
    Optional<Project> findProjectById(String Id);
    Optional<Project> findProjectByProjectName(String projectName);
    Optional<Project> findProjectByProjectClient(String clientName);
}