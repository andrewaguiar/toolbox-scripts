(function() {
  window.opts = document.querySelectorAll("[name='p$lt$zonePagePlaceHolder$pageplaceholder2$p$lt$zoneContent$pageplaceholder$p$lt$zoneInheritedContent$NotaCorretagem$ddlData'] option");
  window.downloadButton = document.querySelector("[alt='PDF']");
  window.count = 0;

  window.intervalId = setInterval(function(){
    if (window.opts[window.count]) {
      window.opts[window.count].selected = true;
      window.downloadButton.click();
      window.count = window.count + 1;

      console.log('downloading ' + window.count + '/' + window.opts.length);
    } else {
      clearInterval(window.intervalId)

    console.log('finished');
    }
  }, 8000);
})()
