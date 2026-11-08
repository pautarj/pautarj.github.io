// Matérias do PautaRJ. Cada item: id, cat, zona, bairro, dt (AAAA-MM-DDTHH:MM, horário de Brasília), h (título), s (subtítulo), b (parágrafos), src (chaves de SRC), url (original), img/foto (arquivo em fotos/ e crédito), hero/dest opcionais.
const SRC = {
  c24:{p:'do',n:'Campos 24 Horas',u:'https://campos24horas.com.br'},
  j3:{p:'do',n:'J3News',u:'https://j3news.com'},
  f1:{p:'da',n:'Folha1',u:'https://www.folha1.com.br'},
  co:{p:'do',n:'Campos Ocorrências',u:'https://camposocorrencias.com.br'},
  ur:{p:'do',n:'Ururau',u:'https://www.ururau.com.br'}
};

const A = [
 {"id": 19, "img": "19.jpg", "foto": "Reprodução/Folha1", "cat": "cidade", "zona": "Noroeste Fluminense", "bairro": "São Fidélis", "dt": "2026-11-07T15:15", "h": "Família procura morador de São Fidélis desaparecido desde 15 de outubro", "s": "Maurício Nunes Pereira, de 28 anos, foi visto pela última vez de calça jeans, camisa cinza, boné vermelho e mochila.", "b": ["A família de Maurício Nunes Pereira, de 28 anos, morador de São Fidélis, pede ajuda para encontrá-lo. Ele está desaparecido desde o dia 15 de outubro.", "Segundo os parentes, quando foi visto pela última vez ele usava calça jeans, camisa cinza e boné vermelho, e carregava uma mochila.", "A mãe registrou o desaparecimento na Polícia Civil no dia 5 de novembro.", "Quem tiver qualquer informação pode ligar para (22) 99880-3064, (22) 98147-9896 ou (22) 98824-3587."], "src": ["f1"], "url": "https://www.folha1.com.br/geral/2026/11/1320413-morador-de-sao-fidelis-desaparece-e-familia-busca-informacoes.html"},
 {"id": 20, "img": "20.jpg", "foto": "Reprodução/Folha1", "cat": "policia", "zona": "Outros bairros", "bairro": "Poço Gordo", "dt": "2026-11-06T10:44", "h": "PM encontra descarte irregular de entulho em área de preservação em Poço Gordo", "s": "Área de cerca de 500 m² fica perto de uma nascente. A denúncia chegou pelo Linha Verde, do Disque Denúncia.", "b": ["Policiais militares localizaram, na quarta-feira (4), um ponto de descarte irregular de resíduos em uma área de preservação permanente em Poço Gordo, na Baixada Campista.", "A ação começou a partir de uma denúncia feita ao Linha Verde, canal do Disque Denúncia para crimes ambientais.", "No local, de cerca de 500 metros quadrados e próximo a uma nascente, havia entulho de construção, canos e plástico. Ninguém foi encontrado e não havia placa de licenciamento.", "O caso foi registrado na 134ª DP."], "src": ["f1", "j3"], "url": "https://www.folha1.com.br/geral/2026/11/1320380-pm-identifica-local-de-descarte-de-residuos-em-uma-area-de-preservacao-em-campos.html"},
 {id:17,img:'17.jpg',foto:'Divulgação/Polícia Civil',cat:'crime',zona:'Noroeste Fluminense',bairro:'São João do Paraíso, Cambuci',dt:'2026-11-07T08:19',
  h:'Homem é surpreendido por atirador e morto a tiros em São João do Paraíso, em Cambuci',
  s:'Vítima de 34 anos fazia uma entrega quando foi atacada; ele pulou o muro de uma casa para tentar fugir, mas morreu no local.',
  b:['Um homem de 34 anos foi morto a tiros na sexta-feira (6) na Travessa Oliveira Pinto, em São João do Paraíso, distrito de Cambuci, no Noroeste Fluminense.','De acordo com as primeiras informações, ele estava na rua quando foi surpreendido pelo atirador. Para tentar escapar dos disparos, pulou o muro de uma residência, mas não resistiu aos ferimentos e morreu ali mesmo.','Segundo moradores, a vítima trabalhava em uma loja de material de construção e fazia uma entrega perto do local.','O corpo foi levado para o Instituto Médico Legal. O caso está com a 142ª Delegacia de Polícia, de Cambuci. Até a última atualização, não havia informação sobre suspeitos nem sobre a motivação.'],
  src:['c24'],url:'https://campos24horas.com.br/noticia/homem-e-perseguido-e-morto-a-tiros-dentro-de-quintal-de-residencia'},

 {id:18,img:'18.jpg',foto:'Reprodução/Campos 24 Horas',cat:'transito',zona:'Centro',bairro:'Av. 28 de Março',dt:'2026-11-06T13:59',
  h:'Carro atinge moto e bate em poste no Centro de Campos; dois ficam feridos',
  s:'Acidente foi no cruzamento da Avenida 28 de Março com a Rua Voluntários da Pátria. Feridos, de 76 e 42 anos, foram levados ao HFM.',
  b:['Um carro e uma motocicleta se envolveram em um acidente na tarde de sexta-feira (6), no cruzamento da Avenida 28 de Março com a Rua Voluntários da Pátria, no Centro de Campos.','Depois de atingir a moto, o carro, um Toyota Corolla preto, ainda bateu contra um poste.','Dois homens, de 76 e 42 anos, ficaram feridos. Eles foram atendidos pelo Corpo de Bombeiros e levados para o Hospital Ferreira Machado.','As circunstâncias da batida ainda não haviam sido esclarecidas até a publicação.'],
  src:['c24'],url:'https://campos24horas.com.br/noticia/acidente-no-centro-de-campos-carro-atinge-moto-e-colide-contra-poste'},
 {id:1,cat:'policia',zona:'São João da Barra',bairro:'Grussaí, SJB',dt:'2026-11-07T16:56',hero:true,dest:2,
  h:'PM prende dupla suspeita de sequestrar idoso e obrigá-lo a fazer Pix de R$ 11 mil',
  s:'Vítima de 66 anos foi levada para Santa Clara na sexta. Suspeitos foram encontrados em um Gol perto da Lagoa de Grussaí, com revólver e lacres de nylon.',
  b:['Dois homens foram detidos pela Polícia Militar na tarde deste sábado (7), às margens da Lagoa de Grussaí, em São João da Barra, suspeitos de participar do sequestro de um idoso de 66 anos.','Segundo a polícia, na sexta-feira (6) a vítima foi levada até Santa Clara e forçada a fazer transferências por Pix que somaram R$ 11 mil.','Os agentes receberam a informação de que o carro usado no crime, um Volkswagen Gol cinza, seguia do Degredo em direção a Grussaí. Uma equipe do DPO de Grussaí fez buscas e localizou o veículo estacionado em frente à lagoa.','No porta-luvas, enrolado em uma camisa, havia um revólver calibre 38 municiado, além de munições extras. Os policiais também encontraram três celulares, três lacres de nylon do tipo “enforca-gato”, uma balaclava e um boné.','Os dois homens, o carro e o material apreendido foram levados para a 145ª DP, em São João da Barra. Até a última atualização, a ocorrência seguia em andamento.'],
  src:['c24'],url:'https://campos24horas.com.br/noticia/pm-prende-suspeitos-de-sequestro-de-idoso-que-perdeu-r-11-mil-via-pix-em-grussai'},

 {id:2,cat:'operacoes',zona:'Guarus',bairro:'Parque São José, Guarus',dt:'2026-11-07T14:59',
  h:'Polícia apreende mais de 200 porções de drogas no Parque São José, em Guarus',
  s:'Material incluía cocaína, maconha e crack, além de itens para embalar a droga. Apreensão foi na Rua Tenente Laurentino Nunes.',
  b:['Equipes policiais apreenderam mais de 200 porções de entorpecentes na manhã deste sábado (7), por volta das 10h20, na Rua Tenente Laurentino Nunes, no Parque São José, em Guarus.','De acordo com o registro, foram recolhidos 190 pinos e sete papelotes de cocaína, dez buchas de maconha e 13 pedras de crack. Também havia material usado para preparar e embalar a droga. O valor estimado é de cerca de R$ 1.265.','Todo o material foi levado para a 146ª DP, em Guarus. Não há informação sobre presos.'],
  src:['c24'],url:'https://campos24horas.com.br/noticia/policia-apreende-mais-de-200-porcoes-de-drogas-em-guarus'},

 {id:3,cat:'policia',zona:'Outros bairros',bairro:'Vila da Rainha',dt:'2026-11-07T14:52',
  h:'Moto roubada de motorista de aplicativo é achada abandonada em mata na Vila da Rainha',
  s:'Honda CG 160 foi levada na madrugada e encontrada horas depois pela PM, após denúncia.',
  b:['Uma motocicleta Honda CG 160 roubada na madrugada deste sábado (7) foi recuperada pela Polícia Militar por volta das 9h40, em uma área de mata na Rua Goiabal, na Vila da Rainha, em Campos.','A moto estava sendo usada pelo irmão do proprietário, que trabalha como motorista de aplicativo, quando foi levada durante uma corrida.','Os policiais chegaram ao local após uma denúncia de veículo abandonado. Na consulta inicial não havia registro de roubo, mas o contato com o grupo da Região Integrada de Segurança Pública confirmou que a moto tinha sido roubada horas antes.','O veículo foi levado para a 134ª DP, no Centro. Ninguém foi preso.'],
  src:['c24'],url:'https://campos24horas.com.br/noticia/moto-roubada-durante-corrida-de-aplicativo-e-encontrada-em-area-de-mata-em-campos'},

 {id:4,img:'4.jpg',foto:'Reprodução/Campos 24 Horas',cat:'crime',zona:'Região dos Lagos',bairro:'RJ-106, Rio das Ostras',dt:'2026-11-07T10:21',dest:4,
  h:'Policial penal que trabalha em Campos é preso por embriaguez após batida com três carros',
  s:'Segundo a polícia, ele avançou o sinal na RJ-106, em Rio das Ostras. Uma menina de 12 anos foi levada ao hospital; pistola foi apreendida.',
  b:['Um policial penal de 42 anos, lotado em uma unidade prisional de Campos, foi preso na noite de sexta-feira (6) suspeito de dirigir embriagado, após provocar um acidente envolvendo três veículos no km 145 da RJ-106, perto do bairro Jardim Beira-Mar, em Rio das Ostras.','De acordo com a polícia, ele seguia em direção a Macaé, avançou o sinal vermelho e bateu na traseira de um carro em que estavam um homem, uma mulher e uma menina de 12 anos. Com o impacto, esse carro foi empurrado contra um terceiro veículo.','A criança foi levada para o Hospital Municipal de Rio das Ostras. Equipes do Comando de Policiamento Rodoviário atenderam a ocorrência.','O policial informou aos agentes que estava armado, e a pistola foi apreendida. No IML de Macaé, o exame confirmou a presença de álcool. Ele permaneceu preso.'],
  src:['c24'],url:'https://campos24horas.com.br/noticia/policial-penal-e-preso-por-dirigir-embriagado-apos-acidente'},

 {id:5,cat:'crime',zona:'Região dos Lagos',bairro:'Unamar, Cabo Frio',dt:'2026-11-07',noTime:true,dest:3,
  h:'Polícia prende integrantes de grupo envolvido na morte de comerciante em Cabo Frio',
  s:'Comerciante de 54 anos foi morto em outubro; mesmo depois, o grupo seguiu cobrando Pix de parentes simulando um sequestro.',
  b:['A Delegacia Antissequestro (DAS) da Polícia Civil prendeu integrantes de um grupo criminoso apontado como responsável pelo latrocínio e pela ocultação do corpo de um comerciante de madeira de 54 anos, em Cabo Frio, na Região dos Lagos.','Segundo as investigações, a vítima foi morta em 21 de outubro, em Unamar. Mesmo depois do crime, o grupo continuou mandando mensagens a parentes e conhecidos pedindo dinheiro por Pix, como se ele estivesse sequestrado.','Duas mulheres foram presas em flagrante por extorsão: de acordo com a polícia, elas cediam a conta bancária e enviavam as mensagens de resgate. Um homem capturado em 5 de novembro, em Saquarema, confessou ter escondido o corpo e indicou o local. Um adolescente também foi identificado.','Ainda segundo a polícia, o apontado como executor do crime morreu em 27 de outubro, após atirar contra os agentes durante um cerco.','Os restos mortais e a caminhonete da vítima foram recuperados. Os suspeitos vão responder por latrocínio, ocultação de cadáver e extorsão.'],
  src:['c24'],url:'https://campos24horas.com.br/noticia/policia-prende-integrantes-de-organizacao-criminosa-envolvidos-na-morte-de-empresario'},

 {id:6,img:'imtt.jpg',foto:'Divulgação',cat:'transito',zona:'Centro',bairro:'Terminal Luiz Carlos Prestes',dt:'2026-11-07T09:32',
  h:'IMTT apreende ônibus sem vistoria e com elevador quebrado no terminal do Centro',
  s:'Veículo da linha Novo Jockey também estava com a carroceria em mau estado. Empresa levou duas autuações.',
  b:['Fiscais do Instituto Municipal de Trânsito e Transporte (IMTT) apreenderam um ônibus da linha Novo Jockey na tarde de sexta-feira (6), por volta das 16h30, no Terminal Urbano Luiz Carlos Prestes, no Centro de Campos.','O veículo, do Consórcio União, circulava sem o Certificado de Vistoria obrigatório, com o elevador para cadeirantes sem funcionar e com a carroceria em más condições. Foram lavrados dois autos de infração.','Segundo a direção de fiscalização do IMTT, a intensificação das vistorias atende a uma determinação da prefeitura.'],
  src:['f1','j3'],url:'https://www.folha1.com.br/geral/2026/11/1320410-imtt-apreende-onibus-com-com-diversas-irregularidades-em-campos.html'},

 {id:7,cat:'justica',zona:'Noroeste Fluminense',bairro:'Itaperuna',dt:'2026-11-07T08:08',
  h:'Ex-PM vai a júri na terça por morte de jovem na saída de festa universitária em Itaperuna',
  s:'Crime foi em 2016. Segundo o Ministério Público, a vítima, de 20 anos, foi baleada no peito após uma discussão.',
  b:['Um ex-policial militar acusado de matar um jovem de 20 anos na saída de uma festa universitária, em agosto de 2016, será julgado pelo Tribunal do Júri de Itaperuna na terça-feira (10).','De acordo com a denúncia do Ministério Público do Rio (MPRJ), o acusado estava armado durante a festa. Depois que os seguranças pediram que os envolvidos em uma discussão deixassem o local, houve uma nova briga do lado de fora, quando ele teria sacado a arma e atirado no peito da vítima.','Ele responde por homicídio duplamente qualificado, por motivo fútil e por uso de recurso que dificultou a defesa da vítima. O acusado foi expulso da PM por causa do crime. A defesa não foi localizada pela reportagem original.'],
  src:['c24'],extra:'g1',url:'https://campos24horas.com.br/noticia/ex-pm-vai-a-juri-por-morte-de-jovem-na-saida-de-festa-universitaria-em-itaperuna'},

 {id:8,img:'enel.jpg',foto:'Divulgação/Enel e Polícia Civil',cat:'policia',zona:'Outros bairros',bairro:'Campos',dt:'2026-11-06T12:51',
  h:'Polícia Civil e Enel flagram “gato” de energia em restaurante e arena esportiva',
  s:'Dono da arena já havia sido preso pelo mesmo crime no endereço, segundo a Enel. Furto de energia pode dar até seis anos de prisão.',
  b:['Uma ação da Enel Rio com a Polícia Civil e a perícia criminal flagrou desvio de energia em dois estabelecimentos comerciais de Campos na quinta-feira (5).','Em um restaurante, os técnicos encontraram uma ligação direta na rede. Como o responsável não estava, o gerente foi levado à delegacia para prestar depoimento.','Em uma arena esportiva com bar, dois medidores tinham irregularidades. Segundo a Enel, o local já tinha duas ocorrências anteriores e o proprietário já havia sido preso por furto de energia no mesmo endereço. Ele não foi encontrado.','Os casos serão investigados pela 134ª DP. Furto de energia prevê pena de um a seis anos de prisão e multa, além da cobrança de todo o consumo desviado.'],
  src:['j3'],url:'https://j3news.com/2026/11/06/policia-civil-e-enel-flagram-furto-de-energia-em-restaurante-e-arena-esportiva-em-campos/'},

 {id:9,img:'pc134.jpg',foto:'Divulgação/134ª DP',cat:'policia',zona:'Guarus',bairro:'Av. Carlos Alberto Chebabe',dt:'2026-11-06T08:43',
  h:'Condenado por roubar mulher em ponto de ônibus é preso dentro de empresa em Guarus',
  s:'Prisão foi feita por equipes da 134ª DP, da 146ª DP e da Deam na Avenida Carlos Alberto Chebabe.',
  b:['Um homem condenado por roubo majorado foi preso na tarde de quinta-feira (5), por volta das 14h50, dentro de uma empresa na Avenida Carlos Alberto Chebabe, em Guarus.','Segundo o registro policial, ele e pelo menos mais uma pessoa, armados, roubaram uma mulher que esperava em um ponto de ônibus na cidade.','A ação reuniu policiais civis da 134ª DP (Centro), da 146ª DP (Guarus) e da Deam de Campos. O preso foi levado para a 134ª DP.'],
  src:['j3','co'],url:'https://j3news.com/2026/11/06/condenado-por-roubo-a-mulher-em-ponto-de-onibus-e-preso-em-empresa-em-guarus/'},

 {id:10,img:'10.jpg',foto:'Roberto Jóia/Reprodução Folha1',cat:'transito',zona:'Centro',bairro:'Ponte da Lapa',dt:'2026-11-05T11:25',dest:1,
  h:'Caminhões acima de 23 toneladas ficam proibidos na Ponte da Lapa a partir de segunda',
  s:'Restrição vale nos dois sentidos. Veja as rotas alternativas pela Ponte General Dutra e pela Ponte Leonel Brizola.',
  b:['A partir de segunda-feira (9), caminhões com mais de 23 toneladas não poderão mais passar pela Ponte Saturnino de Brito, a Ponte da Lapa, em Campos. A proibição vale tanto no sentido Centro–Guarus quanto no sentido contrário.','Segundo a Guarda Civil Municipal, o objetivo é dar mais segurança a motociclistas e ciclistas, que usam muito a ponte nos horários de pico, além de preservar a estrutura.','Quem vai do Centro para Guarus deve seguir pela BR-101 até a Ponte General Dutra. No sentido Guarus–Centro, a alternativa é a Ponte Leonel Brizola.','A fiscalização será reforçada com câmeras do Centro de Controle Operacional. Quem desrespeitar pode ser multado e, em caso de desobediência, ter o veículo apreendido.'],
  src:['f1','ur'],url:'https://www.folha1.com.br/geral/2026/11/1320355-caminhoes-acima-de-23-toneladas-estarao-proibidos-de-usar-ponte-da-lapa-a-partir-de-segunda.html'},

 {id:11,img:'11.jpg',foto:'Júlia Alves/Reprodução Folha1',cat:'transito',zona:'Outros bairros',bairro:'Av. 28 de Março',dt:'2026-11-05T10:06',
  h:'Ciclista fica gravemente ferida ao ser atingida por carro na Avenida 28 de Março',
  s:'Mulher de 54 anos tentava atravessar perto do Parque Tarcísio Miranda. Ela passou por cirurgia e está estável.',
  b:['Uma mulher de 54 anos ficou gravemente ferida ao ser atingida por um carro na manhã de quinta-feira (5), na Avenida 28 de Março, perto do Parque Tarcísio Miranda, em Campos.','Imagens de câmeras mostram que, por volta das 7h11, ela estava de bicicleta na ciclovia e tentou atravessar a pista quando houve a colisão.','Ela foi levada ao Hospital Ferreira Machado com fraturas no braço, no quadril e na perna, passou por cirurgia e, segundo o hospital, está estável e lúcida. O motorista, que parou para ajudar, também se feriu.','O IMTT informou que o cruzamento tem semáforo funcionando e tempo específico de travessia para ciclistas. O caso é investigado pela 134ª DP.'],
  src:['f1','j3'],url:'https://www.folha1.com.br/geral/2026/11/1320352-mulher-fica-gravemente-ferida-apos-ser-atropelada-por-carro-em-campos.html'},

 {id:12,img:'12.jpg',foto:'Arquivo Folha da Manhã/Reprodução Folha1',cat:'crime',zona:'São João da Barra',bairro:'Quixaba, SJB',dt:'2026-11-05T11:59',dest:5,
  h:'Homem é morto a tiros dentro de casa após invasão em Quixaba, São João da Barra',
  s:'Esposa viu a ação. Polícia recolheu 12 cápsulas no local e investiga possível disputa entre facções.',
  b:['Um homem de 32 anos foi morto a tiros dentro de casa na noite de quarta-feira (4), na localidade de Quixaba, em São João da Barra.','Segundo a esposa, que presenciou o crime, homens não identificados arrombaram a porta, atiraram e fugiram. Policiais militares recolheram 12 cápsulas no local, de pistola 9 mm e de calibre 12.','De acordo com a polícia, a vítima tinha passagens por tráfico de drogas e porte ilegal de arma, e a principal linha de investigação é uma disputa entre facções. O local não tem câmeras.','O caso foi registrado na 145ª DP, que investiga o crime. Ninguém foi preso.'],
  src:['f1','j3'],url:'https://www.folha1.com.br/geral/2026/11/1320358-homem-e-assassinado-a-tiros-dentro-de-casa-em-sao-joao-da-barra.html'},

 {id:13,img:'13.jpg',foto:'Reprodução/Campos Ocorrências',cat:'policia',zona:'Outros bairros',bairro:'Campos',dt:'2026-11-05T15:04',
  h:'PRF recupera em Campos carro roubado no Rio há mais de dois anos',
  s:'Onix circulava com placas adulteradas. Motorista foi levado para a 146ª DP.',
  b:['A Polícia Rodoviária Federal recuperou, na tarde de quarta-feira (4), em Campos, um carro roubado no município do Rio de Janeiro em junho de 2024.','O GM Onix foi abordado depois que a consulta da placa apontou irregularidades. Os agentes encontraram sinais de adulteração nos itens de identificação e confirmaram que o carro rodava com placas falsas.','O motorista foi detido e levado, junto com o veículo, para a 146ª DP, em Guarus.'],
  src:['co'],url:'https://camposocorrencias.com.br/2026/11/05/prf-recupera-em-campos-carro-roubado-ha-mais-de-dois-anos-no-rio/'},

 {id:14,img:'dp134.jpg',foto:'Arquivo/Divulgação',cat:'crime',zona:'Outros bairros',bairro:'Martins Lage',dt:'2026-11-04T11:44',
  h:'Homem de 59 anos é encontrado morto a tiros na Estrada de Cambaíba, em Martins Lage',
  s:'Vítima estava amordaçada. A moto dele e munições foram achadas no local. Motivação ainda é desconhecida.',
  b:['Um homem de 59 anos foi encontrado morto, com vários tiros na cabeça, na noite de terça-feira (3), na Estrada de Cambaíba, em Martins Lage, em Campos.','A polícia foi ao local após uma denúncia. A vítima estava amordaçada. A motocicleta dele e munições foram encontradas perto do corpo. Segundo familiares, ele tinha sido visto pela última vez por volta das 10h daquele dia.','A perícia esteve no local e o corpo foi levado ao IML de Campos. O caso foi registrado na 134ª DP. Até a publicação, ninguém havia sido preso e a motivação não era conhecida.'],
  src:['co'],extra:'Manchete RJ',url:'https://camposocorrencias.com.br/2026/11/04/homem-e-encontrado-morto-com-diversos-tiros-na-cabeca-em-martins-lage-em-campos/'},

 {id:15,img:'dp134.jpg',foto:'Arquivo/Divulgação',cat:'crime',zona:'Outros bairros',bairro:'Parque Leopoldina',dt:'2026-11-04T11:40',
  h:'Trio armado invade casa, rende idoso e leva R$ 86 mil no Parque Leopoldina',
  s:'Ação durou mais de duas horas. Vítima de 75 anos acredita que o roubo foi planejado.',
  b:['Três homens armados invadiram uma casa no Parque Leopoldina, em Campos, na madrugada de quarta-feira (4) e levaram cerca de R$ 86 mil em dinheiro, além de cartões bancários e documentos.','Segundo o morador, de 75 anos, os criminosos chegaram por volta das 4h. Ele os encontrou no quintal cerca de uma hora depois. A ação durou mais de duas horas, e antes de fugir o grupo amarrou as mãos dele. A esposa e um parente com deficiência também estavam na casa.','A vítima contou que um dos assaltantes sabia seu nome, sua rotina e que havia dinheiro guardado, o que a faz acreditar que o crime foi planejado.','O caso foi registrado na 134ª DP. Câmeras da casa e de uma escola vizinha podem ajudar a identificar os suspeitos. Ninguém foi preso.'],
  src:['j3'],url:'https://j3news.com/2026/11/04/trio-armado-rouba-r-86-mil-apos-invadir-residencia-e-render-morador-no-parque-leopoldina/'},

 {id:16,img:'dp134.jpg',foto:'Arquivo/Divulgação',cat:'crime',zona:'Outros bairros',bairro:'Caju',dt:'2026-11-03T09:55',
  h:'Dupla armada em moto rouba clientes e funcionários de posto no Caju',
  s:'Criminosos levaram celulares e cerca de R$ 2 mil. Um deles atirou para o alto antes da fuga pela BR-101.',
  b:['Dois homens armados, em uma motocicleta, assaltaram clientes e funcionários de um posto de combustível na Avenida XV de Novembro, no Caju, em Campos, na noite de domingo (1º).','Segundo o relato à polícia, eles abordaram os clientes um a um e levaram os celulares. Dos funcionários, foram roubados cerca de R$ 2 mil. Um dos criminosos disparou para o alto.','A dupla fugiu pela BR-101, em direção ao Shopping Estrada. Ninguém ficou ferido. A Polícia Civil investiga o caso pela 134ª DP.'],
  src:['co'],url:'https://camposocorrencias.com.br/2026/11/03/policia-investiga-roubo-em-posto-de-combustivel-que-deixou-varias-vitimas-em-campos/'}
];


// Destaques do carrossel (ids das matérias, na ordem). Vazio = automático (manchete + 2 mais recentes com foto).
const DESTAQUES = [];
// Anúncio que aparece como 2º slide do carrossel. Para um anunciante real: img = 'fotos/anuncio.jpg', link = 'https://...'
const ANUNCIO = {tit:'Anuncie aqui', txt:'Sua marca para quem acompanha polícia, crime e segurança em Campos e região.', cta:'Quero anunciar', img:'', link:''};
