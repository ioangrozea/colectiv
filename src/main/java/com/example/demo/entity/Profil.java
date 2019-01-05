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
public class Profil implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String region;
    @Column(nullable = false)
    private boolean freigegeben;

    public Profil(String region, boolean freigegeben) {
        this.region = region;
        this.freigegeben = freigegeben;
    }

    @Override
    public String toString() {
        return "Profil{" +
                "id=" + id +
                ", region='" + region + '\'' +
                '}';
    }
}
