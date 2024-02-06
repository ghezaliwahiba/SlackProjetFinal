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
//    @ManyToMany
//    private List<User> = new ArrayList;

//    @ManyToMany
//    @JoinTable(
//            name = "messages_channel",
//            joinColumns = @JoinColumn(name = "channel_id"),
//            inverseJoinColumns = @JoinColumn(name = "message_id")
//    )
//    private List<Message> = new ArrayList;




}
