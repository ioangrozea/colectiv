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
public class Skill implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, unique = true)
    private String skillName;
    @Column(nullable = false)
    private String skillCategory;
    @Column(nullable = false)
    private int skillLevel;


    public Skill(String skillName, String skillCategory, int skillLevel) {
        this.skillName = skillName;
        this.skillCategory = skillCategory;
        this.skillLevel= skillLevel;
    }

}
