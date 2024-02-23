package com.example.demo.back.controller;

import com.example.demo.back.model.User;
import com.example.demo.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    /**
     * Récupère tous les utilisateurs.
     *
     * @return Une liste de tous les utilisateurs.
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("users")
    public List<User> findAll() {
        return userService.findAll();
    }

    /**
     * Ajoute un nouvel utilisateur.
     *
     * @param user L'utilisateur à ajouter.
     * @return Une réponse HTTP indiquant le succès ou l'échec de l'ajout.
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("users")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> addUser(@RequestBody User user) {
        if (user.getUserName().isEmpty()) {
            return ResponseEntity
                    .badRequest()
                    .body("Le nom ne peut pas être vide.");
        } else {
            userService.add(user);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
    }

    /**
     * Récupère un utilisateur par son identifiant.
     *
     * @param id L'identifiant de l'utilisateur à récupérer.
     * @return Réponse HTTP contenant l'utilisateur s'il est trouvé, sinon retourne une réponse NotFound.
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("users/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") Integer id) {
        Optional<User> opt = userService.findById(id);
        if (opt.isEmpty()) {
            return ResponseEntity
                    .notFound()
                    .build();
        } else {
            User user = opt.get();
            return ResponseEntity.ok(user);
        }
    }

    /**
     * Met à jour un utilisateur existant.
     *
     * @param id   L'identifiant de l'utilisateur à mettre à jour.
     * @param user Le nouvel utilisateur.
     * @return Réponse HTTP indiquant le succès ou l'échec de l'opération.
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("users/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id,
                                    @RequestBody User user) {
        if (!user.getId().equals(id)) {
            return ResponseEntity
                    .notFound()
                    .build();
        } else {
            userService.update(user);
            return ResponseEntity.ok().build();
        }
    }

    /**
     * Supprime un utilisateur existant.
     *
     * @param id L'identifiant de l'utilisateur à supprimer.
     * @return Réponse HTTP indiquant le succès ou l'échec de l'opération.
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("users/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        if (userService.findById(id).isPresent()) {
            userService.delete(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

/*
    @Autowired
    ChannelService channelService;

    public UserController() {
        // Ajout d'un canal général

        List<Message> generalChannel = new ArrayList<>();
        userService.put("general", generalChannel);
    }
*/
