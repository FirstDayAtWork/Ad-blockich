"use strict"




const matchAdds = (regexp) => {
    try {
        if(document.getElementById('ads_left')){
            document.getElementById('ads_left').style.setProperty("display", "none", "important");
            console.log('work', document.getElementById('ads_left'))
           
        }
       
        let lastUrl = location.href; 
        new MutationObserver(() => {
          const url = location.href;
          if (url !== lastUrl) {
            lastUrl = url;
            onUrlChange();
          }
        }).observe(document, {subtree: true, childList: true});

        onUrlChange();
            
  
        
    } catch (error) {
        console.log(error)
    }
    
}

matchAdds()


function onUrlChange() {
    console.log('URL changed!', location.href);
    const pageContainer = document?.querySelector('#feed_rows') ? document?.getElementById('feed_rows') : document?.getElementById('page_wall_posts')
    console.log(pageContainer)
    if(!pageContainer){
        return
    }
      if(document?.querySelectorAll('.mailru-visibility-check')){
          console.log(document?.querySelectorAll('.mailru-visibility-check'))
          document?.querySelectorAll('.mailru-visibility-check').forEach(el => {
              el.style.setProperty("display", "none", "important");
          })
          const observer = new MutationObserver(mutationsList => {
              for(const mutation of mutationsList){
                  for(const node of mutation.addedNodes){
                      console.log(node)
                      if(node.firstChild?.classList?.contains('mailru-visibility-check')){
                          console.log(node.firstChild.classList?.contains('mailru-visibility-check'), 'iy works');
                          node.style.setProperty("display", "none", "important");
                          // observer.disconnect();
                      }
                      if(node.classList?.contains('mailru-visibility-check')){
                          console.log(node.classList?.contains('mailru-visibility-check'), 'iy works');
                          node.style.setProperty("display", "none", "important");
                          // observer.disconnect();
                      }
                  }
              }
          });
          observer.observe(pageContainer, { attributes: false, subtree: false, childList: true });
          console.log('mailru')
      }
  }

// console.log(document.querySelectorAll('[id^="postadsite_"]'))
//                 document.querySelectorAll('[id^="postadsite_"]').forEach(el => {
//                     el.style.setProperty("display", "none", "important");
//                 })



// setInterval solution
 // setInterval(() => {
        //     if(document.querySelectorAll('.mailru-visibility-check')){
        //         console.log(document.querySelectorAll('.mailru-visibility-check'))
        //             document.querySelectorAll('.mailru-visibility-check').forEach(el => {
        //                 el.style.setProperty("display", "none", "important");
        //             })
        //         console.log('before timeout')
        //        return
        //     }
        // }, 2000);


// videoplayer_ads