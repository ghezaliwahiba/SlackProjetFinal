package com.example.demo.back.service;

import com.example.demo.back.DAO.ChannelRepository;
import com.example.demo.back.model.Channel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChannelService {

    // Injection du repository Channel pour accéder aux opérations CRUD
    @Autowired
    private ChannelRepository channelRepository;

    /**
     * Ajoute un nouveau canal.
     *
     * @param channel Le canal à ajouter.
     */
    public void add(Channel channel) {
        channelRepository.save(channel);
    }

    /**
     * Récupère tous les canaux.
     *
     * @return Une liste de tous les canaux.
     */
    public List<Channel> findAll() {
        return channelRepository.findAll();
    }

    /**
     * Récupère un canal par son identifiant.
     *
     * @param id L'identifiant du canal à récupérer.
     * @return Le canal correspondant à l'identifiant, s'il existe.
     */
    public Optional<Channel> findById(Integer id) {
        return channelRepository.findById(id);
    }

    /**
     * Supprime un canal par son identifiant.
     *
     * @param id L'identifiant du canal à supprimer.
     */
    public void delete(Integer id) {
        channelRepository.deleteById(id);
    }

    /**
     * Met à jour les informations d'un canal.
     *
     * @param channel Le canal avec les informations mises à jour.
     */
    public void update(Channel channel) {
        channelRepository.save(channel);
    }
}
