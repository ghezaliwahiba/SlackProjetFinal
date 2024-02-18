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

    // Liste des messages associés à ce canal
    @OneToMany
    @JoinColumn(name = "channel_id")
    private List<Message> messages = new ArrayList<>();

    public Channel() {
    }

    // Constructeur avec un paramètre pour initialiser le nom du canal
    public Channel(String channelName) {
        this.channelName = channelName;
        //this.messages = messages;
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

/*
 Dans un second : besoin lorque l'on veut renseigner le détail du canal (utilisateur)
    @ManyToMany
    private List<User> users = new ArrayList<>();
 */