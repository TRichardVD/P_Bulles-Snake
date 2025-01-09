## C'est quoi ?
Git est un outil qui permet de suivre les modifications d’un projet et de travailler à plusieurs dessus sans se marcher sur les pieds.
Il est complété par des plateformes comme GitHub ou GitLab par exemple, qui permettent de stocker le projet en ligne, de partager facilement le travail avec d’autres personnes et d’organiser la collaboration. Ces plateformes ajoutent aussi des outils pour automatiser certaines tâches, comme vérifier que le code fonctionne bien ou qu’il n’a pas d’erreurs, ce qui rend le travail encore plus efficace.
Il s’utilise principalement en ligne de commande, où l’on tape des instructions dans un terminal pour effectuer des actions comme sauvegarder des modifications, créer des branches ou envoyer son travail sur un serveur distant.
## Fonctionnement de Git
Git est un système de gestion de versions qui permet de suivre l’évolution de vos fichiers et de collaborer à plusieurs sur un projet. Imaginez que vous commencez par créer un “répertoire distant” (un repository) où vous stockez tout le code source : c’est un peu comme si vous ouvriez un grand classeur pour ranger vos documents. Ensuite, chaque fois que vous apportez une modification à vos fichiers (par exemple corriger un bug ou ajouter une nouvelle fonctionnalité), vous “commitez” vos changements, ce qui crée un instantané de la progression : c’est un peu comme prendre une photo à un moment précis pour voir l’état du projet à cet instant. Pour travailler sereinement et éviter les conflits, vous pouvez créer une “branche” (branch), qui est comme un chemin parallèle pour tester vos idées sans perturber le travail principal. Lorsque vous êtes satisfait de vos changements, vous pouvez “merger” (fusionner) cette branche avec la branche principale (souvent appelée “main” ou “master”) afin d’intégrer vos modifications. Une fois que vous estimez que votre projet est stable et prêt à être partagé (par exemple pour publier une nouvelle fonctionnalité), vous pouvez créer une “release”, c’est-à-dire une version identifiée du projet. Si vous travaillez avec d’autres personnes et que vous souhaitez proposer vos changements, vous soumettez une “pull request” : c’est une demande pour que quelqu’un d’autre revoie et approuve votre contribution avant qu’elle ne soit fusionnée au code principal. Tout au long de ce processus, vous pourrez “pousser” (push) vos modifications vers le serveur distant et “tirer” (pull) les dernières mises à jour faites par vos coéquipiers, garantissant que tout le monde reste synchronisé sur la version la plus récente du projet.
## Les commandes à absolument connaitre
prise de note de base (moins complète) : git : Toutes les commandes essentielles
## Prise de notes sur les commandes Git essentielles
### 1. `git init`
Description  
Créer un dépôt local Git dans le dossier courant.
Syntaxe  
```
git init [<nom-du-dossier>]
```
`<nom-du-dossier>` : optionnel, spécifie le dossier où initialiser le dépôt.
Si omis, le dépôt sera initialisé dans le répertoire courant.
Exemple concret  
```
# Dans un dossier existant
cd mon-projet
git init

# Ou pour créer un nouveau dossier et initialiser :
git init mon-nouveau-projet
```
Dans le premier cas, `.git/` est créé dans `mon-projet`.
Dans le second cas, `mon-nouveau-projet` est créé et contient `.git/`.
Points à faire attention
Ne pas initialiser un dépôt Git dans un autre dépôt Git déjà existant.
Vérifier que `.git/` n’est pas déjà présent.
Astuce
Après `git init`, utilisez `git status` pour vérifier l’état initial du dépôt.
### 2. `git clone`
Description  
Copier un dépôt Git distant (ou local) vers votre machine en créant automatiquement un dossier local.
Syntaxe  
```
git clone <url-du-dépôt> [<nom-du-dossier>]
```
`<url-du-dépôt>` : l’URL SSH ou HTTPS.
`<nom-du-dossier>` : optionnel, nom du dossier cible (sinon, par défaut, le dépôt prend le nom du repo).
Exemple concret  
```
# Cloner via HTTPS
git clone https://github.com/mon-compte/mon-repo.git

# Cloner via SSH (nécessite une clé SSH configurée)
git clone git@github.com:mon-compte/mon-repo.git mon-repo-local
```
Dans le premier cas, un dossier `mon-repo` est créé.
Dans le second, un dossier `mon-repo-local` est créé.
Points à faire attention
Configuration des clés SSH si usage de l’URL SSH.
Accès (droits, permissions) au dépôt distant.
Astuce
Pour gagner du temps, vous pouvez utiliser `--depth 1` pour cloner seulement le dernier commit (utilisé pour les projets très volumineux).
### 3. `git status`
Description
Affiche l’état actuel du dépôt : fichiers modifiés, en attente de commit, etc.
Syntaxe  
```
git status
```
Exemple concret  
```
# Pour voir si des fichiers sont modifiés ou en attente d'être commités
git status
```
Points à faire attention
Utiliser `git status` régulièrement permet d’éviter des oublis ou des surprises lors du commit.
Astuce
Ajouter l’option `-s` (pour “short”) : `git status -s` donne un résumé plus concis et rapide à lire.
### 4. `git add`
Description
Ajoute les modifications de fichiers à l’index (stage) avant un commit.
Syntaxe  
```
git add <chemin/fichier>...
```
`<chemin/fichier>` peut être un fichier unique, un dossier ou `.` pour tout le dossier courant.
Exemple concret  
```
# Ajouter un seul fichier
git add mon-fichier.txt

# Ajouter tous les fichiers modifiés
git add .
```
`git add .` inclura tous les nouveaux fichiers, mais aussi ceux modifiés.
Points à faire attention
`git add .` peut ajouter des fichiers qu’on n’avait pas l’intention de versionner (ex : fichiers de configuration locale).
Mieux vaut utiliser un fichier `.gitignore` pour exclure certains fichiers/dossiers.
Astuce
`git add -p` permet de sélectionner les modifications à ajouter de manière interactive (pratique pour commits partiels).
### 5. `git commit`
Description
Enregistre (commit) les modifications ajoutées à l’index (stage).
Syntaxe  
```
git commit -m "<message>" [options]
```
`-m "<message>"` : le message de commit.
`--amend` : modifier le dernier commit (utilisé pour corriger un message ou ajouter des fichiers oubliés).
Exemple concret  
```
git commit -m "Ajout de la fonction X"

# Pour corriger le commit précédent
git commit --amend -m "Correction du message de commit"
```
`--amend` réécrit le dernier commit avec les modifications actuelles.
Points à faire attention
`--amend` réécrit l’historique, évitez de l’utiliser si le commit précédent est déjà poussé sur un dépôt distant.
Astuce
Utiliser des messages de commit clairs et descriptifs pour faciliter le suivi de l’historique.
Préfixez vos messages (feat, fix, docs, chore, etc.) si vous utilisez un standard de convention de commit (Ex: Conventional Commits). (Normes commit Conventionnels)
### 6. `git log`
Description
Affiche l’historique des commits.
Syntaxe  
```
git log [options]
```
`--oneline` : affiche l’historique sur une ligne par commit.
`--graph` : affiche un graphe ASCII des branches et merges.
`--stat` : affiche un résumé des changements (nombre de lignes modifiées).
Exemple concret  
```
# Historique simple
git log

# Historique condensé
git log --oneline --graph --decorate
```
`--oneline` réduit chaque commit à une seule ligne avec le hash abrégé et le message.
`--graph` ajoute une représentation graphique des branches.
Points à faire attention
`git log` peut rapidement devenir très long ; filtrez éventuellement avec `--since`, `--until`, `--author`, etc.
Astuce
`git log --pretty=format:"%h %an %ar - %s"` permet d’afficher un format personnalisé (hash, auteur, date relative, sujet).
### 7. `git branch`
Description
Liste, crée ou supprime des branches.
Syntaxe  
```
git branch [<nom-de-branche>]
git branch -d <nom-de-branche>
git branch -m <ancien-nom> <nouveau-nom>
```
Sans argument : liste toutes les branches locales.
`-d <nom-de-branche>` : supprime une branche fusionnée.
`-m <ancien-nom> <nouveau-nom>` : renomme la branche.
Exemple concret  
```
# Créer une nouvelle branche
git branch feature/login

# Lister toutes les branches
git branch

# Supprimer une branche
git branch -d feature/old-stuff
```
`git branch -d` supprime une branche fusionnée en toute sécurité.
Points à faire attention
`-d` refuse de supprimer une branche non fusionnée (utiliser `-D` pour forcer).
Le renommage n’affecte que la branche locale, pour renommer sur le remote, il faut des manipulations supplémentaires.
Astuce
Utilisez des noms de branches explicites (bugfix/, feature/, release/, etc.).
### 8. `git checkout` / `git switch`
Description
Permet de basculer sur une autre branche ou un commit spécifique. Git a introduit `git switch` pour clarifier l’usage (checkout sert aussi à “sortir” un fichier d’une zone de staging).
Syntaxe  
Avec `git checkout`
```
git checkout <nom-de-branche>
git checkout <commit-hash>
```
Avec `git switch`
```
git switch <nom-de-branche>
git switch -c <nom-de-branche> # Création et switch
```
Exemple concret  
```
# Basculer sur la branche main
git checkout main

# Créer et passer sur la branche feature/payment
git switch -c feature/payment
```
`git switch -c` crée une nouvelle branche et y bascule immédiatement.
Points à faire attention
Commettre ou stasher vos modifications avant de changer de branche, sinon Git vous le refusera ou fusionnera automatiquement vos modifications.
Astuce
Préférez `git switch` pour changer de branche, c’est plus lisible et ne prête pas à confusion avec la récupération d’un fichier.
### 9. `git merge`
Description
Fusionne les modifications d’une branche source dans la branche courante.
Syntaxe  
```
git merge <nom-de-branche>
```
Assure-toi d’être sur la branche de destination avant de lancer la commande.
Exemple concret  
```
# Sur la branche main, on merge la branche feature/login
git checkout main
git merge feature/login
```
Si tout se passe bien, un merge commit est créé.
En cas de conflit, Git demande de résoudre les conflits dans les fichiers concernés.
Points à faire attention
Toujours vérifier la branche active avant de lancer un merge.
Résoudre les conflits puis faire un `git commit` (si Git ne le fait pas automatiquement).
Astuce
Utilisez `git log --graph --oneline` après un merge pour visualiser l’historique plus clairement.
### 10. `git remote`
Description
Gère les dépôts distants (“origin”, “upstream”, etc.).
Syntaxe  
```
git remote -v
git remote add <nom> <url>
git remote remove <nom>
```
`-v` : affiche les URLs des remotes.
`add` : ajoute un nouveau remote avec un nom et une URL.
`remove` : supprime un remote existant.
Exemple concret  
```
# Lister les remotes
git remote -v

# Ajouter un nouveau remote
git remote add upstream git@github.com:autre-compte/mon-repo.git
```
"origin" est généralement le remote principal créé par `git clone`.
Points à faire attention
Un dépôt distant “origin” est généralement créé automatiquement par `git clone`.
Bien différencier “origin” (votre fork) d’un “upstream” (dépôt principal, par ex.).
Astuce
Pour changer l’URL du remote “origin” : `git remote set-url origin <nouvelle-url>`.
### 11. `git push`
Description
Envoie (pousse) vos commits locaux sur un dépôt distant.
Syntaxe  
```
git push <remote> <branche>
git push -u <remote> <branche>
```
`-u` (ou `--set-upstream`) : configure la branche distante par défaut pour les prochains `git push`.
Exemple concret  
```
# Premier push d'une nouvelle branche
git push -u origin feature/new-dashboard

# Push simple, une fois que la branche est configurée
git push
```
La première fois, il faut préciser `-u origin feature/...`.
Après, `git push` suffit.
Points à faire attention
Vous devez être à jour par rapport au remote avant de pousser (sinon un push peut être rejeté).
Sur GitHub, si la branche n’existe pas encore, Git vous indique la commande à utiliser.
Astuce
Si un push est rejeté, faites d’abord un `git pull --rebase` ou vérifiez vos branches.
### 12. `git fetch`
Description
Récupère les dernières modifications depuis le dépôt distant sans les fusionner à la branche courante.
Syntaxe  
```
git fetch <remote>
git fetch --all
```
`<remote>` : le nom du dépôt distant (par ex., origin).
`--all` : récupère toutes les branches de tous les remotes.
Exemple concret  
```
# Récupérer toutes les branches depuis 'origin'
git fetch origin

# Récupérer toutes les branches de tous les remotes
git fetch --all
```
Après un fetch, vos références locales sont mises à jour, mais votre branche courante ne l’est pas tant que vous ne faites pas un merge ou rebase.
Points à faire attention
Après un fetch, n’oubliez pas de fusionner ou de rebaser pour intégrer les modifications récupérées.
Astuce
`git fetch --prune` nettoie les branches distantes supprimées.
### 13. `git pull`
Description
Récupère les modifications depuis le distant et fusionne automatiquement dans la branche locale.
Syntaxe  
```
git pull <remote> <branche>
```
Par défaut, si la branche est configurée, `git pull` sans argument fonctionne.
Exemple concret  
```
# Mettre à jour la branche locale 'main' depuis origin/main
git pull origin main
```
Cette commande équivaut à faire : `git fetch origin` puis `git merge origin/main`.
Points à faire attention
Si des conflits surviennent, ils doivent être résolus manuellement avant de finaliser le pull.
`git pull --rebase` est souvent préféré pour un historique plus linéaire.
Astuce
Configurez Git pour que `git pull` effectue par défaut un `rebase` au lieu d’un `merge` :  
```
git config --global pull.rebase true
```
### 14. `git stash`
Description
Met de côté (stash) temporairement vos modifications locales non commitées, pour travailler sur autre chose ou changer de branche.
Syntaxe  
```
git stash [save <message>]
git stash pop
git stash list
```
`save <message>` : optionnel, ajoute un message descriptif au stash.
Exemple concret  
```
# Stasher les changements en cours
git stash save "WIP - Correction bug sur la page X"

# Lister les stashes
git stash list

# Récupérer le dernier stash
git stash pop
```
Chaque `git stash` est empilé (pile), `git stash pop` récupère le dernier stash et le supprime de la pile.
Points à faire attention
Utilisez `git stash apply stash@{n}` pour appliquer un stash spécifique sans le supprimer de la pile.
Les stashes ne sont pas versionnés, ils sont locaux à votre dépôt.
Astuce
Vous pouvez aussi stash des modifications partielles avec `git add -p` puis `git stash -p` (à manipuler avec précaution).
### 15. `git rebase`
Description
Réapplique vos commits sur une autre base, pour avoir un historique plus linéaire ou pour intégrer des modifications d’une branche.
Syntaxe  
```
git rebase <branche-base>
git rebase -i <commit> # rebase interactif
```
`-i` : mode interactif permettant de modifier l’ordre, fusionner, ou éditer des commits.
Exemple concret  
```
# Sur la branche feature/login, on se rebase sur main
git checkout feature/login
git rebase main

# Rebase interactif sur les 3 derniers commits
git rebase -i HEAD~3
```
Le rebase interactif (`-i`) permet de modifier l’ordre des commits, de fusionner (“squash”) ou d’éditer un message.
Points à faire attention
Réécrit l’historique : ne pas rebaser des commits déjà poussés sur le remote sans savoir ce que vous faites (risque de conflits pour les autres).
Assurez-vous de bien comprendre les implications avant d’utiliser le rebase.
Astuce
En cas de conflit, réglez-les, puis utilisez `git rebase --continue`. Pour annuler, `git rebase --abort`.
### 16. `git reset`
Description
Permet d’annuler des commits ou de changer la position de HEAD. Il existe plusieurs modes : `--soft`, `--mixed`, `--hard`.
Syntaxe  
```
git reset [--soft | --mixed | --hard] <commit>
```
`--soft` : conserve vos modifications dans la zone de staging.
`--mixed` (valeur par défaut) : conserve vos modifications dans le working directory (supprime du staging).
`--hard` : supprime toutes les modifications, y compris dans le working directory (dangereux).
Exemple concret  
```
# Revenir au commit précédent tout en gardant les changements dans le working directory
git reset HEAD~1 --mixed

# Tout annuler (attention, destructif)
git reset --hard HEAD~1
```
`git reset --mixed` déplace HEAD et met à jour l’index, mais conserve les modifications dans le working directory.
`git reset --hard` supprime toutes les modifications non commitées.
Points à faire attention
Très risqué si déjà poussé ; vous changez l’historique partagé.
`--hard` supprime définitivement les modifications locales.
Astuce
Si vous souhaitez annuler un commit déjà partagé, utilisez plutôt `git revert`.
### 17. `git revert`
Description
Crée un nouveau commit qui annule le contenu d’un commit spécifique, sans réécrire l’historique.
Syntaxe  
```
git revert <commit>
```
Exemple concret  
```
# Annule le commit abcd1234 en créant un commit de revert
git revert abcd1234
```
Cette commande crée un nouveau commit qui inverse les changements introduits par `<commit>`.
Points à faire attention
Plus propre pour annuler un commit déjà partagé, car aucun risque de confusion dans l’historique distant.
Peut créer plusieurs commits de revert si utilisé sur une plage de commits.
Astuce
Vous pouvez revert plusieurs commits en une seule commande (ex : `git revert HEAD~2..HEAD`), Git créera plusieurs commits d’annulation.
### 18. `git cherry-pick`
Description
Applique un (ou plusieurs) commit(s) spécifique(s) d’une branche dans la branche courante.
Syntaxe  
```
git cherry-pick <commit>...
```
Exemple concret  
```
# Sur la branche main, appliquer un commit précis depuis feature/login
git checkout main
git cherry-pick e4f2c9a
```
Cette commande applique les changements introduits par le commit `e4f2c9a` sur la branche `main`.
Points à faire attention
Peut générer des conflits si le code du commit est incompatible avec la branche courante.
Évitez de cherry-pick des commits de fusion complexes.
Astuce
Utile pour “récupérer” rapidement un bugfix fait sur une autre branche sans fusionner toute la branche.
### 19. `git tag`
Description
Crée un tag (étiquette) sur un commit, souvent utilisé pour marquer des versions (release).
Syntaxe  
```
git tag <nom-du-tag> [<commit>]
git push origin <nom-du-tag>
```
`<commit>` : optionnel, le commit à taguer (par défaut, le commit courant).
Exemple concret  
```
# Créer un tag v1.0.0 sur le commit courant
git tag v1.0.0

# Envoyer ce tag sur le remote
git push origin v1.0.0
```
Vous pouvez également pousser tous les tags en une seule commande avec `git push origin --tags`.
Points à faire attention
Les tags ne sont pas poussés automatiquement. Il faut faire `git push origin --tags` ou pousser un tag spécifique.
Choisissez un nom de tag cohérent avec votre versioning (ex : v1.0.0).
Astuce
Pour créer un tag annoté (contenant un message) : `git tag -a v1.0.0 -m "Release 1.0.0"`.
Les tags annotés sont recommandés pour les releases officielles.
### 20. Processus de Pull Request
Description
Bien que ce ne soit pas une commande Git stricte, la Pull Request (PR) est un élément clé du workflow Git sur GitHub/GitLab/Bitbucket :
Vous poussez votre branche sur le remote.
Vous créez une PR depuis votre branche vers la branche principale du repo.
Les reviewers valident, discutent et éventuellement demandent des modifications.
Une fois approuvée, la PR est fusionnée (merge) dans la branche cible.
Étapes  
	1. Créer une branche locale dédiée à la fonctionnalité ou au bugfix.
	2. Committer et pousser régulièrement cette branche.
	3. Sur GitHub (ou autre plateforme), ouvrir une Pull Request en indiquant la branche source (feature/xxx) et la branche cible (main/develop).
	4. Attendre la review, corriger si besoin.
	5. Fusion (merge) une fois la PR validée.

Points à faire attention
Bien synchroniser votre branche avec la branche cible avant de créer la PR (ex : rebase sur main).
Suivre la convention de nommage des branches (feature/..., bugfix/...).
Rédiger un descriptif clair et détaillé de la PR pour faciliter la review.
Astuce
L’option Draft Pull Request sur GitHub permet de partager une PR incomplète pour recueillir des avis sans la fusionner.
Utilisez des templates de PR pour standardiser les informations fournies.
---
