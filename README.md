# École CIMPA 2027 — Antsiranana, Madagascar

Site vitrine simple et moderne pour l'École CIMPA 2027 sur les **Fondements Mathématiques de l'Informatique**, qui se tiendra du **28 juin au 9 juillet 2027** à l'Université d'Antsiranana, Madagascar.

## Aperçu

Le site met en avant deux actions principales, visibles dès l'arrivée sur la page :

- **Lien d'inscription** vers la plateforme officielle CIMPA
- **Lien vers le site officiel** de l'école (Google Sites) pour plus d'informations

## Structure du projet

```
.
├── index.html      # Page principale
├── style.css       # Styles (design moderne, responsive)
└── README.md
```

## Déploiement

Ce site est 100% statique (HTML/CSS, sans dépendances) et prêt à l'emploi. Vous pouvez le déployer immédiatement avec :

### GitHub Pages
1. Allez dans **Settings > Pages** de ce dépôt.
2. Choisissez la branche `main` et le dossier `/ (root)`.
3. Le site sera accessible à `https://<votre-utilisateur>.github.io/<nom-du-repo>/`.

### Vercel
1. Importez ce dépôt sur [vercel.com](https://vercel.com).
2. Aucune configuration de build n'est nécessaire (site statique).
3. Déployez.

### Local
Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
python -m http.server 8000
```

Puis rendez-vous sur `http://localhost:8000`.

## Liens utiles

- [Inscription à l'école](https://applications.cimpa.info/form/cimpa-schools?source_entity_type=block_content&source_entity_id=1)
- [Site officiel de l'école](https://sites.google.com/view/cimpa2027/accueil)
- [CIMPA.info](https://www.cimpa.info)
