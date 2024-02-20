package com.example.demo.back.controller;

import com.example.demo.back.model.Channel;
import com.example.demo.back.service.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ChannelController {

    @Autowired
    ChannelService channelService;

    /**
     * Récupère tous les canaux.
     *
     * @return Une liste de tous les canaux.
     */
    @GetMapping("channels")
    public List<Channel> findAll() {
        return channelService.findAll();
    }

    /**
     * Ajoute un nouveau canal.
     *
     * @param channel Le canal à ajouter.
     * @return Une réponse HTTP indiquant le succès ou l'échec de l'ajout.
     */
    @PostMapping("channels")
    public ResponseEntity<?> addChannel(@RequestBody Channel channel) {
        if (channel.getChannelName().isEmpty()) {
            return ResponseEntity
                    .badRequest()
                    .body("Le nom du canal ne peut pas être vide.");
        }/*
        // Vérifier si le nom du canal à ajouter est le même que celui du canal général
        if(channelService.equals(channel.getChannelName())) {
            // Si le canal général existe déjà, retourner une réponse BadRequest
            return ResponseEntity.badRequest().build();
        }
        */ else {
            channelService.add(channel);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
    }

    /**
     * Récupère un canal par son identifiant.
     *
     * @param id L'identifiant du canal à récupérer.
     * @return une Réponse HTTP contenant le canal s'il est trouvé, sinon retourn une réponse NotFound.
     */
    @GetMapping("channels/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") Integer id) {
        Optional<Channel> opt = channelService.findById(id);
        if (opt.isEmpty()) // Gérer si l'ID n'existe pas ?
            return ResponseEntity
                    .notFound()
                    .build();
        else
            return ResponseEntity.ok(opt.get());
    }

    /**
     * Met à jour un canal existant.
     *
     * @param id L'identifiant du canal à mettre à jour.
     * @param channel Le nouveau canal avec les informations mises à jour.
     * @return Une réponse HTTP indiquant le succès ou l'échec de la mise à jour.
     */
    @PutMapping("channels/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id,
                                          @RequestBody Channel channel) {
        if (!channel.getId().equals(id)) {
            return ResponseEntity
                    .notFound()
                    .build();
        }

        /* Peut-être en base de donnée générer le canal général par défaut par l'id: 1
        "Impossible de mettre à jour le canal général."*/
        // Retourne une réponse BadRequest si l'ID correspond au canal général
        if (id.equals(1)) {
            return ResponseEntity
                    .badRequest()
                    .body("Impossible de mettre à jour le canal général");
        } else {
            channelService.update(channel);
            return ResponseEntity.ok().build();
        }
    }

    /**
     * Supprime un canal existant.
     *
     * @param id L'identifiant du canal à supprimer.
     * @param channel Le canal à supprimer.
     * @return Réponse HTTP indiquant le succès ou l'échec de l'opération.
     */
    @DeleteMapping("channels/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id,
                                          @RequestBody Channel channel) {
        Optional<Channel> opt = channelService.findById(id);
        if (opt.isEmpty()) {
            return ResponseEntity
                    .notFound()
                    .build();
        }

        Channel existingChannel = opt.get(); // Postman: soucis de suppression
        if (existingChannel.getId().equals(channel.getId())) {
            return ResponseEntity
                    .badRequest()
                    .body("Impossible de supprimer le canal général.");
        } else
            channelService.delete(channel.getId());
        return ResponseEntity.ok().build();
    }
}
