package com.example.demo.back.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_name", length = 20)
    private String userName;

    @Column(name = "is_active")
    private boolean isActive; // par défaut il est en false ?

    /*
    @ManyToMany
    // Récupère les canaux
    */

    public User() {
    }

    public User(String userName, boolean isActive) {
        this.userName = userName;
        this.isActive = isActive;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", isActive=" + isActive +
                '}';
    }
}
