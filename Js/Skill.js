const skill = {
  items: [
    { 
      nama: "html", 
      isi: "saya telah belajar html di berbagai YouTube dan bootcamp",
      sertifikat: "ini sertifikat saya",
      link: "http://google.com"
    },
    { 
      nama: "css", 
      isi: "saya telah belajar css di berbagai YouTube dan bootcamp",
      sertifikat: "ini sertifikat saya",
      link: "https://wa.com"
    },
        { 
      nama: "js", 
      isi: "saya telah belajar javascript di berbagai YouTube dan bootcamp",
      sertifikat: "ini sertifikat saya",
      link: "https://wa.com"
    }
  ]
};

var app2 = new Vue({
  el: '#app2',
  data: skill
});