let siirler = [
  {
    siirAdi: "Akşam",
    siirAciklamasi: "Akşam, artık inan buna muhacir kaldı.",
    sair: "Ahmet Hamdi Tanpınar",
  },
  {
    siirAdi: "Belki",
    siirAciklamasi: "Ölü bir aşk bulur belki yüreğimde",
    sair: "Cahit Zarifoğlu",
  },
  {
    siirAdi: "Küçük İskender",
    siirAciklamasi: "Beni hiç göremezsin, Ben bir düşteyim.",
    sair: "Küçük İskender",
  },
  {
    siirAdi: "Sessiz Gemi",
    siirAciklamasi: "Artık inan bana, muhacir kaldı.",
    sair: "Yahya Kemal Beyatlı",
  },
  {
    siirAdi: "Ben Senden Önce Ölürsem",
    siirAciklamasi: "Bir kuş çıkar göğsümden çırpınarak!",
    sair: "Edip Cansever",
  },
  {
    siirAdi: "Bir Çift Beyaz Ayakkabı",
    siirAciklamasi:
      "İkimizin arasında bir yerde / bir çift beyaz ayakkabı duruyor.",
    sair: "İlhan Berk",
  },
  {
    siirAdi: "Bir Olasılık Var",
    siirAciklamasi: "Ölümlü bir kuş gibi çırpınırken yüreğim,",
    sair: "Özdemir Asaf",
  },
  {
    siirAdi: "Çiçeklerin Düğünü",
    siirAciklamasi: "Çiçeklerin düğünü oluyor şimdi bahçede.",
    sair: "Bedri Rahmi Eyüboğlu",
  },
  {
    siirAdi: "Gitme",
    siirAciklamasi: "Küçücük bir çocuk yüreğim, sığmaz oldu yara.",
    sair: "Cemal Süreya",
  },
  {
    siirAdi: "Güneşi İçimden Yak",
    siirAciklamasi: "Ay ışığı söner, gün ışığına çalarım.",
    sair: "Didem Madak",
  },
];

var changeButton = document.getElementById("bk-change-Button");
var siirAdi = document.querySelector("#siiradi");
var sairAdi = document.querySelector("#sairadi");
var alinti = document.querySelector("#alinti");



changeButton.addEventListener("click", degistir);

function degistir() {
    var randomsayi = Math.floor(Math.random() * siirler.length)
    siirAdi.textContent = siirler[randomsayi].siirAdi;
    sairAdi.textContent = siirler[randomsayi].sair;
    alinti.textContent = siirler[randomsayi].siirAciklamasi;

}
    

