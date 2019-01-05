package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany
    @JsonIgnore
    private Set<User> users = new HashSet<>();

    @Column(unique = true, nullable = false)
    private String userName;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;

    @OneToMany(cascade = CascadeType.ALL)
    private Set<Project> projects = new HashSet<>();

    public User(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    public void addUser(User user) {
        users.add(user);
    }

    public void addProject(Project project){
        projects.add(project);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", users=" + users +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
