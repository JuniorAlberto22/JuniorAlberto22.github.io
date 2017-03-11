var pessoa = {
	nome:'José Alberto',
	cargo:'Desenvolvedor de Software',
	foto:'IMAGENS/anonymous.png'
}

document.getElementById('nome_perfil').innerHTML = pessoa.nome;
document.getElementById('cargo_perfil').innerHTML = pessoa.cargo;
document.getElementById('img_perfil').src = pessoa.foto;