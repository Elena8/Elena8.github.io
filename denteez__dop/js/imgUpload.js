function fileSelect(e) {
    console.log(e);
  // получаем объект FileList
  var files = e.target.files,
      row,
      fileRead,
      file,
      data,imgTeg;
    
    console.log(files);
     file = files[0];
    var paragraf=document.createElement('p');
            paragraf.setAttribute('id','errors__img');
            document.getElementById('errors-id').insertBefore(paragraf,null);
    
    if(/image.*/.test(file.type)) {
      data = [file.name, file.type, file.size];
       
          document.getElementById('errors__img').innerHTML='';  
        
        
        if(file.size<4000000) {
            document.getElementById('errors__img').innerHTML='';  
            console.log("file.size",file.size);
            fileRead = new FileReader();
            fileRead.readAsDataURL(file);
            fileRead.onload = (function (file, data) {
                return function (e) {         
                var img = new Image();       
                img.src = e.target.result;
                if(img.complete) {
            
                    if(img.height>300 || img.width>300){
                        document.getElementById('errors__img').innerHTML='';  
                        var parTeg;
                        
                        var span = document.createElement('span');
                        span.setAttribute('class','img__wrap');
                        span.innerHTML = ['<img class="thumb" src="', e.target.result,'" />'].join('');
                        document.getElementById('img__upload-id').insertBefore(span, null);
                        document.getElementById('add-id').style.display="none";
                       
                    }else {
                        document.getElementById('errors__img').innerHTML='image little';
                    console.log("image little");
                    }
              console.log("img.height",img.height);
              console.log("img.width",img.width);
          }

        }
      }) (file, data);
            
        }else {
            document.getElementById('errors__img').innerHTML='image >5MB';
            console.log("file>5MB");
        }
    
    
    } else {
        document.getElementById('errors__img').innerHTML='Файл не является изображением';
        console.log("not img");
     
      
    }      
   
}

// проверяем поддерживает ли браузер file API
if(window.File && window.FileReader && window.FileList && window.Blob) {
  // если да, то как только страница загрузится
  onload = function () {
    // вешаем обработчик события, срабатывающий при изменении input'а
    document.querySelector('.input__file').addEventListener('change',fileSelect, false);
  }
// если нет, то предупреждаем, что демо работать не будет
} else {
  alert('К сожалению ваш браузер не поддерживает file API');
}