function calculate() {
    var nama = document.getElementById('nama').value;
    var totalBerlian = parseFloat(document.getElementById('totalBerlian').value);
    var targetHariJam = document.getElementById('targetHariJam').value;
    var [jam, hari] = targetHariJam.split('_').map(parseFloat);
    
    var hargaBerlian;
    if (jam === 45 && hari === 15) {
      hargaBerlian = 2.7;
    } else if (jam === 100 && hari === 22) {
      hargaBerlian = 4.05;
    }
  
    var hasil = totalBerlian * hargaBerlian;
  
    var table = document.getElementById('result');
    table.innerHTML = ''; // Clear previous results
  
    if (hargaBerlian) {
      var newRow = table.insertRow(-1);
      var cellNama = newRow.insertCell(0);
      var cellHasil = newRow.insertCell(1);
      cellNama.innerHTML = nama;
      cellHasil.innerHTML = formatCurrency(hasil);
    }
  }
  
  function formatCurrency(amount) {
    return "Rp " + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  