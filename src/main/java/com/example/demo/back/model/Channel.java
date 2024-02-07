package com.example.demo.back.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="channels")
public class Channel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String channelName;

// Dans un second : besoin lorque l'on veut renseigner le détail du canal (utilisateur)
//    @ManyToMany
//    private List<User> users = new ArrayList<>();

    @OneToMany
    private List<Message> messages = new ArrayList<>();

    public Channel() {
    }

    public Channel(String channelName, List<Message> messages) {
        this.channelName = channelName;
        this.messages = messages;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getChannelName() {
        return channelName;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    @Override
    public String toString() {
        return "Channel{" +
                "id=" + id +
                ", channelName='" + channelName + '\'' +
                ", messages=" + messages +
                '}';
    }
}