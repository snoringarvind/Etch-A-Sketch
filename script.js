var main = document.querySelector('.main');
main.addEventListener('mouseover',color_it);

function create_grids(rows, cols) {
    for (var i = 0; i < rows; i++) {
        var container = document.createElement('div');
        container.className='container';
        var grids = document.createElement('div');
        grids.className='grids';
        for (var j = 0; j < cols; j++) {
            
            var box = document.createElement('div');
            box.className='box';
            grids.appendChild(box);
            
        }
        container.appendChild(grids);
        main.appendChild(container);
    }
    console.log(main);
}

// create_grids(40,40);

function color_it(e){
    if(e.target.className!='box'){
        return;    
    }
    // console.log(e.target);
    var color_1=Math.floor(Math.random()*255);
    var color_2=Math.floor(Math.random()*10);
    var color_3=Math.floor(Math.random()*255);
    e.target.style.backgroundColor= `rgb(${color_1},${color_2},${color_3})`;    
}


function user_values(e){
    var rows=document.querySelector('#get_rows').value;
    var cols=document.querySelector('#get_cols').value;
    // if ((rows||cols)>100){
    //     return null;
    // }else{
    //     return [rows,cols];
    // }
    return [rows,cols];

}

document.querySelector('#create').addEventListener('click',create);

function create(e){
    var values=user_values();
    var rows=values[0];
    var cols=values[1];
    if ((rows||cols)>100){
        alert('Pleaser enter a value smaller than 100 :(');
    }else{
        create_grids(rows,cols);
    }
    
}

document.querySelector('#reset').addEventListener('click',reset);

function reset(){
    var main=document.querySelector('.main');
    var container=document.querySelectorAll('.container');
    for(var i=0; i<container.length; i++){
        main.removeChild(container[i]);
    }
}
