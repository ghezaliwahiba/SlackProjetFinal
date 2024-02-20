package com.example.demo.back.DAO;

import com.example.demo.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface Repository pour la gestion des utilisateurs dans la base de données.
 * Cette interface utilise Spring Data JPA pour fournir des méthodes pour interagir avec la table des utilisateurs.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // Cette interface hérite de JpaRepository pour bénéficier
    // de méthodes CRUD de base pour l'entité User.
}
