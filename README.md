# Lan Chat en JS

## Description du projet
Le projet "LanChat" est un ensemble de 2 applications fonctionnant en symbiose.
* Un serveur principal HTTP qui supervise la communication entre pairs via une API Rest.
* Une application Web qui permet de "chatter" ainsi que la gestion des utilisateurs, des privilèges et des statistiques.

## Fonctionnalités attendues
Les fonctionnalités attendues sont:

**Utilisateur**
 Ajouter un utilisateur
* Modifier un utilisateur
* Supprimer un utilisateur
* Désactiver un utilisateur (sans le supprimer)
* Lister les utilisateur
* Afficher les détails d'un utilisateur

**Discussion**
* Un utilisateur s'identifie par son pseudo et son mot de passe
* Un utilisateur peut créer un salon de discussion
* Un utilisateur peut rejoindre un salon de discussion
* Un utilisateur peut créer une discussion privée avec un autre utilisateur
* Un utilisateur peut bloquer un autre utilisateur
* Un utilisateur peut signaler un autre utilisateur
* Un utilisateur peut envoyer un message dans les salons/discussions auxquels il a accès

**Administration, modération**
* Certains utilisateurs ont des pouvoirs spéciaux:
    * Créer des salons verrouillés par mot de passe
    * Gérer les utilisateurs (ajout, modification, suppression)
* Les salons de discussion sauvegardent l'historique des messages (100 maximum)
* Les discussions privées sont sauvegardées sans limite.

L'application propose 1 salon de discussion par défaut. Ce salon ne peut pas être supprimé.
A la connexion, les utilisateurs rejoignent automatiquement ce salon par défaut.
