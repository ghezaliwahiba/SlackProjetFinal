package com.example.demo.back.model;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    private LocalDate date;
    private LocalTime hour;
    private String content;
    @ManyToMany
    private List<Channel> channels = new ArrayList<>();

    public Message() {
    }

    public Message(LocalDate date, LocalTime hour, String content, List<Channel> channels) {
        this.date = date;
        this.hour = hour;
        this.content = content;
        this.channels = channels;
    }

    public Message(String content) {
        this.content = content;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getHour() {
        return hour;
    }

    public void setHour(LocalTime hour) {
        this.hour = hour;
    }
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<Channel> getChannels() {
        return channels;
    }

    public void setChannels(List<Channel> channels) {
        this.channels = channels;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", date=" + date +
                ", hour=" + hour +
                ", content='" + content + '\'' +
                ", channels=" + channels +
                '}';
    }
}
