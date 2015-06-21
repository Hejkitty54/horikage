'use strict';

var _ = require('lodash');
function images(){
    return  {calligraphy:
    { 'ikiru.jpg': 'assets/images/calligraphy/ikiru.jpg',
        'kizuna.jpg': 'assets/images/calligraphy/kizuna.jpg',
        'kouchou.jpg': 'assets/images/calligraphy/kouchou.jpg',
        'seidou.jpg': 'assets/images/calligraphy/seidou.jpg',
        'syoryu.jpg': 'assets/images/calligraphy/syoryu.jpg',
        'yoji.jpg': 'assets/images/calligraphy/yoji.jpg' },
    girls:
    { 'bara.tori.jpg': 'assets/images/girls/bara.tori.jpg',
        'follow.jpg': 'assets/images/girls/follow.jpg',
        'hana.jpg': 'assets/images/girls/hana.jpg',
        'heart.jpg': 'assets/images/girls/heart.jpg',
        'kotyouran.jpg': 'assets/images/girls/kotyouran.jpg',
        'love.jpg': 'assets/images/girls/love.jpg',
        'text2.jpg': 'assets/images/girls/text2.jpg' },
    japanese:
    { 'geisya.jpg': 'assets/images/japanese/geisya.jpg',
        'handora.jpg': 'assets/images/japanese/handora.jpg',
        'hasu.jpg': 'assets/images/japanese/hasu.jpg',
        'hasuhannya.jpg': 'assets/images/japanese/hasuhannya.jpg',
        'ryubotan.jpg': 'assets/images/japanese/ryubotan.jpg',
        'ryucover.jpg': 'assets/images/japanese/ryucover.jpg',
        'ryuko.jpg': 'assets/images/japanese/ryuko.jpg',
        'sisi.jpg': 'assets/images/japanese/sisi.jpg',
        'tora.jpg': 'assets/images/japanese/tora.jpg',
        'tubame.jpg': 'assets/images/japanese/tubame.jpg' },
    others:
    { 'bob.jpg': 'assets/images/others/bob.jpg',
        'chain.jpg': 'assets/images/others/chain.jpg',
        'converse.jpg': 'assets/images/others/converse.jpg',
        'cros.jpg': 'assets/images/others/cros.jpg',
        'hukurou.jpg': 'assets/images/others/hukurou.jpg',
        'skal.jpg': 'assets/images/others/skal.jpg',
        'skullbara.jpg': 'assets/images/others/skullbara.jpg',
        'tenaku.jpg': 'assets/images/others/tenaku.jpg',
        'text.jpg': 'assets/images/others/text.jpg',
        'tom.jpg': 'assets/images/others/tom.jpg',
        'torapo.jpg': 'assets/images/others/torapo.jpg',
        'ynwa.jpg': 'assets/images/others/ynwa.jpg' }
    };
}

function image_path(image){
    return {
        original: 'images/big/' + image.directory + '/' + image.file,
        thumbnail: 'images/small/' + image.directory + '/' + image.file
    };
}

function image_gallery_struct(directory){
    var imagesData = images();
    var keys = _.keys(imagesData[directory]);
    var imagespairs = _.map(keys, function(file){ return {file:file, directory:directory}});
    var paths = _.map(imagespairs, image_path);
    return paths;
}


module.exports =  image_gallery_struct;