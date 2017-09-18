
function loadImage( imgUrl, fn ) {

    var imgObj = {}; 

    var tempImg, loaded = 0, imgLenght = 0;

    for ( var key in imgUrl ) {
        imgLenght++; 

        tempImg = new Image();

        tempImg.onload = function() {
            loaded++; 
            if ( loaded >= imgLenght ) {
                fn( imgObj );
            }
        };

        tempImg.src = imgUrl[ key ];
        imgObj[ key ] = tempImg;
    }

}