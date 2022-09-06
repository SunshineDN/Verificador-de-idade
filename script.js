res.style.textAlign='center'
res.style.fontFamily='Comic Sans MS'
function verificar() {
    var res = document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    if (fano.value.length < 4 || fano.value > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'um homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/criancah.png')
                genero = 'um garoto'
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'Imagens/jovemh.png')
                genero = 'um jovem'
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'Imagens/adultoh.png')
                genero = 'um adulto'
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/idosoh.png')
                genero = 'um idoso'
            }
        } else {
            genero = 'uma mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/criancam.png')
                genero = 'uma garota'
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','Imagens/jovemm.png')
                genero = 'uma jovem'
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','Imagens/adultam.png')
                genero = 'uma adulta'
            } else {
                //Idoso
                img.setAttribute('src','Imagens/idosam.png')
                genero = 'uma idosa'
            }
        }
        res.style.textAlign='center'
        res.innerHTML='Detectamos '+genero+' com '+idade+' anos.'
        res.appendChild(img)
    }
}