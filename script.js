function validateForm() {
        var bookQty = document.getElementById("book").value;
        var bagQty = document.getElementById("bag").value;
        var penQty = document.getElementById("pen").value;
        var bookError = document.getElementById("bookerr");
        var bagError = document.getElementById("bagerr");
        var penError = document.getElementById("penerr");
        var numPattern = /^\d+$/;
      
        bookError.textContent ="";
        bagError.textContent ="";
        penError.textContent ="";
      
        if (!numPattern.test(bookQty)) {
          bookError.textContent = "Invalid book quantity. Please enter a valid number greater than 0.";
          return false;
        }
      
        if (!numPattern.test(bagQty)) {
          bagError.textContent = "Invalid bag quantity. Please enter a valid number greater than 0.";
          return false;
        }
      
        if (!numPattern.test(penQty)) {
          penError.textContent = "Invalid pen quantity. Please enter a valid number greater than 0.";
          return false;
        }
        var bag = 32.50;
        var book = 12.00;
        var pen = 2.50;
        
        var totalbook = book * bookQty;
        var totalbag = bag * bagQty; 
        var totalpen = pen * penQty; 
        var total= totalbook+totalbag+totalpen;
        var tax= total*0.13;
        var amount= total+tax;
        
        alert(`Your Invoice is Generated\nBook Quantity: ${bookQty}*${book} = ${totalbook}\nBag Quantity: ${bagQty} * ${bag} = ${totalbag}\nPen Quantity: ${penQty}*${pen} = ${totalpen}\n Total Amount before Tax:${total}\n Total Tax:${tax}\n Total Amount After tax:${amount}`);
        
        return true;
      }