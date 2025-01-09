git init
Description : Initialise un nouveau dépôt Git dans le répertoire courant.
Syntaxe : `git init`
Paramètres : Aucun paramètre nécessaire.
Particularités : Crée un sous-répertoire caché `.git` contenant tous les fichiers nécessaires pour le dépôt.
Attention : Ne pas exécuter cette commande dans un répertoire qui est déjà un dépôt Git.
git clone
Description : Clone un dépôt existant dans un nouveau répertoire.
Syntaxe : `git clone <url>`
Paramètres :
`<url>` : L'URL du dépôt à cloner.
Particularités : Copie tous les fichiers et l'historique du dépôt distant.
Attention : Assurez-vous d'avoir les permissions nécessaires pour accéder au dépôt distant.
git status
Description : Affiche l'état du répertoire de travail et de l'index.
Syntaxe : `git status`
Paramètres : Aucun paramètre nécessaire.
Particularités : Montre les fichiers modifiés, ajoutés ou supprimés.
Attention : Utilisez cette commande fréquemment pour vérifier l'état de votre répertoire de travail.
git add
Description : Ajoute des fichiers à l'index en vue du prochain commit.
Syntaxe : `git add <fichier>`
Paramètres :
`<fichier>` : Le nom du fichier à ajouter. Utilisez `.` pour ajouter tous les fichiers modifiés.
Particularités : Peut être utilisé pour ajouter des fichiers spécifiques ou tous les fichiers modifiés.
Attention : Les fichiers doivent être ajoutés à l'index avant de pouvoir être committés.
git commit
Normes commit Conventionnels
Description : Enregistre les modifications dans le dépôt local.
Syntaxe : `git commit -m "<message>"`
Paramètres :
`-m "<message>"` : Message de commit décrivant les modifications.
Particularités : Chaque commit doit avoir un message descriptif.
Attention : Assurez-vous d'avoir ajouté les fichiers à l'index avant de committer.
git push
Description : Envoie les commits locaux vers un dépôt distant.
Syntaxe : `git push <nom-distant> <nom-branche>`
Paramètres :
`<nom-distant>` : Nom du dépôt distant (souvent `origin`).
`<nom-branche>` : Nom de la branche à pusher (souvent `main` ou `master`).
Particularités : Envoie les commits locaux vers le dépôt distant.
Attention : Assurez-vous d'avoir les permissions nécessaires pour pusher vers le dépôt distant.
git pull
Description : Récupère et intègre les modifications d'un dépôt distant.
Syntaxe : `git pull <nom-distant> <nom-branche>`
Paramètres :
`<nom-distant>` : Nom du dépôt distant (souvent `origin`).
`<nom-branche>` : Nom de la branche à puller (souvent `main` ou `master`).
Particularités : Combine `git fetch` et `git merge`.
Attention : Peut provoquer des conflits de fusion si des modifications locales et distantes entrent en conflit.
git branch
Description : Liste, crée ou supprime des branches.
Syntaxe :
`git branch` : Liste les branches.
`git branch <nom-branche>` : Crée une nouvelle branche.
`git branch -d <nom-branche>` : Supprime une branche.
Paramètres :
`<nom-branche>` : Nom de la branche à créer ou supprimer.
Particularités : Les branches permettent de travailler sur différentes fonctionnalités en parallèle.
Attention : Ne supprimez pas une branche tant que vous n'êtes pas sûr de ne plus en avoir besoin.
git checkout
Description : Bascule entre les branches ou restaure les fichiers de l'index.
Syntaxe :
`git checkout <nom-branche>` : Bascule vers une branche.
`git checkout -- <fichier>` : Restaure un fichier de l'index.
Paramètres :
`<nom-branche>` : Nom de la branche vers laquelle basculer.
`<fichier>` : Nom du fichier à restaurer.
Particularités : Permet de changer de contexte de travail.
Attention : Assurez-vous de committer ou stasher vos modifications avant de changer de branche.
git merge
Description : Fusionne une branche dans la branche courante.
Syntaxe : `git merge <nom-branche>`
Paramètres :
`<nom-branche>` : Nom de la branche à fusionner.
Particularités : Combine l'historique des deux branches.
Attention : Peut provoquer des conflits de fusion si des modifications entrent en conflit.
git log
Description : Affiche l'historique des commits.
Syntaxe : `git log`
Paramètres : Aucun paramètre nécessaire.
Particularités : Montre les commits avec leurs messages, auteurs et dates.
Attention : Utilisez des options comme `--oneline` pour un affichage plus concis.
git remote
Description : Gère les dépôts distants.
Syntaxe :
`git remote add <nom-distant> <url>` : Ajoute un dépôt distant.
`git remote -v` : Liste les dépôts distants.
Paramètres :
`<nom-distant>` : Nom du dépôt distant (souvent `origin`).
`<url>` : URL du dépôt distant.
Particularités : Permet de gérer les connexions aux dépôts distants.
Attention : Assurez-vous d'utiliser les bonnes URLs pour les dépôts distants.
git reset
Description : Annule les modifications dans l'index et le répertoire de travail.
Syntaxe :
`git reset --hard` : Annule toutes les modifications non committées.
`git reset --soft` : Annule les modifications dans l'index mais pas dans le répertoire de travail.
Paramètres :
`--hard` : Annule toutes les modifications.
`--soft` : Annule les modifications dans l'index.
Particularités : Permet de revenir à un état antérieur.
Attention : Utilisez avec précaution, car les modifications non committées seront perdues.
git stash
Description : Met de côté les modifications non committées.
Syntaxe :
`git stash` : Met de côté les modifications.
`git stash apply` : Applique les modifications mises de côté.
`git stash drop` : Supprime les modifications mises de côté.
Paramètres : Aucun paramètre nécessaire.
Particularités : Permet de switcher de branche sans committer les modifications.
Attention : Assurez-vous de réappliquer les modifications mises de côté lorsque vous en avez besoin.
