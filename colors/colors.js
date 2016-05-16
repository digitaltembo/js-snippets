/*
 * Colors.js
 * 
 * Uses {r: red, g: greed, b: blue} as a format for storing colors.
 * Not the most efficient, but eh.
 */

// mixes 2 colors in proportion to the ratio s.
function lerpColor(col1, col2, s){
    return {r:Math.round(col1.r*(1-s) + col2.r*s),
            g:Math.round(col1.g*(1-s) + col2.g*s),
            b:Math.round(col1.b*(1-s) + col2.b*s)}
}

// returns a greyscale value of a color
function color(grey){
    return {r:grey, g:grey, b:grey};
}
// returns a color
function color3(red, green, blue){
    return {r:red, g:green, b:blue};
}

// generates a completely random color
function randomColor(){
    return color3(Math.floor(Math.random()*256),
                Math.floor(Math.random()*256),
                Math.floor(Math.random()*256));
}
// inverts a color
function invert(color){
    return {r:(255-color.r), g:(255-color.g), b:(255-color.b)};
}
// lets the color be usable by CSS by returning a string like "rgb(10,10,10)"
function getRGB(col){
    return "rgb("+col.r+", "+col.g+", "+col.b+")";
}