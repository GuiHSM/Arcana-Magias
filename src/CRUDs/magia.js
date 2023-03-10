export var cadastrar_magia = (magia)=>{
    fs.readFile('../../JSON/magias.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        magia.id=obj[obj.length-1].id+1;
        obj.push({magia}); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('../../JSON/magias.json', json, 'utf8', callback); // write it back 
    }});
}

export var alterarar_magia = (magia)=>{
    fs.readFile('../../JSON/magias.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        for (let i = 0; i < obj.length; i++) {
            if(obj[i].id==magia.id){
                obj[i]=magia;
            }
        }
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('../../JSON/magias.json', json, 'utf8', callback); // write it back 
    }});
}

export var pegar_magia = (id)=>{
    fs.readFile('../../JSON/magias.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        for (let i = 0; i < obj.length; i++) {
            if(obj[i].id==id){
                return obj[i];
            }
        }
        return "Não achado";
    }});
}

export var pegar_todas_magias = ()=>{
    fs.readFile('../../JSON/magias.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); 
        return obj;
    }});
}

export var delete_magia = (id)=>{
    fs.readFile('../../JSON/magias.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        objCopy=[];
        for (let i = 0; i < obj.length; i++) {
            if(obj[i].id!=magia.id){
                objCopy.push(obj[i]);
            }
        }
        json = JSON.stringify(objCopy); //convert it back to json
        fs.writeFile('../../JSON/magias.json', json, 'utf8', callback); // write it back 
    }});
}