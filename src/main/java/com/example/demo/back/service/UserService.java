package com.example.demo.back.service;

import com.example.demo.back.DAO.UserRepository;
import com.example.demo.back.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    // Injection du repository User pour accéder aux opérations CRUD
    @Autowired
    private UserRepository userRepository;

    /**
     * Ajoute un nouvel utilisateur.
     *
     * @param user L'utilisateur à ajouter.
     */
    public void add(User user) {
        userRepository.save(user);
    }

    /**
     * Récupère tous les utilisateurs.
     *
     * @return Une liste de tous les utilisateurs.
     */
    public List<User> findAll() {
        return userRepository.findAll();
    }

    /**
     * Récupère un utilisateur par son identifiant.
     *
     * @param id L'identifiant de l'utilisateur à récupérer.
     * @return L'utilisateur correspondant à l'identifiant, s'il existe.
     */
    public Optional<User> findById(Integer id) {
        return userRepository.findById(id);
    }

    /**
     * Met à jour les informations d'un utilisateur.
     *
     * @param user L'utilisateur avec les informations mises à jour.
     */
    public void update(User user) {
        userRepository.save(user);
    }

    /**
     * Supprime un utilisateur par son identifiant.
     *
     * @param id L'identifiant de l'utilisateur à supprimer.
     */
    public void delete(Integer id) {
        userRepository.deleteById(id);
    }
}
