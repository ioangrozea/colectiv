package com.example.demo.entity;

import lombok.AllArgsConstructor;
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
@AllArgsConstructor
@Entity
public class Profil implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(nullable = false)
  private String region;
  @Column(nullable = false)
  private boolean freigegeben;
  @OneToMany(cascade = CascadeType.ALL)
  private Set<Skill> skills = new HashSet<>();

  public Profil(String region, boolean freigegeben) {
    this.region = region;
    this.freigegeben = freigegeben;
  }
}
