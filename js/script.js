window.onload = function() {
    const letters = document.querySelectorAll('.letter');
    const letterHolders = document.querySelectorAll('.letter_holder');
    [...letters].forEach(letter => {
        letter.ondragstart = function(e) {
            e.dataTransfer.setData("text", e.target.id);
        }
    });
    [...letterHolders].forEach(holder => {
        holder.ondragover = e => e.preventDefault();
        holder.ondrop = e => {
            const id = e.dataTransfer.getData("text");
            const letter = document.getElementById(id);
            const dataLetter = letter.getAttribute("data-letter");
            const minLetter = e.target.getAttribute("data-min");
            const maxLetter = e.target.getAttribute("data-max");
            console.log(dataLetter);
            console.log(minLetter);
            console.log(maxLetter);
            if (dataLetter >= minLetter && dataLetter <= maxLetter) {
                e.target.appendChild(letter);
            }

        }
    })
}