const divinfo = document.querySelector('.info');
document.querySelectorAll('.barang').forEach(function(barang){
    barang.querySelector('.tambah').addEventListener('click',function() {
        const jumlahitem = barang.querySelector(".tombol input")
       jumlahitem.value = parseInt(jumlahitem.value) + 1
    });
    barang.querySelector('kurang').addEventListener('click',function(){
        const jumlahitem = barang.querySelector(".tombol input")
        if(jumlahitem.value > 0 ){
            jumlahitem.value = parseInt(jumlahitem.value) -1
        }
    });
});