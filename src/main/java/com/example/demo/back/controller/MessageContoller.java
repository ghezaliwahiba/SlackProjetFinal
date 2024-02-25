package com.example.demo.back.controller;

import com.example.demo.back.model.Message;
import com.example.demo.back.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin
@RestController
public class MessageContoller {

    @Autowired
    MessageService messageService;

    /**
     * Récupère tous les messages.
     *
     * @return Une liste de tous les messages.
     */
    @GetMapping("messages")
    public List<Message> findAll() {
        return messageService.findAll();
    }

    /**
     * Ajoute un nouveau message.
     *
     * @param message Le message à ajouter.
     * @return réponse HTTP indiquant le succès ou l'échec de l'ajout.
     */
    //@CrossOrigin()
    @PostMapping("messages")
    public ResponseEntity<?> addMessage(@RequestBody Message message) {
        if (message.getContent().isEmpty())
            return ResponseEntity
                    .badRequest()
                    .body("Le contenu du message ne peut pas être vide.");
        else {
            messageService.add(message);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
    }

    /**
     * Récupère un message par son identifiant.
     *
     * @param id L'identifiant du message à récupérer.
     * @return une Réponse HTTP contenant le message s'il est trouvé, sinon retourne une réponse NotFound.
     */
    //@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("messages/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") Integer id) {
        Optional<Message> opt = messageService.findById(id);
        if (opt.isEmpty())
            return ResponseEntity
                    .notFound()
                    .build();
        else
            return ResponseEntity.ok(opt.get());
    }

    /**
     * Met à jour un message existant.
     *
     * @param id      L'identifiant du message à mettre à jour.
     * @param message Le nouveau contenu du message mis à jour.
     * @return une Réponse HTTP indiquant le succès ou l'échec de la mise à jour.
     */
    //@CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("messages/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id,
                                    @RequestBody Message message) {
        if (!message.getId().equals(id)) {
            return ResponseEntity
                    .notFound()
                    .build();
        } else
            messageService.update(message);
        return ResponseEntity.ok().build();
    }

    /**
     * Supprime un message existant.
     *
     * @param id      L'identifiant du message à supprimer.
     * @return Réponse HTTP indiquant le succès ou l'échec de l'opération.
     */
    //@CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("messages/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        if (messageService.findById(id).isEmpty()) { // message.getId() != id - && message.getId().equals(id)
            return ResponseEntity
                    .notFound()
                    .build();
        } else
            messageService.delete(id);
        return ResponseEntity.ok().build();
    }
}

/*
    @DeleteMapping("messages/{id}")
    public void delete(@PathVariable("id") Integer id) {
        messageService.delete(id);
    }
*/


     /*
    @PostMapping("messages")
    public void addMessage(@RequestBody MessageDTO message) {
        messageService.add(message);
    }
     */

 /*
        @GetMapping("messages")
        public List<MessageDTO> findAll(){
            List<MessageDTO> dtos = new ArrayList<>();
            for(Message entity :messageService.getAll())
                dtos.add(MessageMapper.convertToDTO(entity));
            return dtos;
        }
     */
    /*
    @PostMapping("messages")
    public void addMessage(@RequestBody Message message) {
        messageService.add(message.getContent(), message);
    }
     */
    /*
    @PatchMapping("messages/{id}")
    public ResponseEntity<?> update(@RequestBody Message message, @PathVariable("id") Integer id) {
        if (id.equals(message.getId())) {
            Optional<Message> optional = messageService.findById(id);
            if (optional.isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            if (message.getContent().isBlank()) {
                return ResponseEntity.badRequest().build();
            }
            messageService.add(message);
            return ResponseEntity.ok("message modifié");
        }
        return ResponseEntity.badRequest().build();
    }

     */