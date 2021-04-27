let post_it = new PostIt("un");

post_it.affiche()

post_it.move(150, 150)
post_it.affiche()

post_it.redimension(300, 300)
post_it.affiche()

post_it.modifText("Premier texte")
post_it.affiche()

post_it.modifColor("gray")
post_it.affiche()