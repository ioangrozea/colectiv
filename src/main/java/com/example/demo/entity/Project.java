package com.example.demo.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Project implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String projectName;
    @Column(nullable = false)
    private String projectClient;
    @Column(nullable = false)
    private String timeSpan;
    @Column(nullable = false)
    private String branch;
    @Column(nullable = false)
    private String role;
    @Column(nullable = false)
    private String description;

    public Project(String projectName, String projectClient, String timeSpan, String branch, String role, String description) {
        this.projectName = projectName;
        this.projectClient = projectClient;
        this.timeSpan = timeSpan;
        this.branch = branch;
        this.role = role;
        this.description = description;
    }

}
