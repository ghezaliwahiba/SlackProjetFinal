package com.example.demo.back.service;

import com.example.demo.back.DAO.MessageRepository;
import com.example.demo.back.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    // Injection du repository Message pour accéder aux opérations CRUD
    @Autowired
    MessageRepository messageRepository;

    /**
     * Ajoute un nouveau message.
     *
     * @param message Le message à ajouter.
     */
    public void add(Message message) {
        // Créer un objet LocalTime représentant l'heure actuelle
        message.setDate(LocalDate.now());

        // Définir le format de date et d'heure souhaité
        LocalTime now = LocalTime.now();

        // Formater l'heure actuelle selon le format spécifié
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");

        String formattedTime = now.format(formatter);
        message.setHour(LocalTime.parse(formattedTime));
        messageRepository.save(message);

        /* proposition ChatGPT
        message.setDate(LocalDate.now());
        message.setHour(LocalTime.now());
        messageRepository.save(message);*/
    }

    /*
    public void add(MessageDTO messagedto){
        Message message= MessageMapper.convertToMessage(messagedto);
        messageRepository.save(message);
    }
     */

    /**
     * Récupère tous les messages.
     *
     * @return Une liste de tous les messages.
     */
    public List<Message> findAll() {
        return messageRepository.findAll();
    }

    /**
     * Récupère un message par son identifiant.
     *
     * @param id L'identifiant du message à récupérer.
     * @return Le message correspondant à l'identifiant, s'il existe.
     */
    public Optional<Message> findById(Integer id) {
        return messageRepository.findById(id);
    }

    /**
     * Supprime un message par son identifiant.
     *
     * @param id L'identifiant du message à supprimer.
     */
    public void delete(Integer id) {
        messageRepository.deleteById(id);
    }

    /**
     * Met à jour les informations d'un message.
     *
     * @param message Le message avec les informations mises à jour.
     */
    public void update(Message message) {
        message.setHour(LocalTime.now());
        messageRepository.save(message);
    }
}