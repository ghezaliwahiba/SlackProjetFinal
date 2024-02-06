package com.example.demo.back.controller;
import com.example.demo.back.model.Message;

public class MessageMapper {
    public static MessageDTO convertToDTO(Message entity){
        MessageDTO dto = new MessageDTO();
        dto.setContent(entity.getContent());
        //dto.setDate(LocalDateTime.from(entity.getDate().toLocal()));
        return dto;
    }
   // public static Message convertToMessage(MessageDTO dto){
        //Message message=new Message(dto.getDate(), dto.getContent());
               // return message;
    //}

}
