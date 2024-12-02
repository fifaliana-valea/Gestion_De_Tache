base

affichage:
    -login
        .numero de telephone/email
    - check email
        .email
    -incription
        .nom
        .numero
    -menu
        .calendrier
    -notification
        .liste des notifications
    -recherche
        .type status projet
        .nom du projet
        .date du projet
    -dasboard
    -tache
        .liste de tache(tableau avec les check des taches)
        .ajoute tache(titre)=>ajouter detail (decription,type,estimation)


metiere:
    -login
        .int checkLogin(numero/email) => si 0 => login avec deux bouttons(connect,s'incrire) sinon => accueil
    - check email
        .boolean checkEmail(email) => si false => page precedant
    -incription
        .int insertUtisateur(Utilisateur) => mise en session => accueil
    -calendrier
        .listeProjet(utilisateur)
        .calculeAvencementParProjet(projet)
    -tache
        .listeTacheParProjet(projet)
        .checktache(tache)
        .insertTache(titre)
    -detail tache
        .insertDetail(detailTache)
        .updateStatus(status)
    -notification
        .listeNotification(projet)
    -recherche
        .recherche(type,nom,date)
    -dasboard
        .taux d'avencement


