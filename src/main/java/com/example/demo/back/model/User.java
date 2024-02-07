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

    @OneToMany
    private List<Message> messages = new ArrayList<>();

    public User() {
    }

    public User(String userName, boolean isActive, List<Channel> channels, List<Message> messages) {
        this.userName = userName;
        this.isActive = isActive;
        this.channels = channels;
        this.messages = messages;
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
    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", isActive=" + isActive +
                ", channels=" + channels +
                ", messages=" + messages +
                '}';
    }
}
