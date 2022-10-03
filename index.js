const buttons = document.querySelectorAll('.btn');
const form = document.getElementById('form')
const rating_start = document.getElementById('rating-start')
const rating_end = document.getElementById('rating-end')
const rating = document.getElementById('rating');
const darkBlue = "rgb(40, 47, 57)";
const lightGrey = "rgb(149, 158, 172)";
const orange = "rgb(251, 116, 19)";

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(btn => {
            //resets the color of button when other button is clicked
            btn.style.backgroundColor = darkBlue;
            btn.style.color = lightGrey;
            btn.onmouseover = () => {
                //changes color on hover
                if (btn.style.backgroundColor != orange) {
                    btn.style.backgroundColor = lightGrey
                    btn.style.color = 'white'
                }
            }
            btn.onmouseout = () => {
                //go back to default color when unhovered
                if (btn.style.backgroundColor != orange) {
                    btn.style.backgroundColor = darkBlue;
                    btn.style.color = lightGrey
                }
            }
        })
        //change the color of button whenever clicked
        btn.style.backgroundColor = orange;
        btn.style.color = "white";
        rate = (btn.value);
    }
    )
});
form.addEventListener('submit', (e) => {
    //submit the rating then changing display
    e.preventDefault();
    rating_start.style.display = "none";
    rating_end.style.display = "block";
    rating.innerHTML = rate + " "
})