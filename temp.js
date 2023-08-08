
    cel = document.getElementById('cel');
        fah = document.getElementById('fah');
        kel = document.getElementById('kel');
        cel.oninput = function () {
          f = (parseFloat(cel.value) * 9) / 5 + 32;
            fah.value = parseFloat(f.toFixed(2));
  
            k = (parseFloat(cel.value) + 273.15);
            kel.value = parseFloat(k.toFixed(2));
        }
        fah.oninput = function () {
            c = ((parseFloat(fah.value) - 32) * 5) / 9;
            cel.value = parseFloat(c.toFixed(2));
  
            k = (parseFloat(fah.value) - 32) * 5 / 9 + 273.15;
            kel.value = parseFloat(k.toFixed(2));
        }
        kel.oninput = function () {
            f = (parseFloat(kel.value) - 273.15) * 9 / 5 + 32;
            fah.value = parseFloat(f.toFixed(2));
  
            c = (parseFloat(kel.value) - 273.15);
            cel.value = parseFloat(c.toFixed(2));
        }
    