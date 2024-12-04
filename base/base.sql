CREATE TABLE utilisateur(
   id_utilisateur SERIAL,
   nom_utilisateur VARCHAR(150)  NOT NULL,
   email VARCHAR(150)  NOT NULL,
   numero VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_utilisateur)
);

CREATE TABLE projet(
   id_projet SERIAL,
   nom_projet VARCHAR(150)  NOT NULL,
   date_debut DATE NOT NULL,
   id_utilisateur INTEGER NOT NULL,
   PRIMARY KEY(id_projet),
   FOREIGN KEY(id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

CREATE TABLE tache(
   id_tache SERIAL,
   titre VARCHAR(150)  NOT NULL,
   id_projet INTEGER NOT NULL,
   PRIMARY KEY(id_tache),
   FOREIGN KEY(id_projet) REFERENCES projet(id_projet)
);

CREATE TABLE type_tache(
   id_type_tache SERIAL,
   type_tache VARCHAR(150)  NOT NULL,
   PRIMARY KEY(id_type_tache)
);

CREATE TABLE notification(
   id_notification SERIAL,
   date_notification TIMESTAMP NOT NULL,
   notification TEXT NOT NULL,
   PRIMARY KEY(id_notification)
);

CREATE TABLE type_status(
   id_type_status SERIAL,
   nom_status VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_type_status)
);

CREATE TABLE detail_tache(
   id_tache INTEGER,
   id_type_tache INTEGER,
   description TEXT NOT NULL,
   estimation NUMERIC(4,2)   NOT NULL,
   status BOOLEAN NOT NULL,
   PRIMARY KEY(id_tache, id_type_tache),
   FOREIGN KEY(id_tache) REFERENCES tache(id_tache),
   FOREIGN KEY(id_type_tache) REFERENCES type_tache(id_type_tache)
);

CREATE TABLE projet_status(
   id_projet INTEGER,
   id_type_status INTEGER,
   date_status TIMESTAMP NOT NULL,
   PRIMARY KEY(id_projet, id_type_status),
   FOREIGN KEY(id_projet) REFERENCES projet(id_projet),
   FOREIGN KEY(id_type_status) REFERENCES type_status(id_type_status)
);
