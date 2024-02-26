package com.example.demo.back.controller;

// import java.time.LocalDate;
import java.time.LocalDateTime;

public class MessageDTO {
    private LocalDateTime date;
    private String content;

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
