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

    @ManyToMany
    private List<User> users = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "messages_channel",
            joinColumns = @JoinColumn(name = "channel_id"),
            inverseJoinColumns = @JoinColumn(name = "message_id")
    )
    private List<Message> messages = new ArrayList<>();

    public Channel() {
    }

    public Channel(String channelName, List<User> users, List<Message> messages) {
        this.channelName = channelName;
        this.users = users;
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

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
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
                ", users=" + users +
                ", messages=" + messages +
                '}';
    }
}