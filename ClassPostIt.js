class PostIt {
    id;
    Width;
    Height;
    Color;
    x;
    y;
    text;

    constructor(id) {
        this.id = id;
        this.Width = 176;
        this.Height = 176;
        this.Color = "blue";
        this.x = 50;
        this.y = 50;
        this.text = "";
    }

    affiche() {
        let post_it = document.getElementById(this.id)
        if (post_it === null) {
            post_it = document.createElement('div');
            post_it.id = this.id
            document.body.appendChild(post_it)
        }

        post_it.innerHTML = this.text
        post_it.style.position = "fixed"
        post_it.style.width = (+this.Width + "px")
        post_it.style.height = (+this.Height + "px")
        post_it.style.backgroundColor = this.Color
        post_it.style.left = this.x + "px"
        post_it.style.top = this.y + "px"
    }

    move(newX, newY) {
        this.x = newX
        this.y = newY
    }

    redimension(newWidth, newHeight) {
        this.Width = newWidth
        this.Height = newHeight
    }

    modifText(text) {
        this.text = text
    }

    modifColor(Color) {
        this.Color = Color
    }
}