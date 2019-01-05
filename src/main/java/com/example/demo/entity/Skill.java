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
    private SkillName skillName;
    @Column(nullable = false)
    private SkillCategory skillCategory;
    @Column
    private int skillLevel;


  public Skill(SkillName skillName, SkillCategory skillCategory, int skillLevel) {
    this.skillName = skillName;
    this.skillCategory = skillCategory;
    this.skillLevel = skillLevel;
  }
}
