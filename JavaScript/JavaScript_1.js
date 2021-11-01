function selectColor() {
    var colorOutput;
    var colors = document.getElementById('color-input').value;
    var colorString = " is a great color"

    switch (colors) {
        case 'Red':
            colorOutput = 'Red' + colorString;
            break;
        case 'Green':
            colorOutput = 'Green' + colorString;
            break;
        case 'Blue':
            colorOutput = 'Blue' + colorString;
            break;
        case 'Yellow':
            colorOutput = 'Yellow' + colorString;
            break;
        case 'Grey':
            colorOutput = 'Grey' + colorString;
            break;
        default:
            colorOutput = 'Enter a color exactly as written on the above list';
    }
    document.getElementById('output').innerHTML += colorOutput;
}