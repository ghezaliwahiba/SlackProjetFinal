package com.example.demo.back.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_name", length = 20)
    private String userName;

    @Column(name = "is_active")
    private boolean isActive;

    @ManyToMany
    private List<Channel> channels = new ArrayList();

    public User() {
    }

    public User(String userName, boolean isActive, List<Channel> channels) {
        this.userName = userName;
        this.isActive = isActive;
        this.channels = channels;
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

    public List<Channel> getChannels() {
        return channels;
    }

    public void setChannels(List<Channel> channels) {
        this.channels = channels;
    }

    /* A mmtre plutôt dans Channel
    public void add(User user){
        channels.add(user);
    }
     */

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", isActive=" + isActive +
                '}';
    }
}
