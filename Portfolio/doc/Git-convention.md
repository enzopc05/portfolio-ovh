# 📝 Modèle de Commit Structuré

## Convention de Commit

```bash
<type>(<scope>): <description>

[Corps du commit : Explication détaillée des modifications si nécessaire]

[Références : issue/task associée, ex: Closes #123]
```

---

## 📌 Exemples de Commits

### 🔹 Ajout d'une nouvelle fonctionnalité :

```diff
feat(auth): ajout de l'authentification par JWT

Ajout de la gestion des tokens JWT pour sécuriser les requêtes API.
- Utilisation de la bibliothèque Newtonsoft.Json pour la gestion des tokens.
- Ajout de middleware pour l'authentification automatique.
- Création de tests unitaires pour valider le bon fonctionnement.

Closes #12
```

### 🔹 Correction d'un bug :

```vbnet
fix(api): correction de l'erreur 500 sur la récupération des utilisateurs

Correction d'un problème lié à la requête SQL qui retournait un NULL non géré.
Ajout d'une condition pour éviter une exception.

Closes #34
```

### 🔹 Mise à jour de la documentation :

```rust
docs(readme): amélioration de l'explication sur l'installation du projet

Ajout d'un exemple détaillé de configuration pour l'environnement de développement.
```

### 🔹 Amélioration des performances :

```scss
perf(sql): optimisation des requêtes pour réduire le temps de réponse

Ajout d'un index sur la colonne `user_id` pour améliorer les performances des requêtes.
Temps de réponse réduit de 30% sur les grosses bases de données.
```

### 🔹 Refactorisation du code :

```scss
refactor(models): réorganisation des classes et suppression de code redondant
  Refonte de la structure des modèles pour améliorer la lisibilité et la
  maintenance.;
```

### 🔹 Ajout de tests :

```diff
test(api): ajout de tests unitaires pour le service utilisateur

Ajout de cas de tests pour vérifier les scénarios suivants :
- Création d'un utilisateur valide
- Gestion des erreurs en cas de données invalides
- Vérification des accès restreints
```

### 🔹 Mise à jour des dépendances :

```scss
chore(deps): mise à jour de Newtonsoft.Json vers la version 13.0.1

Correction d'une faille de sécurité identifiée dans la version précédente.
```

### 🔹 Changement non critique (ex : mise en forme, indentation) :

```scss
style(frontend): correction des marges et alignement des boutons;
```

### 🔹 Déploiement :

```bash
ci(cd): ajout du pipeline GitHub Actions pour le déploiement automatique
```

---

## ✅ Liste des Types Utilisables

| Type       | Description                                             |
| ---------- | ------------------------------------------------------- |
| `feat`     | Ajout d'une nouvelle fonctionnalité                     |
| `fix`      | Correction de bug                                       |
| `docs`     | Modification de la documentation                        |
| `style`    | Changements liés au style (indentation, espaces, etc.)  |
| `refactor` | Modification du code sans changement fonctionnel        |
| `perf`     | Optimisation des performances                           |
| `test`     | Ajout ou mise à jour de tests                           |
| `chore`    | Changement mineur (mise à jour des dépendances, config) |
| `ci/cd`    | Changements liés à l'intégration ou au déploiement      |
